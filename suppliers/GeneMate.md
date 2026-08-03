# GeneMate (BioExpress / Thomas Scientific)
**Official site:** www.bioexpress.com (defunct); now distributed via thomassci.com
**Protein markers found:** 0 (retrievable — all storefronts blocked/down)

## Access notes (IMPORTANT)
The **GeneMate** house brand was originally sold by **BioExpress** (Daigger). The original storefront is **dead**:
- `https://www.bioexpress.com/` — DNS resolution fails (`getaddrinfo ENOTFOUND`). The brand/site is no longer operating.

The GeneMate line was absorbed by **Thomas Scientific**, whose storefront is bot-protected:
- `https://www.thomassci.com/search?q=GeneMate+protein+marker` — HTTP **403** to WebFetch.
- The same URL via curl → **segfault** (TLS/HTTP2 issue in this environment).

So no GeneMate product pages could be retrieved.

## Context (not crawled)
GeneMate historically listed a few economy DNA ladders and a basic pre-stained protein marker under the GeneMate catalog prefix (e.g. "GeneMate Protein Marker" series). Whether these are still sold under Thomas Scientific could not be confirmed from this environment.

## Conclusion
**0 retrievable protein markers** for GeneMate from this environment. Recommendation: visit thomassci.com in a browser and search the GeneMate brand for "protein marker".

(No saved artifacts — bioexpress.com DNS-failed and thomassci.com is 403 to bots.)
