<template>
    <v-expansion-panels>
        <v-expansion-panel
            v-if="hasAttributes(tag) || hasContent(tag)"
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
                <v-text-field
                    v-if="hasContent(tag)"
                    v-model="selectedContent"
                    :label="getFieldLabelByKey(getTagKey(tag)) + ' Amount'"
                    variant="outlined"
                    density="compact"
                />
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script lang="ts" setup>
defineProps<{
    getFieldLabelByKey: (key: string) => string
    getTagKey: (tag: any) => string
    tag: AttributeTag
}>()

const selectedAttributes = ref<Record<string, string | number | boolean | Tag | string[] | number[] | boolean[] | Tag[] | undefined>>({})

const selectedContent = ref<string | undefined>(undefined)

const initializeSelectedAttributes = (key: string, isMultiple: boolean) => {
    if (!(key in selectedAttributes.value)) {
        selectedAttributes.value[key] = isMultiple ? [] : undefined
    }
}

const hasAttributes = (tag: any): tag is AttributeTag => {
    return tag && typeof tag === 'object' && 'attributes' in tag
}

const hasContent = (tag: any): tag is ContentTag => {
    return tag && typeof tag === 'object' && 'content' in tag
}
</script>

<style>

</style>
