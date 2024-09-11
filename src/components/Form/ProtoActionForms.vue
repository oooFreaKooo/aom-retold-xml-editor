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
defineProps({
    protoActionsFields: {
        type: Array as PropType<ProtoActionField[]>,
    },

})
const selectedProtoAction = ref<string | null>(null)
const protoActionNames = Object.keys(categorizedPrototActions)
const selectedAttributes = ref<Record<string, string | number | boolean | Tag | string[] | number[] | boolean[] | Tag[] | null>>({})

const initializeSelectedAttributes = (key: string, isMultiple: boolean) => {
    if (!(key in selectedAttributes.value)) {
        selectedAttributes.value[key] = isMultiple ? [] : null
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
</script>

<style>

</style>

<!--
<template>
    <v-expansion-panel :min-height="1">
        <v-expansion-panel-title>{{ title }}</v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-combobox
                v-model="selectedProtoactionName"
                :items="protoactionNames"
                label="Name"
                clearable
                @update:model-value="onProtoactionChange"
            />
            {{ filteredFormFields }}
            <v-row v-if="selectedProtoaction">
                <v-col
                    v-for="(field, index) in filteredFormFields"
                    :key="index"
                    cols="6"
                    class="d-flex"
                >
                    <v-card
                        width="100%"
                        variant="text"
                    >
                        <v-card-text>

                            <template v-if="hasContent(selectedProtoaction)">
                                <v-text-field
                                    v-model="selectedProtoaction.content[field.key]"
                                    density="compact"
                                    :label="field.label"
                                    :type="getInputType(field)"
                                    :required="isFieldRequired(field)"
                                />
                            </template>

                            <template v-if="hasAttributes(selectedProtoaction)">
                                <v-expansion-panels multiple>
                                    <v-expansion-panel :min-height="1">
                                        <v-expansion-panel-title>Attributes</v-expansion-panel-title>
                                        <v-expansion-panel-text>
                                            <v-row>
                                                <template
                                                    v-for="(attrValue, attrKey) in selectedProtoaction.attributes"
                                                    :key="attrKey"
                                                >
                                                    <v-col cols="6">
                                                        <v-combobox
                                                            v-if="Array.isArray(attrValue)"
                                                            v-model="selectedProtoaction.attributes[attrKey] as string | number | null"
                                                            :items="attrValue"
                                                            clearable
                                                            density="compact"
                                                            :label="`${field.label} - ${attrKey}`"
                                                        />
                                                        <v-text-field
                                                            v-else
                                                            v-model="selectedProtoaction.attributes[attrKey]"
                                                            density="compact"
                                                            :label="`${field.label} - ${attrKey}`"
                                                            :type="getInputType({ label: attrKey, type: field.type, key: attrKey })"
                                                        />
                                                    </v-col>
                                                </template>
                                            </v-row>
                                        </v-expansion-panel-text>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </template>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<script lang="ts" setup>
const props = defineProps<{
    title: string
    formFields: { label: string, type: Tag, key: string }[]
}>()

const selectedProtoaction = ref<FullTag | ContentTag | AttributeTag | null>(null)
const selectedProtoactionName = ref<string | null>(null)
const protoactionNames = computed(() => Object.keys(categorizedPrototActions.value))

const filteredFormFields = computed(() => {
    if (!selectedProtoaction.value) { return [] }

    const contentKeys = hasContent(selectedProtoaction.value) ? Object.keys(selectedProtoaction.value.content) : []
    const attributeKeys = hasAttributes(selectedProtoaction.value) ? Object.keys(selectedProtoaction.value.attributes) : []

    return props.formFields.filter(field => contentKeys.includes(field.key) || attributeKeys.includes(field.key))
})

function hasContent (tag: Tag): tag is FullTag | ContentTag {
    return 'content' in tag
}

function hasAttributes (tag: Tag): tag is FullTag | AttributeTag {
    return 'attributes' in tag
}

function onProtoactionChange (name: string | null) {
    if (!name) {
        selectedProtoaction.value = null
        return
    }

    const protoactionTags = categorizedPrototActions[name] || []

    if (protoactionTags.length > 0) {
        const firstTag = protoactionTags.find(tag => typeof tag === 'object' && tag !== null && !Array.isArray(tag)) as Tag | undefined

        if (!firstTag) {
            selectedProtoaction.value = null
            return
        }

        if (hasAttributes(firstTag) && hasContent(firstTag)) {
            selectedProtoaction.value = { attributes: {}, content: {} } as FullTag
        } else if (hasAttributes(firstTag)) {
            selectedProtoaction.value = { attributes: {} } as AttributeTag
        } else if (hasContent(firstTag)) {
            selectedProtoaction.value = { content: {} } as ContentTag
        } else {
            selectedProtoaction.value = null
            return
        }

        protoactionTags.forEach((tag) => {
            if (typeof tag === 'object' && tag !== null && !Array.isArray(tag)) {
                if (hasAttributes(tag) && selectedProtoaction.value && 'attributes' in selectedProtoaction.value) {
                    Object.assign(selectedProtoaction.value.attributes, tag.attributes)
                }
                if (hasContent(tag) && selectedProtoaction.value && 'content' in selectedProtoaction.value) {
                    Object.assign(selectedProtoaction.value.content, tag.content)
                }
            }
        })
    } else {
        selectedProtoaction.value = null
    }
}

function getInputType (field: ProtoActionField): string {
    if (hasAttributes(field.type) && field.type.attributes?.type) {
        return field.type.attributes.type as string
    }
    return 'text'
}

function isFieldRequired (field: ProtoActionField): boolean {
    return hasAttributes(field.type) && !!field.type.attributes?.required
}
</script>
 -->
