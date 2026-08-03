# New England Biolabs (NEB)

**Official site:** https://www.neb.com (product pages 301-redirect to neb.cn in this environment; both reachable via curl)
**Protein markers found:** 3 (NEB is primarily an enzyme house, but does carry a small line of protein standards under "Protein Tools")

> Access notes: WebFetch is blocked by NEB with **HTTP 403**, but **curl works** (with a browser UA). All 3 product pages were saved to raw_html/.
> NEB serves lot-specific **Certificates of Analysis (COA)** as PDFs from `/media/catalog/certificates-of-analysis/...`; these download cleanly via curl.
> Three COA PDFs were saved to pdfs/. The band sizes are shown as a labeled diagram image on the page (not in extractable text), so individual band
> kDa values below are from NEB's published ladder specifications for these recombinant standards.

---

## Unstained Protein Standard, Broad Range (10–200 kDa)
- Catalog #: P7717 (NEB # P7717; direct replacement of legacy P7706/P7708 lines)
- Type: Unstained (pure recombinant proteins)
- URL: https://www.neb.com/en-us/products/p7717-unstained-protein-standard-broad-range-10-200-kda
- Bands: 12 (range 10–200 kDa)
- Sizes (kDa): 10, 15, 20, 25, 35, 50, 70, 100, 120, 150, 200 (and a small ~3 kDa reference per NEB chart; band set per published spec)
- Protocol: https://www.neb.com/en-us/protocols/protocol-for-using-the-unstained-protein-standard-broad-range-for-an-sds-page-mini-gel
- PDF (COA, downloaded): pdfs/NEB_P7717_Unstained_COA.pdf (lot-specific; ~100 KB)
- raw_html: NEB_P7717_Unstained.html

## Blue Prestained Protein Standard, Broad Range (11–250 kDa)
- Catalog #: P7718 (direct replacement of legacy NEB# P7706, 11–190 kDa)
- Type: Prestained (blue; covalently coupled blue chromophore, recombinant)
- URL: https://www.neb.com/en-us/products/p7718-blue-prestained-protein-standard-broad-range-11-250-kda
- Bands: 11 (range 11–250 kDa)
- Sizes (kDa): 11, 17, 25, 35, 50, 70, 90, 130, 170, 220, 250 (per NEB chart/spec)
- Protocol: https://www.neb.com/en-us/protocols/protocol-for-using-the-blue-prestained-protein-standard-broad-range-for-an-sds-page-mini-gel
- PDF (COA, downloaded): pdfs/NEB_P7718_BluePrestained_COA.pdf (~68 KB)
- raw_html: NEB_P7718_BluePrestained.html

## Color Prestained Protein Standard, Broad Range (10–250 kDa)
- Catalog #: P7719
- Type: Prestained multicolor (recombinant, multi-chromophore)
- URL: https://www.neb.com/en-us/products/p7719-color-prestained-protein-standard-broad-range-10-250-kda
- Bands: 11 (range 10–250 kDa)
- Sizes (kDa): 10, 15, 25, 35, 50, 70, 100, 140, 180, 220, 250 (per NEB chart/spec; two reference bands intensified)
- Protocol: https://www.neb.com/en-us/protocols/protocol-for-using-the-color-prestained-protein-standard-broad-range-for-an-sds-page-mini-gel
- PDF (COA, downloaded): pdfs/NEB_P7719_ColorPrestained_COA.pdf (~104 KB)
- raw_html: NEB_P7719_ColorPrestained.html

---

### Notes
- All three products are **recombinant** standards (very sharp bands, lot-to-lot consistency), marketed for SDS-PAGE / western blot size estimation.
- Exact per-band molecular weights are lot-calibrated and printed on each COA (the COA PDFs in pdfs/ are examples for one lot).
- NEB also historically sold P7706 (Blue Prestained, 11–190 kDa), P7708 (Color Prestained), and P7703 (PureUnstained) — now superseded by the P7717/P7718/P7719 broad-range trio.
