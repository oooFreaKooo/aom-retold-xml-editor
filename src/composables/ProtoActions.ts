// Define a recursive Tag type that can be a FullTag, ContentTag, or AttributeTag
export type Tag = FullTag | ContentTag | AttributeTag

// A tag that has both attributes and content
export interface FullTag {
    attributes: Record<string, string[] | number[] | boolean | string | Tag>
    content: Record<string, string[] | number[] | boolean | string | Tag>
}

// A tag that has only content
export interface ContentTag {
    content: Record<string, string[] | number[] | boolean | string | Tag>
}

// A tag that has only attributes
export interface AttributeTag {
    attributes: Record<string, string[] | number[] | boolean | string | Tag>
}

// ProtoActionField can now handle nested Tag structures
export interface ProtoActionField {
    label: string
    type: Tag
    key: string
}

export const protoActionNameAttributes = ref({
    stringid: ["STR_ACTION_CHARGE_SPAWN", "STR_ACTION_PETRIFICATION", "STR_ACTION_PICKUP", "STR_TECH_FURY_OF_THE_FALLEN_NAME"],
    notactics: [""],
}).value

export const protoActionNameContent = ref({
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
}).value

export const protoActionsTags = ref({
    name: {
        attributes: protoActionNameAttributes,
        content: protoActionNameContent,
    } as FullTag,

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
    } as FullTag,

    modifyamount: {
        content: {
            number: true,
        },
    } as ContentTag,

    modifydamagetype: {
        content: {
            string: ["Divine", "Hack", "Pierce"],
        },
    } as ContentTag,

    maxrange: {
        content: {
            number: true,
        },
    } as ContentTag,

    damage: {
        attributes: {
            type: ["Crush", "Divine", "Hack", "Pierce"],
        },
        content: {
            number: true,
        },
    } as FullTag,

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
    } as FullTag,

    type: {
        content: {
            string: [
                "Attack",
                "AutoGather",
                "Build",
                "DistanceModify",
                "DropOff",
                "Heal",
                "IdleStatBonus",
                "LikeBonus",
                "Pickup",
                "Repair",
                "Spawn",
            ],
        },
    } as ContentTag,

    attackaction: {
        content: {
            number: true,
        },
    } as ContentTag,

    basedamagecap: {
        content: {
            number: true,
        },
    } as ContentTag,

    damageflags: {
        content: {
            string: ["Enemy", "Nature|Enemy", "Nature|Self|Enemy|Ally"],
        },
    } as ContentTag,

    damagearea: {
        content: {
            number: true,
        },
    } as ContentTag,

    impacteffect: {
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
    } as ContentTag,

    sendunderattackevent: {
        content: {
            number: true,
        },
    } as ContentTag,

    rof: {
        content: {
            number: true,
        },
    } as ContentTag,

    projectile: {
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
    } as ContentTag,

    dropsitegathering: {
        content: {
            number: true,
        },
    } as ContentTag,

    defaultattack: {
        content: {
            number: true,
        },
    } as ContentTag,

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
    } as FullTag,

    minrange: {
        content: {
            number: true,
        },
    } as ContentTag,

    numberprojectiles: {
        content: {
            number: true,
        },
    } as ContentTag,

    scalebycontainedunittype: {
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
            } as FullTag,
        },
    } as ContentTag,

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
            } as FullTag,
            modifyramp: {
                attributes: {
                    type: ["Damage", "Speed"],
                    init: ["1.500000"],
                    final: ["1.000000"],
                },
                content: {},
            } as FullTag,
        },
    } as FullTag,

    modify: {
        attributes: {
            type: ["ArmorSpecific", "Chaos", "Damage", "ForcedTarget", "ROF", "Speed"],
            dmgtype: ["Crush", "Hack", "Pierce"],
        },
        content: {
            number: true,
        },
    } as FullTag,

    workonfrozenunits: {
        content: {
            number: true,
        },
    } as ContentTag,

    coneareaangle: {
        content: {
            number: true,
        },
    } as ContentTag,

    outerdamageareadistance: {
        content: {
            number: true,
        },
    } as ContentTag,

    outerdamageareafactor: {
        content: {
            number: true,
        },
    } as ContentTag,

    fulldamagemaintarget: {
        content: {
            number: true,
        },
    } as ContentTag,

    maxsizeclass: {
        content: {
            number: true,
        },
    } as ContentTag,

    perfectaccuracy: {
        content: {
            number: true,
        },
    } as ContentTag,

    instantballistics: {
        content: {
            number: true,
        },
    } as ContentTag,

    volleymode: {
        content: {
            number: true,
        },
    } as ContentTag,

    throw: {
        content: {
            number: true,
        },
    } as ContentTag,

    impactforcemin: {
        content: {
            string: ["200.0f", "300.0f"],
        },
    } as ContentTag,

    impactforcemax: {
        content: {
            string: ["400.0f", "600.0f"],
        },
    } as ContentTag,

    impactlaunchangle: {
        content: {
            number: true,
        },
    } as ContentTag,

    trackrating: {
        content: {
            number: true,
        },
    } as ContentTag,

    selfdestruct: {
        content: {
            number: true,
        },
    } as ContentTag,

    slowhealmultiplier: {
        content: {
            number: true,
        },
    } as ContentTag,

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
    } as FullTag,

    active: {
        content: {
            number: true,
        },
    } as ContentTag,

    numberbounces: {
        content: {
            number: true,
        },
    } as ContentTag,

    attachprotounit: {
        content: {
            string: ["SunRayRevealer"],
        },
    } as ContentTag,

    modifyduration: {
        content: {
            number: true,
        },
    } as ContentTag,

    modifyprotoid: {
        content: {
            string: ["BerserkDamageBoost", "Roc", "RocLanded"],
        },
    } as ContentTag,

    attachvalidtargetonly: {
        content: {
            number: true,
        },
    } as ContentTag,

    displayednumberprojectiles: {
        content: {
            number: true,
        },
    } as ContentTag,

    shockstun: {
        content: {
            number: true,
        },
    } as ContentTag,

    stunduration: {
        content: {
            number: true,
        },
    } as ContentTag,

    persistent: {
        content: {
            number: true,
        },
    } as ContentTag,

    animationrate: {
        content: {
            number: true,
        },
    } as ContentTag,

    chargeaction: {
        content: {
            number: true,
        },
    } as ContentTag,

    forcespawn: {
        content: {
            number: true,
        },
    } as ContentTag,

    anim: {
        content: {
            string: ["Build"],
        },
    } as ContentTag,

    typedmaxrange: {
        attributes: {
            type: ["Dock"],
        },
        content: {
            number: true,
        },
    } as FullTag,

    modifytype: {
        content: {
            string: ["ArmorSpecific", "Damage", "LOS", "Speed"],
        },
    } as ContentTag,

    modifyratecap: {
        content: {
            number: true,
        },
    } as ContentTag,

    modifybase: {
        content: {
            number: true,
        },
    } as ContentTag,

    modifydecay: {
        content: {
            number: true,
        },
    } as ContentTag,

    modifyratebytype: {
        content: {
            number: true,
        },
    } as ContentTag,

    targetground: {
        content: {
            number: true,
        },
    } as ContentTag,

    throwdistancemin: {
        content: {
            number: true,
        },
    } as ContentTag,

    throwdistancemax: {
        content: {
            number: true,
        },
    } as ContentTag,

    throwmaxheight: {
        content: {
            number: true,
        },
    } as ContentTag,

    throwvelocity: {
        content: {
            number: true,
        },
    } as ContentTag,

    modifyramp: {
        attributes: {
            type: ["Damage", "Speed"],
            init: ["1.500000"],
            final: ["1.000000"],
        },
        content: {},
    } as FullTag,

    modelattachment: {
        content: {
            string: ["vfx\\glow\\arkantos_boost.xml", "vfx\\glow\\einheri_boost.xml"],
        },
    } as ContentTag,

    modelattachmentbone: {
        content: {
            string: ["bonethatdoesntexist"],
        },
    } as ContentTag,

    passthroughbuildings: {
        content: {
            number: true,
        },
    } as ContentTag,

    maxheight: {
        content: {
            number: true,
        },
    } as ContentTag,

    maxspread: {
        content: {
            number: true,
        },
    } as ContentTag,

    spreadfactor: {
        content: {
            number: true,
        },
    } as ContentTag,

    forceareaattackcenter: {
        content: {
            number: true,
        },
    } as ContentTag,

    modifymultiplier: {
        content: {
            number: true,
        },
    } as ContentTag,

    modifytargetlimit: {
        content: {
            number: true,
        },
    } as ContentTag,

    directionaldamagerefangle: {
        content: {
            number: true,
        },
    } as ContentTag,

    allydamagemultiplier: {
        content: {
            number: true,
        },
    } as ContentTag,

    donotignoredead: {
        content: {
            number: true,
        },
    } as ContentTag,

    exclusive: {
        content: {
            number: true,
        },
    } as ContentTag,

    passthrough: {
        content: {
            number: true,
        },
    } as ContentTag,

    launchpoint: {
        content: {
            string: ["ChargeAttackLaunchPoint"],
        },
    } as ContentTag,

    activeifcontainsunits: {
        content: {
            number: true,
        },
    } as ContentTag,

    containscalebasedamage: {
        content: {
            number: true,
        },
    } as ContentTag,

    includenature: {
        content: {
            number: true,
        },
    } as ContentTag,

    cannotbeconvertedbyallies: {
        content: {
            number: true,
        },
    } as ContentTag,

    homingballistics: {
        content: {
            number: true,
        },
    } as ContentTag,
}).value
