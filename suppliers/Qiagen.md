# Qiagen
**Official site:** qiagen.com
**Protein markers found:** 0

## Summary

Qiagen does **not** currently offer protein molecular weight markers / protein
ladders for SDS-PAGE (or any gel-electrophoresis protein size standard).

## Method

Queried Qiagen's live search backend
`https://www.qiagen.com/search-backend-v2/search/snapshot` (returns JSON product
listings, bypassing the JS-rendered storefront) with the following queries; all
`locationCode=US`:

- `protein marker`
- `protein ladder`
- `molecular weight marker`
- `qiaexpress marker`
- `ni-nta marker`
- `his-tag marker`
- `marker` (broad)
- `39902` (the historical QIAexpress Protein Marker II catalog number)

## What Qiagen DOES sell (not protein MW markers)

All "marker"/"ladder" hits returned by Qiagen are **nucleic-acid** products or
unrelated kits, e.g.:

| Product | Catalog # | Type | Note |
|---|---|---|---|
| QX RNA Alignment Marker (1.5 ml) | 929510 | RNA size marker | For QIAxcel capillary electrophoresis instrument |
| QX Intensity Calibration Marker (1 ml) | 929500 | calibration | QIAxcel instrument accessory |
| QX DNA Size Markers | (various) | DNA size standard | QIAxcel instrument |
| GelPilot DNA Molecular Weight Markers | — | DNA ladder | DNA gel, not protein |

Protein-related hits are all **purification / fractionation kits**, not size
markers:

- Qproteome Nuclear Protein Kit (cat 37582)
- Ni-NTA Agarose (30210), Ni-NTA Spin Kit (31314), Ni-NTA Superflow (30430), etc.
- AllPrep DNA/RNA/Protein kits — sample prep, no size standards
- Penta·His / Strep-tag antibodies — detection, not MW markers

## Historical note (now discontinued)

The **QIAexpress Protein Marker II** (catalog **39902**) and the original
QIAexpress Protein Marker — prestained His-tagged standards for SDS-PAGE — were
part of the QIAexpress 6xHis-tagged protein system. Searching catalog 39902 on
the current Qiagen site returns **no results** (discontinued). The
`qiaexpress-protein-marker-ii` product URL slug resolves to a generic SPA shell
("QIAGEN Online Shop") with no live product data, confirming removal.
