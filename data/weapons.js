// ============================================================
// KONFLIKT '47 — WEAPON PROFILES
// Columns: range, shots, pen, special
// Range: in inches or 'CQ' for close quarters only
// Pen: numeric or '-'
// ============================================================
const WEAPON_PROFILES = {

  // ── PISTOLS & SMALL ARMS ──────────────────────────────────
  'Pistol':              { range:'6"',   shots:'1',  pen:'-',  special:'Pistol' },
  'Rifle':               { range:'24"',  shots:'1',  pen:'-',  special:'' },
  'SMG':                 { range:'12"',  shots:'2',  pen:'-',  special:'Assault' },
  'Assault Rifle':       { range:'18"',  shots:'2',  pen:'-',  special:'Assault' },
  'Automatic Rifle':     { range:'18"',  shots:'3',  pen:'-',  special:'Assault' },
  'LMG':                 { range:'24"',  shots:'4',  pen:'-',  special:'Team weapon' },
  'Anti-tank Rifle':     { range:'36"',  shots:'1',  pen:'+1', special:'AT rifle, no HE' },

  // ── MACHINE GUNS ─────────────────────────────────────────
  'MMG':                 { range:'36"',  shots:'5',  pen:'-',  special:'Fixed, team weapon' },
  'HMG':                 { range:'36"',  shots:'5',  pen:'+1', special:'Fixed, team weapon, Flak' },
  'DPM Pulemet-Poykbi':  { range:'24"',  shots:'4',  pen:'-',  special:'Team weapon' },

  // ── AXIS SPECIALIST WEAPONS ───────────────────────────────
  'Schwarzlicht P 08SzL Luger':       { range:'6"',  shots:'1', pen:'-',  special:'Pistol, Schwarzlicht' },
  'Schwarzlicht MP 40SzL Schmeisser': { range:'12"', shots:'2', pen:'-',  special:'Assault, Schwarzlicht' },
  'StG 44Z':             { range:'18"',  shots:'3',  pen:'-',  special:'Assault, Schwarzlicht' },

  // ── ROCKET / GRENADE LAUNCHERS ────────────────────────────
  'Rifle Grenades':      { range:'12"',  shots:'1',  pen:'+1', special:'HE (1"), Indirect' },
  'AT Rifle Grenades':   { range:'12"',  shots:'1',  pen:'+3', special:'Shaped charge, no HE' },
  'Grenade Launcher':    { range:'12"',  shots:'1',  pen:'+3', special:'Fires Rifle & AT Rifle Grenades' },
  'Panzerfaust':         { range:'12"',  shots:'1',  pen:'+5', special:'Shaped charge, one use, HE (1")' },
  'RPG-1':               { range:'12"',  shots:'1',  pen:'+3', special:'Shaped charge' },
  'ATRD':                { range:'12"',  shots:'1',  pen:'+3', special:'Shaped charge (US)' },
  'Yoroi-kumi Launcher': { range:'12"',  shots:'1',  pen:'+3', special:'Counts as RPG-1' },

  // ── ANTI-TANK TEAM WEAPONS ────────────────────────────────
  'PIAT':                { range:'12"',  shots:'1',  pen:'+4', special:'Shaped charge, HE (1"), indirect capable' },
  'Bazooka':             { range:'12"',  shots:'1',  pen:'+4', special:'Shaped charge, HE (1")' },
  'Super Bazooka':       { range:'24"',  shots:'1',  pen:'+5', special:'Shaped charge, HE (1")' },
  'Panzerschreck':       { range:'24"',  shots:'1',  pen:'+5', special:'Shaped charge, HE (1")' },

  // ── FLAMETHROWERS ─────────────────────────────────────────
  'Infantry Flamethrower': { range:'6"', shots:'D6', pen:'+3', special:'Flamethrower, no cover saves' },
  'Vehicle Flamethrower':  { range:'6"', shots:'D6', pen:'+3', special:'Flamethrower, no cover saves, vehicle-mounted' },

  // ── MORTARS ───────────────────────────────────────────────
  'Light Mortar':        { range:'6"–24"',  shots:'1', pen:'+2', special:'HE (1"), Indirect, minimum range 6"' },
  'Medium Mortar':       { range:'12"–60"', shots:'1', pen:'+3', special:'HE (2"), Indirect, minimum range 12"' },
  'Heavy Mortar':        { range:'12"–72"', shots:'1', pen:'+4', special:'HE (3"), Indirect, minimum range 12"' },
  'Light Howitzer':      { range:'12"–60"', shots:'1', pen:'+4', special:'HE (2"), Indirect, Gun' },
  'Medium Howitzer':     { range:'12"–80"', shots:'1', pen:'+5', special:'HE (3"), Indirect, Gun' },
  'Heavy Howitzer':      { range:'12"–100"',shots:'1', pen:'+5', special:'HE (4"), Indirect, Gun' },

  // ── ANTI-TANK GUNS ────────────────────────────────────────
  'Light Anti-tank Gun':       { range:'48"', shots:'1', pen:'+4', special:'HE (1"), Gun' },
  'Medium Anti-tank Gun':      { range:'60"', shots:'1', pen:'+5', special:'HE (2"), Gun, Improved HE variants noted per unit' },
  'Heavy Anti-tank Gun':       { range:'72"', shots:'1', pen:'+6', special:'HE (2"), Gun' },
  'Super-heavy Anti-tank Gun': { range:'72"', shots:'1', pen:'+7', special:'Gun' },
  'Light Automatic Cannon':    { range:'36"', shots:'3', pen:'+2', special:'Flak, HE (1")' },
  'Heavy Automatic Cannon':    { range:'36"', shots:'3', pen:'+3', special:'HE (1")' },
  'Light Rocket System':       { range:'12"–48"', shots:'D6', pen:'+4', special:'HE (3"), Indirect, Salvo' },
  'Medium Rocket System':      { range:'12"–60"', shots:'D6', pen:'+5', special:'HE (4"), Indirect, Salvo' },

  // ── RIFT WEAPONS — TESLA ARC (British / US) ───────────────
  'Heavy Tesla Rifle':        { range:'18"', shots:'1', pen:'+4', special:'Tesla Arc, Rift weapon' },
  'M17 Tesla Cannon':         { range:'60"', shots:'1', pen:'+6', special:'Tesla Arc, HE (2"), Rift weapon' },
  'M21 Light Tesla Cannon':   { range:'48"', shots:'1', pen:'+5', special:'Tesla Arc, HE (1"), Rift weapon' },
  'Thompson M1X1/2':          { range:'12"', shots:'3', pen:'-',  special:'Assault, Normal/Auto fire modes' },

  // ── RIFT WEAPONS — GRAVITY PULSE (Axis) ──────────────────
  'Schwerefeld Projektor':    { range:'36"', shots:'1', pen:'+6', special:'Gravity Pulse, HE (3"), Rift weapon' },
  'Schienenkanone':           { range:'72"', shots:'1', pen:'+8', special:'Hyper Velocity, Gun, Rift weapon' },
  'Light Schienenkanone':     { range:'72"', shots:'1', pen:'+7', special:'Hyper Velocity, Gun, Rift weapon (cannot Overload)' },
  'Maschinen Schwere':        { range:'36"', shots:'1', pen:'+5', special:'Gravity Pulse, Rift weapon' },

  // ── RIFT WEAPONS — CRUSH (Japanese) ─────────────────────
  'Type 10 Shiboru Rifle':         { range:'30"', shots:'1', pen:'+3', special:'Crush, Rift weapon' },
  'Type 61 Light Shiboru Cannon':  { range:'48"', shots:'1', pen:'+5', special:'Crush, HE (1"), Rift weapon' },
  'Type 99 Shiboru Cannon':        { range:'60"', shots:'1', pen:'+6', special:'Crush, HE (2"), Rift weapon' },

  // ── RIFT WEAPONS — SHOCKWAVE (Soviet) ────────────────────
  'Zvukovoy Proeyektor':      { range:'36"', shots:'1', pen:'+6', special:'Shockwave, HE (3"), Rift weapon' },
  'Zvukovoy Avtomat':         { range:'18"', shots:'2', pen:'+2', special:'Shockwave, Assault, Rift weapon' },

  // ── CLOSE QUARTERS WEAPONS ───────────────────────────────
  'Teeth and Claws (+2 Pen)': { range:'CQ',  shots:'–', pen:'+2', special:'Close Quarters only' },
  'Teeth and Claws (+3 Pen)': { range:'CQ',  shots:'–', pen:'+3', special:'Close Quarters only (Ursine Fury)' },
  'Combat Blade':             { range:'CQ',  shots:'–', pen:'+1', special:'Close Quarters only' },
  'Talons (+1 Pen)':          { range:'CQ',  shots:'–', pen:'+1', special:'Close Quarters only' },
  'Tesla Gauntlet':           { range:'CQ',  shots:'–', pen:'+D6',special:'Close Quarters only, Tank Hunters (Samuels)' },
  'Paragon Close Combat Weapon': { range:'CQ', shots:'–', pen:'+1', special:'Deadly (2), Close Quarters only' },

  // ── VEHICLE / WALKER WEAPONS ─────────────────────────────
  'Light Anti-aircraft Gun':  { range:'24"', shots:'4', pen:'+2', special:'Flak' },
  'Heavy Anti-aircraft Gun':  { range:'36"', shots:'4', pen:'+3', special:'Flak' },
};
