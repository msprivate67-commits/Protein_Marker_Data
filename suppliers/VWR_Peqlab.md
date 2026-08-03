# VWR / Peqlab (Avantor)
**Official site:** www.vwr.com (Peqlab brand, formerly peqlab.de — now folded into VWR/Avantor)
**Protein markers found:** brand HAS protein markers, but specs NOT retrievable (see Access notes)

## Access notes (IMPORTANT)
Peqlab (PEQLAB Biotechnologie GmbH, Erlangen, Germany) was acquired by VWR (now Avantor). The legacy domain `peqlab.de` is **unreachable** (`getaddrinfo ENOTFOUND` / connection failures). The product catalog now lives on `vwr.com`, which **blocks all automated access with HTTP 403** for both WebFetch and curl (tested on `si.vwr.com`, `us.vwr.com`, `at.vwr.com`, and the redirect target `www.vwr.com/.../search/...`). The Wayback Machine (`web.archive.org`) **times out** from this environment.

Consequently the exact catalog numbers and band tables could NOT be verified by crawling. The information below is from well-known public/brand history and is marked as **unverified** — it should be confirmed manually in the VWR web shop.

## Known product line (unverified — needs manual confirmation on vwr.com)
Peqlab marketed the **"Perfect Protein Marker"** series, sold under VWR cat. numbers in the **35-xxxx** range, e.g.:
- **Perfect Protein Marker, Prestained** — broad-range prestained ladder (historically ~10 bands, ~10–225 kDa range; two reference bands)
- **Perfect Protein Marker, Unstained** — unstained broad-range ladder
- **Peqlab Protein Molecular Weight Marker** (smaller kits)

### Attempted catalog / search URLs (all returned 403 to bots)
- https://www.vwr.com/si/en/search/protein+marker — 403 Forbidden
- https://www.vwr.com/us/en/search/peqlab+protein+marker — 403 Forbidden
- https://at.vwr.com/store/search?keyword=peqlab+protein+marker — 403 Forbidden
- https://si.vwr.com/store/product?keyword=protein+marker — 301 → vwr.com/search → 403

Saved artifacts:
- raw_html/VWR_search_protein_marker.html (the 403 page body)

## Conclusion
Peqlab/VWR **does** sell protein markers, but the supplier's storefront is fully bot-blocked, so no verifiable band-by-band data or PDFs could be captured from this environment. Recommend a human visit the VWR site (logged in, browser) and search "protein marker" filtered to the Peqlab brand.
