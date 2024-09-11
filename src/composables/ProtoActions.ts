// Allow individual strings and numbers, in addition to arrays and nested tags
export type TagContentValue = string | number | boolean | string[] | number[] | Tag

// A tag that has both attributes and content
export interface FullTag {
    attributes: Record<string, TagContentValue>
    content: Record<string, TagContentValue>
}

// A tag that has only content
export interface ContentTag {
    content: Record<string, TagContentValue>
}

// A tag that has only attributes
export interface AttributeTag {
    attributes: Record<string, TagContentValue>
}

// Recursive Tag type
export type Tag = FullTag | ContentTag | AttributeTag

// ProtoActionField can now handle nested Tag structures
export interface ProtoActionField {
    label: string
    type: Tag
    key: string
}

export const protoActionsTags = ref({
    name: {
        attributes: protoActionNameAttributes,
        content: protoActionNameContent,
    } as FullTag,

    damagebonus: {
        attributes: protoActionDamagebonusAttributes,
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
            string: protoActioDamageTypes,
        },
    } as ContentTag,

    maxrange: {
        content: {
            number: true,
        },
    } as ContentTag,

    damage: {
        attributes: {
            type: protoActioDamageTypes,
        },
        content: {
            number: true,
        },
    } as FullTag,

    rate: {
        attributes: protoActionRateAttributes,
        content: {
            number: true,
        },
    } as FullTag,

    type: {
        content: {
            string: [
                'Attack',
                'AutoGather',
                'Build',
                'DistanceModify',
                'DropOff',
                'Heal',
                'IdleStatBonus',
                'LikeBonus',
                'Pickup',
                'Repair',
                'Spawn',
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
            string: protoActioDamageFlags,
        },
    } as ContentTag,

    damagearea: {
        content: {
            number: true,
        },
    } as ContentTag,

    impacteffect: {
        content: {
            string: protoActioImpacteffects,
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
        content: protoActionProjectileContent,
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
        attributes: protoActionMinrateAttributes,
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
                attributes: protoActionscalebycontainedunittypeContentRateAttributes,
                content: {
                    number: true,
                },
            } as FullTag,
        },
    } as ContentTag,

    onhiteffect: {
        attributes: {
            type: [
                'AnimOverride',
                'Attach',
                'Boost',
                'DamageOverTime',
                'Freeze',
                'Lifesteal',
                'MutateNature',
                'ProgFreeze',
                'ProgFreezeROF',
                'ProgFreezeSpeed',
                'ProgShading',
                'Pull',
                'Reincarnation',
                'SelfModify',
                'Shading',
                'ShadingFade',
                'Snare',
                'StatModify',
                'Stun',
                'Throw',
                'TreeFlatten',
            ],
            freezetype: ['StoneDamage', 'default'],
            duration: '0',
            damage: '0',
            rate: '0',
            targetunittype: [
                'Building',
                'EconomicUnit',
                'Herdable',
                'Hero',
                'HumanSoldier',
                'Huntable',
                'LogicalTypeHandUnitsAttack',
                'LogicalTypeMythUnitNotTitan',
                'LogicalTypeShipNotHero',
                'LogicalTypeVillagerNotHero',
                'NonConvertableHerdable',
                'Ship',
                'Tree',
                'Unit',
                'WildCrops',
            ],
            dmgtype: [
                'Crush',
                'Divine',
                'Pierce',
            ],
            proto: [
                'Chicken',
                'MinionReincarnated',
                'VFXBleed',
                'VFXCaladriaPacify',
                'VFXChaos',
                'VFXCold',
                'VFXFenirTreeFire',
                'VFXPoison',
            ],
            attachbone: ['spine', 'vfx_top'],
            radius: '0',
            shadingtype: ['burning', 'frost'],
            fadetime: '0',
            factor: '0',
            active: '0',
            freezeduration: '0',
            anim: ['Burning'],
            deadonly: '0',
        },
        content: {
            modify: {
                attributes: {
                    type: [
                        'ArmorSpecific',
                        'Chaos',
                        'Damage',
                        'ForcedTarget',
                        'ROF',
                        'Speed',
                    ],
                    dmgtype: [
                        'Crush',
                        'Hack',
                        'Pierce',
                    ],
                },
                content: {
                    number: '0',
                },
            } as FullTag,
            modifyramp: {
                attributes: {
                    type: ['Damage', 'Speed'],
                    init: '0',
                    final: '0',
                },
                content: {},
            } as FullTag,
        },
    } as FullTag,

    modify: {
        attributes: {
            type: [
                'ArmorSpecific',
                'Chaos',
                'Damage',
                'ForcedTarget',
                'ROF',
                'Speed',
            ],
            dmgtype: [
                'Crush',
                'Hack',
                'Pierce',
            ],
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
            string: '0',
        },
    } as ContentTag,

    impactforcemax: {
        content: {
            string: '0',
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
        attributes: protoActionConversionprotoidAttributes,
        content: protoActionConversionprotoidContent,
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
            string: ['SunRayRevealer'],
        },
    } as ContentTag,

    modifyduration: {
        content: {
            number: true,
        },
    } as ContentTag,

    modifyprotoid: {
        content: {
            string: [
                'BerserkDamageBoost',
                'Roc',
                'RocLanded',
            ],
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
            string: ['Build'],
        },
    } as ContentTag,

    typedmaxrange: {
        attributes: {
            type: ['Dock'],
        },
        content: {
            number: true,
        },
    } as FullTag,

    modifytype: {
        content: {
            string: [
                'ArmorSpecific',
                'Damage',
                'LOS',
                'Speed',
            ],
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
            type: ['Damage', 'Speed'],
            init: '0',
            final: '0',
        },
        content: {},
    } as FullTag,

    modelattachment: {
        content: {
            string: ['vfx\\glow\\arkantos_boost.xml', 'vfx\\glow\\einheri_boost.xml'],
        },
    } as ContentTag,

    modelattachmentbone: {
        content: {
            string: ['bonethatdoesntexist'],
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
            string: ['ChargeAttackLaunchPoint'],
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
