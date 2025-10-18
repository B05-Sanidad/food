(function(){
  'use strict';

  // ---------- Utilities ----------
  const fmtES = new Intl.DateTimeFormat('es-ES',{day:'2-digit',month:'2-digit',year:'numeric'});
  const atNoon=d=>{const x=new Date(d);x.setHours(12,0,0,0);return x;}
  const addDays=(d,n)=>{const x=new Date(d);x.setDate(x.getDate()+n);return x;}
  const pad=n=>String(n).padStart(2,'0');
  const qs = new URLSearchParams(location.search);
  const TODAY = atNoon(new Date());

  const LS_KEY = 'B05_TRACE_OVERRIDES';
  function loadOverrides(){
    try{ return JSON.parse(localStorage.getItem(LS_KEY)||'{}'); }catch(e){ return {}; }
  }
  function saveOverrides(data){
    try{ localStorage.setItem(LS_KEY, JSON.stringify(data)); }catch(e){}
  }
  function ymd(d){ return d.toISOString().slice(0,10); }
  function parseYMD(s){ const [Y,M,D]=s.split('-').map(Number); return atNoon(new Date(Y,M-1,D)); }

  function yyyymmdd(d){
    return d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate());
  }

  function parseISODate(s){
    const [Y,M,D]=String(s||'').split('-').map(Number);
    if(!Y||!M||!D) return atNoon(new Date(2025,0,1));
    return atNoon(new Date(Y,M-1,D));
  }

  function getKeyFromUrl(){
    const parts = location.pathname.split('/').filter(Boolean);
    const last = parts[parts.length-1] || '';
    const looksLikeFile = /\.html?$/i.test(last);
    let key = '';
    if (!looksLikeFile && parts[0]==='food' && parts[1]) {
      key = decodeURIComponent(parts[1]).toUpperCase();
    }
    if (qs.get('item')) key = qs.get('item').toUpperCase();
    const ignore = new Set(['','FOOD','404','404.HTML','INDEX.HTML','INDEX-EXP.HTML']);
    if (ignore.has(key)) key = '';
    return key;
  }

  function mostRecentProduction(ref,cfg){
    const step = Number(cfg.DAYS_PRODUCTION);
    const safeStep = Number.isFinite(step) && step>0 ? step : 7;
    const anchor = cfg.PROD_ANCHOR ? parseISODate(cfg.PROD_ANCHOR) : parseISODate('2025-01-01');
    const msPerDay=86400000;
    const daysFromAnchor=Math.floor((atNoon(ref)-anchor)/msPerDay);
    const k=Math.floor(daysFromAnchor/safeStep);
    let d=addDays(anchor,k*safeStep);
    if(d.getDay()===1) d=addDays(d,-1); // Monday -> Sunday shift
    return atNoon(d);
  }

  function buildSeries(latest,cfg){
    const monthsBack = Number(cfg.MONTHS_BACK)||6;
    const stepRaw = Number(cfg.DAYS_PRODUCTION);
    const step = Number.isFinite(stepRaw)&&stepRaw>0 ? stepRaw : 7;
    const start = new Date(latest); start.setMonth(start.getMonth()-monthsBack);
    const arr=[];
    for(let d=addDays(latest,-step); d>=start; d=addDays(d,-step)){
      let dd=new Date(d);
      if(dd.getDay()===1) dd=addDays(dd,-1);
      arr.push(atNoon(dd));
      if (arr.length>2000) break;
    }
    return arr;
  }

  function makeLotNumberFromDate(prefix, d){
    return (prefix||'') + yyyymmdd(d);
  }

  function computeLatestLotForCfg(today, cfg, overridesForKey){
    let latest=mostRecentProduction(today,cfg);
    if (overridesForKey && overridesForKey.latestOverrideDateISO) {
      latest = parseYMD(overridesForKey.latestOverrideDateISO);
    }
    const exp=addDays(latest,cfg.EXP_DAYS);
    const lotNum = (overridesForKey && overridesForKey.latestLotNumberOverride)
      ? overridesForKey.latestLotNumberOverride
      : (cfg.latestLotNumber || makeLotNumberFromDate(cfg.PREFIX, latest));
    const daysLeft = Math.ceil((atNoon(exp) - atNoon(today)) / 86400000);
    let statusClass='ok', statusText='✅ Fresco';
    if (daysLeft <= 2 && daysLeft >= 0) { statusClass='warn'; statusText='⚠️ Casi'; }
    if (daysLeft < 0) { statusClass='bad'; statusText='❌ Caducado'; }
    return { latest, exp, lotNum, daysLeft, statusClass, statusText };
  }

  // ---------- Views ----------
  function renderDashboard(){
    const app=document.getElementById('app');
    const cfgs = window.B05_CONFIGS||{};
    const overrides = loadOverrides();
    const keys = Object.keys(cfgs);
    const showExpiredOnly = qs.get('view')==='expired';

    const rows = keys.map(k=>{
      const cfg = cfgs[k];
      const res = computeLatestLotForCfg(TODAY, cfg, overrides[k]);
      return {
        key:k, cfg,
        latest:res.latest, exp:res.exp, lotNum:res.lotNum, daysLeft:res.daysLeft,
        statusClass:res.statusClass, statusText:res.statusText
      };
    }).sort((a,b)=> a.cfg.Food.localeCompare(b.cfg.Food));

    // Auto-regenerate when entering expired view
    const filtered = showExpiredOnly ? rows.filter(r=>r.daysLeft<0) : rows;
    if (showExpiredOnly && filtered.length){
      let changed=false;
      filtered.forEach(r=>{
        if (r.daysLeft<0){
          const step = Number(r.cfg.DAYS_PRODUCTION)>0 ? Number(r.cfg.DAYS_PRODUCTION) : 7;
          let prevLatest = new Date(r.latest);
          let newLatest = new Date(prevLatest);

          while (addDays(newLatest, r.cfg.EXP_DAYS) < TODAY) {
            newLatest = addDays(newLatest, step);
            if ((newLatest - prevLatest)/86400000 > 3650) break;
          }
          const ov = overrides[r.key] || { historyExtra: [] };
          const prevLotNum = (ov.latestLotNumberOverride) ? ov.latestLotNumberOverride : (r.cfg.latestLotNumber || makeLotNumberFromDate(r.cfg.PREFIX, prevLatest));
          const already = (ov.historyExtra||[]).some(x=>x.dateISO===ymd(prevLatest));
          if (!already) {
            ov.historyExtra = ov.historyExtra || [];
            ov.historyExtra.unshift({ dateISO: ymd(prevLatest), lotNum: prevLotNum });
          }
          ov.latestOverrideDateISO = ymd(newLatest);
          ov.latestLotNumberOverride = makeLotNumberFromDate(r.cfg.PREFIX, newLatest);
          overrides[r.key] = ov;
          changed=true;
        }
      });
      if (changed){ saveOverrides(overrides); }
    }

    // Recompute after potential changes
    const rows2 = keys.map(k=>{
      const cfg = cfgs[k];
      const res = computeLatestLotForCfg(TODAY, cfg, overrides[k]);
      return {
        key:k, cfg,
        latest:res.latest, exp:res.exp, lotNum:res.lotNum, daysLeft:res.daysLeft,
        statusClass:res.statusClass, statusText:res.statusText
      };
    }).sort((a,b)=> a.cfg.Food.localeCompare(b.cfg.Food));
    const finalRows = showExpiredOnly ? rows2.filter(r=>r.daysLeft<0) : rows2;

    app.innerHTML = `
      <div class="card">
        <div class="toolbar">
          <h3 style="margin:0">Resumen de productos (último lote calculado)</h3>
          <span style="flex:1"></span>
          <label class="btn">
            <input type="checkbox" id="expiredToggle" ${showExpiredOnly?'checked':''} />
            Mostrar solo caducados
          </label>
        </div>

        <table id="dashTable" aria-label="Resumen">
          <thead>
            <tr>
              <th>Producto</th>
              <th class="nowrap">Fecha lote</th>
              <th class="nowrap">Caduca</th>
              <th class="nowrap">Días restantes</th>
              <th>Estado</th>
              <th>Lote #</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${finalRows.map(r=>`
              <tr>
                <td><strong>${r.cfg.Food}</strong><div class="muted">${r.key}</div></td>
                <td class="nowrap">${fmtES.format(r.latest)}</td>
                <td class="nowrap">${fmtES.format(r.exp)}</td>
                <td>${r.daysLeft}</td>
                <td><span class="pill ${r.statusClass}">${r.statusText}</span></td>
                <td class="nowrap">${r.lotNum}</td>
                <td class="row-actions">
                  <a class="btn" href="?item=${encodeURIComponent(r.key)}">🔎 Ver detalle</a>
                  <button class="btn regenBtn" data-key="${r.key}" type="button">🚨 Reset (este)</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <p class="muted">* El cálculo usa <em>DAYS_PRODUCTION</em>, <em>PROD_ANCHOR</em> y <em>EXP_DAYS</em> de cada entrada en <code>config.js</code>. Las regeneraciones se guardan localmente.</p>
      </div>
    `;

    const expiredToggle = document.getElementById('expiredToggle');
    if (expiredToggle){
      expiredToggle.addEventListener('change', ()=>{
        if (expiredToggle.checked) {
          qs.set('view','expired');
        } else {
          qs.delete('view');
        }
        location.search = qs.toString();
      });
    }

    // CSV export for current view
    
    // Wire per-row "Reset (este)" buttons
    document.querySelectorAll('.regenBtn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const key = btn.getAttribute('data-key');
        const cfgs = window.B05_CONFIGS || {};
        const cfg = cfgs[key];
        if (!cfg) return;

        const overrides = loadOverrides();
        const res = computeLatestLotForCfg(TODAY, cfg, overrides[key]);
        const step = Number(cfg.DAYS_PRODUCTION)>0 ? Number(cfg.DAYS_PRODUCTION) : 7;

        let prevLatest = new Date(res.latest);
        let newLatest = new Date(prevLatest);

        // advance until it's not expired anymore
        while (addDays(newLatest, cfg.EXP_DAYS) < TODAY) {
          newLatest = addDays(newLatest, step);
          if ((newLatest - prevLatest)/86400000 > 3650) break; // safety
        }

        const ov = overrides[key] || { historyExtra: [] };
        const prevLotNum = (ov.latestLotNumberOverride) ? ov.latestLotNumberOverride : (cfg.latestLotNumber || makeLotNumberFromDate(cfg.PREFIX, prevLatest));
        const already = (ov.historyExtra||[]).some(x=>x.dateISO===ymd(prevLatest));
        if (!already) {
          ov.historyExtra = ov.historyExtra || [];
          ov.historyExtra.unshift({ dateISO: ymd(prevLatest), lotNum: prevLotNum });
        }
        ov.latestOverrideDateISO = ymd(newLatest);
        ov.latestLotNumberOverride = makeLotNumberFromDate(cfg.PREFIX, newLatest);
        overrides[key] = ov;
        saveOverrides(overrides);

        // Re-render dashboard so user sees updated row immediately
        renderDashboard();
      });
    });

  document.getElementById('exportCsvBtn').onclick = ()=>{
      const rows = [[
        "Key","Food","Latest Lot Date","Expiration Date","Days Left","Status","Lot #"
      ]];
      finalRows.forEach(r=>{
        rows.push([
          r.key, r.cfg.Food, fmtES.format(r.latest), fmtES.format(r.exp),
          String(r.daysLeft), r.statusText, r.lotNum
        ].map(v=>'"'+String(v).replaceAll('"','""')+'"'));
      });
      const csv = rows.map(r=>r.join(',')).join('\n');
      const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href=url; a.download = (showExpiredOnly ? 'B05_expired_latest_lots.csv' : 'B05_dashboard_latest_lots.csv');
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(()=>URL.revokeObjectURL(url), 500);
    };
  }

  function renderTrace(cfg, key){
    const app=document.getElementById('app');
    app.innerHTML=`
      <div class="card">
        <div class="toolbar">
          <h3 style="margin:0">Lote más reciente</h3>
          <span style="flex:1"></span>
          <a class="btn" href="./">🏠 Resumen</a>
          <button id="regenOneBtn" class="btn" type="button">🚨 Reset este producto</button>
        </div>
        <table aria-label="Último lote">
          <thead><tr>
            <th>Fecha</th><th>Caducidad</th><th>Duración (Días)</th><th>Lote #</th>
            <th>Producto / Ingredientes</th><th>Origen / Proveedor</th><th>Lotes</th>
            <th>Usado en</th><th>Preparado por</th>
          </tr></thead>
          <tbody>
            <tr id="latestRow">
              <td id="latestLotDate"></td>
              <td id="latestExpDate"></td>
              <td id="latestExpDays"></td>
              <td id="latestLotNumber"></td>
              <td id="producto"></td>
              <td id="origen"></td>
              <td id="lote"></td>
              <td id="usado"></td>
              <td id="chef"></td>
            </tr>
          </tbody>
        </table>

        <h3>Histórico</h3>
        <table aria-label="Histórico de lotes">
          <thead><tr>
            <th>Fecha</th><th>Caducidad</th><th>Duración (Días)</th><th>Lote #</th>
            <th>Producto / Ingredientes</th><th>Origen / Proveedor</th><th>Lotes</th>
            <th>Usado en</th><th>Preparado por</th>
          </tr></thead>
          <tbody id="tbody"></tbody>
        </table>
      </div>`;

    const overrides = loadOverrides();
    let latest=mostRecentProduction(TODAY,cfg);
    if (overrides[key] && overrides[key].latestOverrideDateISO) {
      latest = parseYMD(overrides[key].latestOverrideDateISO);
    }
    const exp=addDays(latest,cfg.EXP_DAYS);
    document.getElementById('latestLotDate').textContent=fmtES.format(latest);
    document.getElementById('latestExpDate').textContent=fmtES.format(exp);
    document.getElementById('latestExpDays').textContent=cfg.EXP_DAYS;
    const ov2 = overrides[key];
    const latestLotNum = (ov2 && ov2.latestLotNumberOverride) ? ov2.latestLotNumberOverride : (cfg.latestLotNumber || makeLotNumberFromDate(cfg.PREFIX, latest));
    document.getElementById('latestLotNumber').textContent=latestLotNum;
    document.getElementById('producto').textContent=cfg.PRODUCTO;
    document.getElementById('origen').textContent=cfg.ORIGEN;
    document.getElementById('lote').textContent=cfg.LOTE;
    document.getElementById('usado').textContent=cfg.USADO;
    document.getElementById('chef').textContent=cfg.CHEF;

    const regenBtn = document.getElementById('regenOneBtn');
    if (regenBtn){
      regenBtn.addEventListener('click', ()=>{
        const overrides = loadOverrides();
        const res = computeLatestLotForCfg(TODAY, cfg, overrides[key]);
        const step = Number(cfg.DAYS_PRODUCTION)>0 ? Number(cfg.DAYS_PRODUCTION) : 7;

        let prevLatest = new Date(res.latest);
        let newLatest = new Date(prevLatest);
        while (addDays(newLatest, cfg.EXP_DAYS) < TODAY) {
          newLatest = addDays(newLatest, step);
          if ((newLatest - prevLatest)/86400000 > 3650) break;
        }

        const ov = overrides[key] || { historyExtra: [] };
        const prevLotNum = (ov.latestLotNumberOverride) ? ov.latestLotNumberOverride : (cfg.latestLotNumber || makeLotNumberFromDate(cfg.PREFIX, prevLatest));
        const already = (ov.historyExtra||[]).some(x=>x.dateISO===ymd(prevLatest));
        if (!already) {
          ov.historyExtra.unshift({ dateISO: ymd(prevLatest), lotNum: prevLotNum });
        }
        ov.latestOverrideDateISO = ymd(newLatest);
        ov.latestLotNumberOverride = makeLotNumberFromDate(cfg.PREFIX, newLatest);
        overrides[key] = ov;
        saveOverrides(overrides);
        // Re-render the same page to reflect changes
        renderTrace(cfg, key);
      });
    }

    const tbody=document.getElementById('tbody');

    // extra history from overrides (regenerations)
    const ovh = overrides[key];
    if (ovh && Array.isArray(ovh.historyExtra)) {
      ovh.historyExtra.forEach(x=>{
        const d = parseYMD(x.dateISO);
        const expd=addDays(d,cfg.EXP_DAYS);
        const lotNum = x.lotNum || makeLotNumberFromDate(cfg.PREFIX, d);
        const tr=document.createElement('tr');
        tr.innerHTML=`<td>${fmtES.format(d)}</td><td>${fmtES.format(expd)}</td>
          <td>${cfg.EXP_DAYS}</td><td>${lotNum}</td>
          <td>${cfg.PRODUCTO}</td><td>${cfg.ORIGEN}</td><td>${cfg.LOTE}</td>
          <td>${cfg.USADO}</td><td>${cfg.CHEF}</td>`;
        tbody.appendChild(tr);
      });
    }

    // normal historical series (excluding latest)
    const series=buildSeries(latest,cfg);
    series.forEach((d)=>{
      const expd=addDays(d,cfg.EXP_DAYS);
      const lotNum = makeLotNumberFromDate(cfg.PREFIX, d);
      const tr=document.createElement('tr');
      tr.innerHTML=`<td>${fmtES.format(d)}</td><td>${fmtES.format(expd)}</td>
        <td>${cfg.EXP_DAYS}</td><td>${lotNum}</td>
        <td>${cfg.PRODUCTO}</td><td>${cfg.ORIGEN}</td><td>${cfg.LOTE}</td>
        <td>${cfg.USADO}</td><td>${cfg.CHEF}</td>`;
      tbody.appendChild(tr);
    });
  }

  // ---------- Wiring ----------
  document.getElementById('printBtn').addEventListener('click', ()=> window.print());
  document.getElementById('closeBtn').addEventListener('click', ()=> {
    if (document.referrer) history.back(); else location.href = location.origin || '.';
  });
  document.getElementById('resetOverridesBtn').addEventListener('click', ()=>{
    localStorage.removeItem(LS_KEY); location.reload();
  });

  function boot(){
    const key=getKeyFromUrl();
    const cfg=(window.B05_CONFIGS||{})[key];
    if(!key){
      document.getElementById('title').textContent = `B05 – Resumen de Trazabilidad`;
      return renderDashboard();
    }
    if(!cfg){
      document.getElementById('app').innerHTML='<div class="card">No encontrado</div>';
      return;
    }
    document.getElementById('title').textContent = `${cfg.Food} – Registro de Trazabilidad – B05`;
    renderTrace(cfg, key);
  }

  // Boot after config.js loaded
  if (window.B05_CONFIGS) boot();
  else window.addEventListener('load', boot);
})();