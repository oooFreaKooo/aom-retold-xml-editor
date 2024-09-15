<template>
    <v-expansion-panels
        id="outerExPan"
        v-model="panelOpen"
        multiple
        ripple
    >
        <v-expansion-panel
            :min-height="1"
        >
            <v-expansion-panel-title v-if="effect['@type']">
                <p class="text-caption">
                    OnHitEffect: ({{ effect['@type'] }})
                </p>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-select
                    v-model="selectedOnHitEffect"
                    :items="onHitEffectTypes"
                    label="Select OnHitEffect Type"
                    variant="outlined"
                    clearable
                />
                <v-row v-if="selectedOnHitEffect">
                    <v-col
                        v-for="(value, key) in categorizedOnHitEffects[selectedOnHitEffect]"
                        :key="key"
                        cols="3"
                    >
                        <ProtoActionContent
                            v-if="isContentTag(value)"
                            :get-field-label-by-key="getFieldLabelByKey"
                            :get-tag-key="getTagKey"
                            :tag="value"
                        />

                        <ProtoActionAttributes
                            v-else-if="isAttributeTag(value)"
                            :get-field-label-by-key="getFieldLabelByKey"
                            :get-tag-key="getTagKey"
                            :tag="value"
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

const getFieldLabelByKey = (key: string) => {
    const field = onHitEffectFormFields.find(field => field.key === key)
    return field ? field.label : 'Unknown Label'
}

const getTagKey = (attr: any): string => {
    if (typeof attr === 'object' && attr['@type']) {
        return attr['@type']
    }
    const foundKey = onHitEffectFormFields.find(field => field.type === attr)?.key
    return foundKey || 'unknown'
}

const isContentTag = (tag: any): tag is ContentTag | string[] => {
    return Array.isArray(tag) || (tag && typeof tag === 'object' && 'content' in tag && !('attributes' in tag))
}

const isAttributeTag = (tag: any): tag is AttributeTag => {
    return tag && typeof tag === 'object' && 'attributes' in tag
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

<style scoped>
#outerExPan > * {
    border: 1px ridge rgba(0, 0, 0, 0.801);
}
</style>
