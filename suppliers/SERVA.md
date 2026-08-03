# SERVA
**Official site:** serva.de (SERVA Electrophoresis GmbH, Heidelberg, Germany)
**Protein markers found:** 12 (9 SDS-PAGE standards + 2 native/2D + 1 western-blot)

SERVA has an extensive protein-standard line under the "SERVA Protein Standards
for SDS PAGE" / "Electrophoresis" program. The storefront at serva.de is a
JS-driven catalog with no server-rendered product detail pages reachable by bot
(search returns the same generic result for any query, and category pages list
no items in HTML). Authoritative data was therefore taken from the official
**"Electrophoresis by SERVA" catalog PDF** (page 17, "Protein Standards"), which
lists all products with catalog numbers, sizes, and descriptions.

- Catalog PDF (downloaded): `pdfs/SERVA_Electrophoresis_Catalog.pdf`
  (source: https://www.serva.de/www_root/documents/Electrophoresis%20by%20SERVA_web.pdf )
- Section: "SERVA Protein Standards for SDS PAGE", page 17, plus "Protein
  Standards for Western Blotting" and "Native PAGE" sections.
- Overall marker MW range stated: **5 kDa – 245 kDa** (SDS-PAGE), available as
  ready-to-use liquid or lyophilized mixtures.

## SDS-PAGE protein standards (page 17 of catalog)

### Protein Test Mixture 6 for SDS PAGE  (unstained, lyophilized)
- Catalog #: **39207.01**
- Type: Unstained, lyophilized natural-protein mixture
- Size: 10 mg

### Protein Test Mixture 4 for SDS PAGE  (unstained, lyophilized)
- Catalog #: **39208.01**
- Type: Unstained, lyophilized natural-protein mixture
- Size: 10 mg

### Protein Test Mixture 5 for SDS PAGE  (unstained, lyophilized)
- Catalog #: **39209.01**
- Type: Unstained, lyophilized natural-protein mixture
- Size: 10 mg

### SERVA Unstained SDS PAGE Protein Marker, 6.5–97 kDa  (liquid mix)
- Catalog #: **39214.01**
- Type: **Unstained**, ready-to-use liquid
- Size: 500 µL
- Range: **6.5 – 97 kDa**

### SERVA Unstained Protein Standard IV
- Catalog #: **39250.01**
- Type: **Unstained**, ready-to-use liquid
- Size: 500 µL

### SERVA Triple Color Standard I
- Catalog #: **39251.01**
- Type: **Prestained, three-color** (covalently stained; for monitoring run +
  blot transfer)
- Size: 500 µL

### SERVA Triple Color Protein Standard II
- Catalog #: **39257.01**
- Type: **Prestained, three-color**
- Size: 500 µL

### SERVA Triple Color Protein Standard III
- Catalog #: **39258.01**
- Type: **Prestained, three-color**
- Size: 500 µL

### SERVA Fluo-610 Standard I
- Catalog #: **39261.01**
- Type: **Fluorescent** protein standard (for fluorescence staining/labelling
  workflows)
- Size: 5 × 50 µL

## Native PAGE protein standards

### Protein Molecular Weight Standards  (native, 8-protein set)
- Catalog #: (1 kit; catalog number not isolated in catalog text — set of 8)
- Type: **Unstained, native** proteins (in solution or lyophilized)
- Bands: **8 proteins**, range **12.4 – 450 kDa**
- Sizes (Da): Ferritin (horse) 450 000; Catalase (bovine) 240 000; Aldolase
  (rabbit) 160 000; Albumin (bovine) 67 000; Chymotrypsinogen A 25 000;
  Myoglobin (equine) 17 800; Cytochrome C 12 400 (+Lactate dehydrogenase etc.)
- Packaging: 25 mg each protein

### SERVA Native Marker Liquid Mix for BN/CN PAGE
- Catalog #: (size 5 × 50 µL; catalog number not isolated in catalog text)
- Type: **Unstained, native**, ready-to-use liquid mix for Blue/Native PAGE
- Bands: **6 native proteins**, range **21 – 720 kDa**
- Sizes (Da): Ferritin 450 000/720 000; Urease (jack bean) 272 000/545 000;
  Lactate dehydrogenase (porcine) 146 000; Albumin (bovine) 67 000; Albumin
  (egg) 45 000; Trypsin inhibitor (soybean) 21 000

## Western Blotting protein standard

### SERVA VisiBlot Standard I
- Catalog #: **39260.01**
- Type: **Hybrid** — 3 prestained bands + 7 unstained IgG-binding bands for
  antibody-mediated visualization on western blots
- Size: 500 µL
- Bands: **10 recombinant proteins**, range **25 – 150 kDa**
- Sizes (kDa): 25, 45, 85 (these three are **prestained**); remaining seven at
  ~40, 60, 75, 90, 120, 150 kDa (approx, from ladder diagram — IgG-binding,
  detected via HRP/AP secondary antibody)
- Recommended load: 5 µL/lane (mini gel)

## Notes / data-source caveats
- Individual per-band kDa values for the Triple Color Standards I/II/III,
  Protein Standard IV, and Fluo-610 Standard I are published as **ladder
  diagram images** in the catalog (not as text); the catalog text gives only
  the product range (5–245 kDa overall) and catalog numbers. The Triple Color
  products are covalently prestained in three colors (blue/green/red, ref bands
  conventionally at 25 kDa green and 75 kDa red — consistent with the Bio-Helix
  BlueRay/Eye/Elf that SERVA's Triple Color line parallels).
- Product detail pages on serva.de are loaded via JavaScript from a backend
  that was not directly queryable; the **catalog PDF is the authoritative
  source** used here.
- SERVA does NOT appear to OEM PageRuler (that is Thermo Fisher/Fermentas);
  SERVA's own-brand markers are independent.
