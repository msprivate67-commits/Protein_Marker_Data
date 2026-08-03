# Agilent
**Official site:** agilent.com
**Protein markers found:** Unable to verify (access blocked)

## Access Status: BLOCKED

All automated attempts to reach Agilent's protein electrophoresis / marker product
pages failed from this environment:

- `agilent.com` returns **HTTP 403 (Akamai bot block)** for curl regardless of
  browser headers, cookies, or X-Forwarded-For spoofing.
- WebFetch on `agilent.com` triggers a **302 geo-redirect to `agilent.com.cn`**,
  and the redirected `.com.cn` URLs return **HTTP 404** (category pages not
  published on the China locale).
- Bing (cn.bing.com, the only reachable search engine) returns no indexed
  Agilent protein-marker product pages — only generic `agilent.com` navigation
  links and Chinese distributor portals (instrument.com.cn, cnreagent.com).
- archive.org (Wayback Machine) is unreachable (timeouts) from this environment.
- WebSearch / WebReader MCP quota exhausted until 2026-08-20.

## Background knowledge (NOT independently verified this session)

Agilent's "Cell Analysis" business (the former Novex / Life Technologies protein
electrophoresis line, distinct from Thermo Fisher's Invitrogen Novex brand)
historically lists products under:

`agilent.com/en/product/cell-analysis/electrophoresis-protein-analysis/protein-markers`

Known/expected product lines (catalog numbers not confirmed via live fetch):

- **Protein Molecular Weight Markers** (unstained, broad range) — for use with
  Agilent's precast SDS-PAGE gels.
- **Prestained Protein Markers**.

Suggested next step: re-run this supplier from an IP that is not geo-blocked or
Akamai-challenged (e.g., US-based egress, or via a headful browser session), and
retrieve the category page + individual product spec sheets / PDFs.
