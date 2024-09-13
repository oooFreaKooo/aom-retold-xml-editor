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

            <v-row v-if="selectedProtoAction">
                <v-col
                    v-for="(tag, index) in categorizedPrototActions[selectedProtoAction]"
                    :key="index"
                    cols="6"
                >
                    <v-text-field
                        v-if="isTagWithContent(tag)"
                        variant="outlined"
                        density="compact"
                        color="primary"
                        :label="getFieldLabelByKey(getTagKey(tag))"
                    />

                    <v-expansion-panels>
                        <v-expansion-panel
                            v-if="hasAttributes(tag)"
                            :min-height="1"
                        >
                            <v-expansion-panel-title>{{ getFieldLabelByKey(getTagKey(tag)) }} Attributes</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-combobox
                                    v-for="(attributeValues, attributeKey) in tag.attributes"
                                    :key="attributeKey"
                                    v-model="selectedAttributes[attributeKey]"
                                    variant="outlined"
                                    density="compact"
                                    color="green-darken-3"
                                    :items="Array.isArray(attributeValues) ? attributeValues : [attributeValues]"
                                    :label="attributeKey"
                                    :multiple="Array.isArray(attributeValues)"
                                    @change="initializeSelectedAttributes(attributeKey, Array.isArray(attributeValues))"
                                />
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<script lang="ts" setup>
const props = defineProps<{
    protoActionFormFields: ProtoActionField[]
    selectedUnitData?: UnitDataItem[]
}>()

export interface UnitDataItem {
    [key: string]: any
    name?: string
}

const selectedProtoAction = ref<string | undefined>(undefined)
const protoActionNames = computed(() => Object.keys(categorizedPrototActions))
const selectedAttributes = ref<Record<string, string | number | boolean | Tag | string[] | number[] | boolean[] | Tag[] | undefined>>({})

const initializeSelectedAttributes = (key: string, isMultiple: boolean) => {
    if (!(key in selectedAttributes.value)) {
        selectedAttributes.value[key] = isMultiple ? [] : undefined
    }
}

const hasAttributes = (tag: any): tag is FullTag | AttributeTag => {
    return tag && typeof tag === 'object' && 'attributes' in tag
}

const isTagWithContent = (tag: any): tag is FullTag | ContentTag => {
    return tag && typeof tag === 'object' && 'content' in tag
}

const getFieldLabelByKey = (key: string) => {
    const field = protoActionsFields.value.find(field => field.key === key)
    return field ? field.label : 'Unknown Label'
}

const getTagKey = (tag: any) => {
    return (Object.keys(protoActionsTags) as Array<keyof typeof protoActionsTags>).find(
        key => protoActionsTags[key] === tag,
    ) || 'unknown'
}

watch(
    () => props.selectedUnitData,
    (newVal) => {
        const firstItemWithName = newVal?.find(item => typeof item.name === 'string')
        if (firstItemWithName) {
            selectedProtoAction.value = firstItemWithName.name
        }
    },
    { immediate: true },
)
</script>

<style>

</style>
