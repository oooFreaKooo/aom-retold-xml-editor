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
        label: 'Damage Flags',
        type: protoActionsTags.damageflags,
        key: 'damageflags',
    },
    {
        label: 'Damage Area',
        type: protoActionsTags.damagearea,
        key: 'damagearea',
    },
])
