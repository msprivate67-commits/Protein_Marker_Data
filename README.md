# Protein Marker Data

Curated dataset of commercial **protein molecular weight markers / protein ladders** (蛋白分子量标准), gathered from the same suppliers covered in the DNA Marker project.

Each entry includes the product name, supplier, catalog number, type (prestained/unstained/multicolor/fluorescent/native...), band count, molecular weights (kDa), product page URL, and locally downloaded manuals/PDFs where available. Products used by GenePad also include the application's display color, HEX value, relative intensity, and reference-band flag for every band.

## Overview

| | |
|---|---|
| Suppliers surveyed | 56 |
| Suppliers with protein markers | **29** |
| Protein marker products | **121** |
| Products mapped to GenePad display metadata | **61** |
| Per-band records | **1,189** |
| PDFs downloaded (manuals/COA/specs) | 102 |
| Raw product HTML saved | 218 |

## Data Files

| File/Dir | Description |
|----------|-------------|
| `protein_markers.json` | Structured data (all suppliers + products), including `band_details` and `genepad_ladder_id` |
| `suppliers/` | One Markdown file per supplier (56 files) with full details |
| `pdfs/` | Downloaded product manuals / COAs / catalog PDFs |
| `raw_html/` | Saved product/category page snapshots |
| `protein_marker_bands.md` | **Complete per-band MW, display color, HEX, intensity, and reference-band profiles** |
| `protein_marker_bands.csv` | Flat table, one row per band (Excel-friendly), with GenePad display metadata |
| `scripts/sync_genepad_band_metadata.mjs` | Reproducibly sync display metadata from a GenePad checkout |

## Suppliers with protein markers

| # | Supplier | Domain | Products |
|---|----------|--------|----------|
| 1 | Accuris | accuris-usa.com | 5 |
| 2 | Azura-Genomics | azuragenomics.com | 1 |
| 3 | Bio-Rad | www.bio-rad.com | 6 |
| 4 | Bioneer | bioneer.com (English catalog: eng.bioneer.com / US shop: us.bioneer.com) | 1 |
| 5 | Biotium | biotium.com | 2 |
| 6 | Biozym | biozym.com | 3 |
| 7 | Carl_Roth | carlroth.com | 5 |
| 8 | Dongsheng_GDSBio | gdsbio.cn | 4 |
| 9 | EURx | eurx.com.pl | 3 |
| 10 | FroggaBio | froggabio.com | 3 |
| 11 | G-Biosciences | gbiosciences.com (A Geno Technology, Inc. brand) | 2 |
| 12 | GenDEPOT | www.gendepot.com | 1 |
| 13 | GenScript | genscript.com | 4 |
| 14 | Gold-Biotechnology | goldbio.com | 3 |
| 15 | Jena_Bioscience | jenabioscience.com | 4 |
| 16 | Lonza | lonza.com (shop: bioscience.lonza.com) | 1 |
| 17 | NewEnglandBiolabs | www.neb.com (product pages 301-redirect to neb.cn in this environment; both reachable via curl) | 3 |
| 18 | OriGene | origene.com | 1 |
| 19 | SERVA | serva.de (SERVA Electrophoresis GmbH, Heidelberg, Germany) | 12 |
| 20 | SMOBIO | www.smobio.com | 14 |
| 21 | TIANGEN | tiangen.com | 4 |
| 22 | ThermoFisher | www.thermofisher.com (China mirror served: thermofisher.cn — all thermofisher.com product URLs 301-redirect to thermofisher.cn in this environment) | 11 |
| 23 | TransGen_Biotech | transgenbiotech.com | 8 |
| 24 | UBPBio | ubpbio.com | 2 |
| 25 | Vazyme | bio.vazyme.com (corporate: www.vazyme.com) | 3 |
| 26 | biotechrabbit | biotechrabbit.com (biotechrabbit GmbH, Berlin, Germany) | 2 |
| 27 | Epizyme | epizyme.cn | 7 |
| 28 | MilliporeSigma | sigmaaldrich.com / emdmillipore.com | 3 |
| 29 | Promega | promega.com | 3 |

## Suppliers without protein markers

Surveyed but no protein marker product line found:
Agilent, Axygen, Bioline, Bionexus, Canvax_Biotech, DyneBio, Ecogen, Eurogentec, Fisher_Scientific, GeneDireX, GeneMate, Geneaid, Genessee_Scientific, IBI-Scientific, KAPA-Biosystems, Lucigen, MIDSCI, NIPPON_GENE, NZYTech, PHENIX_Research, PennState_DNA_Ladders, Phage_and_Plasmid_Markers, Qiagen, Solis_BioDyne, Takara, Toyobo, VWR_Peqlab, WATSON

## Notes

- "Protein markers found" counts reflect distinct commercial protein standard products; `suppliers/` files contain per-product details (catalog #, type, bands, kDa sizes, URL, PDF).
- Some suppliers' sites are geo-blocked or require JS; where a product line was confirmed from catalogs/docs but pages could not be saved, this is noted in the supplier file.
- PDFs were downloaded where the host allowed automated/browser retrieval; blocked hosts (e.g. some CDN-gated manuals) are recorded as URLs in the supplier files.
- GenePad colors describe the application's gel visualization. `unknown` means a product is not mapped in GenePad; it does not mean the physical band is unstained.
- Re-run `node scripts/sync_genepad_band_metadata.mjs <GenePad repository>` after changing GenePad's protein ladder definitions.
