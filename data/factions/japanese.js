// ============================================================
// EMPIRE OF JAPAN — FACTION DATA
// Source: Konflikt '47 Army List, March 2026
// ============================================================
const FACTION_JAPANESE = [

  // ══════════════════════════════════════════════════════════
  // HQ TEAMS — OFFICERS
  // ══════════════════════════════════════════════════════════

  {
    id: 'jpn_company_commander', name: 'Company Commander',
    role: 'Officer', unitType: 'Company Commander',
    pts: { inexp: 42, reg: 60, vet: 78 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG', 'Combat Blade'],
    special: [],
    options: [
      { label: 'Add up to 2 soldiers with Pistols (Inexp +6 / Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Rifle (+1 each, up to 3)', pts: 1, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5 each, up to 3)', pts: 5, max: 3 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Luck (+15)', pts: 15, max: 1 },
      { label: 'Officer Combat Blade — +1 Pen at CQ (+2)', pts: 2, max: 1 },
      { label: 'Yoroi-kumi Anti Tank Launchers — entire squad (+5/model)', pts: 5, max: 1 },
    ],
  },

  {
    id: 'jpn_company_cmd_battle_frame', name: 'Company Commander (Battle-Frame Heavy Armour)',
    role: 'Officer', unitType: 'Company Commander',
    pts: { inexp: null, reg: null, vet: 87 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    weapons: ['SMG'],
    extraWeapons: ['LMG', 'Combat Blade'],
    special: ['Heavy'],
    options: [
      { label: 'Add up to 2 Battle-Frame soldiers with SMGs (+22 each)', pts: 22, max: 2 },
      { label: 'Replace SMG(s) with LMG (+11 each, up to 3)', pts: 11, max: 3 },
      { label: 'Officer Combat Blade — +1 Pen at CQ (+2)', pts: 2, max: 1 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Luck (+15)', pts: 15, max: 1 },
      { label: 'Yoroi-kumi Anti Tank Launchers (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
    ],
  },

  {
    id: 'jpn_company_cmd_assault_frame', name: 'Company Commander (Assault-Frame Heavy Armour)',
    role: 'Officer', unitType: 'Company Commander',
    pts: { inexp: null, reg: null, vet: 91 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    weapons: ['SMG', 'Combat Blade'],
    extraWeapons: ['LMG'],
    special: ['Deadly (2)', 'Heavy'],
    options: [
      { label: 'Add up to 2 Assault-Frame soldiers with SMGs + Combat Blades (+26 each)', pts: 26, max: 2 },
      { label: 'Replace SMG(s) with LMG (+11 each, up to 3)', pts: 11, max: 3 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Luck (+15)', pts: 15, max: 1 },
      { label: 'Yoroi-kumi Anti Tank Launchers (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
    ],
  },

  {
    id: 'jpn_platoon_commander', name: 'Platoon Commander',
    role: 'Officer', unitType: 'Platoon Commander',
    pts: { inexp: 21, reg: 30, vet: 39 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG', 'Combat Blade'],
    special: [],
    options: [
      { label: 'Add up to 2 soldiers with Pistols (Inexp +6 / Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Rifle (+1 each, up to 3)', pts: 1, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5 each, up to 3)', pts: 5, max: 3 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Luck (+15)', pts: 15, max: 1 },
      { label: 'Officer Combat Blade — +1 Pen at CQ (+2)', pts: 2, max: 1 },
      { label: 'Yoroi-kumi Anti Tank Launchers — entire squad (+5/model)', pts: 5, max: 1 },
    ],
  },

  {
    id: 'jpn_platoon_cmd_battle_frame', name: 'Platoon Commander (Battle-Frame Heavy Armour)',
    role: 'Officer', unitType: 'Platoon Commander',
    pts: { inexp: null, reg: null, vet: 48 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    weapons: ['SMG'],
    extraWeapons: ['LMG', 'Combat Blade'],
    special: ['Heavy'],
    options: [
      { label: 'Add up to 2 Battle-Frame soldiers with SMGs (+22 each)', pts: 22, max: 2 },
      { label: 'Replace SMG(s) with LMG (+11 each, up to 3)', pts: 11, max: 3 },
      { label: 'Officer Combat Blade — +1 Pen at CQ (+2)', pts: 2, max: 1 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Luck (+15)', pts: 15, max: 1 },
      { label: 'Yoroi-kumi Anti Tank Launchers (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
    ],
  },

  {
    id: 'jpn_platoon_cmd_assault_frame', name: 'Platoon Commander (Assault-Frame Heavy Armour)',
    role: 'Officer', unitType: 'Platoon Commander',
    pts: { inexp: null, reg: null, vet: 52 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    weapons: ['SMG', 'Combat Blade'],
    extraWeapons: ['LMG'],
    special: ['Deadly (2)', 'Heavy'],
    options: [
      { label: 'Add up to 2 Assault-Frame soldiers with SMGs + Combat Blades (+26 each)', pts: 26, max: 2 },
      { label: 'Replace SMG(s) with LMG (+11 each, up to 3)', pts: 11, max: 3 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Luck (+15)', pts: 15, max: 1 },
      { label: 'Yoroi-kumi Anti Tank Launchers (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
    ],
  },

  {
    id: 'jpn_medic', name: 'Medic',
    role: 'Officer', unitType: 'Medic',
    pts: { inexp: null, reg: 23, vet: 30 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG'],
    special: ['Medic'],
    options: [
      { label: 'Add up to 2 additional soldiers with Pistols (Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace additional soldiers\' Pistol with Rifle (+1)', pts: 1, max: 2 },
      { label: 'Replace additional soldiers\' Pistol with SMG (+5)', pts: 5, max: 2 },
    ],
  },

  {
    id: 'jpn_arty_observer', name: 'Artillery Forward Observer',
    role: 'Officer', unitType: 'Forward Observer',
    pts: { inexp: null, reg: 75, vet: 90 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG'],
    special: ['Infiltrator'],
    options: [
      { label: 'Add up to 2 additional soldiers (Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Rifle (+1, up to 3)', pts: 1, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5, up to 3)', pts: 5, max: 3 },
    ],
  },

  {
    id: 'jpn_air_observer', name: 'Air Force Forward Observer',
    role: 'Officer', unitType: 'Forward Observer',
    pts: { inexp: null, reg: 75, vet: 90 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG'],
    special: ['Infiltrator'],
    options: [
      { label: 'Add up to 2 additional soldiers (Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Rifle (+1, up to 3)', pts: 1, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5, up to 3)', pts: 5, max: 3 },
    ],
  },

  {
    id: 'jpn_kempeitai', name: 'Kempeitai Inspirational Officer',
    role: 'Officer', unitType: 'Inspirational Officer',
    pts: { inexp: 21, reg: 30, vet: 39 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG', 'Combat Blade'],
    special: ['HQ Choice — max 0–1 per Assault Platoon',
              'Strict Discipline — friendly units within 6" may re-roll failed Order Tests; re-roll D6 for Green rule'],
    options: [
      { label: 'Add up to 2 soldiers with Pistols (Inexp +6 / Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Rifle (+1 each, up to 3)', pts: 1, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5 each, up to 3)', pts: 5, max: 3 },
      { label: 'Combat Blade — +1 Pen at CQ (+2)', pts: 2, max: 1 },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // INFANTRY
  // ══════════════════════════════════════════════════════════

  {
    id: 'jpn_infantry_squad', name: 'Imperial Japanese Infantry Squad',
    role: 'Infantry', unitType: 'Basic Infantry',
    pts: { inexp: 49, reg: 70, vet: 91 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 NCO + 6 Soldiers', minModels: 7, maxModels: 12,
    ppm: { inexp: 7, reg: 10, vet: 13 },
    weapons: ['Rifle'],
    extraWeapons: ['SMG', 'Rifle Grenades', 'LMG', 'Light Mortar', 'Infantry Flamethrower', 'Combat Blade'],
    special: [],
    options: [
      { label: 'Replace Rifle(s) with SMG (+4 each, up to 12)', pts: 4, max: 12 },
      { label: 'Upgrade Rifle(s) to fire Rifle Grenades (+6 each, up to 2)', pts: 6, max: 2 },
      { label: 'Replace Rifle with LMG (+15 each, up to 2)', pts: 15, max: 2 },
      { label: 'Replace Rifle with Light Mortar (+20 each, up to 2)', pts: 20, max: 2 },
      { label: 'Replace Rifle with Infantry Flamethrower (+30, requires Engineers, max 1)', pts: 30, max: 1 },
      { label: 'NCO Combat Blade — +1 Pen at CQ (+2)', pts: 2, max: 1 },
      { label: 'Yoroi-kumi Anti Tank Launchers (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Tough Fighters — Veteran only (+1/model)', pts: 1, max: 1 },
      { label: 'Engineers (+1/model)', pts: 1, max: 1 },
      { label: 'Shirkers — Inexperienced only (–2/model)', pts: -2, max: 1 },
      { label: 'Green — Inexperienced only (free)', pts: 0, max: 1 },
    ],
  },

  {
    id: 'jpn_shiboru_squad', name: 'Imperial Japanese Shiboru Rifle Squad',
    role: 'Infantry', unitType: 'Basic Infantry',
    pts: { inexp: null, reg: null, vet: 161 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'5+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 NCO + 6 Soldiers', minModels: 7, maxModels: 12,
    ppm: { inexp: null, reg: null, vet: 23 },
    weapons: ['Type 10 Shiboru Rifle'],
    extraWeapons: ['Combat Blade'],
    special: ['Only Human (benefits from nearby Medic)'],
    options: [
      { label: 'NCO Combat Blade — +1 Pen at CQ (+2)', pts: 2, max: 1 },
      { label: 'Yoroi-kumi Anti Tank Launchers (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Tough Fighters (+1/model)', pts: 1, max: 1 },
      { label: 'Engineers (+1/model)', pts: 1, max: 1 },
    ],
    riftUnit: '1 Rift Die — Crush Weapon (Type 10 Shiboru Rifle)',
  },

  {
    id: 'jpn_battle_frame_squad', name: 'Battle-Frame Armoured Infantry Squad',
    role: 'Infantry', unitType: 'Advanced Infantry',
    pts: { inexp: null, reg: null, vet: 110 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 NCO + 4 Soldiers in Grade 1 Heavy Powered Armour', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: null, vet: 22 },
    weapons: ['SMG'],
    extraWeapons: ['LMG', 'Panzerschreck', 'Type 10 Shiboru Rifle'],
    special: ['Heavy'],
    options: [
      { label: 'Replace SMG(s) with LMG (+11 each, up to 2)', pts: 11, max: 2 },
      { label: 'Replace SMG with Panzerschreck (+66, max 1)', pts: 66, max: 1 },
      { label: 'NCO Combat Blade — +1 Pen at CQ (+2)', pts: 2, max: 1 },
      { label: 'Replace SMGs with Type 10 Shiboru Rifles (+6/model, entire squad — becomes Rift Unit)', pts: 6, max: 1 },
      { label: 'Yoroi-kumi Anti Tank Launchers (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
    ],
    riftUnit: 'Only if armed with Type 10 Shiboru Rifles — Crush Weapon (1 Rift Die)',
  },

  {
    id: 'jpn_assault_frame_squad', name: 'Assault-Frame Armoured Infantry Squad',
    role: 'Infantry', unitType: 'Advanced Infantry',
    pts: { inexp: null, reg: null, vet: 130 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 NCO + 4 Soldiers in Grade 1 Heavy Powered Armour', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: null, vet: 26 },
    weapons: ['SMG', 'Combat Blade'],
    extraWeapons: ['LMG', 'Type 10 Shiboru Rifle'],
    special: ['Deadly (2)', 'Heavy'],
    options: [
      { label: 'Replace SMG(s) with LMG (+11 each, up to 2)', pts: 11, max: 2 },
      { label: 'Replace SMGs with Type 10 Shiboru Rifles (+6/model, entire squad — becomes Rift Unit)', pts: 6, max: 1 },
      { label: 'Yoroi-kumi Anti Tank Launchers (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
    ],
    riftUnit: 'Only if armed with Type 10 Shiboru Rifles — Crush Weapon (1 Rift Die)',
  },

  {
    id: 'jpn_shibito', name: 'Shibito Squad',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 114 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'5+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '6 Shibito', minModels: 6, maxModels: 12,
    ppm: { inexp: null, reg: null, vet: 19 },
    weapons: ['Teeth and Claws (+2 Pen)'],
    extraWeapons: [],
    special: ['Fearless', 'Horror', 'Infiltrator', 'Limited Intelligence', 'Tough Fighters'],
    options: [],
    riftUnit: '1 Rift Die — Active: The Dead Rise–Again! (exhaust die to return D6 casualties). Surging: gain Fast. Exhausted: no Run orders.',
  },

  {
    id: 'jpn_ghost_attack', name: 'Ghost Attack Squad',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 160 }, defaultExp: 'Veteran',
    move: 'Fast: 8" / Otherwise: 6"', damage: { inexp:null, reg:null, vet:'5+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 NCO + 4 Ghost Attack Soldiers', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: null, vet: 32 },
    weapons: ['Type 10 Shiboru Rifle'],
    extraWeapons: ['SMG', 'Combat Blade'],
    special: ['Fast', 'Fieldcraft', 'Hard to Kill', 'Horror', 'Infiltrator'],
    options: [
      { label: 'Replace Type 10 Shiboru Rifles with SMGs (–6 each, entire squad — loses second Rift Die)', pts: -6, max: 1 },
      { label: 'NCO Combat Blade — +1 Pen at CQ (+2)', pts: 2, max: 1 },
      { label: 'Yoroi-kumi Anti Tank Launchers (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Engineers (+1/model)', pts: 1, max: 1 },
    ],
    riftUnit: '1 Rift Die (2 if armed with Type 10 Shiboru Rifles) — Active: Bon Odori/Spirit Dance (after Order, exhaust die to teleport off-table; pass Morale or destroyed; redeploy 12"+ from enemies, 6"+ from Objectives). Surging: gain Deadly (2). Exhausted: lose Fast and Fieldcraft.',
  },

  // ══════════════════════════════════════════════════════════
  // INFANTRY TEAMS
  // ══════════════════════════════════════════════════════════

  {
    id: 'jpn_mmg_team', name: 'MMG Team',
    role: 'Infantry', unitType: 'Machine Gun Team',
    pts: { inexp: 35, reg: 50, vet: 65 }, defaultExp: 'Regular',
    move: 'Rotate / Run 12"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '3 Soldiers', minModels: 3, maxModels: 3,
    weapons: ['MMG'],
    extraWeapons: [],
    special: [],
    options: [],
  },

  {
    id: 'jpn_atr_team', name: 'Anti-tank Rifle Team',
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
    id: 'jpn_battle_frame_at_team', name: 'Battle-Frame Anti-tank Team',
    role: 'Infantry', unitType: 'Anti-tank Team',
    pts: { inexp: null, reg: null, vet: 110 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '2 Soldiers in Grade 1 Heavy Powered Armour', minModels: 2, maxModels: 2,
    weapons: ['Panzerschreck', 'SMG'],
    extraWeapons: ['LMG'],
    special: ['Heavy'],
    options: [
      { label: 'Replace SMG with LMG (+11)', pts: 11, max: 1 },
    ],
  },

  {
    id: 'jpn_sniper', name: 'Sniper Team',
    role: 'Infantry', unitType: 'Sniper Team',
    pts: { inexp: null, reg: 52, vet: 67 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '2 Soldiers', minModels: 2, maxModels: 2,
    weapons: ['Rifle', 'Pistol'],
    extraWeapons: ['Type 10 Shiboru Rifle', 'SMG'],
    special: ['Infiltrator', 'Sniper'],
    options: [
      { label: 'Replace Team Leader\'s Rifle with Type 10 Shiboru Rifle (+10, retains Sniper rule — makes Rift Unit)', pts: 10, max: 1 },
      { label: 'Replace Assistant\'s Pistol with Rifle (+1)', pts: 1, max: 1 },
      { label: 'Replace Assistant\'s Pistol with SMG (+5)', pts: 5, max: 1 },
    ],
    riftUnit: 'Only if armed with Type 10 Shiboru Rifle — Crush Weapon (1 Rift Die)',
  },

  {
    id: 'jpn_light_mortar', name: 'Light Mortar Team',
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
    id: 'jpn_medium_mortar', name: 'Medium Mortar Team',
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
    id: 'jpn_heavy_mortar', name: 'Heavy Mortar Team',
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
    id: 'jpn_flamethrower', name: 'Flamethrower Team',
    role: 'Infantry', unitType: 'Flamethrower Team',
    pts: { inexp: null, reg: 50, vet: 65 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '2 Soldiers', minModels: 2, maxModels: 2,
    weapons: ['Infantry Flamethrower', 'Pistol'],
    extraWeapons: [],
    special: [],
    options: [
      { label: 'Anti-tank Grenades — entire team (+2/model)', pts: 2, max: 1 },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // ARTILLERY
  // ══════════════════════════════════════════════════════════

  {
    id: 'jpn_light_arty', name: 'Light Artillery Team',
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
    id: 'jpn_medium_arty', name: 'Medium Artillery Team',
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
    id: 'jpn_heavy_arty', name: 'Heavy Artillery Team',
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
    id: 'jpn_light_atg', name: 'Light Anti-tank Gun Team',
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
    id: 'jpn_medium_atg', name: 'Medium Anti-tank Gun Team',
    role: 'Artillery', unitType: 'Anti-tank Gun',
    pts: { inexp: 49, reg: 70, vet: 91 }, defaultExp: 'Regular',
    move: 'Rotate / Run 6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '3 Soldiers', minModels: 3, maxModels: 3,
    weapons: ['Medium Anti-tank Gun'],
    extraWeapons: [],
    special: ['Gun Shield'],
    options: [],
  },

  // ══════════════════════════════════════════════════════════
  // WALKERS
  // ══════════════════════════════════════════════════════════

  {
    id: 'jpn_keho', name: 'Type 6 Ke-Ho Light Walker',
    role: 'Walker', unitType: 'Light Walker (4 Legs)',
    pts: { inexp: null, reg: 95, vet: 114 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:'8+', vet:'8+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['MMG', 'MMG'],
    extraWeapons: [],
    special: ['Multi-legged', 'Recce'],
    options: [],
  },

  {
    id: 'jpn_keho_kai', name: 'Type 6-Kai Ke-Ho Light Walker',
    role: 'Walker', unitType: 'Light Walker (4 Legs)',
    pts: { inexp: null, reg: 145, vet: 174 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:'8+', vet:'8+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Light Anti-tank Gun', 'MMG', 'MMG'],
    extraWeapons: ['Type 61 Light Shiboru Cannon'],
    special: ['Multi-legged', 'Recce'],
    options: [
      { label: 'Replace Light AT Gun with Type 61 Light Shiboru Cannon (+80, makes unit Rift Unit)', pts: 80, max: 1 },
    ],
    riftUnit: 'Only if armed with Type 61 Light Shiboru Cannon — Crush Weapon (1 Rift Die)',
  },

  {
    id: 'jpn_sasori', name: 'Type 7 Sasori Light Walker',
    role: 'Walker', unitType: 'Light Walker (4 Legs)',
    pts: { inexp: null, reg: 235, vet: 282 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:'8+', vet:'8+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Type 61 Light Shiboru Cannon', 'MMG', 'MMG'],
    extraWeapons: [],
    special: ['Multi-legged', 'Recce'],
    options: [],
    riftUnit: '1 Rift Die — Crush Weapon (Type 61 Light Shiboru Cannon)',
  },

  {
    id: 'jpn_inago', name: 'Inago Medium Battle Walker',
    role: 'Walker', unitType: 'Medium Walker (2 Legs)',
    pts: { inexp: null, reg: null, vet: 294 }, defaultExp: 'Veteran',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:null, vet:'9+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Light Automatic Cannon', 'Light Automatic Cannon', 'Medium Anti-tank Gun'],
    extraWeapons: ['Light Rocket System'],
    special: ['Two-legged'],
    options: [
      { label: 'Gain Recce special rule (+10)', pts: 10, max: 1 },
      { label: 'Replace Medium AT Gun with Light Rocket System (–40)', pts: -40, max: 1 },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // ARMOUR / VEHICLES
  // ══════════════════════════════════════════════════════════

  {
    id: 'jpn_chi_ha', name: 'Type 97-Kai Shiboru Chi-Ha Light Tank',
    role: 'Armour', unitType: 'Light Tank',
    pts: { inexp: 172, reg: 215, vet: 258 }, defaultExp: 'Regular',
    move: 'Advance up to 9" / Run 9"–18"', damage: { inexp:'8+', reg:'8+', vet:'8+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Tank', minModels: 1, maxModels: 1,
    weapons: ['Type 61 Light Shiboru Cannon', 'MMG', 'MMG'],
    extraWeapons: ['Type 99 Shiboru Cannon', 'Medium Anti-tank Gun'],
    special: ['Rear-facing Turret-mounted MMG — may only fire into opposite Arc in a single turn'],
    options: [
      { label: 'Replace Type 61 with Type 99 Shiboru Cannon + Co-axial MMG (+25)', pts: 25, max: 1 },
      { label: 'Replace Type 61 with Medium AT Gun (–60)', pts: -60, max: 1 },
    ],
    riftUnit: 'Only if armed with Type 61 or Type 99 Shiboru Cannon — Crush Weapon (1 Rift Die)',
  },

  {
    id: 'jpn_chi_nu', name: 'Type 3-Kai Shiboru Chi-Nu Medium Tank',
    role: 'Armour', unitType: 'Medium Tank',
    pts: { inexp: 220, reg: 275, vet: 330 }, defaultExp: 'Regular',
    move: 'Advance up to 9" / Run 9"–18"', damage: { inexp:'9+', reg:'9+', vet:'9+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Tank', minModels: 1, maxModels: 1,
    weapons: ['Type 99 Shiboru Cannon', 'MMG', 'MMG'],
    extraWeapons: ['Medium Anti-tank Gun'],
    special: ['Rear-facing Turret-mounted MMG — may only fire into opposite Arc in a single turn'],
    options: [
      { label: 'Replace Type 99 Shiboru Cannon with Medium AT Gun (–80)', pts: -80, max: 1 },
    ],
    riftUnit: 'Only if armed with Type 99 Shiboru Cannon — Crush Weapon (1 Rift Die)',
  },

  // ══════════════════════════════════════════════════════════
  // TRANSPORTS & TOWS
  // ══════════════════════════════════════════════════════════

  {
    id: 'jpn_truck', name: 'Truck',
    role: 'Transport', unitType: 'Transport Vehicle',
    pts: { inexp: 22, reg: 27, vet: 32 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:'6+', reg:'6+', vet:'6+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: [],
    extraWeapons: ['LMG'],
    special: ['Carries: up to 12 Soldiers'],
    options: [
      { label: 'Add Forward-facing Pintle-mounted LMG (+15)', pts: 15, max: 1 },
    ],
  },

  {
    id: 'jpn_kurogane', name: 'Type 95 Kurogane Scout Car',
    role: 'Transport', unitType: 'Transport Vehicle',
    pts: { inexp: 15, reg: 19, vet: 23 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:'6+', reg:'6+', vet:'6+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: [],
    extraWeapons: [],
    special: ['Carries: up to 4 Soldiers'],
    options: [],
  },

];
