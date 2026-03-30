// ============================================================
// KONFLIKT '47 — WEAPON PROFILES
// Source: Official Quick Reference Sheet, October 2025
// Columns: range, shots, pen, special
// ============================================================
const WEAPON_PROFILES = {

  // ── SMALL ARMS ───────────────────────────────────────────
  'Pistol':              { range:'6"',   shots:'1',  pen:'-',  special:'Pistol' },
  'Rifle':               { range:'24"',  shots:'1',  pen:'-',  special:'' },
  'SMG':                 { range:'12"',  shots:'2',  pen:'-',  special:'Assault' },
  'Assault Rifle':       { range:'18"',  shots:'2',  pen:'-',  special:'Assault' },
  'Automatic Rifle':     { range:'30"',  shots:'2',  pen:'-',  special:'' },
  'LMG':                 { range:'36"',  shots:'4',  pen:'-',  special:'Team weapon' },
  'Anti-tank Rifle':     { range:'48"',  shots:'1',  pen:'+2', special:'Team weapon' },

  // ── MACHINE GUNS ─────────────────────────────────────────
  'MMG':                 { range:'36"',  shots:'6',  pen:'-',  special:'Fixed, team weapon' },
  'HMG':                 { range:'48"',  shots:'6',  pen:'+1', special:'Fixed, team weapon' },

  // ── AXIS ADVANCED SMALL ARMS ─────────────────────────────
  'Schwarzlicht P 08SzL Luger':       { range:'6"',  shots:'1', pen:'+1', special:'Assault' },
  'Schwarzlicht MP 40SzL Schmeisser': { range:'12"', shots:'2', pen:'+1', special:'Assault' },
  'StG 44Z':                          { range:'18"', shots:'3', pen:'-',  special:'Assault' },

  // ── SOVIET ADVANCED SMALL ARMS ───────────────────────────
  // DPM Pulemet-Poykbi has two fire modes
  'DPM Pulemet-Poykbi':  { range:'18"',  shots:'4',  pen:'+1', special:'Mode a; Mode b: 6" / 2 shots / – / Assault' },

  // ── GRENADE & ROCKET LAUNCHERS ───────────────────────────
  'Rifle Grenades':      { range:'6"–18"', shots:'1', pen:'HE', special:'HE (1"), Indirect Fire' },
  'AT Rifle Grenades':   { range:'12"',    shots:'1', pen:'+3', special:'Shaped Charge' },
  'Grenade Launcher':    { range:'12"',    shots:'1', pen:'+3', special:'Fires Rifle & AT Rifle Grenades' },
  'Panzerfaust':         { range:'12"',    shots:'1', pen:'+6', special:'Anti-tank Launcher, Shaped Charge, one use' },
  'RPG-1':               { range:'12"',    shots:'1', pen:'+6', special:'Anti-tank Launcher, Shaped Charge' },
  'ATRD':                { range:'12"',    shots:'1', pen:'+6', special:'Anti-tank Launcher, Shaped Charge' },
  'Yoroi-kumi Launcher': { range:'12"',    shots:'1', pen:'+6', special:'Anti-tank Launcher, Shaped Charge' },

  // ── ANTI-TANK TEAM WEAPONS ────────────────────────────────
  'PIAT':                { range:'12"',  shots:'1',  pen:'+5', special:'Team, Shaped Charge' },
  'Bazooka':             { range:'24"',  shots:'1',  pen:'+5', special:'Team, Shaped Charge' },
  'Super Bazooka':       { range:'24"',  shots:'1',  pen:'+6', special:'Team, Shaped Charge' },
  'Panzerschreck':       { range:'24"',  shots:'1',  pen:'+6', special:'Team, Shaped Charge' },

  // ── FLAMETHROWERS ─────────────────────────────────────────
  'Infantry Flamethrower': { range:'6"',  shots:'1',  pen:'+2', special:'Team, Flamethrower' },
  'Vehicle Flamethrower':  { range:'12"', shots:'1',  pen:'+2', special:'Flamethrower' },

  // ── HE WEAPONS — MORTARS ─────────────────────────────────
  'Light Mortar':        { range:'12"–36"',  shots:'1', pen:'HE', special:'Team, Indirect Fire, HE (1")' },
  'Medium Mortar':       { range:'12"–60"',  shots:'1', pen:'HE', special:'Team, Fixed, Indirect Fire, HE (2")' },
  'Heavy Mortar':        { range:'12"–72"',  shots:'1', pen:'HE', special:'Team, Fixed, Indirect Fire, HE (3")' },

  // ── HE WEAPONS — HOWITZERS ───────────────────────────────
  // Direct max range shown; indirect range in brackets
  'Light Howitzer':      { range:'48" (30"–60" indirect)',  shots:'1', pen:'HE', special:'Team, Fixed, Howitzer, HE (2")' },
  'Medium Howitzer':     { range:'60" (36"–72" indirect)',  shots:'1', pen:'HE', special:'Team, Fixed, Howitzer, HE (3")' },
  'Heavy Howitzer':      { range:'72" (42"–84" indirect)',  shots:'1', pen:'HE', special:'Team, Fixed, Howitzer, HE (4")' },

  // ── ANTI-TANK GUNS ────────────────────────────────────────
  'Light Anti-tank Gun':        { range:'48"', shots:'1', pen:'+4', special:'Team, Fixed, Anti-Tank Gun, HE (1")' },
  'Medium Anti-tank Gun':       { range:'60"', shots:'1', pen:'+5', special:'Team, Fixed, Anti-Tank Gun, HE (1")' },
  'Heavy Anti-tank Gun':        { range:'72"', shots:'1', pen:'+6', special:'Team, Fixed, Anti-Tank Gun, HE (2")' },
  'Super-heavy Anti-tank Gun':  { range:'84"', shots:'1', pen:'+7', special:'Team, Fixed, Anti-Tank Gun, HE (3")' },

  // ── AUTOCANNONS & ROCKET SYSTEMS ─────────────────────────
  'Light Automatic Cannon':   { range:'48"',      shots:'2',  pen:'+2', special:'Team, Fixed, HE (1")' },
  'Heavy Automatic Cannon':   { range:'72"',      shots:'2',  pen:'+3', special:'Team, Fixed, HE (1")' },
  'Light Rocket System':      { range:'18"',      shots:'1',  pen:'HE', special:'Team, Fixed, HE (2")' },
  'Medium Rocket System':     { range:'24"',      shots:'1',  pen:'HE', special:'Team, Fixed, HE (3")' },
  'Heavy Rocket System':      { range:'36"',      shots:'1',  pen:'HE', special:'Team, Fixed, HE (4")' },

  // ── RIFT WEAPONS — TESLA ARC (British / US) ───────────────
  // Pen shown is base; Tesla Arc generates additional hits
  'Thompson M1X1/2':        { range:'12"',  shots:'2',  pen:'+1', special:'Advanced Small Arms, Assault; E-Slug mode: 6" / 1 shot / +2' },
  'Heavy Tesla Rifle':       { range:'18"',  shots:'1',  pen:'+1', special:'Team, Rift weapon, Tesla Arc (1); Pulse mode: 6" / 3 shots / +1 / Assault' },
  'M21 Light Tesla Cannon':  { range:'30"',  shots:'1',  pen:'+1', special:'Team, Fixed, Rift weapon, Tesla Arc (3)' },
  'M17 Tesla Cannon':        { range:'36"',  shots:'1',  pen:'+2', special:'Team, Fixed, Rift weapon, Tesla Arc (3)' },

  // ── RIFT WEAPONS — GRAVITY PULSE (Axis) ──────────────────
  'Maschinen Schwere':       { range:'36"',  shots:'2',  pen:'+2', special:'Team, Fixed, Rift weapon, Gravity Pulse' },
  'Schwerefeld Projektor':   { range:'48"',  shots:'2',  pen:'+4', special:'Team, Fixed, Rift weapon, Gravity Pulse' },
  'Schienenkanone':          { range:'96"',  shots:'1',  pen:'+8', special:'Team, Fixed, Rift weapon, Hyper Velocity, Anti-Tank Gun' },
  'Light Schienenkanone':    { range:'96"',  shots:'1',  pen:'+7', special:'Team, Fixed, Rift weapon, Hyper Velocity, Anti-Tank Gun (cannot Overload)' },

  // ── RIFT WEAPONS — CRUSH (Japanese) ─────────────────────
  'Type 10 Shiboru Rifle':        { range:'24"',  shots:'1',  pen:'+1', special:'Rift weapon, Crush' },
  'Type 61 Light Shiboru Cannon': { range:'36"',  shots:'2',  pen:'+3', special:'Team, Fixed, Rift weapon, Crush' },
  'Type 99 Shiboru Cannon':       { range:'48"',  shots:'2',  pen:'+4', special:'Team, Fixed, Rift weapon, Crush' },

  // ── RIFT WEAPONS — SHOCKWAVE (Soviet) ────────────────────
  'Zvukovoy Avtomat':        { range:'6"',   shots:'3',  pen:'+1', special:'Assault, Rift weapon, Shockwave' },
  'Zvukovoy Proeyektor':     { range:'24"',  shots:'4',  pen:'+2', special:'Team, Fixed, Rift weapon, Shockwave' },

  // ── CLOSE QUARTERS WEAPONS ───────────────────────────────
  'Teeth and Claws (+1 Pen)':     { range:'CQ',  shots:'–', pen:'+1', special:'Close Quarters only' },
  'Teeth and Claws (+2 Pen)':     { range:'CQ',  shots:'–', pen:'+2', special:'Close Quarters only' },
  'Combat Blade':                 { range:'CQ',  shots:'–', pen:'+1', special:'Close Quarters only' },
  'Talons (+1 Pen)':              { range:'CQ',  shots:'–', pen:'+1', special:'Close Quarters only' },
  'Tesla Gauntlet':               { range:'CQ',  shots:'–', pen:'+D6',special:'Close Quarters only, Tank Hunters (Samuels)' },
  'Paragon Close Combat Weapon':  { range:'CQ',  shots:'–', pen:'+1', special:'Deadly (2), Close Quarters only' },

  // ── VEHICLE / WALKER WEAPONS ─────────────────────────────
  'Light Anti-aircraft Gun':  { range:'24"', shots:'4', pen:'+2', special:'Flak' },
  'Heavy Anti-aircraft Gun':  { range:'36"', shots:'4', pen:'+3', special:'Flak' },
};
