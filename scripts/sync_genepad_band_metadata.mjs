import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';

const genePadRoot = process.argv[2];
if (!genePadRoot) throw new Error('Usage: node scripts/sync_genepad_band_metadata.mjs <GenePad repository>');

const dataRoot = process.cwd();
const jsonPath = path.join(dataRoot, 'protein_markers.json');
const generatedPath = path.join(genePadRoot, 'src/data/proteinLadders/index.generated.ts');
const epizymePath = path.join(genePadRoot, 'src/data/proteinLadders/epizyme.ts');
const data = JSON.parse(await readFile(jsonPath, 'utf8'));

function loadGeneratedLadders(source) {
  const match = source.match(/const RAW_PROTEIN_LADDERS: RawProteinLadder\[\] = (.*);\n\nexport/s);
  if (!match) throw new Error('Unable to find RAW_PROTEIN_LADDERS');
  return JSON.parse(match[1]);
}

function loadEpizymeLadders(source) {
  const executable = source
    .replace(/^import .*$/gm, '')
    .replace('const RAW_EPIZYME_PROTEIN_LADDERS: RawProteinLadder[] =', 'const RAW_EPIZYME_PROTEIN_LADDERS =')
    .replace(/^export const EPIZYME_PROTEIN_LADDERS.*$/gm, '')
    .concat('\nRAW_EPIZYME_PROTEIN_LADDERS');
  return vm.runInNewContext(executable);
}

function normalize(value) {
  return String(value ?? '').normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function supplierId(value) {
  const normalized = normalize(value);
  if (normalized.includes('epizyme')) return 'epizyme';
  if (normalized.includes('transgen')) return 'transgenbiotech';
  if (normalized.includes('dongsheng')) return 'dongshenggdsbio';
  return normalized;
}

function catalogTokens(value) {
  return new Set(String(value ?? '').toUpperCase().match(/[A-Z]{0,6}\d{3,}(?:-\d+)?/g) ?? []);
}

function primaryCatalog(value) {
  return [...catalogTokens(value)][0];
}

function setsIntersect(left, right) {
  return [...left].some((value) => right.has(value));
}

function csvCell(value) {
  const text = value == null ? '' : String(value);
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function numberKey(value) {
  return Number(value).toFixed(6);
}

const colorNames = new Map([
  ['#2563eb', 'blue'],
  ['#16a34a', 'green'],
  ['#dc2626', 'red'],
  ['#f97316', 'orange'],
  ['#eab308', 'yellow'],
  ['#ec4899', 'pink'],
  ['#9333ea', 'purple'],
  ['#06b6d4', 'cyan'],
  ['#334155', 'gray'],
]);

const generatedLadders = loadGeneratedLadders(await readFile(generatedPath, 'utf8'));
const epizymeLadders = loadEpizymeLadders(await readFile(epizymePath, 'utf8'));
const genePadLadders = [...generatedLadders, ...epizymeLadders].map((ladder) => ({
  id: ladder[0],
  name: ladder[1],
  supplier: ladder[2],
  catalog: ladder[3],
  type: ladder[4],
  sourceUrl: ladder[5],
  bands: ladder[6],
}));

const products = [];
for (const [supplierKey, supplier] of Object.entries(data.suppliers)) {
  for (const product of supplier.products) products.push({ supplierKey, supplier, product });
}
data.suppliers_with_protein_markers = Object.values(data.suppliers).filter((supplier) => supplier.products.length > 0).length;
data.total_products = products.length;

const unmatched = [];
const mappedProducts = new Set();
const correctedBandSets = [];
for (const ladder of genePadLadders) {
  const ladderSupplier = supplierId(ladder.supplier);
  const ladderCatalogs = catalogTokens(ladder.catalog);
  const candidates = products.filter(({ supplierKey, supplier }) =>
    supplierId(supplierKey) === ladderSupplier || supplierId(supplier.name) === ladderSupplier);
  const ladderPrimaryCatalog = primaryCatalog(ladder.catalog);
  const match = candidates.find(({ product }) =>
    ladderPrimaryCatalog && primaryCatalog(product.catalog) === ladderPrimaryCatalog)
    ?? candidates.find(({ product }) => setsIntersect(catalogTokens(product.catalog), ladderCatalogs))
    ?? candidates.find(({ product }) => normalize(product.name) === normalize(ladder.name));
  if (!match) {
    unmatched.push(`${ladder.supplier} | ${ladder.catalog} | ${ladder.name}`);
    continue;
  }
  if (match.ladder) {
    throw new Error(`Multiple GenePad ladders matched ${match.supplierKey} | ${match.product.catalog} | ${match.product.name}`);
  }
  match.ladder = ladder;
  mappedProducts.add(match.product);
}

if (unmatched.length > 0 || mappedProducts.size !== genePadLadders.length) {
  throw new Error(`GenePad mapping is incomplete: ${mappedProducts.size}/${genePadLadders.length} products, ${unmatched.length} unmatched ladders`);
}

for (const entry of products) {
  let sizes = Array.isArray(entry.product.bands_kda) ? entry.product.bands_kda : [];
  const bandMap = new Map((entry.ladder?.bands ?? []).map((band) => [numberKey(band[0]), band]));
  if (entry.ladder) {
    const referenceSizes = new Set(sizes.map(numberKey));
    const programSizes = entry.ladder.bands.map((band) => band[0]).sort((left, right) => left - right);
    const programSizeSet = new Set(programSizes.map(numberKey));
    if (referenceSizes.size !== programSizeSet.size || ![...referenceSizes].every((size) => programSizeSet.has(size))) {
      correctedBandSets.push({
        product: `${entry.supplierKey} | ${entry.product.catalog} | ${entry.product.name}`,
        before: sizes,
        after: programSizes,
      });
    }
    sizes = programSizes;
    entry.product.bands_kda = programSizes;
  }
  entry.product.band_count = sizes.length;
  entry.product.band_details = sizes.map((mwKda) => {
    const programBand = bandMap.get(numberKey(mwKda));
    if (!programBand) {
      return {
        mw_kda: mwKda,
        display_color: 'unknown',
        color_hex: null,
        relative_intensity: null,
        reference: null,
        source: null,
      };
    }
    return {
      mw_kda: mwKda,
      display_color: colorNames.get(programBand[2]) ?? 'custom',
      color_hex: programBand[2],
      relative_intensity: programBand[1],
      reference: programBand[1] > 1,
      source: 'GenePad',
    };
  });
  if (entry.ladder) entry.product.genepad_ladder_id = entry.ladder.id;
  else delete entry.product.genepad_ladder_id;
}

await writeFile(jsonPath, `${JSON.stringify(data, null, 1)}\n`, 'utf8');

const csvHeaders = [
  'Supplier', 'Domain', 'Product', 'Catalog #', 'Type', 'Band #', 'MW (kDa)', 'Total Bands',
  'Display Color', 'Color Hex', 'Relative Intensity', 'Reference Band', 'GenePad Ladder ID',
  'Product URL', 'PDF',
];
const csvRows = [csvHeaders];
for (const { supplierKey, supplier, product } of products) {
  product.band_details.forEach((band, index) => {
    csvRows.push([
      supplierKey,
      supplier.domain,
      product.name,
      product.catalog,
      product.type,
      index + 1,
      band.mw_kda,
      product.band_details.length,
      band.display_color,
      band.color_hex,
      band.relative_intensity,
      band.reference,
      product.genepad_ladder_id,
      product.url,
      product.pdf,
    ]);
  });
}
await writeFile(
  path.join(dataRoot, 'protein_marker_bands.csv'),
  `${csvRows.map((row) => row.map(csvCell).join(',')).join('\n')}\n`,
  'utf8',
);

const markdown = [
  '# Protein Marker Band Data（蛋白分子量标准条带信息）',
  '',
  'Complete band profiles for commercial protein markers, including GenePad display colors and relative intensities where mapped.',
  '',
  '## Overview',
  '',
  '| | |',
  '|---|---|',
  `| Suppliers with protein markers | ${data.suppliers_with_protein_markers} |`,
  `| Products | ${data.total_products} |`,
  `| All products have band data | **${products.filter(({ product }) => product.band_details.length > 0).length} / ${products.length}** |`,
  `| Products mapped to GenePad colors | **${mappedProducts.size} / ${products.length}** |`,
  '',
  'Color values describe GenePad visualization. `unknown` means that the product is not mapped in GenePad; it does not imply an unstained band.',
  '',
  '## 按供应商逐条带明细',
  '',
];

for (const [supplierKey, supplier] of Object.entries(data.suppliers)) {
  if (supplier.products.length === 0) continue;
  markdown.push('---', '', `### ${supplierKey}`, `官网: \`${supplier.domain}\` ｜ ${supplier.products.length} 款`, '');
  for (const product of supplier.products) {
    const profile = product.band_details.map((band) => {
      if (!band.color_hex) return `${band.mw_kda} kDa unknown`;
      const intensity = band.relative_intensity === 1 ? '' : `, ${band.relative_intensity}×`;
      const reference = band.reference ? ', reference' : '';
      return `${band.mw_kda} kDa ${band.display_color} (${band.color_hex}${intensity}${reference})`;
    }).join('; ');
    markdown.push(
      `#### ${product.name}`,
      `- 货号: ${product.catalog}`,
      `- 类型: ${product.type}`,
      `- 产品页: ${product.url || '—'}`,
      `- PDF: ${product.pdf || '—'}`,
      `- 条带数: ${product.band_details.length}`,
      `- 分子量 (kDa): ${product.band_details.map((band) => band.mw_kda).join(', ')}`,
      `- GenePad ID: ${product.genepad_ladder_id ?? '未映射'}`,
      `- GenePad 显示: ${profile}`,
      '',
    );
  }
}
await writeFile(path.join(dataRoot, 'protein_marker_bands.md'), `${markdown.join('\n')}\n`, 'utf8');

console.log(`GenePad ladders: ${genePadLadders.length}`);
console.log(`Matched products: ${mappedProducts.size}`);
console.log(`Unmatched ladders: ${unmatched.length}`);
console.log(`Corrected band sets: ${correctedBandSets.length}`);
for (const item of unmatched) console.log(`UNMATCHED ${item}`);
for (const item of correctedBandSets) console.log(`CORRECTED ${item.product}: [${item.before.join(', ')}] -> [${item.after.join(', ')}]`);
