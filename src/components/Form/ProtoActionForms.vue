<template>
    <v-expansion-panel>
        <v-expansion-panel-text>
            <v-select
                v-model="selectedProtoAction"
                :items="protoActionNames"
                label="Select Proto Action"
                variant="outlined"
                clearable
            />
            {{ selectedUnitData }}
            <v-row v-if="selectedProtoAction && !Array.isArray(selectedUnitData) && selectedUnitData?.onhiteffect">
                <v-col
                    v-for="(effect, index) in selectedUnitData.onhiteffect"
                    :key="index"
                    cols="12"
                >
                    <OnhitEffect
                        v-if="isEffectItem(effect)"
                        :effect="effect"
                    />
                </v-col>
            </v-row>
            <v-row v-if="selectedProtoAction">
                <v-col
                    v-for="(tag, index) in categorizedPrototActionNames[selectedProtoAction]"
                    :key="index"
                    cols="6"
                >
                    <ProtoActionContent
                        v-if="isContentTag(tag) && !isAttributeTag(tag) && !isOnHitEffectTag(tag)"
                        :get-field-label-by-key="getFieldLabelByKey"
                        :get-tag-key="getTagKey"
                        :tag="tag"
                    />
                    <ProtoActionAttributes
                        v-else-if="isAttributeTag(tag) && !isOnHitEffectTag(tag)"
                        :get-field-label-by-key="getFieldLabelByKey"
                        :get-tag-key="getTagKey"
                        :tag="tag"
                    />
                </v-col>
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<script lang="ts" setup>
import type { EffectItem } from '../Items/OnhitEffect.vue'

export interface UnitDataItem {
    [key: string]: any
    name?: string
    onhiteffect?: Array<{ [key: string]: any }>
}

const props = defineProps<{
    selectedUnitData?: UnitDataItem | UnitDataItem[]
}>()

const selectedProtoAction = ref<string | undefined>(undefined)
const protoActionNames = computed(() => Object.keys(categorizedPrototActionNames))

const getFieldLabelByKey = (key: string) => {
    const field = protoActionsFields.value.find(field => field.key === key)
    return field ? field.label : 'Unknown Label'
}

const getTagKey = (tag: any) => {
    return (Object.keys(protoActionsTags) as Array<keyof typeof protoActionsTags>).find(
        key => protoActionsTags[key] === tag,
    ) || 'unknown'
}

const isContentTag = (tag: any): tag is ContentTag => {
    return tag && typeof tag === 'object' && 'content' in tag && !('attributes' in tag)
}

const isAttributeTag = (tag: any): tag is AttributeTag => {
    return tag && typeof tag === 'object' && 'attributes' in tag
}

function isEffectItem (effect: any): effect is EffectItem {
    return effect && typeof effect === 'object' && '@type' in effect
}

const isOnHitEffectTag = (tag: any): boolean => {
    const onHitEffectTypes = [
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
    ]
    if (tag?.attributes?.type) {
        return tag.attributes.type.some((type: string) => onHitEffectTypes.includes(type))
    }
    return false
}

watch(
    () => props.selectedUnitData,
    (newVal) => {
        if (newVal && typeof newVal === 'object' && 'name' in newVal) {
            selectedProtoAction.value = newVal.name as string | undefined
        }
    },
    { immediate: true },
)
</script>

<style>

</style>
