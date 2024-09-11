export interface FormField {
    label: string
    type: 'text' | 'select'
    key: string
    options?: string[]
}

export const movementOptions = ref([
    'amphibious',
    'land',
    'water',
    'air',
]).value

export const basicInformationFields = ref<FormField[]>([
    { label: 'Name', type: 'text', key: 'name' },
    { label: 'Display Name ID', type: 'text', key: 'displaynameid' },
    { label: 'Rollover Text ID', type: 'text', key: 'rollovertextid' },
    { label: 'Short Rollover Text ID', type: 'text', key: 'shortrollovertextid' },
    { label: 'Editor Name ID', type: 'text', key: 'editornameid' },
])

export const unitCombatFields = ref<FormField[]>([
    { label: 'Initial Hitpoints', type: 'text', key: 'initialhitpoints' },
    { label: 'Max Hitpoints', type: 'text', key: 'maxhitpoints' },
    { label: 'Line of Sight (LOS)', type: 'text', key: 'los' },
    { label: 'Weight Class', type: 'text', key: 'weightclass' },
    { label: 'Auto Attack Range', type: 'text', key: 'autoattackrange' },
    { label: 'Unit Regen', type: 'text', key: 'unitregen' },
    { label: 'Recharge Time', type: 'text', key: 'rechargetime' },
    { label: 'Max Contained Units', type: 'text', key: 'maxcontained' },
    { label: 'Aux Recharge Time', type: 'text', key: 'auxrechargetime' },
    { label: 'Armor Angle', type: 'text', key: 'directionalarmor.angle' },
    { label: 'Armor Value', type: 'text', key: 'directionalarmor.value' },
])

export const movementInformationFields = ref<FormField[]>([
    { label: 'Movement Type', type: 'select', key: 'movementtype', options: movementOptions },
    { label: 'Max Velocity', type: 'text', key: 'maxvelocity' },
    { label: 'Turn Rate', type: 'text', key: 'turnrate' },
    { label: 'Max Run Velocity', type: 'text', key: 'maxrunvelocity' },
])

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
