export interface OnHitEffectFormField {
    label: string
    type: TagContentValue
    key: string
}

export const categorizedOnHitEffects = ref<{ [key: string]: TagContentValue[] }>({
    'Attach': [
        protoActionsTags.onhiteffect.attributes.proto,
        protoActionsTags.onhiteffect.attributes.duration,
        protoActionsTags.onhiteffect.attributes.targetunittype,
        protoActionsTags.onhiteffect.attributes.attachbone,
    ],
    'ShadingFade': [
        protoActionsTags.onhiteffect.attributes.shadingtype,
        protoActionsTags.onhiteffect.attributes.fadetime,
        protoActionsTags.onhiteffect.attributes.factor,
        protoActionsTags.onhiteffect.attributes.targetunittype,
        protoActionsTags.onhiteffect.attributes.deadonly,
        protoActionsTags.onhiteffect.attributes.duration,
    ],
    'Stun': [
        protoActionsTags.onhiteffect.attributes.duration,
        protoActionsTags.onhiteffect.attributes.targetunittype,
    ],
    'Throw': [protoActionsTags.onhiteffect.attributes.targetunittype],
    'Boost': [
        protoActionsTags.onhiteffect.attributes.targetunittype,
        protoActionsTags.onhiteffect.attributes.duration,
        protoActionsTags.onhiteffect.attributes.radius,
        protoActionsTags.onhiteffect.content!.modify,
        protoActionsTags.onhiteffect.content!.modifyramp,
    ],
    'DamageOverTime': [
        protoActionsTags.onhiteffect.attributes.dmgtype,
        protoActionsTags.onhiteffect.attributes.duration,
        protoActionsTags.onhiteffect.attributes.rate,
        protoActionsTags.onhiteffect.attributes.targetunittype,
    ],
    'Shading': [
        protoActionsTags.onhiteffect.attributes.shadingtype,
        protoActionsTags.onhiteffect.attributes.factor,
        protoActionsTags.onhiteffect.attributes.targetunittype,
        protoActionsTags.onhiteffect.attributes.deadonly,
    ],
    'Freeze': [
        protoActionsTags.onhiteffect.attributes.freezetype,
        protoActionsTags.onhiteffect.attributes.duration,
        protoActionsTags.onhiteffect.attributes.damage,
    ],
    'Pull': [
        protoActionsTags.onhiteffect.attributes.targetunittype,
        protoActionsTags.onhiteffect.attributes.radius,
    ],
    'ProgFreeze': [
        protoActionsTags.onhiteffect.attributes.active,
        protoActionsTags.onhiteffect.attributes.duration,
        protoActionsTags.onhiteffect.attributes.rate,
        protoActionsTags.onhiteffect.attributes.freezeduration,
        protoActionsTags.onhiteffect.attributes.targetunittype,
    ],
    'StatModify': [
        protoActionsTags.onhiteffect.attributes.duration,
        protoActionsTags.onhiteffect.attributes.targetunittype,
        protoActionsTags.onhiteffect.content!.modify,
    ],
    'Snare': [
        protoActionsTags.onhiteffect.attributes.duration,
        protoActionsTags.onhiteffect.attributes.rate,
    ],
    'ProgFreezeSpeed': [
        protoActionsTags.onhiteffect.attributes.duration,
        protoActionsTags.onhiteffect.attributes.rate,
        protoActionsTags.onhiteffect.attributes.freezeduration,
        protoActionsTags.onhiteffect.attributes.targetunittype,
    ],
    'ProgFreezeROF': [
        protoActionsTags.onhiteffect.attributes.duration,
        protoActionsTags.onhiteffect.attributes.rate,
        protoActionsTags.onhiteffect.attributes.freezeduration,
        protoActionsTags.onhiteffect.attributes.targetunittype,
    ],
    'Reincarnation': [
        protoActionsTags.onhiteffect.attributes.duration,
        protoActionsTags.onhiteffect.attributes.targetunittype,
        protoActionsTags.onhiteffect.attributes.proto,
    ],
    'AnimOverride': [
        protoActionsTags.onhiteffect.attributes.anim,
        protoActionsTags.onhiteffect.attributes.targetunittype,
        protoActionsTags.onhiteffect.attributes.duration,
    ],
    'Lifesteal': [
        protoActionsTags.onhiteffect.attributes.rate,
        protoActionsTags.onhiteffect.attributes.targetunittype,
    ],
    'ProgShading': [
        protoActionsTags.onhiteffect.attributes.shadingtype,
        protoActionsTags.onhiteffect.attributes.targetunittype,
    ],
    'SelfModify': [protoActionsTags.onhiteffect.attributes.duration],
    'TreeFlatten': [protoActionsTags.onhiteffect.attributes.targetunittype],
    'MutateNature': [protoActionsTags.onhiteffect.attributes.proto],
}).value

export const onHitEffectFormFields = ref<OnHitEffectFormField[]>([
    {
        label: 'OnHitEffect Type',
        type: protoActionsTags.onhiteffect.attributes.type,
        key: '@type',
    },
    {
        label: 'Freeze Type',
        type: protoActionsTags.onhiteffect.attributes.freezetype,
        key: '@freezetype',
    },
    {
        label: 'Duration',
        type: protoActionsTags.onhiteffect.attributes.duration,
        key: '@duration',
    },
    {
        label: 'Damage',
        type: protoActionsTags.onhiteffect.attributes.damage,
        key: '@damage',
    },
    {
        label: 'Rate',
        type: protoActionsTags.onhiteffect.attributes.rate,
        key: '@rate',
    },
    {
        label: 'Target Unit Type',
        type: protoActionsTags.onhiteffect.attributes.targetunittype,
        key: '@targetunittype',
    },
    {
        label: 'Damage Type',
        type: protoActionsTags.onhiteffect.attributes.dmgtype,
        key: '@dmgtype',
    },
    {
        label: 'Proto',
        type: protoActionsTags.onhiteffect.attributes.proto,
        key: '@proto',
    },
    {
        label: 'Attach Bone',
        type: protoActionsTags.onhiteffect.attributes.attachbone,
        key: '@attachbone',
    },
    {
        label: 'Radius',
        type: protoActionsTags.onhiteffect.attributes.radius,
        key: '@radius',
    },
    {
        label: 'Shading Type',
        type: protoActionsTags.onhiteffect.attributes.shadingtype,
        key: '@shadingtype',
    },
    {
        label: 'Fade Time',
        type: protoActionsTags.onhiteffect.attributes.fadetime,
        key: '@fadetime',
    },
    {
        label: 'Factor',
        type: protoActionsTags.onhiteffect.attributes.factor,
        key: '@factor',
    },
    {
        label: 'Active',
        type: protoActionsTags.onhiteffect.attributes.active,
        key: '@active',
    },
    {
        label: 'Freeze Duration',
        type: protoActionsTags.onhiteffect.attributes.freezeduration,
        key: '@freezeduration',
    },
    {
        label: 'Animation',
        type: protoActionsTags.onhiteffect.attributes.anim,
        key: '@anim',
    },
    {
        label: 'Dead Only',
        type: protoActionsTags.onhiteffect.attributes.deadonly,
        key: '@deadonly',
    },
    {
        label: 'Modify',
        type: protoActionsTags.onhiteffect.content!.modify,
        key: 'modify',
    },
    {
        label: 'Modify Ramp',
        type: protoActionsTags.onhiteffect.content!.modifyramp,
        key: 'modifyramp',
    },
]).value
