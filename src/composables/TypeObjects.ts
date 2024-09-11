export const protoActionNameAttributes = ref({
    stringid: [
        'STR_ACTION_CHARGE_SPAWN', 'STR_ACTION_PETRIFICATION', 'STR_ACTION_PICKUP', 'STR_TECH_FURY_OF_THE_FALLEN_NAME',
    ],
    notactics: [''],
}).value

export const protoActionNameContent = ref({
    string: [
        'AntiWallAttack', 'AoEAttack', 'AreaDamage', 'AreaHeal', 'Attaching', 'AutoBoost', 'AutoConvert',
        'AutoGather', 'AutoGatherFavor', 'AutoGatherFood', 'AutoLOS', 'BeamAttack', 'BillowingSmog', 'BirthAttack',
        'BlazingStrafeAttack', 'BuckAttack', 'Build', 'BuildingAttack', 'BurstHeal', 'Capsize', 'ChannelAttack',
        'ChaosAttack', 'ChargedHandAttack', 'ChargedRangedAttack', 'ChargedSpawn', 'ChopAttack', 'Convert',
        'DeathBoostDamageBonus', 'DelayedTransform', 'DistanceLimiting', 'DropOff', 'DwarvenPunt', 'DynamicLOS',
        'Eat', 'FlameAttack', 'FlyingUnitAttack', 'Footy', 'FreezeAttack', 'FreezeTitan', 'Gather', 'Gore', 'HandAttack',
        'Heal', 'Hunting', 'IdleDamageBonus', 'IncreaseDamageWithLikeUnits', 'IncreaseSpeedWithLikeUnits', 'JumpAttack',
        'LightningAttack', 'LonghouseSpeedBonus', 'MythSelfDestructDivineAttack', 'MythSelfDestructMundaneAttack',
        'MythSelfDestructMythicalAttack', 'MythSelfDestructRareAttack', 'Pacify', 'PetrificationBonus', 'Pickup',
        'ProgressiveDamageHigh', 'ProgressiveDamageLight', 'Punt', 'RangedAttack', 'RangedAttackFlying',
        'RangedAttackMyth', 'ReincarnationAttack', 'Repair', 'SelfDestructAttack', 'ShockwaveAttack', 'SpeedBonusDivine',
        'SpeedBonusMundane', 'SpeedBonusMythical', 'SpeedBonusRare', 'TauntAttack', 'Throw', 'TitanAttack', 'Trade', 'TransfigurationAttack',
    ],
}).value

export const protoActionDamagebonusAttributes = ref({
    type: [
        'AbstractArcher', 'AbstractArcherShip', 'AbstractCavalry', 'AbstractCloseCombatShip', 'AbstractFarm',
        'AbstractFortress', 'AbstractInfantry', 'AbstractSiegeWeapon', 'AbstractTitan', 'AbstractVillager',
        'BerryBush', 'Building', 'Herdable', 'Hero', 'House', 'HumanSoldier', 'Huntable', 'MythUnit',
        'NonConvertableHerdable', 'SeaSnake', 'SentryTower', 'Serpent', 'Ship', 'TitanKronos', 'TownCenter', 'Tree', 'WildCrops',
    ],
}).value

export const protoActioDamageTypes = ref([
    'Crush', 'Divine', 'Hack', 'Pierce',
]).value

export const protoActioDamageFlags = ref([
    'Ally', 'Enemy', 'Nature', 'Self', 'Ally|Enemy', 'Ally|Nature', 'Ally|Self',
    'Enemy|Nature', 'Enemy|Self', 'Nature|Self', 'Ally|Enemy|Nature', 'Ally|Enemy|Self', 'Ally|Nature|Self', 'Enemy|Nature|Self', 'Ally|Enemy|Nature|Self',
]).value

export const protoActioImpacteffects = ref([
    'effects\\impacts\\crush', 'effects\\impacts\\crush_medium', 'effects\\impacts\\fireball',
    'effects\\impacts\\hack', 'effects\\impacts\\hack_medium', 'effects\\impacts\\pierce',
    'effects\\impacts\\pierce_medium', 'effects\\impacts\\titan',
]).value

export const protoActionRateAttributes = ref({
    type: [
        'AbstractFarm', 'AbstractFishingShip', 'AbstractTemple', 'AbstractTownCenter',
        'AbstractWall', 'All', 'ArcticWolf', 'Aurochs', 'Automaton', 'Baboon', 'Bear',
        'BerryBush', 'BerserkDamageBoost', 'Boar', 'Building', 'Caribou', 'Chicken',
        'Crocodile', 'CrownedCrane', 'Deer', 'Elephant', 'Elk', 'Farm', 'Favor',
        'FishResource', 'Food', 'Gazelle', 'Giraffe', 'Gold', 'GoldResource', 'Herdable',
        'Hippopotamus', 'House', 'Huntable', 'Hyena', 'Kraken', 'Lion', 'LogicalTypeHealed',
        'LogicalTypePickable', 'Market', 'Monkey', 'NonConvertableHerdable', 'Obelisk',
        'OxCartBuilding', 'PolarBear', 'Rhinoceros', 'SeaSnake', 'Taproot', 'Temple',
        'Tree', 'Unit', 'Walrus', 'WaterBuffalo', 'Wolf', 'Wood', 'Zebra',
    ],
}).value

export const protoActionConversionprotoidAttributes = ref({
    srctype: [
        'ArcticWolf', 'Aurochs', 'Baboon', 'Bear', 'Boar', 'Caribou', 'Chicken', 'Crocodile', 'CrownedCrane',
        'Deer', 'Elephant', 'Elk', 'Gazelle', 'Giraffe', 'Hippopotamus', 'Hyena', 'Lion', 'Monkey', 'PolarBear',
        'Rhinoceros', 'Walrus', 'WaterBuffalo', 'Wolf', 'Zebra',
    ],
}).value

export const protoActionConversionprotoidContent = ref({
    string: [
        'ArcticWolfOfSet', 'AurochsOfSet', 'BaboonOfSet', 'BearOfSet', 'BoarOfSet', 'CaribouOfSet', 'ChickenOfSet',
        'CrocodileOfSet', 'CrownedCraneOfSet', 'DeerOfSet', 'ElephantOfSet', 'ElkOfSet', 'GazelleOfSet', 'GiraffeOfSet',
        'HippopotamusOfSet', 'HyenaOfSet', 'LionOfSet', 'MonkeyOfSet', 'PolarBearOfSet', 'RhinocerosOfSet', 'WalrusOfSet',
        'WaterBuffaloOfSet', 'WolfOfSet', 'ZebraOfSet',
    ],
}).value

export const protoActionscalebycontainedunittypeContentRateAttributes = ref({
    type: [
        'AbstractFarm', 'AbstractFishingShip', 'AbstractTemple', 'AbstractTownCenter', 'AbstractWall', 'All',
        'ArcticWolf', 'Aurochs', 'Automaton', 'Baboon', 'Bear', 'BerryBush', 'BerserkDamageBoost', 'Boar',
        'Building', 'Caribou', 'Chicken', 'Crocodile', 'CrownedCrane', 'Deer', 'Elephant', 'Elk', 'Farm',
        'Favor', 'FishResource', 'Food', 'Gazelle', 'Giraffe', 'Gold', 'GoldResource', 'Herdable', 'Hippopotamus',
        'House', 'Huntable', 'Hyena', 'Kraken', 'Lion', 'LogicalTypeHealed', 'LogicalTypePickable', 'Market',
        'Monkey', 'NonConvertableHerdable', 'Obelisk', 'OxCartBuilding', 'PolarBear', 'Rhinoceros', 'SeaSnake',
        'Taproot', 'Temple', 'Tree', 'Unit', 'Walrus', 'WaterBuffalo', 'Wolf', 'Wood', 'Zebra',
    ],
}).value

export const protoActionMinrateAttributes = ref({
    type: [
        'AbstractTownCenter', 'All', 'ArcticWolf', 'Aurochs', 'Baboon', 'Bear', 'Boar', 'Caribou', 'Chicken', 'Crocodile',
        'CrownedCrane', 'Deer', 'Elephant', 'Elk', 'Gazelle', 'Giraffe', 'Hippopotamus', 'Hyena', 'Lion', 'Monkey', 'NavalUnit',
        'PolarBear', 'Rhinoceros', 'Walrus', 'WaterBuffalo', 'Wolf', 'Zebra',
    ],
}).value

export const protoActionProjectileContent = ref({
    string: [
        'ProjectileAcidBlobInvisible', 'ProjectileArrow', 'ProjectileArrowCentaurAttack', 'ProjectileArrowFlaming',
        'ProjectileArrowNotFlaming', 'ProjectileAxeFlaming', 'ProjectileBallOfFire', 'ProjectileBallOfFireChimera',
        'ProjectileBallOfFireInvisible', 'ProjectileBallOfFirePrometheus', 'ProjectileBallistaShot', 'ProjectileBoulder',
        'ProjectileCatapultShot', 'ProjectileChainLightning', 'ProjectileDraugrArrow', 'ProjectileFireGiantSpecialAttack',
        'ProjectileFireSiphonFire', 'ProjectileJavelinFlaming', 'ProjectileLampadesBolt', 'ProjectileManticoreBarb',
        'ProjectileMirrorTowerLazer', 'ProjectileMummyFlies', 'ProjectileNidhoggInvisible', 'ProjectileOsirisLightning',
        'ProjectilePetrobolosShot', 'ProjectilePetsuchosLazer', 'ProjectilePriestPharaoh', 'ProjectileRainbowHeart',
        'ProjectileSatyrSpear', 'ProjectileSatyrSpearSpecialAttack', 'ProjectileSlingStoneFlaming',
        'ProjectileStymphalianBirdFeathers', 'ProjectileTrollStone', 'ProjectileUFOLazer', 'ProjectileWadjetSpit',
    ],
}).value
