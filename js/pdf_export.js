// ============================================================
// KONFLIKT '47 — PDF EXPORT
// Uses jsPDF (loaded via CDN in index.html)
// Weapon profiles appear per-unit, standard then extra/optional.
// ============================================================

function exportPDF() {
  if (!state.roster.length) {
    alert('Your roster is empty.');
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  const PAGE_W   = 210;
  const PAGE_H   = 297;
  const MARGIN   = 14;
  const COL_W    = PAGE_W - MARGIN * 2;
  const FOOTER_H = 10;

  const faction    = FACTIONS.find(f => f.id === state.factionId);
  const factionName = faction ? faction.name : 'Unknown Faction';
  const armyName   = state.armyName || 'Unnamed Force';
  const total      = calcTotal();

  // ── colour palette ────────────────────────────────────────
  const COL_DARK   = [22, 22, 26];
  const COL_PANEL  = [36, 36, 48];
  const COL_BORDER = [56, 56, 74];
  const COL_GOLD   = faction ? hexToRgb(faction.color) : [74, 170, 90];
  const COL_TEXT   = [221, 216, 208];
  const COL_MUTED  = [122, 116, 104];
  const COL_WHITE  = [240, 235, 228];
  const COL_WPN    = [44, 44, 58];   // weapon table row bg

  function hexToRgb(hex) {
    return [
      parseInt(hex.slice(1,3),16),
      parseInt(hex.slice(3,5),16),
      parseInt(hex.slice(5,7),16),
    ];
  }

  let y = 0;

  // ── page helpers ──────────────────────────────────────────
  function newPage() {
    doc.addPage();
    y = MARGIN;
    drawPageBg();
  }

  function drawPageBg() {
    doc.setFillColor(...COL_DARK);
    doc.rect(0, 0, PAGE_W, PAGE_H, 'F');
  }

  function checkY(needed) {
    if (y + needed > PAGE_H - FOOTER_H - MARGIN) {
      drawFooter();
      newPage();
    }
  }

  function drawFooter() {
    doc.setFillColor(...COL_PANEL);
    doc.rect(0, PAGE_H - FOOTER_H, PAGE_W, FOOTER_H, 'F');
    doc.setFontSize(7);
    doc.setTextColor(...COL_MUTED);
    doc.text(`${armyName}  ·  ${factionName}  ·  ${total} pts`, MARGIN, PAGE_H - 3.5);
    doc.text(`Fan-made · Konflikt '47 Platoon Builder`, PAGE_W - MARGIN, PAGE_H - 3.5, { align: 'right' });
  }

  // ── weapon mini-table ─────────────────────────────────────
  // Draws a compact weapon profile table for the given weapon names
  // Returns the height consumed
  function drawWeaponTable(weaponNames, isExtra) {
    if (!weaponNames || !weaponNames.length) return;

    // Deduplicate (e.g. twin HMG listed twice just shows once with note)
    const seen = {};
    const deduped = [];
    weaponNames.forEach(name => {
      if (!WEAPON_PROFILES[name]) return;
      if (seen[name]) { seen[name]++; }
      else { seen[name] = 1; deduped.push(name); }
    });
    if (!deduped.length) return;

    const ROW_H   = 5.5;
    const HDR_H   = 5;
    const INDENT  = 6;
    const tableW  = COL_W - INDENT;
    const labelX  = MARGIN + INDENT;

    // Column widths (relative to tableW)
    const cName   = 52;
    const cRange  = 18;
    const cShots  = 14;
    const cPen    = 12;
    const cSpec   = tableW - cName - cRange - cShots - cPen;

    checkY(HDR_H + deduped.length * ROW_H + 2);

    // Section label
    doc.setFontSize(6);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COL_MUTED);
    doc.text(isExtra ? 'OPTIONAL WEAPONS' : 'WEAPONS', labelX, y + 3.5);
    y += HDR_H;

    // Header row
    doc.setFillColor(...COL_PANEL);
    doc.rect(labelX, y, tableW, HDR_H - 0.5, 'F');
    doc.setFontSize(5.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COL_GOLD);
    doc.text('WEAPON',  labelX + 2,                            y + 3.5);
    doc.text('RANGE',   labelX + cName + 2,                   y + 3.5);
    doc.text('SHOTS',   labelX + cName + cRange + 2,          y + 3.5);
    doc.text('PEN',     labelX + cName + cRange + cShots + 2, y + 3.5);
    doc.text('SPECIAL', labelX + cName + cRange + cShots + cPen + 2, y + 3.5);
    y += HDR_H;

    deduped.forEach((name, i) => {
      const p = WEAPON_PROFILES[name];
      const qty = seen[name] > 1 ? ` ×${seen[name]}` : '';

      // Alternating rows
      if (i % 2 === 0) {
        doc.setFillColor(...COL_WPN);
        doc.rect(labelX, y, tableW, ROW_H, 'F');
      }

      doc.setFontSize(6);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...COL_TEXT);
      doc.text(name + qty, labelX + 2, y + 3.8);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...COL_TEXT);
      doc.text(p.range,  labelX + cName + 2,                   y + 3.8);
      doc.text(p.shots,  labelX + cName + cRange + 2,          y + 3.8);
      doc.text(p.pen,    labelX + cName + cRange + cShots + 2, y + 3.8);

      doc.setTextColor(...COL_MUTED);
      // Truncate special to fit the column
      const specFull = p.special || '';
      const specTrunc = doc.splitTextToSize(specFull, cSpec - 4)[0];
      doc.text(specTrunc, labelX + cName + cRange + cShots + cPen + 2, y + 3.8);

      y += ROW_H;
    });

    y += 2;
  }

  // ── COVER / HEADER ────────────────────────────────────────
  drawPageBg();

  doc.setFillColor(...COL_PANEL);
  doc.rect(0, 0, PAGE_W, 28, 'F');
  doc.setDrawColor(...COL_GOLD);
  doc.setLineWidth(0.8);
  doc.line(0, 28, PAGE_W, 28);

  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COL_WHITE);
  doc.text(armyName.toUpperCase(), MARGIN, 12);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COL_GOLD);
  doc.text(factionName.toUpperCase(), MARGIN, 19);

  doc.setFontSize(9);
  doc.setTextColor(...COL_MUTED);
  doc.text(`${total} / ${state.ptsLimit} pts`, PAGE_W - MARGIN, 12, { align: 'right' });
  doc.setFontSize(7);
  doc.text(new Date().toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' }), PAGE_W - MARGIN, 19, { align: 'right' });

  y = 36;

  // ── ROSTER ────────────────────────────────────────────────
  doc.setFillColor(...COL_GOLD);
  doc.rect(MARGIN, y, 3, 5, 'F');
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COL_GOLD);
  doc.text('ARMY ROSTER', MARGIN + 5, y + 3.8);
  y += 9;

  state.roster.forEach((entry) => {
    const unit = findUnit(entry.unitId);
    if (!unit) return;

    const entryTotal = calcEntryTotal(entry);
    const models     = (unit.maxModels > (unit.minModels || 1))
      ? ` [${entry.modelCount || unit.minModels} models]` : '';

    // Estimate height needed for this unit block
    const weaponRows    = (unit.weapons      || []).filter(w => WEAPON_PROFILES[w]).length;
    const extraWpnRows  = (unit.extraWeapons || []).filter(w => WEAPON_PROFILES[w]).length;
    const upgradeLines  = (unit.options || []).filter(o => entry.selectedOptions && entry.selectedOptions[o.label]).length;
    const specialLines  = unit.special && unit.special.length ? 1 : 0;
    const estimatedH    = 18
      + (weaponRows    ? 5 + 5 + weaponRows    * 5.5 + 2 : 0)
      + (extraWpnRows  ? 5 + 5 + extraWpnRows  * 5.5 + 2 : 0)
      + (upgradeLines  * 4.5)
      + (unit.riftUnit ? 10 : 0)
      + (specialLines  * 4);

    checkY(Math.min(estimatedH, 60)); // don't reserve more than 60mm at once

    // Unit card background
    doc.setFillColor(...COL_PANEL);
    doc.setDrawColor(...COL_BORDER);
    doc.setLineWidth(0.3);
    doc.roundedRect(MARGIN, y, COL_W, 14, 1, 1, 'FD');

    // Accent stripe
    doc.setFillColor(...COL_GOLD);
    doc.roundedRect(MARGIN, y, 2, 14, 1, 1, 'F');
    doc.rect(MARGIN + 1, y, 1.5, 14, 'F');

    // Unit name
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COL_WHITE);
    doc.text(`${entry.exp.toUpperCase()}  ${entry.name.toUpperCase()}${models}`, MARGIN + 6, y + 5.5);

    // Unit type & role
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COL_MUTED);
    doc.text([unit.unitType, unit.role].filter(Boolean).join('  ·  '), MARGIN + 6, y + 10);

    // Points
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COL_GOLD);
    doc.text(`${entryTotal} pts`, PAGE_W - MARGIN - 2, y + 7, { align: 'right' });

    y += 16;

    // ── standard weapons ────────────────────────────────────
    if (unit.weapons && unit.weapons.length) {
      drawWeaponTable(unit.weapons, false);
    }

    // ── optional / extra weapons ────────────────────────────
    if (unit.extraWeapons && unit.extraWeapons.length) {
      drawWeaponTable(unit.extraWeapons, true);
    }

    // ── selected upgrades ───────────────────────────────────
    const selectedUpgrades = (unit.options || []).filter(o =>
      entry.selectedOptions && entry.selectedOptions[o.label]
    );
    if (selectedUpgrades.length || entry.notes) {
      doc.setFontSize(7);
      doc.setFont('helvetica', 'normal');
      selectedUpgrades.forEach(o => {
        checkY(5);
        doc.setTextColor(...COL_MUTED);
        doc.text('›', MARGIN + 6, y);
        doc.text(o.label, MARGIN + 10, y);
        y += 4.5;
      });
      if (entry.notes) {
        checkY(5);
        doc.setTextColor(100, 130, 180);
        doc.text(`Note: ${entry.notes}`, MARGIN + 6, y);
        y += 4.5;
      }
      y += 1;
    }

    // ── Rift unit note ───────────────────────────────────────
    if (unit.riftUnit) {
      checkY(8);
      doc.setFontSize(6.5);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(80, 140, 200);
      doc.splitTextToSize(`⚡ ${unit.riftUnit}`, COL_W - 8).forEach(line => {
        checkY(5);
        doc.text(line, MARGIN + 4, y);
        y += 4;
      });
      y += 1;
    }

    // ── special rules ───────────────────────────────────────
    if (unit.special && unit.special.length) {
      checkY(5);
      doc.setFontSize(6.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...COL_MUTED);
      doc.splitTextToSize(unit.special.join('  ·  '), COL_W - 8).forEach(line => {
        checkY(4.5);
        doc.text(line, MARGIN + 4, y);
        y += 4;
      });
    }

    y += 4;
  });

  // ── POINTS SUMMARY ────────────────────────────────────────
  checkY(20);
  y += 2;

  doc.setFillColor(...COL_PANEL);
  doc.setDrawColor(...COL_GOLD);
  doc.setLineWidth(0.5);
  doc.roundedRect(MARGIN, y, COL_W, 12, 1, 1, 'FD');

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COL_MUTED);
  doc.text('TOTAL', MARGIN + 5, y + 7.5);

  doc.setFontSize(13);
  doc.setTextColor(...COL_GOLD);
  doc.text(`${total} / ${state.ptsLimit} pts`, PAGE_W - MARGIN - 4, y + 8, { align: 'right' });

  y += 16;

  drawFooter();

  // ── OPEN IN NEW TAB ──────────────────────────────────────
  const blobUrl = doc.output('bloburl');
  window.open(blobUrl, '_blank');
}
