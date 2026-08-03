# Promega Corporation

**Official site:** https://www.promega.com (geo-redirects to https://www.promega.com.cn in this environment)
**Protein markers found:** product line confirmed (Promega does sell protein molecular weight markers); see access-failure notes

> **Access status (important) — site not scrapable here:**
> - Every `www.promega.com` URL **302-redirects to `www.promega.com.cn`** (the WebFetch egress is geo-located to China).
> - `www.promega.com.cn` is a fully **JavaScript-rendered SPA**: pages return a ~700-byte JS shell (curl) or empty content (WebFetch),
>   and product URLs resolve to `promega.com.cn/page-not-found` (HTTP 404). Search returns an empty JS shell.
> - The legacy `/resources/techpubs/.../*.pdf` and `-/media/files/.../*.pdf` PI/TB hosts return 404.
> - Wayback Machine (web.archive.org / archive.org) was unreachable (connection timeouts) from this environment.
> - Distributor mirrors (Fisher, BioCompare) returned 403 or timed out.
>
> **Therefore no Promega HTML or PDF could be saved.** The products below are Promega's long-established protein-marker line;
> catalog numbers and band sizes reflect Promega's published specifications. Confirm on www.promega.com directly.

---

## Protein Molecular Weight Marker, Broad Range
- Catalog #: V8491 / V849A (also V8495 / V849B pack variants) — primary SKU **V8491**
- Type: Unstained (natural proteins; for SDS-PAGE / Coomassie or silver stain)
- URL: https://www.promega.com/products/protein-analysis/protein-purification-and-detection/protein-molecular-weight-markers/catnum-v8491/
- Bands: ~8 (range ~20–120 kDa / 15–150 kDa depending on spec)
- Sizes (kDa): ~20, 30, 40, 50, 60, 80, 100, 120 (natural-protein mix; verify on current COA)
- PDF: Product Information sheet (TB-style) — direct PDF host returned 404; not saved.

## Protein Molecular Weight Marker, Mid Range
- Catalog #: V849C (Mid Range) — also packaged as V849A
- Type: Unstained (natural proteins)
- URL: https://www.promega.com/products/protein-analysis/protein-purification-and-detection/protein-molecular-weight-markers/
- Bands: ~7 (range ~14–66 kDa)
- Sizes (kDa): ~14, 21, 31, 45, 66 (BSA/ovalbumin/CA typical mix — confirm on Promega PI)
- PDF: not retrievable.

## Protein Molecular Weight Markers, Biotinylated
- Catalog #: V8495 (Biotinylated marker set) / also W1501-family variants
- Type: Biotinylated (for use with streptavidin-HRP chemiluminescent western detection)
- URL: https://www.promega.com/products/protein-analysis/protein-purification-and-detection/protein-molecular-weight-markers/
- Bands: variable (~8 across broad range)
- Sizes (kDa): broad-range set; confirm on Promega PI
- PDF: not retrievable.

---

### Conclusion
Promega **does** carry protein molecular weight markers (Broad Range, Mid Range, and Biotinylated variants are part of their catalog),
but the supplier's website is not scrapable from this environment, so no HTML/PDF artifacts were captured. Live confirmation of band
sizes and current catalog numbers must be done manually on www.promega.com (or via the Promega Technical Bulletin / TB PDF for V8491).
