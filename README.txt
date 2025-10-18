B05 – Trazabilidad (Static)
=============================

Files:
- index.html    : main page (loads config.js and app.js)
- app.js        : logic (dashboard, per-item, auto-regenerate in expired view)
- index-exp.html: shortcut to expired view (?view=expired)
- config.js     : YOUR data file (already exists in your repo)

Deploy on GitHub Pages (https://b05-sanidad.github.io/food/):
1) Put these files at the repo root folder (same level):
   index.html, app.js, index-exp.html, config.js
2) Commit & push.
3) URLs:
   - Dashboard: https://b05-sanidad.github.io/food/
   - Expired-only: https://b05-sanidad.github.io/food/index-exp.html (redirects to ?view=expired)
   - Per-item detail: https://b05-sanidad.github.io/food/?item=5HUM517  (replace with your key)

Auto‑regeneration behavior
--------------------------
- Entering ?view=expired:
  - For each product whose latest lot is expired, the app advances the production date by DAYS_PRODUCTION until its new expiration is not expired.
  - It pushes the previous latest (date + lot #) into the local Histórico and sets the new latest.
  - All changes are saved in localStorage under key B05_TRACE_OVERRIDES.
  - The per-item Histórico includes those extra rows at the top.
- Reset button (🧹) clears local changes.

Notes
-----
- This is 100% static (no server). To sync regenerated lots across devices, we would add a tiny API or a bot to write back into config.js.
