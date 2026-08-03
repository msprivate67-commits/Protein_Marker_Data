# Genesee Scientific
**Official site:** www.geneseesci.com
**Protein markers found:** 0 (own-brand)

## Conclusion
Genesee Scientific (now part of Thermo Fisher Scientific's research channel) is primarily a **distributor** focused on *Drosophila*/insect research supplies plus general lab plasticware and equipment. Its only **house brand** ("Apex Bioresearch Products") covers fly-research consumables (bottles, vials, closures, food fillers) — **not protein markers.**

Genesee *distributes* other manufacturers' protein markers (e.g. Bio-Rad, Thermo) through its catalog, but those are not independent Genesee products and are already captured under their actual manufacturers.

## What was checked
- https://www.geneseesci.com/ — site is a **JavaScript SPA**; static HTML contains navigation only, products are loaded dynamically via API (no product names in source).
- Protein Biology / Gel Electrophoresis category (https://www.geneseesci.com/applications/protein-biology/gel-electrophoresis/): only a category blurb, no listed products.
- Shop search "protein marker" (https://www.geneseesci.com/shop/?nav-quick-search=protein+marker): returns the SPA shell with no static product data.
- Bing `site:geneseesci.com protein marker OR "protein ladder"`: no results.
- Brands listed on homepage: "Apex Bioresearch Products" (fly research consumables) — no protein reagent brand.

## Interpretation
Genesee Scientific has **no own-brand protein marker** to capture. Distributor relationships (reselling Bio-Rad/Thermo ladders) are not independent Genesee products and are excluded.

Saved artifacts:
- raw_html/geneseesci_home.html
- raw_html/geneseesci_shop_protein.html (SPA shell, no product data in source)
