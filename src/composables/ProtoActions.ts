export const protoActionsTags = ref({
  name: {
    attributes: {
      stringid: ["STR_ACTION_CHARGE_SPAWN", "STR_ACTION_PETRIFICATION", "STR_ACTION_PICKUP", "STR_TECH_FURY_OF_THE_FALLEN_NAME"],
      notactics: [""],
    },
    content: {
      string: [
        "AntiWallAttack",
        "AoEAttack",
        "AreaDamage",
        "AreaHeal",
        "Attaching",
        "AutoBoost",
        "AutoConvert",
        "AutoGather",
        "AutoGatherFavor",
        "AutoGatherFood",
        "AutoLOS",
        "BeamAttack",
        "BillowingSmog",
        "BirthAttack",
        "BlazingStrafeAttack",
        "BuckAttack",
        "Build",
        "BuildingAttack",
        "BurstHeal",
        "Capsize",
        "ChannelAttack",
        "ChaosAttack",
        "ChargedHandAttack",
        "ChargedRangedAttack",
        "ChargedSpawn",
        "ChopAttack",
        "Convert",
        "DeathBoostDamageBonus",
        "DelayedTransform",
        "DistanceLimiting",
        "DropOff",
        "DwarvenPunt",
        "DynamicLOS",
        "Eat",
        "FlameAttack",
        "FlyingUnitAttack",
        "Footy",
        "FreezeAttack",
        "FreezeTitan",
        "Gather",
        "Gore",
        "HandAttack",
        "Heal",
        "Hunting",
        "IdleDamageBonus",
        "IncreaseDamageWithLikeUnits",
        "IncreaseSpeedWithLikeUnits",
        "JumpAttack",
        "LightningAttack",
        "LonghouseSpeedBonus",
        "MythSelfDestructDivineAttack",
        "MythSelfDestructMundaneAttack",
        "MythSelfDestructMythicalAttack",
        "MythSelfDestructRareAttack",
        "Pacify",
        "PetrificationBonus",
        "Pickup",
        "ProgressiveDamageHigh",
        "ProgressiveDamageLight",
        "Punt",
        "RangedAttack",
        "RangedAttackFlying",
        "RangedAttackMyth",
        "ReincarnationAttack",
        "Repair",
        "SelfDestructAttack",
        "ShockwaveAttack",
        "SpeedBonusDivine",
        "SpeedBonusMundane",
        "SpeedBonusMythical",
        "SpeedBonusRare",
        "TauntAttack",
        "Throw",
        "TitanAttack",
        "Trade",
        "TransfigurationAttack",
      ],
    },
  },
  damagebonus: {
    attributes: {
      type: [
        "AbstractArcher",
        "AbstractArcherShip",
        "AbstractCavalry",
        "AbstractCloseCombatShip",
        "AbstractFarm",
        "AbstractFortress",
        "AbstractInfantry",
        "AbstractSiegeWeapon",
        "AbstractTitan",
        "AbstractVillager",
        "BerryBush",
        "Building",
        "Herdable",
        "Hero",
        "House",
        "HumanSoldier",
        "Huntable",
        "MythUnit",
        "NonConvertableHerdable",
        "SeaSnake",
        "SentryTower",
        "Serpent",
        "Ship",
        "TitanKronos",
        "TownCenter",
        "Tree",
        "WildCrops",
      ],
    },
    content: {
      number: true,
    },
  },
  modifyamount: {
    attributes: {},
    content: {
      number: true,
    },
  },
  modifydamagetype: {
    attributes: {},
    content: {
      string: ["Divine", "Hack", "Pierce"],
    },
  },
  maxrange: {
    attributes: {},
    content: {
      number: true,
    },
  },
  damage: {
    attributes: {
      type: ["Crush", "Divine", "Hack", "Pierce"],
    },
    content: {
      number: true,
    },
  },
  rate: {
    attributes: {
      type: [
        "AbstractFarm",
        "AbstractFishingShip",
        "AbstractTemple",
        "AbstractTownCenter",
        "AbstractWall",
        "All",
        "ArcticWolf",
        "Aurochs",
        "Automaton",
        "Baboon",
        "Bear",
        "BerryBush",
        "BerserkDamageBoost",
        "Boar",
        "Building",
        "Caribou",
        "Chicken",
        "Crocodile",
        "CrownedCrane",
        "Deer",
        "Elephant",
        "Elk",
        "Farm",
        "Favor",
        "FishResource",
        "Food",
        "Gazelle",
        "Giraffe",
        "Gold",
        "GoldResource",
        "Herdable",
        "Hippopotamus",
        "House",
        "Huntable",
        "Hyena",
        "Kraken",
        "Lion",
        "LogicalTypeHealed",
        "LogicalTypePickable",
        "Market",
        "Monkey",
        "NonConvertableHerdable",
        "Obelisk",
        "OxCartBuilding",
        "PolarBear",
        "Rhinoceros",
        "SeaSnake",
        "Taproot",
        "Temple",
        "Tree",
        "Unit",
        "Walrus",
        "WaterBuffalo",
        "Wolf",
        "Wood",
        "Zebra",
      ],
    },
    content: {
      number: true,
    },
  },
  type: {
    attributes: {},
    content: {
      string: ["Attack", "AutoGather", "Build", "DistanceModify", "DropOff", "Heal", "IdleStatBonus", "LikeBonus", "Pickup", "Repair", "Spawn"],
    },
  },
  attackaction: {
    attributes: {},
    content: {
      number: true,
    },
  },
  basedamagecap: {
    attributes: {},
    content: {
      number: true,
    },
  },
  damagearea: {
    attributes: {},
    content: {
      number: true,
    },
  },
  damageflags: {
    attributes: {},
    content: {
      string: ["Enemy", "Nature|Enemy", "Nature|Self|Enemy|Ally"],
    },
  },
  areasortmode: {
    attributes: {},
    content: {
      string: ["Directional", "Radial"],
    },
  },
  impacteffect: {
    attributes: {},
    content: {
      string: [
        "effects\\impacts\\crush",
        "effects\\impacts\\crush_medium",
        "effects\\impacts\\fireball",
        "effects\\impacts\\hack",
        "effects\\impacts\\hack_medium",
        "effects\\impacts\\pierce",
        "effects\\impacts\\pierce_medium",
        "effects\\impacts\\titan",
      ],
    },
  },
  sendunderattackevent: {
    attributes: {},
    content: {
      number: true,
    },
  },
  rof: {
    attributes: {},
    content: {
      number: true,
    },
  },
  projectile: {
    attributes: {},
    content: {
      string: [
        "ProjectileAcidBlobInvisible",
        "ProjectileArrow",
        "ProjectileArrowCentaurAttack",
        "ProjectileArrowFlaming",
        "ProjectileArrowNotFlaming",
        "ProjectileAxeFlaming",
        "ProjectileBallOfFire",
        "ProjectileBallOfFireChimera",
        "ProjectileBallOfFireInvisible",
        "ProjectileBallOfFirePrometheus",
        "ProjectileBallistaShot",
        "ProjectileBoulder",
        "ProjectileCatapultShot",
        "ProjectileChainLightning",
        "ProjectileDraugrArrow",
        "ProjectileFireGiantSpecialAttack",
        "ProjectileFireSiphonFire",
        "ProjectileJavelinFlaming",
        "ProjectileLampadesBolt",
        "ProjectileManticoreBarb",
        "ProjectileMirrorTowerLazer",
        "ProjectileMummyFlies",
        "ProjectileNidhoggInvisible",
        "ProjectileOsirisLightning",
        "ProjectilePetrobolosShot",
        "ProjectilePetsuchosLazer",
        "ProjectilePriestPharaoh",
        "ProjectileRainbowHeart",
        "ProjectileSatyrSpear",
        "ProjectileSatyrSpearSpecialAttack",
        "ProjectileSlingStoneFlaming",
        "ProjectileStymphalianBirdFeathers",
        "ProjectileTrollStone",
        "ProjectileUFOLazer",
        "ProjectileWadjetSpit",
      ],
    },
  },
  dropsitegathering: {
    attributes: {},
    content: {
      number: true,
    },
  },
  defaultattack: {
    attributes: {},
    content: {
      number: true,
    },
  },
  minrate: {
    attributes: {
      type: [
        "AbstractTownCenter",
        "All",
        "ArcticWolf",
        "Aurochs",
        "Baboon",
        "Bear",
        "Boar",
        "Caribou",
        "Chicken",
        "Crocodile",
        "CrownedCrane",
        "Deer",
        "Elephant",
        "Elk",
        "Gazelle",
        "Giraffe",
        "Hippopotamus",
        "Hyena",
        "Lion",
        "Monkey",
        "NavalUnit",
        "PolarBear",
        "Rhinoceros",
        "Walrus",
        "WaterBuffalo",
        "Wolf",
        "Zebra",
      ],
    },
    content: {
      number: true,
    },
  },
  minrange: {
    attributes: {},
    content: {
      number: true,
    },
  },
  numberprojectiles: {
    attributes: {},
    content: {
      number: true,
    },
  },
  scalebycontainedunittype: {
    attributes: {},
    content: {
      rate: {
        attributes: {
          type: [
            "AbstractFarm",
            "AbstractFishingShip",
            "AbstractTemple",
            "AbstractTownCenter",
            "AbstractWall",
            "All",
            "ArcticWolf",
            "Aurochs",
            "Automaton",
            "Baboon",
            "Bear",
            "BerryBush",
            "BerserkDamageBoost",
            "Boar",
            "Building",
            "Caribou",
            "Chicken",
            "Crocodile",
            "CrownedCrane",
            "Deer",
            "Elephant",
            "Elk",
            "Farm",
            "Favor",
            "FishResource",
            "Food",
            "Gazelle",
            "Giraffe",
            "Gold",
            "GoldResource",
            "Herdable",
            "Hippopotamus",
            "House",
            "Huntable",
            "Hyena",
            "Kraken",
            "Lion",
            "LogicalTypeHealed",
            "LogicalTypePickable",
            "Market",
            "Monkey",
            "NonConvertableHerdable",
            "Obelisk",
            "OxCartBuilding",
            "PolarBear",
            "Rhinoceros",
            "SeaSnake",
            "Taproot",
            "Temple",
            "Tree",
            "Unit",
            "Walrus",
            "WaterBuffalo",
            "Wolf",
            "Wood",
            "Zebra",
          ],
        },
        content: {
          number: true,
        },
      },
    },
  },
  onhiteffect: {
    attributes: {
      type: [
        "AnimOverride",
        "Attach",
        "Boost",
        "DamageOverTime",
        "Freeze",
        "Lifesteal",
        "MutateNature",
        "ProgFreeze",
        "ProgFreezeROF",
        "ProgFreezeSpeed",
        "ProgShading",
        "Pull",
        "Reincarnation",
        "SelfModify",
        "Shading",
        "ShadingFade",
        "Snare",
        "StatModify",
        "Stun",
        "Throw",
        "TreeFlatten",
      ],
      freezetype: ["StoneDamage", "default"],
      duration: [
        "1.000000",
        "1.50",
        "10.0",
        "10.000000",
        "11.0",
        "15.000000",
        "17.0",
        "2",
        "20.000000",
        "3.00",
        "30.000000",
        "4.00",
        "5",
        "5.0",
        "5.000000",
        "6.00",
        "6.000000",
        "7.000000",
        "8.0",
        "8.000000",
        "8.2",
      ],
      damage: ["300.000000", "400.000000"],
      rate: ["0.15", "0.20", "0.40", "0.5", "0.60", "0.65", "1.500000", "4.00000", "4.000000", "40.000000", "8.000000"],
      targetunittype: [
        "Building",
        "EconomicUnit",
        "Herdable",
        "Hero",
        "HumanSoldier",
        "Huntable",
        "LogicalTypeHandUnitsAttack",
        "LogicalTypeMythUnitNotTitan",
        "LogicalTypeShipNotHero",
        "LogicalTypeVillagerNotHero",
        "NonConvertableHerdable",
        "Ship",
        "Tree",
        "Unit",
        "WildCrops",
      ],
      dmgtype: ["Crush", "Divine", "Pierce"],
      proto: ["Chicken", "MinionReincarnated", "VFXBleed", "VFXCaladriaPacify", "VFXChaos", "VFXCold", "VFXFenirTreeFire", "VFXPoison"],
      attachbone: ["spine", "vfx_top"],
      radius: ["10.00000", "10.000000", "12.000000"],
      shadingtype: ["burning", "frost"],
      fadetime: ["1.0"],
      factor: ["1.1", "1.4"],
      active: ["0"],
      freezeduration: ["20.0"],
      anim: ["Burning"],
      deadonly: ["1"],
    },
    content: {
      modify: {
        attributes: {
          type: ["ArmorSpecific", "Chaos", "Damage", "ForcedTarget", "ROF", "Speed"],
          dmgtype: ["Crush", "Hack", "Pierce"],
        },
        content: {
          number: true,
        },
      },
      modifyramp: {
        attributes: {
          type: ["Damage", "Speed"],
          init: ["1.500000"],
          final: ["1.000000"],
        },
        content: {},
      },
    },
  },
  modify: {
    attributes: {
      type: ["ArmorSpecific", "Chaos", "Damage", "ForcedTarget", "ROF", "Speed"],
      dmgtype: ["Crush", "Hack", "Pierce"],
    },
    content: {
      number: true,
    },
  },
  workonfrozenunits: {
    attributes: {},
    content: {
      number: true,
    },
  },
  coneareaangle: {
    attributes: {},
    content: {
      number: true,
    },
  },
  outerdamageareadistance: {
    attributes: {},
    content: {
      number: true,
    },
  },
  outerdamageareafactor: {
    attributes: {},
    content: {
      number: true,
    },
  },
  fulldamagemaintarget: {
    attributes: {},
    content: {
      number: true,
    },
  },
  maxsizeclass: {
    attributes: {},
    content: {
      number: true,
    },
  },
  perfectaccuracy: {
    attributes: {},
    content: {
      number: true,
    },
  },
  instantballistics: {
    attributes: {},
    content: {
      number: true,
    },
  },
  volleymode: {
    attributes: {},
    content: {
      number: true,
    },
  },
  throw: {
    attributes: {},
    content: {
      number: true,
    },
  },
  impactforcemin: {
    attributes: {},
    content: {
      string: ["200.0f", "300.0f"],
    },
  },
  impactforcemax: {
    attributes: {},
    content: {
      string: ["400.0f", "600.0f"],
    },
  },
  impactlaunchangle: {
    attributes: {},
    content: {
      number: true,
    },
  },
  trackrating: {
    attributes: {},
    content: {
      number: true,
    },
  },
  selfdestruct: {
    attributes: {},
    content: {
      number: true,
    },
  },
  slowhealmultiplier: {
    attributes: {},
    content: {
      number: true,
    },
  },
  conversionprotoid: {
    attributes: {
      srctype: [
        "ArcticWolf",
        "Aurochs",
        "Baboon",
        "Bear",
        "Boar",
        "Caribou",
        "Chicken",
        "Crocodile",
        "CrownedCrane",
        "Deer",
        "Elephant",
        "Elk",
        "Gazelle",
        "Giraffe",
        "Hippopotamus",
        "Hyena",
        "Lion",
        "Monkey",
        "PolarBear",
        "Rhinoceros",
        "Walrus",
        "WaterBuffalo",
        "Wolf",
        "Zebra",
      ],
    },
    content: {
      string: [
        "ArcticWolfOfSet",
        "AurochsOfSet",
        "BaboonOfSet",
        "BearOfSet",
        "BoarOfSet",
        "CaribouOfSet",
        "ChickenOfSet",
        "CrocodileOfSet",
        "CrownedCraneOfSet",
        "DeerOfSet",
        "ElephantOfSet",
        "ElkOfSet",
        "GazelleOfSet",
        "GiraffeOfSet",
        "HippopotamusOfSet",
        "HyenaOfSet",
        "LionOfSet",
        "MonkeyOfSet",
        "PolarBearOfSet",
        "RhinocerosOfSet",
        "WalrusOfSet",
        "WaterBuffaloOfSet",
        "WolfOfSet",
        "ZebraOfSet",
      ],
    },
  },
  active: {
    attributes: {},
    content: {
      number: true,
    },
  },
  numberbounces: {
    attributes: {},
    content: {
      number: true,
    },
  },
  attachprotounit: {
    attributes: {},
    content: {
      string: ["SunRayRevealer"],
    },
  },
  modifyduration: {
    attributes: {},
    content: {
      number: true,
    },
  },
  modifyprotoid: {
    attributes: {},
    content: {
      string: ["BerserkDamageBoost", "Roc", "RocLanded"],
    },
  },
  attachvalidtargetonly: {
    attributes: {},
    content: {
      number: true,
    },
  },
  displayednumberprojectiles: {
    attributes: {},
    content: {
      number: true,
    },
  },
  shockstun: {
    attributes: {},
    content: {
      number: true,
    },
  },
  stunduration: {
    attributes: {},
    content: {
      number: true,
    },
  },
  persistent: {
    attributes: {},
    content: {
      number: true,
    },
  },
  animationrate: {
    attributes: {},
    content: {
      number: true,
    },
  },
  chargeaction: {
    attributes: {},
    content: {
      number: true,
    },
  },
  forcespawn: {
    attributes: {},
    content: {
      number: true,
    },
  },
  anim: {
    attributes: {},
    content: {
      string: ["Build"],
    },
  },
  typedmaxrange: {
    attributes: {
      type: ["Dock"],
    },
    content: {
      number: true,
    },
  },
  modifytype: {
    attributes: {},
    content: {
      string: ["ArmorSpecific", "Damage", "LOS", "Speed"],
    },
  },
  modifyratecap: {
    attributes: {},
    content: {
      number: true,
    },
  },
  modifybase: {
    attributes: {},
    content: {
      number: true,
    },
  },
  modifydecay: {
    attributes: {},
    content: {
      number: true,
    },
  },
  modifyratebytype: {
    attributes: {},
    content: {
      number: true,
    },
  },
  targetground: {
    attributes: {},
    content: {
      number: true,
    },
  },
  throwdistancemin: {
    attributes: {},
    content: {
      number: true,
    },
  },
  throwdistancemax: {
    attributes: {},
    content: {
      number: true,
    },
  },
  throwmaxheight: {
    attributes: {},
    content: {
      number: true,
    },
  },
  throwvelocity: {
    attributes: {},
    content: {
      number: true,
    },
  },
  modifyramp: {
    attributes: {
      type: ["Damage", "Speed"],
      init: ["1.500000"],
      final: ["1.000000"],
    },
    content: {},
  },
  modelattachment: {
    attributes: {},
    content: {
      string: ["vfx\\glow\\arkantos_boost.xml", "vfx\\glow\\einheri_boost.xml"],
    },
  },
  modelattachmentbone: {
    attributes: {},
    content: {
      string: ["bonethatdoesntexist"],
    },
  },
  passthroughbuildings: {
    attributes: {},
    content: {
      number: true,
    },
  },
  maxheight: {
    attributes: {},
    content: {
      number: true,
    },
  },
  maxspread: {
    attributes: {},
    content: {
      number: true,
    },
  },
  spreadfactor: {
    attributes: {},
    content: {
      number: true,
    },
  },
  forceareaattackcenter: {
    attributes: {},
    content: {
      number: true,
    },
  },
  modifymultiplier: {
    attributes: {},
    content: {
      number: true,
    },
  },
  modifytargetlimit: {
    attributes: {},
    content: {
      number: true,
    },
  },
  directionaldamagerefangle: {
    attributes: {},
    content: {
      number: true,
    },
  },
  allydamagemultiplier: {
    attributes: {},
    content: {
      number: true,
    },
  },
  donotignoredead: {
    attributes: {},
    content: {
      number: true,
    },
  },
  exclusive: {
    attributes: {},
    content: {
      number: true,
    },
  },
  passthrough: {
    attributes: {},
    content: {
      number: true,
    },
  },
  launchpoint: {
    attributes: {},
    content: {
      string: ["ChargeAttackLaunchPoint"],
    },
  },
  activeifcontainsunits: {
    attributes: {},
    content: {
      number: true,
    },
  },
  containscalebasedamage: {
    attributes: {},
    content: {
      number: true,
    },
  },
  includenature: {
    attributes: {},
    content: {
      number: true,
    },
  },
  cannotbeconvertedbyallies: {
    attributes: {},
    content: {
      number: true,
    },
  },
  homingballistics: {
    attributes: {},
    content: {
      number: true,
    },
  },
})
