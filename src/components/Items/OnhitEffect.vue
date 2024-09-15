<template>
    <v-expansion-panels
        v-model="panelOpen"
        multiple
        ripple
    >
        <v-expansion-panel>
            <v-expansion-panel-title v-if="effect['@type']">
                OnHitEffect: {{ effect['@type'] }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-select
                    v-model="selectedOnHitEffect"
                    :items="onHitEffectTypes"
                    label="Select OnHitEffect Type"
                    variant="outlined"
                    clearable
                />
                <v-row>
                    <v-col
                        v-for="(attr, index) in effectAttributes"
                        :key="index"
                        cols="6"
                    >
                        <ProtoActionContent
                            v-if="isContentEffect(attr)"
                            :get-field-label-by-key="getFieldLabelByKey"
                            :get-tag-key="getTagKey"
                            :effect="attr"
                        />
                        <ProtoActionAttributes
                            v-else-if="isAttributeEffect(attr)"
                            :get-field-label-by-key="getFieldLabelByKey"
                            :get-tag-key="getTagKey"
                            :tag="attr"
                        />
                    </v-col>
                </v-row>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script lang="ts" setup>
export interface EffectItem {
    '@type': string
    [key: string]: any
}

const props = defineProps<{
    effect: EffectItem
}>()

const panelOpen = ref([true])
const selectedOnHitEffect = ref<string | undefined>(undefined)
const onHitEffectTypes = computed(() => Object.keys(categorizedOnHitEffects))
const effectAttributes = computed(() => {
    const attributes = []
    for (const [ key, value ] of Object.entries(props.effect)) {
        if (key !== '@type') {
            attributes.push({ key, value })
        }
    }
    return attributes
})

const getFieldLabelByKey = (key: string) => {
    const field = onHitEffectFormFields.find(field => field.key === key)
    return field ? field.label : 'Unknown Label'
}

const getTagKey = (effect: any): string => {
    return Object.keys(categorizedOnHitEffects).find(
        key => categorizedOnHitEffects[key] === effect,
    )?.toString() || 'unknown'
}

const isContentEffect = (attr: any): attr is ContentTag => {
    return typeof attr.value === 'object' && 'content' in attr.value
}

const isAttributeEffect = (attr: any): attr is AttributeTag => {
    return typeof attr.value === 'object' && 'attributes' in attr.value
}

watch(
    () => props.effect,
    (newVal) => {
        if (newVal && newVal['@type']) {
            selectedOnHitEffect.value = newVal['@type']
        }
    },
    { immediate: true },
)
</script>

<style>

</style>
