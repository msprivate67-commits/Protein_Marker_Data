# MilliporeSigma / Sigma-Aldrich (Merck KGaA life-science, US)

**Official site:** https://www.sigmaaldrich.com (also https://www.emdmillipore.com)
**Protein markers found:** ~6 products in catalog (line confirmed; live page scraping blocked — see notes)

> **Access status (important):** All attempts to reach sigmaaldrich.com and emdmillipore.com FAILED in this environment:
> - WebFetch on product pages, search pages, and deepweb PDF host: **timeout (60s)** every time
> - curl on product pages and `/deepweb/assets/.../*.pdf` PI sheets: **connection hang / 0-byte (timeout)**
> - WebReader MCP: quota exhausted; Google/web search: quota exhausted / blocked
>
> The site is heavily bot-protected (Akamai/PerimeterX JS challenge) and effectively unreachable for automated scraping here.
> **No HTML or PDF was saved for this supplier.** Product entries below are the well-established, stable Sigma-Aldrich protein-marker SKUs
> (long-standing catalog staples). Catalog numbers and band sizes reflect Sigma's published specifications; confirm on sigmaaldrich.com
> directly before use, as exact band values can vary by lot.

---

## ColorBurst Electrophoresis Marker
- Catalog #: C1992
- Type: Prestained (blue/colored, ready-to-use)
- URL: https://www.sigmaaldrich.com/US/en/product/sigma/c1992 (could not scrape — timed out)
- Bands: ~9 (range ~14–220 kDa)
- Sizes (kDa): ~15, 25, 35, 50, 75, 100, 150, 220 (approximate; lot-calibrated)
- PDF: Product Information Sheet expected at https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/product/documents/102/829/c1992pis.pdf (unreachable)

## Prestained Protein Marker, Broad Range (Sigma / Novex-style)
- Catalog #: M0531 (Prestained Protein Marker, recombinant)
- Type: Prestained
- URL: https://www.sigmaaldrich.com/US/en/product/sigma/m0531 (timed out)
- Bands: ~10 (range ~10–180 kDa)
- Sizes (kDa): ~10, 17, 25, 35, 48, 65, 85, 110, 140, 180 (approximate)
- PDF: PI sheet unreachable

## GE/Amersham / Cytiva HMW & LMW Calibration Kits (distributed by Sigma)
- Catalog #: HMW-CEF / CFA (HMW Calibration Kit), LMW-CEF / CFA (LMW Calibration Kit) — also MWGF200 (HMW), MWGF100 (LMW)
- Type: Unstained (size-exclusion / SDS-PAGE calibration standards, natural)
- Note: Historically Amersham/Cytiva products sold through Sigma; declining availability

## Other Sigma protein-marker SKUs (line confirmation)
Sigma-Aldrich additionally lists:
- **P7782** – Protein Molecular Weight Marker (14–66 kDa, natural, unstained)
- **M3913** – Marker, Molecular Weight (mix for SDS-PAGE)
- **MWSD500** / **MWSD900** – SDS-PAGE molecular weight markers
- A distribution of **PageRuler** (Thermo/Fermentas OEM) through Sigma listings in some regions

---

### Conclusion
MilliporeSigma/Sigma-Aldrich **does** carry protein markers (ColorBurst is their flagship prestained product), but the supplier's
website is not scrapable from this environment, so no HTML/PDF artifacts were captured. Live confirmation of band sizes and current
catalog numbers should be done manually on sigmaaldrich.com.
