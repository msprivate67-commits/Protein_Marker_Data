# Fisher Scientific (Thermo Fisher Scientific)
**Official site:** www.fishersci.com
**Protein markers found:** 0 (own-brand, retrievable); the storefront is bot-blocked

## Access notes (IMPORTANT)
Fisher Scientific is a **distributor** (a Thermo Fisher Scientific company) rather than a primary manufacturer. Its storefront at `fishersci.com` actively blocks automated clients:
- Root `https://www.fishersci.com/` returns **HTTP 301** → `/us/en/home.html`.
- Product/shop paths return **HTTP 404** (current path) or **HTTP 503** (anti-bot).
- WebFetch on the catalog/search/category URLs **times out** (>60 s) on every attempt.
- Bing/DuckDuckGo searches for Fisher Bioreagents protein markers return no relevant product pages.

So no verifiable band-by-band data or PDFs could be captured from this environment.

## What Fisher sells (context, not crawled)
- As a distributor, fishersci.com lists hundreds of **other manufacturers'** protein markers (Thermo Scientific PageRuler, Invitrogen Novex Sharp, Bio-Rad, etc.). Those are already covered under their respective manufacturers (Thermo Fisher, Bio-Rad, etc.) and are NOT independent Fisher products.
- Fisher's own **"Fisher Bioreagents / Fisherbiotech"** brand historically sold a Prestained Protein Marker (e.g. cat. # BP07100 / BP0710 series). These legacy items are largely superseded by the Thermo PageRuler line that Fisher now leads with; current dedicated "Fisher Bioreagents protein marker" product pages could not be retrieved (timed out).

## Attempted URLs (all blocked)
- https://www.fishersci.com/us/en/catalog/search/protein+marker.html — timeout
- https://www.fishersci.com/us/en/browse/90106012/Protein-Markers — timeout
- https://www.fishersci.com/shop/search/protein marker — 404
- https://www.fishersci.com/store/search?keyword=protein+marker — 404
- https://www.fishersci.com/shop/products/bp07101-protein-marker/ — timeout

## Conclusion
From a *crawling* standpoint no independent Fisher-brand protein marker could be captured. Recommendation: visit fishersci.com in a browser (the site requires the standard interactive session) and search "protein marker", filtering to brand "Fisher Bioreagents" to confirm the current own-brand offering.

Saved artifacts:
- raw_html/fisher_search.html (HTTP 404 page body, 313 bytes)
