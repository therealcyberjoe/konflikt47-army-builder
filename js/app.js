// ============================================================
// KONFLIKT '47 — PLATOON BUILDER
// ============================================================

const EXP_TIERS = ['Inexperienced', 'Regular', 'Veteran'];
const EXP_KEY   = { 'Inexperienced': 'inexp', 'Regular': 'reg', 'Veteran': 'vet' };

let state = {
  factionId: null,
  armyName: '',
  ptsLimit: 500,
  roster: [],         // { unitId, name, role, exp, basePoints, qty, optionPts, modelCount, notes }
  activeRoleFilter: 'All',
};

// ── helpers ──────────────────────────────────────────────────
function getUnitPts(unit, exp) {
  const key = EXP_KEY[exp] || 'reg';
  return unit.pts[key] || null;
}
function getPpm(unit, exp) {
  if (!unit.ppm) return 0;
  const key = EXP_KEY[exp] || 'reg';
  return unit.ppm[key] || 0;
}
function getDamage(unit, exp) {
  if (!unit.damage) return '—';
  const key = EXP_KEY[exp] || 'reg';
  return unit.damage[key] || '—';
}
function getMorale(unit, exp) {
  if (!unit.morale) return '—';
  const key = EXP_KEY[exp] || 'reg';
  return unit.morale[key] || '—';
}
function availableTiers(unit) {
  return EXP_TIERS.filter(t => unit.pts[EXP_KEY[t]] !== null && unit.pts[EXP_KEY[t]] !== undefined);
}

// ============================================================
// INIT
// ============================================================
function init() {
  renderFactions();
  renderRoleTabs();
  renderRoster();
  renderUnitBrowser();
  renderValidation();

  document.getElementById('armyName').addEventListener('input', e => {
    state.armyName = e.target.value;
  });
  document.getElementById('ptsLimitSelect').addEventListener('change', e => {
    state.ptsLimit = parseInt(e.target.value);
    document.getElementById('ptsLimit').textContent = state.ptsLimit.toLocaleString();
    updateTotalPoints();
  });

  if (window.innerWidth < 900) switchTab('config');
}

// ============================================================
// FACTIONS
// ============================================================
function renderFactions() {
  const grid = document.getElementById('factionGrid');
  grid.innerHTML = FACTIONS.map(f => `
    <button class="faction-btn ${state.factionId === f.id ? 'active' : ''}"
      onclick="selectFaction('${f.id}')"
      style="${state.factionId === f.id ? `--faction-color:${f.color}` : ''}">
      ${f.name}
    </button>
  `).join('');
}

let _pendingFactionId = null;

function selectFaction(id) {
  if (id === state.factionId) return;
  if (state.roster.length > 0) {
    _pendingFactionId = id;
    document.getElementById('factionModal').style.display = 'flex';
    return;
  }
  _applyFactionChange(id);
}

function cancelFactionChange() {
  _pendingFactionId = null;
  document.getElementById('factionModal').style.display = 'none';
}

function confirmFactionChange() {
  document.getElementById('factionModal').style.display = 'none';
  if (_pendingFactionId) {
    state.roster = [];
    _applyFactionChange(_pendingFactionId);
    _pendingFactionId = null;
  }
}

function _applyFactionChange(id) {
  state.factionId = id;
  state.activeRoleFilter = 'All';
  renderFactions();
  renderUnitBrowser();
  renderRoster();
  updateTotalPoints();
  renderValidation();
  const faction = FACTIONS.find(f => f.id === id);
  const badge = document.getElementById('factionBadge');
  badge.textContent = faction ? faction.name : 'No Faction';
  if (faction) {
    badge.style.borderColor = faction.color + '66';
    badge.style.color = faction.color;
    badge.style.background = faction.color + '18';
    document.documentElement.style.setProperty('--accent', faction.color);
  }
}

// ============================================================
// POINTS
// ============================================================
function calcEntryTotal(entry) {
  const unit = findUnit(entry.unitId);
  if (!unit) return 0;
  const basePts = entry.basePoints || 0;
  const optPts  = entry.optionPts  || 0;
  const extra   = Math.max(0, (entry.modelCount || unit.minModels || 1) - (unit.minModels || 1));
  const modelPts = extra * getPpm(unit, entry.exp);
  return (basePts + optPts + modelPts) * entry.qty;
}

function calcTotal() {
  return state.roster.reduce((s, e) => s + calcEntryTotal(e), 0);
}

function updateTotalPoints() {
  const total = calcTotal();
  document.getElementById('totalPts').textContent = total;
  document.getElementById('totalPts').style.color = total > state.ptsLimit ? 'var(--red)' : 'var(--accent)';
  const pct = Math.min((total / state.ptsLimit) * 100, 100);
  const bar = document.getElementById('ptsBar');
  bar.style.width = pct + '%';
  bar.className = 'pts-bar-fill' + (total > state.ptsLimit ? ' over' : '');
  renderValidation();
}

function findUnit(id) {
  if (!state.factionId) return null;
  return (UNITS[state.factionId] || []).find(u => u.id === id) || null;
}

// ============================================================
// ROLE TABS
// ============================================================
function renderRoleTabs() {
  const tabs = document.getElementById('roleTabs');
  tabs.innerHTML = ['All', ...ROLES].map(r => `
    <button class="role-tab ${state.activeRoleFilter === r ? 'active' : ''}"
      onclick="filterRole('${r}')">${r}</button>
  `).join('');
}

function filterRole(role) {
  state.activeRoleFilter = role;
  renderRoleTabs();
  renderUnitBrowser();
}

// ============================================================
// UNIT BROWSER
// ============================================================
function renderUnitBrowser() {
  const list    = document.getElementById('unitList');
  const countEl = document.getElementById('unitCount');

  if (!state.factionId) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">🎯</div><div>Select a faction first</div></div>`;
    countEl.textContent = '—';
    return;
  }

  const units = UNITS[state.factionId] || [];
  const query = (document.getElementById('unitSearch').value || '').toLowerCase();
  const filtered = units.filter(u => {
    const matchRole  = state.activeRoleFilter === 'All' || u.role === state.activeRoleFilter;
    const matchQuery = !query || u.name.toLowerCase().includes(query);
    return matchRole && matchQuery;
  });

  countEl.textContent = filtered.length + ' units';

  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state"><div>No units found</div></div>`;
    return;
  }

  const roleOrder = ['Officer','Infantry','Artillery','Armour','Walker','Air Support','Transport'];
  filtered.sort((a, b) => {
    const ri = roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role);
    return ri !== 0 ? ri : a.name.localeCompare(b.name);
  });

  list.innerHTML = filtered.map(unit => {
    const tiers   = availableTiers(unit);
    const defExp  = unit.defaultExp || tiers[0] || 'Regular';
    const basePts = getUnitPts(unit, defExp);
    const ppmVal  = getPpm(unit, defExp);
    const dam     = getDamage(unit, defExp);
    const mor     = getMorale(unit, defExp);
    const expCls  = defExp.toLowerCase();

    const tierBtns = tiers.map(t => `
      <span class="tier-badge tier-${t.toLowerCase()}">${t.charAt(0)}</span>
    `).join('');

    return `
      <div class="unit-card">
        <div class="unit-card-top">
          <div class="unit-card-name">${unit.name}</div>
          <div class="unit-card-meta">
            <span class="role-badge role-${unit.role.toLowerCase().replace(/\s+/g,'-')}">${unit.role}</span>
            ${tierBtns}
          </div>
        </div>
        <div class="unit-stats-row">
          <span class="stat"><span class="stat-label">Mv</span><span class="stat-val">${unit.move || '6"'}</span></span>
          <span class="stat"><span class="stat-label">Dmg</span><span class="stat-val">${dam}</span></span>
          <span class="stat"><span class="stat-label">Mor</span><span class="stat-val">${mor}</span></span>
          ${unit.minModels && unit.maxModels && unit.minModels !== unit.maxModels
            ? `<span class="stat"><span class="stat-label">Size</span><span class="stat-val">${unit.minModels}–${unit.maxModels}</span></span>`
            : (unit.composition ? `<span class="stat stat-comp"><span class="stat-label">Comp</span><span class="stat-val">${unit.composition}</span></span>` : '')}
        </div>
        ${unit.special && unit.special.length
          ? `<div class="unit-special">${unit.special.map(s=>`<span>${s}</span>`).join('')}</div>` : ''}
        ${unit.riftUnit
          ? `<div class="rift-note">⚡ ${unit.riftUnit}</div>` : ''}
        <div class="unit-card-bottom">
          <span class="unit-pts">${basePts !== null ? basePts + ' pts' : '—'}${ppmVal ? ` +${ppmVal}/model` : ''}</span>
          <button class="add-btn" onclick="addUnit('${unit.id}')">+ Add</button>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// ADD / REMOVE UNITS
// ============================================================
function addUnit(unitId) {
  const unit = findUnit(unitId);
  if (!unit) return;
  const exp     = unit.defaultExp || availableTiers(unit)[0] || 'Regular';
  const basePts = getUnitPts(unit, exp) || 0;

  state.roster.push({
    unitId,
    name: unit.name,
    role: unit.role,
    exp,
    basePoints: basePts,
    qty: 1,
    optionPts: 0,
    modelCount: unit.minModels || 1,
    selectedOptions: {},
    notes: '',
  });

  renderRoster();
  updateTotalPoints();
  if (window.innerWidth < 900) switchTab('roster');
}

function removeEntry(idx) {
  state.roster.splice(idx, 1);
  renderRoster();
  updateTotalPoints();
}

function setEntryExp(idx, exp) {
  const entry = state.roster[idx];
  const unit  = findUnit(entry.unitId);
  if (!unit) return;
  entry.exp        = exp;
  entry.basePoints = getUnitPts(unit, exp) || 0;
  entry.optionPts  = 0;
  entry.selectedOptions = {};
  renderRoster();
  updateTotalPoints();
}

// ============================================================
// ROSTER
// ============================================================
function renderRoster() {
  const body = document.getElementById('rosterBody');

  if (!state.roster.length) {
    body.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">⚔</div>
        <div>No units added yet</div>
        <div style="font-size:12px;color:var(--muted);margin-top:6px;">Pick a faction and add units from the browser ←</div>
      </div>`;
    return;
  }

  body.innerHTML = state.roster.map((entry, idx) => {
    const unit = findUnit(entry.unitId);
    if (!unit) return '';

    const tiers   = availableTiers(unit);
    const total   = calcEntryTotal(entry);
    const ppmVal  = getPpm(unit, entry.exp);
    const maxM    = unit.maxModels || 1;
    const minM    = unit.minModels || 1;

    // experience selector buttons
    const expBtns = tiers.length > 1
      ? `<div class="exp-selector">${tiers.map(t => `
          <button class="exp-btn ${entry.exp === t ? 'active' : ''}"
            onclick="setEntryExp(${idx}, '${t}')">${t}</button>
        `).join('')}</div>`
      : `<span class="exp-badge exp-${entry.exp.toLowerCase()}">${entry.exp}</span>`;

    // model count slider
    const modelSlider = maxM > minM && ppmVal ? `
      <div class="model-slider-wrap">
        <label class="field-label-sm">Models: <strong id="mc-${idx}">${entry.modelCount || minM}</strong></label>
        <input type="range" class="model-slider"
          min="${minM}" max="${maxM}" value="${entry.modelCount || minM}"
          oninput="setModels(${idx}, this.value)">
        <span class="model-range-hint">${minM}–${maxM} models · +${ppmVal} pts each</span>
      </div>
    ` : '';

    // options
    const optHtml = unit.options && unit.options.length
      ? `<div class="entry-options">${unit.options.map((opt, oi) => `
          <label class="opt-row">
            <input type="checkbox"
              ${entry.selectedOptions && entry.selectedOptions[opt.label] ? 'checked' : ''}
              onchange="toggleOption(${idx}, ${oi}, this.checked)">
            <span class="opt-label">${opt.label}</span>
            <span class="opt-pts">${opt.pts >= 0 ? '+' : ''}${opt.pts} pts</span>
          </label>
        `).join('')}</div>`
      : '';

    // rift note
    const riftNote = unit.riftUnit
      ? `<div class="rift-note-entry">⚡ ${unit.riftUnit}</div>` : '';

    return `
      <div class="roster-entry" data-idx="${idx}">
        <div class="entry-header">
          <div class="entry-name">${entry.name}</div>
          <div class="entry-right">
            <span class="entry-pts" id="epts-${idx}">${total} pts</span>
            <button class="remove-btn" onclick="removeEntry(${idx})" title="Remove">✕</button>
          </div>
        </div>
        <div class="entry-role-row">
          <span class="role-badge role-${unit.role.toLowerCase().replace(/\s+/g,'-')}">${unit.role}</span>
          ${expBtns}
        </div>
        ${riftNote}
        ${modelSlider}
        ${optHtml}
        <div class="entry-notes-wrap">
          <input type="text" class="notes-input" placeholder="Notes..."
            value="${entry.notes || ''}"
            oninput="setNotes(${idx}, this.value)">
        </div>
      </div>
    `;
  }).join('');
}

function toggleOption(entryIdx, optIdx, checked) {
  const entry = state.roster[entryIdx];
  const unit  = findUnit(entry.unitId);
  if (!unit) return;
  const opt = unit.options[optIdx];
  if (!entry.selectedOptions) entry.selectedOptions = {};
  entry.selectedOptions[opt.label] = checked;
  // recalculate total optionPts
  entry.optionPts = unit.options.reduce((s, o) => {
    return entry.selectedOptions[o.label] ? s + o.pts : s;
  }, 0);
  updateTotalPoints();
  const el = document.getElementById(`epts-${entryIdx}`);
  if (el) el.textContent = calcEntryTotal(entry) + ' pts';
}

function setModels(entryIdx, val) {
  const entry = state.roster[entryIdx];
  entry.modelCount = parseInt(val);
  const mc = document.getElementById(`mc-${entryIdx}`);
  if (mc) mc.textContent = val;
  updateTotalPoints();
  const el = document.getElementById(`epts-${entryIdx}`);
  if (el) el.textContent = calcEntryTotal(entry) + ' pts';
}

function setNotes(entryIdx, val) {
  state.roster[entryIdx].notes = val;
}

// ============================================================
// VALIDATION
// ============================================================
function renderValidation() {
  const el = document.getElementById('validationList');
  const errors = [], warnings = [];

  const total = calcTotal();
  if (total > state.ptsLimit) errors.push(`Over points limit by ${total - state.ptsLimit} pts`);

  const officers = state.roster.filter(e => {
    const u = findUnit(e.unitId);
    return u && u.role === 'Officer';
  });
  if (state.roster.length > 0 && officers.length === 0) errors.push('Must include at least one Officer');

  if (!state.factionId)  warnings.push('No faction selected');
  if (!state.armyName)   warnings.push('Army has no name');

  if (!errors.length && !warnings.length) {
    el.innerHTML = `<div class="valid-ok">✓ List is valid</div>`;
    return;
  }

  el.innerHTML = [
    ...errors.map(e => `<div class="valid-error">✕ ${e}</div>`),
    ...warnings.map(w => `<div class="valid-warn">⚠ ${w}</div>`),
  ].join('');
}

// ============================================================
// EXPORT
// ============================================================
function exportTxt() {
  const faction = FACTIONS.find(f => f.id === state.factionId);
  let out = `KONFLIKT '47 — ${state.armyName || 'Unnamed Force'}\n`;
  out += `Faction: ${faction ? faction.name : '—'} | Points: ${calcTotal()} / ${state.ptsLimit}\n`;
  out += '='.repeat(54) + '\n\n';

  state.roster.forEach(entry => {
    const unit = findUnit(entry.unitId);
    if (!unit) return;
    const total = calcEntryTotal(entry);
    out += `${entry.exp} ${entry.name}`;
    if (unit.maxModels > (unit.minModels || 1)) out += ` [${entry.modelCount} models]`;
    out += ` — ${total} pts\n`;
    if (entry.selectedOptions) {
      unit.options && unit.options.forEach(opt => {
        if (entry.selectedOptions[opt.label]) out += `  + ${opt.label}\n`;
      });
    }
    if (entry.notes) out += `  Notes: ${entry.notes}\n`;
    out += '\n';
  });

  out += '='.repeat(54) + '\n';
  out += `TOTAL: ${calcTotal()} pts\n`;

  const blob = new Blob([out], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `k47-${(state.armyName || 'list').replace(/\s+/g,'-').toLowerCase()}.txt`;
  a.click();
}

function printList() { window.print(); }

function clearRoster() {
  if (!state.roster.length) return;
  if (!confirm('Clear the entire roster?')) return;
  state.roster = [];
  renderRoster();
  updateTotalPoints();
}

// ============================================================
// MOBILE TABS
// ============================================================
function switchTab(tab) {
  document.querySelectorAll('[data-tab]').forEach(el => {
    el.style.display = el.dataset.tab === tab ? '' : 'none';
  });
  document.querySelectorAll('.mobile-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
}

document.addEventListener('DOMContentLoaded', init);
