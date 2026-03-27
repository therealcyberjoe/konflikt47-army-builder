// ============================================================
// SOVIET BLOC — FACTION DATA
// Source: Konflikt '47 Army List, March 2026
// ============================================================
const FACTION_SOVIET = [

  // ══════════════════════════════════════════════════════════
  // HEROES
  // ══════════════════════════════════════════════════════════

  {
    id: 'sov_drugov', name: 'Commissar Gregor Drugov',
    role: 'Officer', unitType: 'Hero (Company Commander)',
    pts: { inexp: null, reg: null, vet: 160 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'7+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 Heroic Officer', minModels: 1, maxModels: 3,
    weapons: ['Assault Rifle', 'Teeth and Claws (+2 Pen)'],
    extraWeapons: [],
    special: ['Deadly (3) — Drugov; Deadly (4) — Ursus Bodyguards', 'Fearless', 'Hard to Kill', 'Horror',
              'Large', 'Tough Fighters (Drugov only)', 'Wide Formation',
              'Not One Step Back! — friendly Infantry within 6" that fails Order Test: remove 1 model and re-roll',
              'Hero Stats: Guts 3, Rift Mastery 1, Luck 1'],
    options: [
      { label: 'Add up to 2 Ursus Bodyguards (+43 each)', pts: 43, max: 2 },
    ],
    riftUnit: '2 Rift Dice — Active: Ursine Fury (on Run Order, gain Fast & Teeth and Claws +3 Pen; exhaust die). Surging: Damage Value 8+. Exhausted: Lumbering (4"/8").',
  },

  // ══════════════════════════════════════════════════════════
  // HQ TEAMS — OFFICERS
  // ══════════════════════════════════════════════════════════

  {
    id: 'sov_company_commander', name: 'Company Commander',
    role: 'Officer', unitType: 'Company Commander',
    pts: { inexp: 42, reg: 60, vet: 78 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG', 'Assault Rifle'],
    special: [],
    options: [
      { label: 'Add up to 2 soldiers with Pistols (Inexp +6 / Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Rifle (+1, up to 3)', pts: 1, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5, up to 3)', pts: 5, max: 3 },
      { label: 'Replace Pistol(s) with Assault Rifle (+7, up to 3)', pts: 7, max: 3 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Luck (+15)', pts: 15, max: 1 },
      { label: 'RPG-1s (+5/model)', pts: 5, max: 1 },
    ],
  },

  {
    id: 'sov_company_cmd_mk2', name: 'Company Commander (Guards Mk II Armour)',
    role: 'Officer', unitType: 'Company Commander',
    pts: { inexp: null, reg: 69, vet: 87 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'5+', vet:'6+' }, morale: { inexp:null, reg:9, vet:10 },
    weapons: ['SMG'],
    extraWeapons: ['Anti-tank Rifle'],
    special: ['Heavy'],
    options: [
      { label: 'Add up to 2 soldiers in Grade 1 Heavy Armour with SMGs (Reg +19 / Vet +22 each)', pts: 19, max: 2 },
      { label: 'Replace SMG with Anti-tank Rifle (+11, max 1)', pts: 11, max: 1 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Luck (+15)', pts: 15, max: 1 },
      { label: 'RPG-1s (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Stubborn (+1/model)', pts: 1, max: 1 },
    ],
  },

  {
    id: 'sov_platoon_commander', name: 'Platoon Commander',
    role: 'Officer', unitType: 'Platoon Commander',
    pts: { inexp: 21, reg: 30, vet: 39 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG', 'Assault Rifle'],
    special: [],
    options: [
      { label: 'Add up to 2 soldiers with Pistols (Inexp +6 / Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Rifle (+1, up to 3)', pts: 1, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5, up to 3)', pts: 5, max: 3 },
      { label: 'Replace Pistol(s) with Assault Rifle (+7, up to 3)', pts: 7, max: 3 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Luck (+15)', pts: 15, max: 1 },
      { label: 'RPG-1s (+5/model)', pts: 5, max: 1 },
    ],
  },

  {
    id: 'sov_platoon_cmd_mk2', name: 'Platoon Commander (Guards Mk II Armour)',
    role: 'Officer', unitType: 'Platoon Commander',
    pts: { inexp: null, reg: 39, vet: 48 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'5+', vet:'6+' }, morale: { inexp:null, reg:9, vet:10 },
    weapons: ['SMG'],
    extraWeapons: ['Anti-tank Rifle'],
    special: ['Heavy'],
    options: [
      { label: 'Add up to 2 soldiers in Grade 1 Heavy Armour with SMGs (Reg +19 / Vet +22 each)', pts: 19, max: 2 },
      { label: 'Replace SMG with Anti-tank Rifle (+11, max 1)', pts: 11, max: 1 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Luck (+15)', pts: 15, max: 1 },
      { label: 'RPG-1s (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Stubborn (+1/model)', pts: 1, max: 1 },
    ],
  },

  {
    id: 'sov_medic', name: 'Medic',
    role: 'Officer', unitType: 'Medic',
    pts: { inexp: null, reg: 23, vet: 30 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG', 'Assault Rifle'],
    special: ['Medic'],
    options: [
      { label: 'Add up to 2 additional soldiers with Pistols (Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace additional soldiers\' Pistol with Rifle (+1)', pts: 1, max: 2 },
      { label: 'Replace additional soldiers\' Pistol with SMG (+5)', pts: 5, max: 2 },
      { label: 'Replace additional soldiers\' Pistol with Assault Rifle (+7)', pts: 7, max: 2 },
    ],
  },

  {
    id: 'sov_arty_observer', name: 'Artillery Forward Observer',
    role: 'Officer', unitType: 'Forward Observer',
    pts: { inexp: null, reg: 75, vet: 90 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG', 'Assault Rifle'],
    special: ['Infiltrator'],
    options: [
      { label: 'Add up to 2 additional soldiers (Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Rifle (+1, up to 3)', pts: 1, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5, up to 3)', pts: 5, max: 3 },
      { label: 'Replace Pistol(s) with Assault Rifle (+7, up to 3)', pts: 7, max: 3 },
    ],
  },

  {
    id: 'sov_air_observer', name: 'Air Force Forward Observer',
    role: 'Officer', unitType: 'Forward Observer',
    pts: { inexp: null, reg: 75, vet: 90 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG', 'Assault Rifle'],
    special: ['Infiltrator'],
    options: [
      { label: 'Add up to 2 additional soldiers (Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Rifle (+1, up to 3)', pts: 1, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5, up to 3)', pts: 5, max: 3 },
      { label: 'Replace Pistol(s) with Assault Rifle (+7, up to 3)', pts: 7, max: 3 },
    ],
  },

  {
    id: 'sov_commissar', name: 'Commissar',
    role: 'Officer', unitType: 'Commissar',
    pts: { inexp: 15, reg: 21, vet: 27 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG', 'Assault Rifle'],
    special: ['Commissar — not part of any Platoon Selector (like a Company Commander)',
              'Not One Step Back! — friendly Infantry within 6" that fails Order Test: remove 1 model and re-roll'],
    options: [
      { label: 'Add up to 2 soldiers with Pistols (Inexp +6 / Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Rifle (+1, up to 3)', pts: 1, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5, up to 3)', pts: 5, max: 3 },
      { label: 'Replace Pistol(s) with Assault Rifle (+7, up to 3)', pts: 7, max: 3 },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // INFANTRY
  // ══════════════════════════════════════════════════════════

  {
    id: 'sov_infantry_squad', name: 'Soviet Infantry Squad',
    role: 'Infantry', unitType: 'Basic Infantry',
    pts: { inexp: 35, reg: 50, vet: 65 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 NCO + 4 Soldiers', minModels: 5, maxModels: 12,
    ppm: { inexp: 7, reg: 10, vet: 13 },
    weapons: ['Rifle'],
    extraWeapons: ['SMG', 'Assault Rifle', 'LMG', 'Infantry Flamethrower'],
    special: [],
    options: [
      { label: 'Replace Rifle(s) with SMG (+4, up to 12)', pts: 4, max: 12 },
      { label: 'Replace Rifle(s) with Assault Rifle (+6, up to 12)', pts: 6, max: 12 },
      { label: 'Replace Rifle with LMG (+15, up to 2)', pts: 15, max: 2 },
      { label: 'Replace Rifle with Infantry Flamethrower (+30, requires Engineers, max 1)', pts: 30, max: 1 },
      { label: 'RPG-1s (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Stubborn — Veteran only (+1/model)', pts: 1, max: 1 },
      { label: 'Tough Fighters — Veteran only (+1/model)', pts: 1, max: 1 },
      { label: 'Engineers (+1/model)', pts: 1, max: 1 },
      { label: 'Shirkers — Inexperienced only (–2/model)', pts: -2, max: 1 },
      { label: 'Green — Inexperienced only (free)', pts: 0, max: 1 },
    ],
  },

  {
    id: 'sov_guards_mk1', name: 'Guards Mk I Armoured Infantry',
    role: 'Infantry', unitType: 'Advanced Infantry',
    pts: { inexp: null, reg: 135, vet: 150 }, defaultExp: 'Regular',
    move: '4" Lumbering', damage: { inexp:null, reg:'5+', vet:'6+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 NCO + 4 Soldiers in Grade 1 Heavy Powered Armour', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: 27, vet: 30 },
    weapons: ['DPM Pulemet-Poykbi'],
    extraWeapons: [],
    special: ['Heavy', 'Lumbering (4" Advance / 8" Run)'],
    options: [
      { label: 'Equip a soldier with an additional DPM Pulemet-Poykbi (+15 each, up to 4)', pts: 15, max: 4 },
      { label: 'RPG-1s (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Stubborn (+1/model)', pts: 1, max: 1 },
      { label: 'Engineers (+1/model)', pts: 1, max: 1 },
    ],
  },

  {
    id: 'sov_guards_mk2', name: 'Guards Mk II Armoured Infantry',
    role: 'Infantry', unitType: 'Advanced Infantry',
    pts: { inexp: null, reg: 95, vet: 110 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'5+', vet:'6+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 NCO + 4 Soldiers in Grade 1 Heavy Powered Armour', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: 19, vet: 22 },
    weapons: ['SMG'],
    extraWeapons: ['Anti-tank Rifle'],
    special: ['Heavy'],
    options: [
      { label: 'Replace SMG with Anti-tank Rifle (+11, up to 2)', pts: 11, max: 2 },
      { label: 'RPG-1s (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Stubborn (+1/model)', pts: 1, max: 1 },
      { label: 'Engineers (+1/model)', pts: 1, max: 1 },
    ],
  },

  {
    id: 'sov_moroz_gul', name: 'Moroz Gul',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 140 }, defaultExp: 'Veteran',
    move: 'Fast: 8" / Otherwise: 6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 NCO + 4 Moroz Gul', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: null, vet: 28 },
    weapons: ['SMG'],
    extraWeapons: ['Assault Rifle'],
    special: ['Fast', 'Fieldcraft', 'Frozen Meat — immune to damage and Pinning from Flamethrowers', 'Horror', 'Infiltrator'],
    options: [
      { label: 'Replace SMG with Assault Rifle (+2, up to 10)', pts: 2, max: 10 },
      { label: 'RPG-1s (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
    ],
    riftUnit: '1 Rift Die — Active: Killing Mist (unit gains mobile Light Cover; if assaulting negate Defensive Position and strike first in Open Ground). Surging: +1 Pen at CQ. Exhausted: no Run orders.',
  },

  {
    id: 'sov_ursus', name: 'Ursus Infantry',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 129 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'7+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '3 Ursus Soldiers', minModels: 3, maxModels: 6,
    ppm: { inexp: null, reg: null, vet: 43 },
    weapons: ['Teeth and Claws (+2 Pen)'],
    extraWeapons: [],
    special: ['Deadly (4)', 'Fearless', 'Hard to Kill', 'Horror', 'Large', 'Wide Formation'],
    options: [
      { label: 'Equip unit with Mauls — re-rolls to hit vs Vehicles at CQ (+10)', pts: 10, max: 1 },
    ],
    riftUnit: '1 Rift Die — Active: Ursine Fury (on Run Order, gain Fast & Teeth and Claws +3 Pen; exhaust die). Surging: Damage Value 8+. Exhausted: Lumbering (4"/8").',
  },

  {
    id: 'sov_daughters', name: 'Daughters of the Motherland',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 145 }, defaultExp: 'Veteran',
    move: 'Fast: 8" / Otherwise: 6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 NCO + 4 Daughters', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: null, vet: 28 },
    weapons: ['Assault Rifle'],
    extraWeapons: ['LMG', 'Zvukovoy Avtomat'],
    special: ['Fanatics', 'Fast'],
    options: [
      { label: 'Replace Assault Rifle with LMG (+9, up to 2)', pts: 9, max: 2 },
      { label: 'Replace Assault Rifle with Zvukovoy Avtomat (+29, up to 2 — adds second Rift Die)', pts: 29, max: 2 },
      { label: 'RPG-1s (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
    ],
    riftUnit: '1 Rift Die (2 if any Zvukovoy Avtomats taken) — Active: Rallying Cry (exhaust die to remove D3 Pins from self and friendly units within 6"). Surging: Hard to Kill. Exhausted: lose Fast.',
  },

  // ══════════════════════════════════════════════════════════
  // INFANTRY TEAMS
  // ══════════════════════════════════════════════════════════

  {
    id: 'sov_mmg_team', name: 'MMG Team',
    role: 'Infantry', unitType: 'Machine Gun Team',
    pts: { inexp: 35, reg: 50, vet: 65 }, defaultExp: 'Regular',
    move: 'Rotate / Run 12"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '3 Soldiers', minModels: 3, maxModels: 3,
    weapons: ['MMG'],
    extraWeapons: [],
    special: [],
    options: [
      { label: 'Add Gun Shield (+5)', pts: 5, max: 1 },
    ],
  },

  {
    id: 'sov_hmg_team', name: 'HMG Team',
    role: 'Infantry', unitType: 'Machine Gun Team',
    pts: { inexp: 49, reg: 70, vet: 91 }, defaultExp: 'Regular',
    move: 'Rotate / Run 12"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '4 Soldiers', minModels: 4, maxModels: 4,
    weapons: ['HMG'],
    extraWeapons: [],
    special: [],
    options: [
      { label: 'Add Gun Shield (+5)', pts: 5, max: 1 },
      { label: 'Gain Flak special rule (+5)', pts: 5, max: 1 },
    ],
  },

  {
    id: 'sov_atr_team', name: 'Anti-tank Rifle Team',
    role: 'Infantry', unitType: 'Anti-tank Team',
    pts: { inexp: 18, reg: 25, vet: 33 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '2 Soldiers', minModels: 2, maxModels: 2,
    weapons: ['Anti-tank Rifle'],
    extraWeapons: [],
    special: [],
    options: [],
  },

  {
    id: 'sov_sniper', name: 'Sniper Team',
    role: 'Infantry', unitType: 'Sniper Team',
    pts: { inexp: null, reg: 52, vet: 67 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '2 Soldiers', minModels: 2, maxModels: 2,
    weapons: ['Rifle', 'Pistol'],
    extraWeapons: ['Anti-tank Rifle', 'SMG', 'Assault Rifle'],
    special: ['Infiltrator', 'Sniper'],
    options: [
      { label: 'Replace Team Leader\'s Rifle with Anti-tank Rifle (+15, retains Sniper at 48")', pts: 15, max: 1 },
      { label: 'Replace Assistant\'s Pistol with Rifle (+1)', pts: 1, max: 1 },
      { label: 'Replace Assistant\'s Pistol with SMG (+5)', pts: 5, max: 1 },
      { label: 'Replace Assistant\'s Pistol with Assault Rifle (+7)', pts: 7, max: 1 },
    ],
  },

  {
    id: 'sov_light_mortar', name: 'Light Mortar Team',
    role: 'Infantry', unitType: 'Light Mortar Team',
    pts: { inexp: 21, reg: 30, vet: 39 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '2 Soldiers', minModels: 2, maxModels: 2,
    weapons: ['Light Mortar'],
    extraWeapons: [],
    special: [],
    options: [],
  },

  {
    id: 'sov_medium_mortar', name: 'Medium Mortar Team',
    role: 'Infantry', unitType: 'Mortar Team',
    pts: { inexp: 32, reg: 45, vet: 59 }, defaultExp: 'Regular',
    move: 'Rotate / Run 12"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '3 Soldiers', minModels: 3, maxModels: 3,
    weapons: ['Medium Mortar'],
    extraWeapons: [],
    special: [],
    options: [{ label: 'Add Spotter — Regular or Veteran only (+10)', pts: 10, max: 1 }],
  },

  {
    id: 'sov_heavy_mortar', name: 'Heavy Mortar Team',
    role: 'Infantry', unitType: 'Mortar Team',
    pts: { inexp: 42, reg: 60, vet: 78 }, defaultExp: 'Regular',
    move: 'Rotate / Run 12"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '4 Soldiers', minModels: 4, maxModels: 4,
    weapons: ['Heavy Mortar'],
    extraWeapons: [],
    special: [],
    options: [{ label: 'Add Spotter — Regular or Veteran only (+10)', pts: 10, max: 1 }],
  },

  {
    id: 'sov_flamethrower', name: 'Flamethrower Team',
    role: 'Infantry', unitType: 'Flamethrower Team',
    pts: { inexp: null, reg: 50, vet: 65 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '2 Soldiers', minModels: 2, maxModels: 2,
    weapons: ['Infantry Flamethrower', 'Pistol'],
    extraWeapons: [],
    special: [],
    options: [],
  },

  // ══════════════════════════════════════════════════════════
  // ARTILLERY
  // ══════════════════════════════════════════════════════════

  {
    id: 'sov_light_arty', name: 'Light Artillery Team',
    role: 'Artillery', unitType: 'Field Artillery',
    pts: { inexp: 32, reg: 45, vet: 59 }, defaultExp: 'Regular',
    move: 'Rotate / Run 6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '3 Soldiers', minModels: 3, maxModels: 3,
    weapons: ['Light Howitzer'],
    extraWeapons: [],
    special: [],
    options: [{ label: 'Add Gun Shield (+5)', pts: 5, max: 1 }],
  },

  {
    id: 'sov_medium_arty', name: 'Medium Artillery Team',
    role: 'Artillery', unitType: 'Field Artillery',
    pts: { inexp: 60, reg: 85, vet: 111 }, defaultExp: 'Regular',
    move: 'Rotate / Run 6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '4 Soldiers', minModels: 4, maxModels: 4,
    weapons: ['Medium Howitzer'],
    extraWeapons: [],
    special: [],
    options: [
      { label: 'Add Spotter — Regular or Veteran only (+10)', pts: 10, max: 1 },
      { label: 'Add Gun Shield (+5)', pts: 5, max: 1 },
    ],
  },

  {
    id: 'sov_heavy_arty', name: 'Heavy Artillery Team',
    role: 'Artillery', unitType: 'Field Artillery',
    pts: { inexp: 95, reg: 135, vet: 176 }, defaultExp: 'Regular',
    move: 'Rotate only', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '5 Soldiers', minModels: 5, maxModels: 5,
    weapons: ['Heavy Howitzer'],
    extraWeapons: [],
    special: [],
    options: [
      { label: 'Add Spotter — Regular or Veteran only (+10)', pts: 10, max: 1 },
      { label: 'Add Gun Shield (+5)', pts: 5, max: 1 },
    ],
  },

  {
    id: 'sov_light_atg', name: 'Light Anti-tank Gun Team',
    role: 'Artillery', unitType: 'Anti-tank Gun',
    pts: { inexp: 35, reg: 50, vet: 65 }, defaultExp: 'Regular',
    move: 'Rotate / Run 6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '3 Soldiers', minModels: 3, maxModels: 3,
    weapons: ['Light Anti-tank Gun'],
    extraWeapons: [],
    special: ['Gun Shield'],
    options: [],
  },

  {
    id: 'sov_medium_atg', name: 'Medium Anti-tank Gun Team',
    role: 'Artillery', unitType: 'Anti-tank Gun',
    pts: { inexp: 49, reg: 70, vet: 91 }, defaultExp: 'Regular',
    move: 'Rotate / Run 6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '3 Soldiers', minModels: 3, maxModels: 3,
    weapons: ['Medium Anti-tank Gun'],
    extraWeapons: [],
    special: ['Gun Shield'],
    options: [],
  },

  {
    id: 'sov_heavy_atg', name: 'Heavy Anti-tank Gun Team',
    role: 'Artillery', unitType: 'Anti-tank Gun',
    pts: { inexp: 70, reg: 100, vet: 130 }, defaultExp: 'Regular',
    move: 'Rotate only', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '4 Soldiers', minModels: 4, maxModels: 4,
    weapons: ['Heavy Anti-tank Gun'],
    extraWeapons: [],
    special: ['Gun Shield'],
    options: [],
  },

  {
    id: 'sov_superheavy_atg', name: 'Super-heavy Anti-tank Gun Team',
    role: 'Artillery', unitType: 'Anti-tank Gun',
    pts: { inexp: 98, reg: 140, vet: 182 }, defaultExp: 'Regular',
    move: 'Rotate only', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '5 Soldiers', minModels: 5, maxModels: 5,
    weapons: ['Super-heavy Anti-tank Gun'],
    extraWeapons: [],
    special: ['Gun Shield'],
    options: [],
  },

  {
    id: 'sov_zvukovoy_team', name: 'Zvukovoy Proeyektor Team',
    role: 'Artillery', unitType: 'Anti-tank Gun',
    pts: { inexp: 84, reg: 120, vet: 156 }, defaultExp: 'Regular',
    move: 'Rotate only', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '3 Soldiers', minModels: 3, maxModels: 3,
    weapons: ['Zvukovoy Proeyektor'],
    extraWeapons: [],
    special: ['Counts as Heavy Artillery for movement purposes'],
    options: [],
    riftUnit: '1 Rift Die — Shockwave Weapon',
  },

  // ══════════════════════════════════════════════════════════
  // WALKERS
  // ══════════════════════════════════════════════════════════

  {
    id: 'sov_kazak', name: 'Kazak Light Walker',
    role: 'Walker', unitType: 'Light Walker (2 Legs)',
    pts: { inexp: null, reg: 115, vet: 138 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:'8+', vet:'8+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Light Automatic Cannon', 'MMG'],
    extraWeapons: ['Light Anti-tank Gun'],
    special: ['Recce', 'Two-legged'],
    options: [
      { label: 'Replace Light Automatic Cannon with Light Anti-tank Gun (+20)', pts: 20, max: 1 },
    ],
  },

  {
    id: 'sov_molot', name: 'DM-40 Molot Medium Walker',
    role: 'Walker', unitType: 'Medium Walker (2 Legs)',
    pts: { inexp: null, reg: 238, vet: 286 }, defaultExp: 'Regular',
    move: 'Advance up to 6" / Run 6"–12"', damage: { inexp:null, reg:'9+', vet:'9+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Medium Anti-tank Gun', 'HMG', 'HMG'],
    extraWeapons: [],
    special: ['Reinforced Front Armour', 'Slow', 'Two-legged'],
    options: [],
  },

  {
    id: 'sov_mahmot', name: 'Mahmot Heavy Walker',
    role: 'Walker', unitType: 'Super-heavy Walker (4 Legs)',
    pts: { inexp: null, reg: 495, vet: 594 }, defaultExp: 'Regular',
    move: 'Advance up to 6" / Run 6"–12"', damage: { inexp:null, reg:'11+', vet:'11+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Light Howitzer', 'Heavy Howitzer', 'HMG', 'HMG'],
    extraWeapons: [],
    special: ['Multi-legged', 'Slow'],
    options: [
      { label: 'Reinforced Front Armour (+55)', pts: 55, max: 1 },
    ],
  },

  {
    id: 'sov_mastodont', name: 'Mastodont Heavy Walker',
    role: 'Walker', unitType: 'Super-heavy Walker (4 Legs)',
    pts: { inexp: null, reg: 430, vet: 516 }, defaultExp: 'Regular',
    move: 'Advance up to 6" / Run 6"–12"', damage: { inexp:null, reg:'11+', vet:'11+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Super-heavy Anti-tank Gun', 'MMG', 'MMG'],
    extraWeapons: [],
    special: ['Multi-legged', 'Slow'],
    options: [
      { label: 'Reinforced Front Armour (+55)', pts: 55, max: 1 },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // ARMOUR / VEHICLES
  // ══════════════════════════════════════════════════════════

  {
    id: 'sov_t34_zp', name: 'T-34/ZP Medium Tank',
    role: 'Armour', unitType: 'Medium Tank',
    pts: { inexp: 192, reg: 240, vet: 288 }, defaultExp: 'Regular',
    move: 'Advance up to 9" / Run 9"–18"', damage: { inexp:'9+', reg:'9+', vet:'9+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Tank', minModels: 1, maxModels: 1,
    weapons: ['Zvukovoy Proeyektor', 'MMG'],
    extraWeapons: ['Heavy Anti-tank Gun', 'Vehicle Flamethrower'],
    special: [],
    options: [
      { label: 'Replace Zvukovoy Proeyektor with Heavy AT Gun + Co-axial MMG (–15)', pts: -15, max: 1 },
      { label: 'Replace Hull MMG with Vehicle Flamethrower (+40)', pts: 40, max: 1 },
    ],
    riftUnit: 'Only if armed with Zvukovoy Proeyektor — Shockwave Weapon (1 Rift Die)',
  },

  {
    id: 'sov_kv_zp', name: 'KV-ZP Heavy Tank',
    role: 'Armour', unitType: 'Heavy Tank',
    pts: { inexp: 256, reg: 320, vet: 384 }, defaultExp: 'Regular',
    move: 'Advance up to 6" / Run 6"–12"', damage: { inexp:'10+', reg:'10+', vet:'10+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Tank', minModels: 1, maxModels: 1,
    weapons: ['Zvukovoy Proeyektor', 'MMG'],
    extraWeapons: [],
    special: ['Armoured All Round', 'Slow'],
    options: [],
    riftUnit: '1 Rift Die — Shockwave Weapon',
  },

  {
    id: 'sov_zp_emplacement', name: 'Zvukovoy Proeyektor Emplacement',
    role: 'Armour', unitType: 'Medium Emplacement',
    pts: { inexp: 160, reg: 200, vet: 240 }, defaultExp: 'Regular',
    move: 'N/A — Immobilised', damage: { inexp:'9+', reg:'9+', vet:'9+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Emplacement', minModels: 1, maxModels: 1,
    weapons: ['Zvukovoy Proeyektor'],
    extraWeapons: [],
    special: ['Armoured All Round', 'Emplacement — starts Immobilised; deploy within 6" of DZE'],
    options: [],
    riftUnit: '1 Rift Die — Shockwave Weapon',
  },

  // ══════════════════════════════════════════════════════════
  // TRANSPORTS & TOWS
  // ══════════════════════════════════════════════════════════

  {
    id: 'sov_truck', name: 'Truck',
    role: 'Transport', unitType: 'Transport Vehicle',
    pts: { inexp: 22, reg: 27, vet: 32 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:'6+', reg:'6+', vet:'6+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: [],
    extraWeapons: ['LMG'],
    special: ['Carries: up to 12 Soldiers'],
    options: [
      { label: 'Add Forward-facing Pintle-mounted LMG (+10)', pts: 10, max: 1 },
    ],
  },

  {
    id: 'sov_m3_scout', name: 'M3 White Scout Car',
    role: 'Transport', unitType: 'Transport Vehicle',
    pts: { inexp: 54, reg: 68, vet: 82 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:'7+', reg:'7+', vet:'7+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: ['HMG'],
    extraWeapons: ['MMG'],
    special: ['Open-topped', 'Carries: up to 8 Soldiers'],
    options: [
      { label: 'Add Pintle-mounted MMG covering right and rear arcs (+15)', pts: 15, max: 1 },
      { label: 'Add Pintle-mounted MMG covering left and rear arcs (+15)', pts: 15, max: 1 },
    ],
  },

  {
    id: 'sov_gaz_jeep', name: 'GAZ "Jeep"',
    role: 'Transport', unitType: 'Transport Vehicle',
    pts: { inexp: 14, reg: 18, vet: 22 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:'6+', reg:'6+', vet:'6+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: [],
    extraWeapons: [],
    special: ['Carries: up to 3 Soldiers'],
    options: [],
  },

  {
    id: 'sov_komsomolets', name: 'T-20 Komsomolets',
    role: 'Transport', unitType: 'Transport Vehicle',
    pts: { inexp: 37, reg: 46, vet: 55 }, defaultExp: 'Regular',
    move: 'Advance up to 9" / Run 9"–18"', damage: { inexp:'7+', reg:'7+', vet:'7+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: ['LMG'],
    extraWeapons: [],
    special: ['Carries: up to 6 Soldiers', 'Tows: Any Gun'],
    options: [],
  },

];
