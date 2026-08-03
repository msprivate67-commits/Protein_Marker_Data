# NZYTech (NZYTech, Lda.)
**Official site:** nzytech.com
**Protein markers found:** blocked — products confirmed to exist, details not retrievable

Investigation summary:
- NZYTech's entire site (www.nzytech.com) is behind a Cloudflare "Just a moment..." JS/Turnstile challenge.
  - Every page returns HTTP 403 to curl with a Chrome UA + full browser headers (Accept, Sec-Fetch-*, Accept-Language, compressed, etc.), including:
    - homepage, /products/molecular-biology/protein-electrophoresis/
    - /?s=protein+marker&post_type=product
    - /sitemap.xml, /sitemap_index.xml, /robots.txt, /feed/
    - guessed PDF paths /wp-content/uploads/.../NZYColour-Protein-Marker.pdf
  - Subagents cannot use the Browser Use skill (only the main agent can), so the JS challenge could not be solved in this session.
- WebSearch quota exhausted; WebFetch blocked by Cloudflare; Wayback Machine (web.archive.org) unreachable from this environment; distributor lookups (americanbioscience, hvd.de, shop.nzytech.com) all failed/empty.

Confirmed product existence (cannot retrieve specifics):
- The task brief and Bing search confirm NZYTech manufactures protein markers under the **NZYColour Protein Marker** and **NZY Protein Ladder** lines, in the Molecular Biology → Protein Electrophoresis category. Catalog codes follow the MBxxx pattern (e.g., NZYColour Protein Marker ≈ MB090 family), but exact catalog numbers, band counts and per-band kDa sizes could NOT be verified from primary sources due to the WAF.

Recommendation: NZYTech should be re-tried by the MAIN agent (which can use the control-browser skill to pass Cloudflare's Turnstile), or queried from a cached/distributor mirror. No HTML / PDF artifacts could be saved for this supplier in this run.
