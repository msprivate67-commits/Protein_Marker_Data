# Takara / Clontech
**Official site:** takarabio.com (USA) / clontech.com (redirects to takarabio.com) / takarabiomed.com.cn (China)
**Protein markers found:** Unable to verify (access blocked)

## Access Status: BLOCKED (Cloudflare + WAF)

All automated attempts to reach Takara Bio's protein-marker product pages failed:

- **takarabio.com** returns **HTTP 403 (Cloudflare "Just a moment..." JS
  challenge)** for both curl and WebFetch, on every path tested:
  - `/products/protein-analysis/protein-electrophoresis/protein-markers`
  - `/products/protein-expression/protein-analysis-tools`
  - `/api/products?q=protein+marker`
  - `/Documents/Product%20Manuals/*.pdf`
  - `/sitemap.xml` (also 403)
- **clontech.com** 301-redirects to takarabio.com (same Cloudflare block).
- **takarabiomed.com.cn** (China site) is a Vite single-page app:
  - HTML pages return only a 2.2 KB JS shell (no server-rendered product data).
  - The JS bundle (`/assets/index-DYB5RpV9.js`) is blocked with HTTP 307
    `X-Tengine-Error: denied by http_custom` (Alibaba WAF).
  - PDF URLs of the form `takarabiomed.com.cn/DownLoad/<CAT>.pdf` resolve to
    the same SPA shell (true only for product-manual links; the app routes
    client-side).
- **Third-party aggregators** (Biocompare 403, Bioz JS-only, lookchem 503)
  are also blocked or JS-rendered.
- WebSearch/WebReader MCP quota exhausted until 2026-08-20.

## Confirmed (via Bioz.com title tag + literature refs) — NOT scraped

- A product literally named **"Takara Protein Molecular Weight Marker"** exists
  (confirmed by Bioz.com listing title and many methods-section citations in
  PubMed papers).
- A **"Takara Prestained Protein Marker"** also exists (Bioz listing title).

These are SDS-PAGE size standards in the Takara/Clontech protein-analysis
catalog. Concrete catalog numbers and kDa values could NOT be retrieved from
any reachable source this session.

## Suggested next step

Re-run this supplier from an environment that can solve the Cloudflare JS
challenge (headful browser session via Browser Use) and target:

- `https://www.takarabio.com/products/protein-analysis/protein-electrophoresis/protein-markers`
- Then each product's spec-sheet PDF link from that category page.

Historical catalog numbers to look for (need live confirmation): the Takara
"Protein Molecular Weight Marker" and "Prestained Protein Marker" lines,
typically 10–12 bands spanning ~10–250 kDa.
