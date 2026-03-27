// ============================================================
// THE AXIS — FACTION DATA
// Source: Konflikt '47 Army List, December 2025
// ============================================================
const FACTION_GERMAN = [

  // ══════════════════════════════════════════════════════════
  // HEROES
  // ══════════════════════════════════════════════════════════

  {
    id: 'axis_gross', name: 'Hauptmann Heinrich Gross',
    role: 'Officer', unitType: 'Hero (Company Commander)',
    pts: { inexp: null, reg: null, vet: 170 }, defaultExp: 'Veteran',
    move: '6" (8" whilst Fast)', damage: { inexp:null, reg:null, vet:'5+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 Heroic Officer', minModels: 1, maxModels: 5,
    weapons: ['Schwarzlicht P 08SzL Luger'],
    extraWeapons: ['Assault Rifle', 'Schwarzlicht MP 40SzL Schmeisser', 'Rifle'],
    special: ['Advanced Body Armour', 'Deadly (3) — Gross only', 'Fast', 'Fearless',
              'Hero Stats: Guts 2, Rift Mastery 2, Luck 1'],
    options: [
      { label: 'Add Medic in Advanced Body Armour with Pistol (+31)', pts: 31, max: 1 },
      { label: 'Add soldiers in Advanced Body Armour with Assault Rifles (+29 each, max 3)', pts: 29, max: 3 },
      { label: 'Replace Assault Rifle(s) with Schwarzlicht MP 40SzL Schmeisser (free, max 3)', pts: 0, max: 3 },
      { label: 'Replace Assault Rifle with Rifle + Sniper special rule (+9, max 1)', pts: 9, max: 1 },
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
    ],
    riftUnit: '3 Rift Dice — Active: Relentless (Snap to Action! already-activated units within 6"; exhaust 1 die per unit). Surging: Hard to Kill. Exhausted: lose Fast.',
  },

  // ══════════════════════════════════════════════════════════
  // HQ TEAMS — OFFICERS
  // ══════════════════════════════════════════════════════════

  {
    id: 'axis_company_commander', name: 'Company Commander',
    role: 'Officer', unitType: 'Company Commander',
    pts: { inexp: 42, reg: 60, vet: 78 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Schwarzlicht P 08SzL Luger', 'SMG', 'Assault Rifle', 'Schwarzlicht MP 40SzL Schmeisser'],
    special: [],
    options: [
      { label: 'Add up to 2 soldiers with Pistols (Inexp +6 / Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Schwarzlicht P 08SzL Luger (+3, up to 3)', pts: 3, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5, up to 3)', pts: 5, max: 3 },
      { label: 'Replace Pistol(s) with Assault Rifle (+7, up to 3)', pts: 7, max: 3 },
      { label: 'Replace Pistol(s) with Schwarzlicht MP 40SzL Schmeisser (+7, up to 3)', pts: 7, max: 3 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Rift Mastery (+15)', pts: 15, max: 1 },
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
    ],
  },

  {
    id: 'axis_company_cmd_schwertruppen', name: 'Company Commander (Schwertruppen)',
    role: 'Officer', unitType: 'Company Commander',
    pts: { inexp: null, reg: 71, vet: 89 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'5+', vet:'6+' }, morale: { inexp:null, reg:9, vet:10 },
    weapons: ['Assault Rifle'],
    extraWeapons: ['LMG'],
    special: ['Heavy'],
    options: [
      { label: 'Add up to 2 Schwertruppen with Assault Rifles (Reg +21 / Vet +24 each)', pts: 21, max: 2 },
      { label: 'Replace Assault Rifle(s) with LMG (+9, up to 3)', pts: 9, max: 3 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Rift Mastery (+15)', pts: 15, max: 1 },
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Fanatics (+2/model)', pts: 2, max: 1 },
      { label: 'Stubborn (+1/model)', pts: 1, max: 1 },
    ],
  },

  {
    id: 'axis_company_cmd_stahltruppen', name: 'Company Commander (Stahltruppen)',
    role: 'Officer', unitType: 'Company Commander',
    pts: { inexp: null, reg: null, vet: 95 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'7+' }, morale: { inexp:null, reg:null, vet:10 },
    weapons: ['StG 44Z'],
    extraWeapons: ['LMG', 'Light Anti-tank Gun'],
    special: ['Augmented', 'Large', 'Wide Formation'],
    options: [
      { label: 'Add up to 2 Stahltruppen with StG 44Zs (+30 each)', pts: 30, max: 2 },
      { label: 'Replace StG 44Z(s) with LMG (+8, up to 3)', pts: 8, max: 3 },
      { label: 'Replace StG 44Z with Light Anti-tank Gun (+35, max 1)', pts: 35, max: 1 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Rift Mastery (+15)', pts: 15, max: 1 },
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Fanatics (+2/model)', pts: 2, max: 1 },
    ],
    riftUnit: '1 Rift Die — Active: Vormarsch! (auto-pass Order Test & discard Pins on Advance). Surging: +1 Pen at CQ. Exhausted: Lumbering (4"/8").',
  },

  {
    id: 'axis_platoon_commander', name: 'Platoon Commander',
    role: 'Officer', unitType: 'Platoon Commander',
    pts: { inexp: 21, reg: 30, vet: 39 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Schwarzlicht P 08SzL Luger', 'SMG', 'Assault Rifle', 'Schwarzlicht MP 40SzL Schmeisser'],
    special: [],
    options: [
      { label: 'Add up to 2 soldiers with Pistols (Inexp +6 / Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Schwarzlicht P 08SzL Luger (+3, up to 3)', pts: 3, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5, up to 3)', pts: 5, max: 3 },
      { label: 'Replace Pistol(s) with Assault Rifle (+7, up to 3)', pts: 7, max: 3 },
      { label: 'Replace Pistol(s) with Schwarzlicht MP 40SzL Schmeisser (+7, up to 3)', pts: 7, max: 3 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Rift Mastery (+15)', pts: 15, max: 1 },
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
    ],
  },

  {
    id: 'axis_platoon_cmd_schwertruppen', name: 'Platoon Commander (Schwertruppen)',
    role: 'Officer', unitType: 'Platoon Commander',
    pts: { inexp: null, reg: 41, vet: 50 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'5+', vet:'6+' }, morale: { inexp:null, reg:9, vet:10 },
    weapons: ['Assault Rifle'],
    extraWeapons: ['LMG'],
    special: ['Heavy'],
    options: [
      { label: 'Add up to 2 Schwertruppen with Assault Rifles (Reg +21 / Vet +24 each)', pts: 21, max: 2 },
      { label: 'Replace Assault Rifle(s) with LMG (+9, up to 3)', pts: 9, max: 3 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Rift Mastery (+15)', pts: 15, max: 1 },
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Fanatics (+2/model)', pts: 2, max: 1 },
      { label: 'Stubborn (+1/model)', pts: 1, max: 1 },
    ],
  },

  {
    id: 'axis_platoon_cmd_stahltruppen', name: 'Platoon Commander (Stahltruppen)',
    role: 'Officer', unitType: 'Platoon Commander',
    pts: { inexp: null, reg: null, vet: 56 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'7+' }, morale: { inexp:null, reg:null, vet:10 },
    weapons: ['StG 44Z'],
    extraWeapons: ['LMG', 'Light Anti-tank Gun'],
    special: ['Augmented', 'Large', 'Wide Formation'],
    options: [
      { label: 'Add up to 2 Stahltruppen with StG 44Zs (+30 each)', pts: 30, max: 2 },
      { label: 'Replace StG 44Z(s) with LMG (+8, up to 3)', pts: 8, max: 3 },
      { label: 'Replace StG 44Z with Light Anti-tank Gun (+35, max 1)', pts: 35, max: 1 },
      { label: 'Hero stat: Guts (+10)', pts: 10, max: 1 },
      { label: 'Hero stat: Rift Mastery (+15)', pts: 15, max: 1 },
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Fanatics (+2/model)', pts: 2, max: 1 },
    ],
    riftUnit: '1 Rift Die — Active: Vormarsch! (auto-pass Order Test & discard Pins on Advance). Surging: +1 Pen at CQ. Exhausted: Lumbering (4"/8").',
  },

  {
    id: 'axis_medic', name: 'Medic',
    role: 'Officer', unitType: 'Medic',
    pts: { inexp: null, reg: null, vet: 30 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'5+' }, morale: { inexp:null, reg:null, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Assault Rifle'],
    special: ['Medic'],
    options: [
      { label: 'Add up to 2 additional soldiers with Pistols (+12 each)', pts: 12, max: 2 },
      { label: 'Replace additional soldiers\' Pistol with Assault Rifle (+7)', pts: 7, max: 2 },
    ],
  },

  {
    id: 'axis_arty_observer', name: 'Artillery Forward Observer',
    role: 'Officer', unitType: 'Forward Observer',
    pts: { inexp: null, reg: 75, vet: 90 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Schwarzlicht P 08SzL Luger', 'SMG', 'Assault Rifle', 'Schwarzlicht MP 40SzL Schmeisser'],
    special: ['Infiltrator'],
    options: [
      { label: 'Add up to 2 additional soldiers (Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Schwarzlicht P 08SzL Luger (+3)', pts: 3, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5)', pts: 5, max: 3 },
      { label: 'Replace Pistol(s) with Assault Rifle (+7)', pts: 7, max: 3 },
      { label: 'Replace Pistol(s) with Schwarzlicht MP 40SzL Schmeisser (+7)', pts: 7, max: 3 },
    ],
  },

  {
    id: 'axis_air_observer', name: 'Air Force Forward Observer',
    role: 'Officer', unitType: 'Forward Observer',
    pts: { inexp: null, reg: 75, vet: 90 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    weapons: ['Pistol'],
    extraWeapons: ['Schwarzlicht P 08SzL Luger', 'SMG', 'Assault Rifle', 'Schwarzlicht MP 40SzL Schmeisser'],
    special: ['Infiltrator'],
    options: [
      { label: 'Add up to 2 additional soldiers (Reg +9 / Vet +12 each)', pts: 9, max: 2 },
      { label: 'Replace Pistol(s) with Schwarzlicht P 08SzL Luger (+3)', pts: 3, max: 3 },
      { label: 'Replace Pistol(s) with SMG (+5)', pts: 5, max: 3 },
      { label: 'Replace Pistol(s) with Assault Rifle (+7)', pts: 7, max: 3 },
      { label: 'Replace Pistol(s) with Schwarzlicht MP 40SzL Schmeisser (+7)', pts: 7, max: 3 },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // INFANTRY
  // ══════════════════════════════════════════════════════════

  {
    id: 'axis_volksgrenadier', name: 'Volksgrenadier Squad',
    role: 'Infantry', unitType: 'Basic Infantry',
    pts: { inexp: 42, reg: 60, vet: 78 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 NCO + 5 Volksgrenadiers', minModels: 6, maxModels: 12,
    ppm: { inexp: 7, reg: 10, vet: 13 },
    weapons: ['Rifle'],
    extraWeapons: ['SMG', 'Assault Rifle', 'LMG', 'Infantry Flamethrower'],
    special: [],
    options: [
      { label: 'Replace Rifle(s) with SMG (+4, up to 12)', pts: 4, max: 12 },
      { label: 'Replace Rifle(s) with Assault Rifle (+6, up to 12)', pts: 6, max: 12 },
      { label: 'Replace Rifle with LMG (+15, up to 2)', pts: 15, max: 2 },
      { label: 'Replace Rifle with Infantry Flamethrower (+30, requires Engineers, max 1)', pts: 30, max: 1 },
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Stubborn (+1/model)', pts: 1, max: 1 },
      { label: 'Engineers (+1/model)', pts: 1, max: 1 },
      { label: 'Shirkers — Inexperienced only (–2/model)', pts: -2, max: 1 },
    ],
  },

  {
    id: 'axis_shocktrooper', name: 'Shocktrooper Squad',
    role: 'Infantry', unitType: 'Basic Infantry',
    pts: { inexp: null, reg: 100, vet: 115 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 NCO + 4 Shocktroopers', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: 20, vet: 23 },
    weapons: ['Assault Rifle'],
    extraWeapons: ['Rifle Grenades', 'LMG'],
    special: ['Advanced Body Armour', 'Fanatics'],
    options: [
      { label: 'Upgrade Assault Rifle(s) to fire Rifle Grenades (+6, up to 2)', pts: 6, max: 2 },
      { label: 'Replace Assault Rifle with LMG (+9, up to 2)', pts: 9, max: 2 },
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
    ],
  },

  {
    id: 'axis_legio_aquila', name: 'Legio Aquila Squad',
    role: 'Infantry', unitType: 'Basic Infantry',
    pts: { inexp: null, reg: 60, vet: 75 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 NCO + 4 Legionaries', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: 12, vet: 15 },
    weapons: ['Rifle'],
    extraWeapons: ['SMG', 'Assault Rifle', 'LMG', 'Infantry Flamethrower'],
    special: ['Advanced Body Armour'],
    options: [
      { label: 'Replace Rifle(s) with Assault Rifle (+6, up to 10)', pts: 6, max: 10 },
      { label: 'Replace Rifle with LMG (+15, up to 2)', pts: 15, max: 2 },
      { label: 'Replace Rifle with Infantry Flamethrower (+30, requires Engineers, max 1)', pts: 30, max: 1 },
      { label: 'NCO replaces Rifle with SMG (+4)', pts: 4, max: 1 },
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Stubborn (+1/model)', pts: 1, max: 1 },
      { label: 'Engineers (+1/model)', pts: 1, max: 1 },
    ],
  },

  {
    id: 'axis_schwertruppen', name: 'Schwertruppen Squad',
    role: 'Infantry', unitType: 'Advanced Infantry',
    pts: { inexp: null, reg: 126, vet: 144 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'5+', vet:'6+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 NCO + 5 Schwertruppen in Grade 1 Powered Armour', minModels: 6, maxModels: 11,
    ppm: { inexp: null, reg: 21, vet: 24 },
    weapons: ['Assault Rifle'],
    extraWeapons: ['LMG', 'Panzerschreck'],
    special: ['Heavy'],
    options: [
      { label: 'Replace Assault Rifle with LMG (+9, up to 4)', pts: 9, max: 4 },
      { label: 'Replace Assault Rifle with Panzerschreck (+64, max 1)', pts: 64, max: 1 },
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Fanatics (+2/model)', pts: 2, max: 1 },
      { label: 'Stubborn (+1/model)', pts: 1, max: 1 },
      { label: 'Engineers (+1/model)', pts: 1, max: 1 },
    ],
  },

  {
    id: 'axis_centurion', name: 'Italian Centurion Squad',
    role: 'Infantry', unitType: 'Advanced Infantry',
    pts: { inexp: null, reg: null, vet: 125 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 NCO + 4 Centurions in Grade 1 Powered Armour', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: null, vet: 25 },
    weapons: ['Assault Rifle'],
    extraWeapons: [],
    special: ['Ballistic Shield (5+ Cover Save vs Small Arms if no other Cover)', 'Heavy'],
    options: [
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Fanatics (+2/model)', pts: 2, max: 1 },
    ],
  },

  {
    id: 'axis_stahltruppen', name: 'Stahltruppen Squad',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 90 }, defaultExp: 'Veteran',
    move: '6"', damage: { inexp:null, reg:null, vet:'7+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 NCO + 2 Stahltruppen in Grade 2 Powered Armour', minModels: 3, maxModels: 6,
    ppm: { inexp: null, reg: null, vet: 30 },
    weapons: ['StG 44Z'],
    extraWeapons: ['LMG', 'Light Anti-tank Gun'],
    special: ['Augmented', 'Large', 'Wide Formation'],
    options: [
      { label: 'Replace StG 44Z(s) with LMG (+8, up to 6)', pts: 8, max: 6 },
      { label: 'Replace StG 44Z with Light Anti-tank Gun (+35, max 1)', pts: 35, max: 1 },
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Fanatics (+2/model)', pts: 2, max: 1 },
    ],
    riftUnit: '1 Rift Die — Active: Vormarsch! (auto-pass Order Test & discard Pins on Advance). Surging: +1 Pen at CQ. Exhausted: Lumbering (4"/8").',
  },

  {
    id: 'axis_falke', name: 'Fallschirmjäger Falke (Falcon) Squad',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 130 }, defaultExp: 'Veteran',
    move: 'Flight: 12" / Ground: 6"', damage: { inexp:null, reg:null, vet:'5+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 NCO + 4 Falken', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: null, vet: 26 },
    weapons: ['Assault Rifle'],
    extraWeapons: [],
    special: ['Flight', 'Only Human', 'Stubborn'],
    options: [
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Fanatics (+1/model)', pts: 1, max: 1 },
    ],
    riftUnit: '1 Rift Die — Active: Tauchen Falke (Run+Assault: 18", negate Defensive Position, strike first in Open Ground). Exhausted: lose Flight.',
  },

  {
    id: 'axis_falco', name: 'Paracadutisti Falco (Falcon) Squad',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 125 }, defaultExp: 'Veteran',
    move: 'Flight: 12" / Ground: 6"', damage: { inexp:null, reg:null, vet:'5+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 NCO + 4 Falchi', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: null, vet: 25 },
    weapons: ['SMG'],
    extraWeapons: ['LMG'],
    special: ['Fanatics', 'Flight', 'Only Human'],
    options: [
      { label: 'Replace SMG with LMG (+11, up to 2)', pts: 11, max: 2 },
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
    ],
    riftUnit: '1 Rift Die — Active: Falco Tuffatore (Run+Assault: 18", negate Defensive Position, strike first in Open Ground). Exhausted: lose Flight.',
  },

  {
    id: 'axis_totenkorps', name: 'Totenkorps Squad',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 126 }, defaultExp: 'Veteran',
    move: '4" Lumbering', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '6 Totenkorps', minModels: 6, maxModels: 12,
    ppm: { inexp: null, reg: null, vet: 21 },
    weapons: ['Teeth and Claws (+2 Pen)'],
    extraWeapons: [],
    special: ['Fearless', 'Horror', 'Infiltrator', 'Limited Intelligence', 'Lumbering (4"/8")', 'Tough Fighters'],
    options: [],
    riftUnit: '1 Rift Die — Active: Die Toten Erwachen–Wieder! (exhaust die to return D6 casualties). Surging: +1 Pen at CQ. Exhausted: no Run orders.',
  },

  {
    id: 'axis_schreckwulfen', name: 'Schreckwulfen Squad',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 129 }, defaultExp: 'Veteran',
    move: 'Fast: 8" / Otherwise: 6"', damage: { inexp:null, reg:null, vet:'7+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '3 Schreckwulfen', minModels: 3, maxModels: 6,
    ppm: { inexp: null, reg: null, vet: 43 },
    weapons: ['Teeth and Claws (+2 Pen)'],
    extraWeapons: [],
    special: ['Deadly (3)', 'Fast', 'Fearless', 'Hard to Kill', 'Horror', 'Large', 'Wide Formation'],
    options: [],
    riftUnit: '1 Rift Die — Active: Howl at the Moon (all enemy within 8" take Morale Check). Surging: Damage Value 8+. Exhausted: lose Fast.',
  },

  {
    id: 'axis_nachtjaeger', name: 'Nachtjäger Squad',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 60 }, defaultExp: 'Veteran',
    move: 'Flight: 12" / Ground: 6"', damage: { inexp:null, reg:null, vet:'6+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '2 Nachtjäger', minModels: 2, maxModels: 6,
    ppm: { inexp: null, reg: null, vet: 30 },
    weapons: ['Talons (+1 Pen)'],
    extraWeapons: [],
    special: ['Deadly (2)', 'Fanatics', 'Flight', 'Horror', 'Large', 'Wide Formation'],
    options: [],
    riftUnit: '1 Rift Die — Active: Geflügelte Wut (Run+Assault: 18", negate Defensive Position, strike first in Open Ground). Surging: Deadly (3), Fearless, +2 Pen. Exhausted: lose Flight.',
  },

  {
    id: 'axis_nachtalben', name: 'Nachtalben Squad',
    role: 'Infantry', unitType: 'Specialist Infantry',
    pts: { inexp: null, reg: null, vet: 120 }, defaultExp: 'Veteran',
    move: 'Fast: 8" / Otherwise: 6"', damage: { inexp:null, reg:null, vet:'5+' }, morale: { inexp:null, reg:null, vet:10 },
    composition: '1 NCO + 4 Nachtalben', minModels: 5, maxModels: 10,
    ppm: { inexp: null, reg: null, vet: 24 },
    weapons: ['SMG'],
    extraWeapons: ['Schwarzlicht MP 40SzL Schmeisser', 'StG 44Z', 'LMG'],
    special: ['Fanatics', 'Fast', 'Fieldcraft', 'Infiltrator'],
    options: [
      { label: 'Replace SMG with Schwarzlicht MP 40SzL Schmeisser (+2, up to 10)', pts: 2, max: 10 },
      { label: 'Replace SMG with StG 44Z (+3, up to 10)', pts: 3, max: 10 },
      { label: 'Replace SMG with LMG (+11, up to 2)', pts: 11, max: 2 },
      { label: 'Panzerfausts (+5/model)', pts: 5, max: 1 },
      { label: 'Anti-tank Grenades (+2/model)', pts: 2, max: 1 },
      { label: 'Engineers (+1/model)', pts: 1, max: 1 },
    ],
    riftUnit: '1 Rift Die — Active: Schattentanz (after Order, change Order Die to Ambush). Surging: Deadly (2). Exhausted: lose Fast.',
  },

  // ══════════════════════════════════════════════════════════
  // INFANTRY TEAMS
  // ══════════════════════════════════════════════════════════

  {
    id: 'axis_mmg_team', name: 'MMG Team',
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
    id: 'axis_panzerschreck_team', name: 'Panzerschreck Team',
    role: 'Infantry', unitType: 'Anti-tank Team',
    pts: { inexp: null, reg: 80, vet: 104 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'4+', vet:'5+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '2 Soldiers', minModels: 2, maxModels: 2,
    weapons: ['Panzerschreck'],
    extraWeapons: [],
    special: [],
    options: [],
  },

  {
    id: 'axis_schwertruppen_panzerschreck', name: 'Schwertruppen Panzerschreck Team',
    role: 'Infantry', unitType: 'Anti-tank Team',
    pts: { inexp: null, reg: 96, vet: 112 }, defaultExp: 'Regular',
    move: '6"', damage: { inexp:null, reg:'5+', vet:'6+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '2 Schwertruppen in Grade 1 Heavy Powered Armour', minModels: 2, maxModels: 3,
    ppm: { inexp: null, reg: 21, vet: 24 },
    weapons: ['Panzerschreck', 'Assault Rifle'],
    extraWeapons: ['LMG'],
    special: ['Heavy'],
    options: [
      { label: 'Add 1 additional Schwertruppen with Assault Rifle (Reg +21 / Vet +24)', pts: 21, max: 1 },
      { label: 'Replace Assault Rifle(s) with LMG (+9, up to 2)', pts: 9, max: 2 },
    ],
  },

  {
    id: 'axis_sniper', name: 'Sniper Team',
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
    id: 'axis_light_mortar', name: 'Light Mortar Team',
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
    id: 'axis_medium_mortar', name: 'Medium Mortar Team',
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
    id: 'axis_heavy_mortar', name: 'Heavy Mortar Team',
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
    id: 'axis_flamethrower', name: 'Flamethrower Team',
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
    id: 'axis_light_arty', name: 'Light Artillery Team',
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
    id: 'axis_medium_arty', name: 'Medium Artillery Team',
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
    id: 'axis_heavy_arty', name: 'Heavy Artillery Team',
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
    id: 'axis_light_atg', name: 'Light Anti-tank Gun Team',
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
    id: 'axis_medium_atg', name: 'Medium Anti-tank Gun Team',
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
    id: 'axis_heavy_atg', name: 'Heavy Anti-tank Gun Team',
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
    id: 'axis_superheavy_atg', name: 'Super-heavy Anti-tank Gun Team',
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
    id: 'axis_schwerefeld_projektor_team', name: 'Schwerefeld Projektor Team',
    role: 'Artillery', unitType: 'Anti-tank Gun',
    pts: { inexp: 95, reg: 135, vet: 176 }, defaultExp: 'Regular',
    move: 'Rotate only', damage: { inexp:'3+', reg:'4+', vet:'5+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '3 Soldiers', minModels: 3, maxModels: 3,
    weapons: ['Schwerefeld Projektor'],
    extraWeapons: [],
    special: ['Counts as Heavy Artillery for movement purposes'],
    options: [
      { label: 'Upgrade entire crew to Schwertruppen Grade 1 Heavy Powered Armour (+15, Reg or Vet only)', pts: 15, max: 1 },
    ],
    riftUnit: '1 Rift Die — Gravity Pulse Weapon',
  },

  // ══════════════════════════════════════════════════════════
  // WALKERS
  // ══════════════════════════════════════════════════════════

  {
    id: 'axis_spinne', name: 'Pz.Kpfg. I Ausf. A Spinne',
    role: 'Walker', unitType: 'Light Walker (4 Legs)',
    pts: { inexp: null, reg: 135, vet: 162 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:'8+', vet:'8+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Light Anti-tank Gun', 'Light Automatic Cannon'],
    extraWeapons: [],
    special: ['Flak (Light Automatic Cannon)', 'Multi-legged', 'Open-topped', 'Recce'],
    options: [],
  },

  {
    id: 'axis_flammenspinne', name: 'Pz.Kpfg. I Ausf. B Flammenspinne',
    role: 'Walker', unitType: 'Light Walker (4 Legs)',
    pts: { inexp: null, reg: 105, vet: 126 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:'8+', vet:'8+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Infantry Flamethrower'],
    extraWeapons: [],
    special: ['Multi-legged', 'Recce'],
    options: [],
  },

  {
    id: 'axis_vogelspinne', name: 'Pz.Kpfg. II Vogelspinne',
    role: 'Walker', unitType: 'Light Walker (6 Legs)',
    pts: { inexp: null, reg: 155, vet: 186 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:'8+', vet:'8+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Light Anti-tank Gun', 'Light Automatic Cannon', 'MMG'],
    extraWeapons: ['Infantry Flamethrower', 'Maschinen Schwere'],
    special: ['Flak (Light Automatic Cannon)', 'Multi-legged', 'Recce'],
    options: [
      { label: 'Replace AT Gun + Auto Cannon with Infantry Flamethrower (–20)', pts: -20, max: 1 },
      { label: 'Replace AT Gun + Auto Cannon with Maschinen Schwere — Free (becomes Rift Unit)', pts: 0, max: 1 },
      { label: 'Replace AT Gun + Auto Cannon with Two Light Automatic Cannons — Free', pts: 0, max: 1 },
    ],
    riftUnit: 'Only if armed with Maschinen Schwere — Gravity Pulse Weapon (1 Rift Die)',
  },

  {
    id: 'axis_panzerlaeufer', name: 'Panzer IV Ausf. X Panzerläufer',
    role: 'Walker', unitType: 'Medium Walker (6 Legs)',
    pts: { inexp: null, reg: 255, vet: 306 }, defaultExp: 'Regular',
    move: 'Advance up to 6" / Run 6"–12"', damage: { inexp:null, reg:'9+', vet:'9+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Schwerefeld Projektor', 'MMG'],
    extraWeapons: ['Heavy Anti-tank Gun', 'Light Howitzer'],
    special: ['Multi-legged', 'Slow', 'Walker Upgrade (Shaped Charge weapons do not halve Pen)'],
    options: [
      { label: 'Add Pintle-mounted MMG (+15)', pts: 15, max: 1 },
      { label: 'Replace Schwerefeld Projektor with Heavy AT Gun + Co-axial MMG (–30)', pts: -30, max: 1 },
      { label: 'Replace Schwerefeld Projektor with Light Howitzer + Co-axial MMG (–80)', pts: -80, max: 1 },
    ],
    riftUnit: 'Only if armed with Schwerefeld Projektor — Gravity Pulse Weapon (1 Rift Die)',
  },

  {
    id: 'axis_heuschrecke', name: 'Pz.Kpfg. VII Heuschrecke',
    role: 'Walker', unitType: 'Medium Walker (2 Legs)',
    pts: { inexp: null, reg: 185, vet: 222 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:null, reg:'9+', vet:'9+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['MMG', 'MMG', 'Light Rocket System'],
    extraWeapons: ['Light Automatic Cannon', 'Medium Anti-tank Gun'],
    special: ['Jump', 'Two-legged'],
    options: [
      { label: 'Replace both Forward MMGs with Light Automatic Cannons (+40)', pts: 40, max: 1 },
      { label: 'Replace Light Rocket System with Medium AT Gun (+20)', pts: 20, max: 1 },
    ],
  },

  {
    id: 'axis_thor', name: 'Pz.Kpfg. V Ausf. A Thor',
    role: 'Walker', unitType: 'Super-heavy Walker (6 Legs)',
    pts: { inexp: null, reg: 460, vet: 552 }, defaultExp: 'Regular',
    move: 'Advance up to 6" / Run 6"–12"', damage: { inexp:null, reg:'11+', vet:'11+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Heavy Howitzer', 'MMG', 'Light Automatic Cannon', 'MMG'],
    extraWeapons: [],
    special: ['Multi-legged', 'Slow'],
    options: [
      { label: 'Reinforced Front Armour (+55)', pts: 55, max: 1 },
    ],
  },

  {
    id: 'axis_wotan', name: 'Pz.Kpfg. V Ausf. B Wotan',
    role: 'Walker', unitType: 'Super-heavy Walker (6 Legs)',
    pts: { inexp: null, reg: 500, vet: 600 }, defaultExp: 'Regular',
    move: 'Advance up to 6" / Run 6"–12"', damage: { inexp:null, reg:'11+', vet:'11+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Walker', minModels: 1, maxModels: 1,
    weapons: ['Schienenkanone', 'Light Automatic Cannon', 'MMG'],
    extraWeapons: ['Super-heavy Anti-tank Gun'],
    special: ['Multi-legged', 'Slow'],
    options: [
      { label: 'Reinforced Front Armour (+55)', pts: 55, max: 1 },
      { label: 'Replace Schienenkanone with Super-heavy AT Gun + Co-axial MMG (–35)', pts: -35, max: 1 },
    ],
    riftUnit: 'Only if armed with Schienenkanone — Hyper Velocity Weapon (1 Rift Die)',
  },

  // ══════════════════════════════════════════════════════════
  // ARMOUR / VEHICLES
  // ══════════════════════════════════════════════════════════

  {
    id: 'axis_panzer_iv', name: 'Pz.Kpfw. IV Ausf. X',
    role: 'Armour', unitType: 'Medium Tank',
    pts: { inexp: 204, reg: 255, vet: 306 }, defaultExp: 'Regular',
    move: 'Advance up to 9" / Run 9"–18"', damage: { inexp:'9+', reg:'9+', vet:'9+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Tank', minModels: 1, maxModels: 1,
    weapons: ['Schwerefeld Projektor', 'MMG'],
    extraWeapons: ['Heavy Anti-tank Gun', 'Light Howitzer'],
    special: [],
    options: [
      { label: 'Add Pintle-mounted MMG (+15)', pts: 15, max: 1 },
      { label: 'Replace Schwerefeld Projektor with Heavy AT Gun + Co-axial MMG (–30)', pts: -30, max: 1 },
      { label: 'Replace Schwerefeld Projektor with Light Howitzer + Co-axial MMG (–80)', pts: -80, max: 1 },
      { label: 'Add Schürzen Armoured Skirts (+10)', pts: 10, max: 1 },
    ],
    riftUnit: 'Only if armed with Schwerefeld Projektor — Gravity Pulse Weapon (1 Rift Die)',
  },

  {
    id: 'axis_panther', name: 'Pz.Kpfw. V Panther Ausf. X',
    role: 'Armour', unitType: 'Medium Tank',
    pts: { inexp: 262, reg: 328, vet: 394 }, defaultExp: 'Regular',
    move: 'Advance up to 9" / Run 9"–18"', damage: { inexp:'9+', reg:'9+', vet:'9+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Tank', minModels: 1, maxModels: 1,
    weapons: ['Light Schienenkanone', 'MMG'],
    extraWeapons: ['Schwerefeld Projektor', 'Super-heavy Anti-tank Gun'],
    special: ['Light Schienenkanone (cannot Overload)', 'Reinforced Front Armour'],
    options: [
      { label: 'Add Pintle-mounted MMG (+15)', pts: 15, max: 1 },
      { label: 'Replace Schienenkanone with Schwerefeld Projektor + Co-axial MMG (–40)', pts: -40, max: 1 },
      { label: 'Replace Schienenkanone with Super-heavy AT Gun + Co-axial MMG (–35)', pts: -35, max: 1 },
    ],
    riftUnit: '1 Rift Die — Hyper Velocity (Schienenkanone) or Gravity Pulse (Schwerefeld Projektor)',
  },

  {
    id: 'axis_konigstiger', name: 'Pz.Kpfw. VI Königstiger Ausf. X',
    role: 'Armour', unitType: 'Super-heavy Tank',
    pts: { inexp: null, reg: 475, vet: 570 }, defaultExp: 'Regular',
    move: 'Advance up to 9" / Run 9"–18"', damage: { inexp:null, reg:'11+', vet:'11+' }, morale: { inexp:null, reg:9, vet:10 },
    composition: '1 Tank', minModels: 1, maxModels: 1,
    weapons: ['Schienenkanone', 'MMG'],
    extraWeapons: ['Super-heavy Anti-tank Gun'],
    special: [],
    options: [
      { label: 'Add Pintle-mounted MMG (+15)', pts: 15, max: 1 },
      { label: 'Replace Schienenkanone with Super-heavy AT Gun + Co-axial MMG (–35)', pts: -35, max: 1 },
    ],
    riftUnit: 'Only if armed with Schienenkanone — Hyper Velocity Weapon (1 Rift Die)',
  },

  {
    id: 'axis_schwerefeld_emplacement', name: 'Schwerefeld Projektor Emplacement',
    role: 'Armour', unitType: 'Medium Emplacement',
    pts: { inexp: 172, reg: 215, vet: 258 }, defaultExp: 'Regular',
    move: 'N/A — Immobilised', damage: { inexp:'9+', reg:'9+', vet:'9+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Emplacement', minModels: 1, maxModels: 1,
    weapons: ['Schwerefeld Projektor'],
    extraWeapons: [],
    special: ['Armoured All Round', 'Emplacement — starts Immobilised; deploy within 6" of DZE'],
    options: [],
    riftUnit: '1 Rift Die — Gravity Pulse Weapon',
  },

  {
    id: 'axis_puma', name: 'Sd.Kfz 234/X Puma Heavy Armoured Car',
    role: 'Armour', unitType: 'Armoured Car',
    pts: { inexp: 172, reg: 215, vet: 258 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:'8+', reg:'8+', vet:'8+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: ['Schwerefeld Projektor'],
    extraWeapons: ['Medium Anti-tank Gun'],
    special: ['Recce'],
    options: [
      { label: 'Replace Schwerefeld Projektor with Medium AT Gun + Co-axial MMG (–60)', pts: -60, max: 1 },
    ],
    riftUnit: 'Only if armed with Schwerefeld Projektor — Gravity Pulse Weapon (1 Rift Die)',
  },

  // ══════════════════════════════════════════════════════════
  // TRANSPORTS & TOWS
  // ══════════════════════════════════════════════════════════

  {
    id: 'axis_sdkfz251', name: 'Sd.Kfz 251 Half-track (Hanomag)',
    role: 'Transport', unitType: 'Transport Vehicle',
    pts: { inexp: 50, reg: 62, vet: 74 }, defaultExp: 'Regular',
    move: 'Advance up to 9" / Run 9"–18"', damage: { inexp:'7+', reg:'7+', vet:'7+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: ['MMG'],
    extraWeapons: [],
    special: ['Open-topped', 'Carries: up to 12 Soldiers'],
    options: [{ label: 'Add additional Pintle-mounted MMG covering rear arc (+10)', pts: 10, max: 1 }],
  },

  {
    id: 'axis_sdkfz250', name: 'Sd.Kfz 250 Half-track',
    role: 'Transport', unitType: 'Transport Vehicle',
    pts: { inexp: 44, reg: 55, vet: 66 }, defaultExp: 'Regular',
    move: 'Advance up to 9" / Run 9"–18"', damage: { inexp:'7+', reg:'7+', vet:'7+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: ['MMG'],
    extraWeapons: [],
    special: ['Open-topped', 'Carries: up to 5 Soldiers'],
    options: [{ label: 'Add additional Pintle-mounted MMG covering rear arc (+10)', pts: 10, max: 1 }],
  },

  {
    id: 'axis_opel_maultier', name: 'Opel Maultier',
    role: 'Transport', unitType: 'Transport Vehicle',
    pts: { inexp: 22, reg: 27, vet: 32 }, defaultExp: 'Regular',
    move: 'Advance up to 9" / Run 9"–18"', damage: { inexp:'6+', reg:'6+', vet:'6+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: [],
    extraWeapons: [],
    special: ['Carries: up to 12 Soldiers'],
    options: [],
  },

  {
    id: 'axis_opel_blitz', name: 'Opel Blitz',
    role: 'Transport', unitType: 'Transport Vehicle',
    pts: { inexp: 22, reg: 27, vet: 32 }, defaultExp: 'Regular',
    move: 'Advance up to 12" / Run 12"–24"', damage: { inexp:'6+', reg:'6+', vet:'6+' }, morale: { inexp:8, reg:9, vet:10 },
    composition: '1 Vehicle', minModels: 1, maxModels: 1,
    weapons: [],
    extraWeapons: [],
    special: ['Carries: up to 12 Soldiers'],
    options: [],
  },

  {
    id: 'axis_kubelwagen', name: 'Kübelwagen',
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
