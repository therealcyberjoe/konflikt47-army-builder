// ============================================================
// BRITISH COMMONWEALTH — FACTION DATA
// Source: Konflikt '47 Army List, December 2025
// ============================================================
const FACTION_BRITISH = [

  // ══════════════════════════════════════════════════════════
  // HQ TEAMS — OFFICERS
  // ══════════════════════════════════════════════════════════

  {
    id: 'brit_company_commander', name: 'Company Commander',
    role: 'Officer', unitType: 'Company Commander',
    pts: { inexp: 42, reg: 60, vet: 78 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG', 'Assault Rifle'],
    special: [],
    options: [
      { label: 'Add up to 2 additional soldiers with Pistols (Inexp +6 / Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Rifle (+1 each, up to 3)', pts: 1, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5 each, up to 3)', pts: 5, max: 3 },
      { label: 'Replace Pistol(s) with Assault Rifle (+7 each, up to 3)', pts: 7, max: 3 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Rift Mastery (+15)', pts: 15, max: 1 },
      { label: 'PRIAMs — entire squad (+5/model)', pts: 5, max: 1 },
    ],
  },

  {
    id: 'brit_company_cmd_galahad', name: 'Company Commander (Galahad Armour)',
    role: 'Officer', unitType: 'Company Commander',
    pts: { inexp: null, reg: 80, vet: 98 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'5+', vet:'6+' }, morale: { inexp:null, reg:9, vet:10 },
    weapons: ['LMG'],
    extraWeapons: ['Heavy Tesla Rifle'],
    special: ['Heavy'],
    options: [
      { label: 'Add up to 2 soldiers in Galahad armour with LMGs (Reg +30 / Vet +33 each)', pts: 30, max: 2 },
      { label: 'Replace LMG with Heavy Tesla Rifle (–5, makes unit a Rift Unit)', pts: -5, max: 1 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Rift Mastery (+15)', pts: 15, max: 1 },
      { label: 'PRIAMs (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Stubborn (+1/model)', pts: 1, max: 1 },
      { label: 'Tough Fighters (+1/model)', pts: 1, max: 1 },
    ],
    riftUnit: 'Only if armed with Heavy Tesla Rifle — Tesla Arc Weapon (1 Rift Die)',
  },

  {
    id: 'brit_platoon_commander', name: 'Platoon Commander',
    role: 'Officer', unitType: 'Platoon Commander',
    pts: { inexp: 21, reg: 30, vet: 39 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG', 'Assault Rifle'],
    special: [],
    options: [
      { label: 'Add up to 2 additional soldiers with Pistols (Inexp +6 / Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Rifle (+1 each, up to 3)', pts: 1, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5 each, up to 3)', pts: 5, max: 3 },
      { label: 'Replace Pistol(s) with Assault Rifle (+7 each, up to 3)', pts: 7, max: 3 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Rift Mastery (+15)', pts: 15, max: 1 },
      { label: 'PRIAMs — entire squad (+5/model)', pts: 5, max: 1 },
    ],
  },

  {
    id: 'brit_platoon_cmd_galahad', name: 'Platoon Commander (Galahad Armour)',
    role: 'Officer', unitType: 'Platoon Commander',
    pts: { inexp: null, reg: 50, vet: 59 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'5+', vet:'6+' }, morale: { inexp:null, reg:9, vet:10 },
    weapons: ['LMG'],
    extraWeapons: ['Heavy Tesla Rifle'],
    special: ['Heavy'],
    options: [
      { label: 'Add up to 2 soldiers in Galahad armour with LMGs (Reg +30 / Vet +33 each)', pts: 30, max: 2 },
      { label: 'Replace LMG with Heavy Tesla Rifle (–5, makes unit a Rift Unit)', pts: -5, max: 1 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Rift Mastery (+15)', pts: 15, max: 1 },
      { label: 'PRIAMs (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Stubborn (+1/model)', pts: 1, max: 1 },
      { label: 'Tough Fighters (+1/model)', pts: 1, max: 1 },
    ],
    riftUnit: 'Only if armed with Heavy Tesla Rifle — Tesla Arc Weapon (1 Rift Die)',
  },

  {
    id: 'brit_medic', name: 'Medic',
    role: 'Officer', unitType: 'Medic',
    pts: { inexp: null, reg: null, vet: 30 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'5+' }, morale: { inexp:null, reg:null, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Rifle', 'SMG', 'Assault Rifle'],
    special: ['Medic'],
    options: [
      { label: 'Add up to 2 additional soldiers with Pistols (+12 each)', pts: 12, max: 2 },
      { label: 'Replace additional soldiers\' Pistol with Rifle (+1)', pts: 1, max: 2 },
      { label: 'Replace additional soldiers\' Pistol with SMG (+5)', pts: 5, max: 2 },
      { label: 'Replace additional soldiers\' Pistol with Assault Rifle (+7)', pts: 7, max: 2 },
    ],
  },

  {
    id: 'brit_arty_observer', name: 'Artillery Forward Observer',
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
    id: 'brit_air_observer', name: 'Air Force Forward Observer',
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

  // ══════════════════════════════════════════════════════════
  // INFANTRY
  // ══════════════════════════════════════════════════════════

  {
    id: 'brit_rifle_squad', name: 'Rifle Squad',
    role: 'Infantry', unitType: 'Basic Infantry',
    pts: { inexp: 42, reg: 60, vet: 78 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 NCO + 5 Soldiers', minModels: 6, maxModels: 12,
    ppm: { inexp: 7, reg: 10, vet: 13 },
    weapons: ['Rifle'],
    extraWeapons: ['SMG', 'Assault Rifle', 'Rifle Grenades', 'LMG', 'Infantry Flamethrower'],
    special: [],
    options: [
      { label: 'Replace Rifle(s) with SMG (+4 each, up to 12)', pts: 4, max: 12 },
      { label: 'Replace Rifle(s) with Assault Rifle (+6 each, up to 12)', pts: 6, max: 12 },
      { label: 'Upgrade Rifle(s) to fire Rifle Grenades (+6 each, up to 3)', pts: 6, max: 3 },
      { label: 'Replace Rifle with LMG (+15 each, up to 2)', pts: 15, max: 2 },
      { label: 'Replace Rifle with Infantry Flamethrower (+30, requires Engineers, max 1)', pts: 30, max: 1 },
      { label: 'PRIAMs (+5/model, entire squad)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Stubborn (+1/model)', pts: 1, max: 1 },
      { label: 'Engineers (+1/model)', pts: 1, max: 1 },
      { label: 'Shirkers — Inexperienced only (–2/model)', pts: -2, max: 1 },
    ],
  },

  {
    id: 'brit_galahad_infantry', name: 'Galahad Armoured Infantry Squad',
    role: 'Infantry', unitType: 'Advanced Infantry',
    pts: { inexp: null, reg: 120, vet: 132 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'5+', vet:'6+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 NCO + 3 Soldiers in Grade 1 Heavy Powered Armour', minModels: 4, maxModels: 10,
    ppm: { inexp: null, reg: 30, vet: 33 },
    weapons: ['LMG'],
    extraWeapons: [],
    special: ['Heavy'],
    options: [
      { label: 'PRIAMs (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Engineers (+1/model)', pts: 1, max: 1 },
      { label: 'Stubborn (+1/model)', pts: 1, max: 1 },
      { label: 'Tough Fighters (+1/model)', pts: 1, max: 1 },
    ],
  },

  {
    id: 'brit_bersaglieri', name: 'Italian Bersaglieri Squad',
    role: 'Infantry', unitType: 'Advanced Infantry',
    pts: { inexp: null, reg: null, vet: 136 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 NCO + 3 Soldiers in Grade 1 Heavy Powered Armour', minModels: 4, maxModels: 8,
    ppm: { inexp: null, reg: null, vet: 34 },
    weapons: ['LMG'],
    extraWeapons: [],
    special: ['Heavy', 'Tough Fighters'],
    options: [
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
    ],
  },

  {
    id: 'brit_mk1_auto_infantry', name: 'Mk I Automated Infantry',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 175 }, defaultExp: 'Veteran',
    move: '4" Lumbering / 6" Not Lumbering', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '5 Mk I Automatons', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: null, vet: 35 },
    weapons: ['MMG'],
    extraWeapons: ['HMG'],
    special: ['Augmented', 'Computational Systems', 'Fearless', 'First Off the Line (–1 to hit when shooting)', 'Large', 'Lumbering'],
    options: [
      { label: 'Replace MMGs with HMGs (+10/model, entire squad)', pts: 10, max: 1 },
    ],
    riftUnit: '1 Rift Die — Active: High Voltage! (+1 Shots, then suffer hits equal to firing models). Surging: lose Lumbering. Exhausted: no Run orders.',
  },

  {
    id: 'brit_mk2_heavy_auto_infantry', name: 'Mk II Heavy Automated Infantry',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 126 }, defaultExp: 'Veteran',
    move: '4" Lumbering / 6" Not Lumbering', damage: { inexp:null, reg:null, vet:'7+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '2 Mk II Heavy Automatons', minModels: 2, maxModels: 4,
    ppm: { inexp: null, reg: null, vet: 63 },
    weapons: ['Light Automatic Cannon'],
    extraWeapons: ['Heavy Automatic Cannon'],
    special: ['Augmented', 'Computational Systems', 'Fearless', 'Hard to Kill', 'Large', 'Lumbering', 'Wide Formation'],
    options: [
      { label: 'Replace Light Automatic Cannon with Heavy Automatic Cannon (+10, max 1 per squad)', pts: 10, max: 1 },
    ],
    riftUnit: '1 Rift Die — Active: Co-ordinated Strike! (ignore friendly units for Line of Fire). Surging: lose Lumbering. Exhausted: no Run orders.',
  },

  {
    id: 'brit_grenadiers', name: 'British Grenadiers',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 95 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'5+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 NCO & 4 Grenadiers', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: null, vet: 19 },
    weapons: ['Assault Rifle'],
    extraWeapons: ['Heavy Tesla Rifle', 'Rifle Grenades'],
    special: ['Stubborn'],
    options: [
      { label: 'Replace 1 Assault Rifle with Heavy Tesla Rifle (+4, makes unit Rift Unit)', pts: 4, max: 1 },
      { label: 'Upgrade Assault Rifle(s) to fire Rifle Grenades (+6 each, up to 3)', pts: 6, max: 3 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
    ],
    riftUnit: 'Only if armed with Heavy Tesla Rifle — Tesla Arc Weapon (1 Rift Die)',
  },

  {
    id: 'brit_cerberus', name: 'Cerberus Squad',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 107 }, defaultExp: 'Veteran',
    move: '8"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 Handler & 3 War Dogs', minModels: 4, maxModels: 13,
    ppm: { inexp: null, reg: null, vet: 27 },
    weapons: ['Pistol', 'Teeth and Claws (+1 Pen)'],
    extraWeapons: [],
    special: ['Alert — enemy Infiltrators cannot deploy within 18"', 'Fast', 'Fearless', 'Tough Fighters (War Dogs only)'],
    options: [
      { label: 'Additional Handlers with Pistols (+26 each, max 2 — each allows 3 extra War Dogs at +27 each)', pts: 26, max: 2 },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // INFANTRY TEAMS
  // ══════════════════════════════════════════════════════════

  {
    id: 'brit_mmg_team', name: 'MMG Team',
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
    id: 'brit_hmg_team', name: 'HMG Team',
    role: 'Infantry', unitType: 'Machine Gun Team',
    pts: { inexp: 49, reg: 70, vet: 91 }, defaultExp: 'Regular',
    move: 'Rotate / Run 12"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '4 Soldiers', minModels: 4, maxModels: 4,
    weapons: ['HMG'],
    extraWeapons: [],
    special: [],
    options: [],
  },

  {
    id: 'brit_lancer', name: "Automated Mobile Platform 'Lancer'",
    role: 'Infantry', unitType: 'Machine Gun Team',
    pts: { inexp: null, reg: null, vet: 99 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 Automated Mobile Platform', minModels: 1, maxModels: 1,
    weapons: ['HMG', 'HMG', 'HMG'],
    extraWeapons: [],
    special: ['Augmented', 'Bulky', 'Computational Systems', 'Fearless', 'First Off the Line (–1 to hit)', 'Flak', 'Hard to Kill'],
    options: [],
    riftUnit: '1 Rift Die — Active: High Voltage! (+1 Shots per HMG, then D3 hits +1 Pen). Surging: gains Fast. Exhausted: no Run orders.',
  },

  {
    id: 'brit_piat', name: 'PIAT Team',
    role: 'Infantry', unitType: 'Anti-tank Team',
    pts: { inexp: 28, reg: 40, vet: 52 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '2 Soldiers', minModels: 2, maxModels: 2,
    weapons: ['PIAT'],
    extraWeapons: [],
    special: [],
    options: [],
  },

  {
    id: 'brit_super_bazooka', name: 'Super Bazooka Team',
    role: 'Infantry', unitType: 'Anti-tank Team',
    pts: { inexp: 56, reg: 80, vet: 104 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '2 Soldiers', minModels: 2, maxModels: 2,
    weapons: ['Super Bazooka'],
    extraWeapons: [],
    special: [],
    options: [],
  },

  {
    id: 'brit_hunter', name: "Automated Mobile Platform 'Hunter'",
    role: 'Infantry', unitType: 'Anti-tank Team',
    pts: { inexp: null, reg: null, vet: 84 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 Automated Mobile Platform', minModels: 1, maxModels: 1,
    weapons: ['Light Anti-tank Gun'],
    extraWeapons: [],
    special: ['Augmented', 'Bulky', 'Computational Systems', 'Fearless', 'First Off the Line (–1 to hit)', 'Hard to Kill'],
    options: [],
    riftUnit: '1 Rift Die — Active: High Voltage! (fire Light AT Gun as Medium AT Gun, then D3 hits +1 Pen). Surging: gains Fast. Exhausted: no Run orders.',
  },

  {
    id: 'brit_sniper', name: 'Sniper Team',
    role: 'Infantry', unitType: 'Sniper Team',
    pts: { inexp: null, reg: 52, vet: 67 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '2 Soldiers', minModels: 2, maxModels: 2,
    weapons: ['Rifle', 'Pistol'],
    extraWeapons: ['Anti-tank Rifle', 'SMG', 'Assault Rifle'],
    special: ['Infiltrator', 'Sniper'],
    options: [
      { label: 'Replace Team Leader\'s Rifle with Anti-tank Rifle (+15, retains Sniper rule at 48")', pts: 15, max: 1 },
      { label: 'Replace Assistant\'s Pistol with Rifle (+1)', pts: 1, max: 1 },
      { label: 'Replace Assistant\'s Pistol with SMG (+5)', pts: 5, max: 1 },
      { label: 'Replace Assistant\'s Pistol with Assault Rifle (+7)', pts: 7, max: 1 },
    ],
  },

  {
    id: 'brit_light_mortar', name: 'Light Mortar Team',
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
    id: 'brit_medium_mortar', name: 'Medium Mortar Team',
    role: 'Infantry', unitType: 'Mortar Team',
    pts: { inexp: 32, reg: 45, vet: 59 }, defaultExp: 'Regular',
    move: 'Rotate / Run 12"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '3 Soldiers', minModels: 3, maxModels: 3,
    weapons: ['Medium Mortar'],
    extraWeapons: [],
    special: [],
    options: [
      { label: 'Add Spotter — Regular or Veteran only (+10)', pts: 10, max: 1 },
    ],
  },

  {
    id: 'brit_heavy_mortar', name: 'Heavy Mortar Team',
    role: 'Infantry', unitType: 'Mortar Team',
    pts: { inexp: 42, reg: 60, vet: 78 }, defaultExp: 'Regular',
    move: 'Rotate / Run 12"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '4 Soldiers', minModels: 4, maxModels: 4,
    weapons: ['Heavy Mortar'],
    extraWeapons: [],
    special: [],
    options: [
      { label: 'Add Spotter — Regular or Veteran only (+10)', pts: 10, max: 1 },
    ],
  },

  {
    id: 'brit_bombardier', name: "Automated Mobile Platform 'Bombardier'",
    role: 'Infantry', unitType: 'Mortar Team',
    pts: { inexp: null, reg: null, vet: 84 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 Automated Mobile Platform', minModels: 1, maxModels: 1,
    weapons: ['Light Howitzer'],
    extraWeapons: [],
    special: ['Augmented', 'Bulky', 'Computational Systems', 'Fearless', 'First Off the Line (–1 to hit)', 'Hard to Kill'],
    options: [],
    riftUnit: '1 Rift Die — Active: High Voltage! (fire Light Howitzer as Medium Howitzer, then D3 hits +1 Pen). Surging: gains Fast. Exhausted: no Run orders.',
  },

  {
    id: 'brit_flamethrower', name: 'Flamethrower Team',
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
    id: 'brit_light_arty', name: 'Light Artillery Team',
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
    id: 'brit_medium_arty', name: 'Medium Artillery Team',
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
    id: 'brit_heavy_arty', name: 'Heavy Artillery Team',
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
    id: 'brit_light_atg', name: 'Light Anti-tank Gun Team',
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
    id: 'brit_medium_atg', name: 'Medium Anti-tank Gun Team',
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
    id: 'brit_heavy_atg', name: 'Heavy Anti-tank Gun Team',
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
    id: 'brit_superheavy_atg', name: 'Super-heavy Anti-tank Gun Team',
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
    id: 'brit_m17_tesla_team', name: 'M17 Tesla Cannon Team',
    role: 'Artillery', unitType: 'Anti-tank Gun',
    pts: { inexp: 88, reg: 125, vet: 163 }, defaultExp: 'Regular',
    move: 'Rotate only', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '3 Soldiers', minModels: 3, maxModels: 3,
    weapons: ['M17 Tesla Cannon'],
    extraWeapons: [],
    special: ['Counts as Heavy Artillery for movement purposes'],
    options: [
      { label: 'Upgrade entire crew to Grade 1 Galahad Powered Armour (+15, Reg or Vet only)', pts: 15, max: 1 },
    ],
    riftUnit: '1 Rift Die — Tesla Arc Weapon',
  },

  // ══════════════════════════════════════════════════════════
  // WALKERS
  // ══════════════════════════════════════════════════════════

  {
    id: 'brit_guardian_mk1', name: 'Guardian Mk I Light Walker',
    role: 'Walker', unitType: 'Light Walker (2 Legs)',
    pts: { inexp: null, reg: 105, vet: 126 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:'8+', vet:'8+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['MMG', 'HMG'],
    extraWeapons: ['Infantry Flamethrower'],
    special: ['Single-crew Walker', 'Two-legged'],
    options: [{ label: 'Add Infantry Flamethrower on Left Arm (+30)', pts: 30, max: 1 }],
  },

  {
    id: 'brit_jackal_mk1', name: 'Jackal Mk I Light Jump Walker',
    role: 'Walker', unitType: 'Light Walker (2 Legs)',
    pts: { inexp: null, reg: 105, vet: 126 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:'8+', vet:'8+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['MMG'],
    extraWeapons: ['Infantry Flamethrower'],
    special: ['Jump', 'Single-crew Walker', 'Two-legged'],
    options: [{ label: 'Add Infantry Flamethrower on Left Arm (+30)', pts: 30, max: 1 }],
  },

  {
    id: 'brit_mudskipper', name: 'Mudskipper Mk I Jump Walker',
    role: 'Walker', unitType: 'Medium Walker (2 Legs)',
    pts: { inexp: null, reg: 290, vet: 348 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:'9+', vet:'9+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['HMG', 'HMG', 'Light Automatic Cannon', 'MMG'],
    extraWeapons: ['Bazooka'],
    special: ['Jump', 'Two-legged'],
    options: [{ label: 'Replace Arm-mounted HMG(s) with Arm-mounted Bazooka (+5 each, up to 2)', pts: 5, max: 2 }],
  },

  {
    id: 'brit_percival', name: 'Percival Medium Assault Walker',
    role: 'Walker', unitType: 'Medium Walker (2 Legs)',
    pts: { inexp: null, reg: null, vet: 388 }, defaultExp: 'Veteran',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:null, vet:'9+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['M17 Tesla Cannon', 'Medium Rocket System'],
    extraWeapons: [],
    special: ['Computational Systems', 'Reinforced Front Armour', 'Two-legged', 'Cannot make Close Quarters attacks with Arms'],
    options: [],
    riftUnit: '1 Rift Die — Tesla Arc Weapon (M17 Tesla Cannon)',
  },

  {
    id: 'brit_hornet', name: 'Hornet Medium Support Walker',
    role: 'Walker', unitType: 'Medium Walker (2 Legs)',
    pts: { inexp: null, reg: 235, vet: 282 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:'9+', vet:'9+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Heavy Automatic Cannon', 'HMG', 'HMG', 'HMG', 'HMG'],
    extraWeapons: [],
    special: ['Two-legged'],
    options: [{ label: 'Add Computational Systems — Veteran only (+15)', pts: 15, max: 1 }],
  },

  {
    id: 'brit_merlin', name: 'Merlin Heavy Walker',
    role: 'Walker', unitType: 'Heavy Walker (2 Legs)',
    pts: { inexp: null, reg: null, vet: 438 }, defaultExp: 'Veteran',
    move: 'Advance up to 9" / Run 9"–18"', damage: { inexp:null, reg:null, vet:'10+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Heavy Anti-tank Gun', 'HMG', 'HMG', 'MMG'],
    extraWeapons: [],
    special: ['Computational Systems', 'Improved HE (Heavy AT Gun has HE 3")', 'Two-legged'],
    options: [],
    riftUnit: '1 Rift Die (Guinevere) — Active: exhaust Rift Die to ignore any non-KO damage result. Surging: auto-pass Order Tests. Exhausted: must pass Order Test even if not Pinned.',
  },

  // ══════════════════════════════════════════════════════════
  // ARMOUR / VEHICLES
  // ══════════════════════════════════════════════════════════

  {
    id: 'brit_cromwell_t', name: 'Cromwell-T Cruiser Tank',
    role: 'Armour', unitType: 'Medium Tank',
    pts: { inexp: 216, reg: 270, vet: 324 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:'9+', reg:'9+', vet:'9+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Tank', minModels: 1, maxModels: 1,
    weapons: ['M17 Tesla Cannon', 'MMG'],
    extraWeapons: ['Medium Anti-tank Gun', 'Medium Howitzer', 'HMG'],
    special: ['Fast'],
    options: [
      { label: 'Replace M17 Tesla Cannon with Medium AT Gun + Co-axial MMG — Improved HE (–40)', pts: -40, max: 1 },
      { label: 'Replace M17 Tesla Cannon with Medium Howitzer + Co-axial MMG (–35)', pts: -35, max: 1 },
      { label: 'Add Pintle-mounted MMG (+15)', pts: 15, max: 1 },
      { label: 'Add Pintle-mounted HMG (+25)', pts: 25, max: 1 },
      { label: 'Add Computational Systems — Veteran only (+15)', pts: 15, max: 1 },
    ],
    riftUnit: 'Only if armed with M17 Tesla Cannon — Tesla Arc Weapon (1 Rift Die)',
  },

  {
    id: 'brit_churchill_meteor', name: 'Churchill Meteor Tank',
    role: 'Armour', unitType: 'Super-heavy Tank',
    pts: { inexp: 364, reg: 455, vet: 546 }, defaultExp: 'Regular',
    move: 'Advance up to 6" / Run 6"–12"', damage: { inexp:'11+', reg:'11+', vet:'11+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Tank', minModels: 1, maxModels: 1,
    weapons: ['Medium Anti-tank Gun', 'Medium Rocket System', 'MMG'],
    extraWeapons: ['Light Howitzer', 'Vehicle Flamethrower'],
    special: ['Improved HE (Medium AT Gun has HE 2")', 'Slow'],
    options: [
      { label: 'Replace Medium AT Gun + Co-axial MMG with Light Howitzer + Co-axial MMG (–35)', pts: -35, max: 1 },
      { label: 'Replace Hull MMG with Vehicle Flamethrower (+40)', pts: 40, max: 1 },
    ],
    riftUnit: '1 Rift Die — Corrosive Weapon (Meteor Launcher)',
  },

  {
    id: 'brit_m17_emplacement', name: 'M17 Tesla Cannon Emplacement',
    role: 'Armour', unitType: 'Medium Emplacement',
    pts: { inexp: 168, reg: 210, vet: 252 }, defaultExp: 'Regular',
    move: 'N/A — Immobilised', damage: { inexp:'9+', reg:'9+', vet:'9+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Emplacement', minModels: 1, maxModels: 1,
    weapons: ['M17 Tesla Cannon'],
    extraWeapons: [],
    special: ['Armoured All Round', 'Emplacement — starts Immobilised; deploy within 6" of DZE in non-standard scenarios'],
    options: [],
    riftUnit: '1 Rift Die — Tesla Arc Weapon',
  },

  {
    id: 'brit_auto_carrier', name: 'Automated Carrier',
    role: 'Armour', unitType: 'Anti-aircraft Vehicle',
    pts: { inexp: null, reg: null, vet: 158 }, defaultExp: 'Veteran',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:null, vet:'7+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: ['Light Automatic Cannon', 'Light Automatic Cannon'],
    extraWeapons: [],
    special: ['Automated Crew', 'Computational Systems', 'Fast', 'Flak', 'First Off the Line (–1 to hit)', 'Turn on the Spot'],
    options: [],
    riftUnit: '1 Rift Die — Active: Firing Solution (+1 to hit). Surging: gains Recce. Exhausted: loses Fast, no Run orders.',
  },

  {
    id: 'brit_humber_mk7', name: 'Humber Armoured Car Mk VII',
    role: 'Armour', unitType: 'Armoured Car',
    pts: { inexp: 96, reg: 120, vet: 144 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:'7+', reg:'7+', vet:'7+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: ['Light Automatic Cannon', 'Light Automatic Cannon'],
    extraWeapons: ['Light Anti-tank Gun'],
    special: ['Recce'],
    options: [
      { label: 'Replace Twin Light Auto Cannons with Light Auto Cannon + Co-axial MMG (–25)', pts: -25, max: 1 },
      { label: 'Replace Twin Light Auto Cannons with Light AT Gun + Co-axial MMG (–5)', pts: -5, max: 1 },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // TRANSPORTS & TOWS
  // ══════════════════════════════════════════════════════════

  {
    id: 'brit_bren_carrier', name: 'Bren Carrier',
    role: 'Transport', unitType: 'Transport Vehicle',
    pts: { inexp: 40, reg: 50, vet: 60 }, defaultExp: 'Regular',
    move: 'Advance up to 9" / Run 9"–18"', damage: { inexp:'7+', reg:'7+', vet:'7+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: ['LMG'],
    extraWeapons: ['Anti-tank Rifle'],
    special: ['Open-topped', 'Turn on the Spot', 'Carries: up to 5 Soldiers', 'Tows: Light/Medium AT Guns, M17 Tesla Cannon'],
    options: [
      { label: 'Add Pintle-mounted LMG with 360° arc (+10)', pts: 10, max: 1 },
      { label: 'Replace Forward LMG with Anti-tank Rifle (+10)', pts: 10, max: 1 },
    ],
  },

  {
    id: 'brit_bedford_qlt', name: 'Bedford QLT Troop Transport',
    role: 'Transport', unitType: 'Transport Vehicle',
    pts: { inexp: 35, reg: 44, vet: 53 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:'6+', reg:'6+', vet:'6+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: [],
    extraWeapons: ['LMG'],
    special: ['Carries: up to 29 Soldiers', 'Tows: Light Howitzers, Light/Medium AT Guns, Light AA Guns'],
    options: [{ label: 'Add Pintle-mounted LMG with 360° arc (+15)', pts: 15, max: 1 }],
  },

  {
    id: 'brit_jeep', name: 'Jeep',
    role: 'Transport', unitType: 'Transport Vehicle',
    pts: { inexp: 14, reg: 18, vet: 22 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:'6+', reg:'6+', vet:'6+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: [],
    extraWeapons: [],
    special: ['Carries: up to 3 Soldiers'],
    options: [],
  },

];
