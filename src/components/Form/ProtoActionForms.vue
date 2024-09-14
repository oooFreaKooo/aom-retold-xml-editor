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
            <v-row v-if="selectedProtoAction">
                <v-col
                    v-for="(tag, index) in categorizedPrototActions[selectedProtoAction]"
                    :key="index"
                    cols="6"
                >
                    <ProtoActionContent
                        :get-field-label-by-key="getFieldLabelByKey"
                        :get-tag-key="getTagKey"
                        :tag="tag"
                    />
                    <ProtoActionAttributes
                        :get-tag-key="getTagKey"
                        :get-field-label-by-key="getFieldLabelByKey"
                        :tag="tag"
                    />
                </v-col>
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<script lang="ts" setup>
export interface UnitDataItem {
    [key: string]: any
    name?: string
}

const props = defineProps<{
    protoActionFormFields: ProtoActionField[]
    selectedUnitData?: UnitDataItem[]
}>()

const selectedProtoAction = ref<string | undefined>(undefined)
const protoActionNames = computed(() => Object.keys(categorizedPrototActions))

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
        if (newVal && typeof newVal === 'object' && 'name' in newVal) {
            selectedProtoAction.value = newVal.name as string | undefined
        }
    },
    { immediate: true },
)
</script>

<style>

</style>
