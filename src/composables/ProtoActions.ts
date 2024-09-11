// Allow individual strings and numbers, in addition to arrays and nested tags
export type TagContentValue = string | number | boolean | string[] | number[] | Tag | null

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
            freezetype: [ 'StoneDamage', 'default' ],
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
                'Crush', 'Divine', 'Pierce',
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
            attachbone: [ 'spine', 'vfx_top' ],
            radius: '0',
            shadingtype: [ 'burning', 'frost' ],
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
                        'Crush', 'Hack', 'Pierce',
                    ],
                },
                content: {
                    number: '0',
                },
            } as FullTag,
            modifyramp: {
                attributes: {
                    type: [ 'Damage', 'Speed' ],
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
                'Crush', 'Hack', 'Pierce',
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

    areasortmode: {
        content: {
            string: [ 'Directional', 'Radial' ],
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
                'BerserkDamageBoost', 'Roc', 'RocLanded',
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
                'ArmorSpecific', 'Damage', 'LOS', 'Speed',
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
            type: [ 'Damage', 'Speed' ],
            init: '0',
            final: '0',
        },
        content: {},
    } as FullTag,

    modelattachment: {
        content: {
            string: [ 'vfx\\glow\\arkantos_boost.xml', 'vfx\\glow\\einheri_boost.xml' ],
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

export const protoActionsFields = ref<ProtoActionField[]>([
    {
        label: 'Name',
        type: protoActionsTags.name,
        key: 'name',
    },
    {
        label: 'Damage Bonus',
        type: protoActionsTags.damagebonus,
        key: 'damagebonus',
    },
    {
        label: 'Modify Amount',
        type: protoActionsTags.modifyamount,
        key: 'modifyamount',
    },
    {
        label: 'Modify Damage Type',
        type: protoActionsTags.modifydamagetype,
        key: 'modifydamagetype',
    },
    {
        label: 'Max Range',
        type: protoActionsTags.maxrange,
        key: 'maxrange',
    },
    {
        label: 'Damage',
        type: protoActionsTags.damage,
        key: 'damage',
    },
    {
        label: 'Rate',
        type: protoActionsTags.rate,
        key: 'rate',
    },
    {
        label: 'Type',
        type: protoActionsTags.type,
        key: 'type',
    },
    {
        label: 'Attack Action',
        type: protoActionsTags.attackaction,
        key: 'attackaction',
    },
    {
        label: 'Base Damage Cap',
        type: protoActionsTags.basedamagecap,
        key: 'basedamagecap',
    },
    {
        label: 'Damage Flags',
        type: protoActionsTags.damageflags,
        key: 'damageflags',
    },
    {
        label: 'Damage Area',
        type: protoActionsTags.damagearea,
        key: 'damagearea',
    },
    {
        label: 'Impact Effect',
        type: protoActionsTags.impacteffect,
        key: 'impacteffect',
    },
    {
        label: 'Send Under Attack Event',
        type: protoActionsTags.sendunderattackevent,
        key: 'sendunderattackevent',
    },
    {
        label: 'Rate of Fire (ROF)',
        type: protoActionsTags.rof,
        key: 'rof',
    },
    {
        label: 'Projectile',
        type: protoActionsTags.projectile,
        key: 'projectile',
    },
    {
        label: 'Drop Site Gathering',
        type: protoActionsTags.dropsitegathering,
        key: 'dropsitegathering',
    },
    {
        label: 'Default Attack',
        type: protoActionsTags.defaultattack,
        key: 'defaultattack',
    },
    {
        label: 'Min Rate',
        type: protoActionsTags.minrate,
        key: 'minrate',
    },
    {
        label: 'Min Range',
        type: protoActionsTags.minrange,
        key: 'minrange',
    },
    {
        label: 'Number of Projectiles',
        type: protoActionsTags.numberprojectiles,
        key: 'numberprojectiles',
    },
    {
        label: 'Scale by Contained Unit Type',
        type: protoActionsTags.scalebycontainedunittype,
        key: 'scalebycontainedunittype',
    },
    {
        label: 'On Hit Effect',
        type: protoActionsTags.onhiteffect,
        key: 'onhiteffect',
    },
    {
        label: 'Modify',
        type: protoActionsTags.modify,
        key: 'modify',
    },
    {
        label: 'Work on Frozen Units',
        type: protoActionsTags.workonfrozenunits,
        key: 'workonfrozenunits',
    },
    {
        label: 'Cone Area Angle',
        type: protoActionsTags.coneareaangle,
        key: 'coneareaangle',
    },
    {
        label: 'Outer Damage Area Distance',
        type: protoActionsTags.outerdamageareadistance,
        key: 'outerdamageareadistance',
    },
    {
        label: 'Outer Damage Area Factor',
        type: protoActionsTags.outerdamageareafactor,
        key: 'outerdamageareafactor',
    },
    {
        label: 'Full Damage Main Target',
        type: protoActionsTags.fulldamagemaintarget,
        key: 'fulldamagemaintarget',
    },
    {
        label: 'Max Size Class',
        type: protoActionsTags.maxsizeclass,
        key: 'maxsizeclass',
    },
    {
        label: 'Perfect Accuracy',
        type: protoActionsTags.perfectaccuracy,
        key: 'perfectaccuracy',
    },
    {
        label: 'Instant Ballistics',
        type: protoActionsTags.instantballistics,
        key: 'instantballistics',
    },
    {
        label: 'Volley Mode',
        type: protoActionsTags.volleymode,
        key: 'volleymode',
    },
    {
        label: 'Throw',
        type: protoActionsTags.throw,
        key: 'throw',
    },
    {
        label: 'Impact Force Min',
        type: protoActionsTags.impactforcemin,
        key: 'impactforcemin',
    },
    {
        label: 'Impact Force Max',
        type: protoActionsTags.impactforcemax,
        key: 'impactforcemax',
    },
    {
        label: 'Impact Launch Angle',
        type: protoActionsTags.impactlaunchangle,
        key: 'impactlaunchangle',
    },
    {
        label: 'Track Rating',
        type: protoActionsTags.trackrating,
        key: 'trackrating',
    },
    {
        label: 'Self Destruct',
        type: protoActionsTags.selfdestruct,
        key: 'selfdestruct',
    },
    {
        label: 'Slow Heal Multiplier',
        type: protoActionsTags.slowhealmultiplier,
        key: 'slowhealmultiplier',
    },
    {
        label: 'Conversion Proto ID',
        type: protoActionsTags.conversionprotoid,
        key: 'conversionprotoid',
    },
    {
        label: 'Active',
        type: protoActionsTags.active,
        key: 'active',
    },
    {
        label: 'Number of Bounces',
        type: protoActionsTags.numberbounces,
        key: 'numberbounces',
    },
    {
        label: 'Attach Proto Unit',
        type: protoActionsTags.attachprotounit,
        key: 'attachprotounit',
    },
    {
        label: 'Modify Duration',
        type: protoActionsTags.modifyduration,
        key: 'modifyduration',
    },
    {
        label: 'Modify Proto ID',
        type: protoActionsTags.modifyprotoid,
        key: 'modifyprotoid',
    },
    {
        label: 'Attach Valid Target Only',
        type: protoActionsTags.attachvalidtargetonly,
        key: 'attachvalidtargetonly',
    },
    {
        label: 'Displayed Number Projectiles',
        type: protoActionsTags.displayednumberprojectiles,
        key: 'displayednumberprojectiles',
    },
    {
        label: 'Shock Stun',
        type: protoActionsTags.shockstun,
        key: 'shockstun',
    },
    {
        label: 'Stun Duration',
        type: protoActionsTags.stunduration,
        key: 'stunduration',
    },
    {
        label: 'Persistent',
        type: protoActionsTags.persistent,
        key: 'persistent',
    },
    {
        label: 'Animation Rate',
        type: protoActionsTags.animationrate,
        key: 'animationrate',
    },
    {
        label: 'Charge Action',
        type: protoActionsTags.chargeaction,
        key: 'chargeaction',
    },
    {
        label: 'Force Spawn',
        type: protoActionsTags.forcespawn,
        key: 'forcespawn',
    },
    {
        label: 'Anim',
        type: protoActionsTags.anim,
        key: 'anim',
    },
    {
        label: 'Typed Max Range',
        type: protoActionsTags.typedmaxrange,
        key: 'typedmaxrange',
    },
    {
        label: 'Modify Type',
        type: protoActionsTags.modifytype,
        key: 'modifytype',
    },
    {
        label: 'Modify Rate Cap',
        type: protoActionsTags.modifyratecap,
        key: 'modifyratecap',
    },
    {
        label: 'Modify Base',
        type: protoActionsTags.modifybase,
        key: 'modifybase',
    },
    {
        label: 'Modify Decay',
        type: protoActionsTags.modifydecay,
        key: 'modifydecay',
    },
    {
        label: 'Modify Rate by Type',
        type: protoActionsTags.modifyratebytype,
        key: 'modifyratebytype',
    },
    {
        label: 'Target Ground',
        type: protoActionsTags.targetground,
        key: 'targetground',
    },
    {
        label: 'Throw Distance Min',
        type: protoActionsTags.throwdistancemin,
        key: 'throwdistancemin',
    },
    {
        label: 'Throw Distance Max',
        type: protoActionsTags.throwdistancemax,
        key: 'throwdistancemax',
    },
    {
        label: 'Throw Max Height',
        type: protoActionsTags.throwmaxheight,
        key: 'throwmaxheight',
    },
    {
        label: 'Throw Velocity',
        type: protoActionsTags.throwvelocity,
        key: 'throwvelocity',
    },
    {
        label: 'Modify Ramp',
        type: protoActionsTags.modifyramp,
        key: 'modifyramp',
    },
    {
        label: 'Model Attachment',
        type: protoActionsTags.modelattachment,
        key: 'modelattachment',
    },
    {
        label: 'Model Attachment Bone',
        type: protoActionsTags.modelattachmentbone,
        key: 'modelattachmentbone',
    },
    {
        label: 'Pass Through Buildings',
        type: protoActionsTags.passthroughbuildings,
        key: 'passthroughbuildings',
    },
    {
        label: 'Max Height',
        type: protoActionsTags.maxheight,
        key: 'maxheight',
    },
    {
        label: 'Max Spread',
        type: protoActionsTags.maxspread,
        key: 'maxspread',
    },
    {
        label: 'Spread Factor',
        type: protoActionsTags.spreadfactor,
        key: 'spreadfactor',
    },
    {
        label: 'Force Area Attack Center',
        type: protoActionsTags.forceareaattackcenter,
        key: 'forceareaattackcenter',
    },
    {
        label: 'Modify Multiplier',
        type: protoActionsTags.modifymultiplier,
        key: 'modifymultiplier',
    },
    {
        label: 'Modify Target Limit',
        type: protoActionsTags.modifytargetlimit,
        key: 'modifytargetlimit',
    },
    {
        label: 'Directional Damage Ref Angle',
        type: protoActionsTags.directionaldamagerefangle,
        key: 'directionaldamagerefangle',
    },
    {
        label: 'Ally Damage Multiplier',
        type: protoActionsTags.allydamagemultiplier,
        key: 'allydamagemultiplier',
    },
    {
        label: 'Do Not Ignore Dead',
        type: protoActionsTags.donotignoredead,
        key: 'donotignoredead',
    },
    {
        label: 'Exclusive',
        type: protoActionsTags.exclusive,
        key: 'exclusive',
    },
    {
        label: 'Pass Through',
        type: protoActionsTags.passthrough,
        key: 'passthrough',
    },
    {
        label: 'Launch Point',
        type: protoActionsTags.launchpoint,
        key: 'launchpoint',
    },
    {
        label: 'Active if Contains Units',
        type: protoActionsTags.activeifcontainsunits,
        key: 'activeifcontainsunits',
    },
    {
        label: 'Contain Scale Base Damage',
        type: protoActionsTags.containscalebasedamage,
        key: 'containscalebasedamage',
    },
    {
        label: 'Include Nature',
        type: protoActionsTags.includenature,
        key: 'includenature',
    },
    {
        label: 'Cannot Be Converted by Allies',
        type: protoActionsTags.cannotbeconvertedbyallies,
        key: 'cannotbeconvertedbyallies',
    },
    {
        label: 'Homing Ballistics',
        type: protoActionsTags.homingballistics,
        key: 'homingballistics',
    },
])
