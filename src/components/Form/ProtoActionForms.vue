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
                    v-for="(tag, index) in categorizedPrototActionNames[selectedProtoAction]"
                    :key="index"
                    cols="6"
                >
                    <ProtoActionContent
                        v-if="isContentTag(tag) && !isAttributeTag(tag)"
                        :get-field-label-by-key="getFieldLabelByKey"
                        :get-tag-key="getContentTagKey"
                        :tag="tag"
                    />
                    <ProtoActionAttributes
                        v-else-if="isAttributeTag(tag)"
                        :get-field-label-by-key="getFieldLabelByKey"
                        :get-tag-key="getAttributeTagKey"
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
const protoActionNames = computed(() => Object.keys(categorizedPrototActionNames))

const getFieldLabelByKey = (key: string) => {
    const field = protoActionsFields.value.find(field => field.key === key)
    return field ? field.label : 'Unknown Label'
}

const getContentTagKey = (tag: ContentTag) => {
    return (Object.keys(protoActionsTags) as Array<keyof typeof protoActionsTags>).find(
        key => protoActionsTags[key] === tag,
    ) || 'unknown'
}

const getAttributeTagKey = (tag: AttributeTag) => {
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
