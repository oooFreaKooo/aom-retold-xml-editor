<template>
    <div>
        <v-text-field
            v-if="isTagWithContent(tag) && !Array.isArray(tag.content)"
            variant="outlined"
            density="compact"
            color="primary"
            :label="getFieldLabelByKey(getTagKey(tag))"
        />
        <v-select
            v-else-if="isTagWithContent(tag) && Array.isArray(tag.content)"
            :items="tag.content"
            variant="outlined"
            density="compact"
            color="primary"
            :label="getFieldLabelByKey(getTagKey(tag))"
        />
        <v-select
            v-else-if="Array.isArray(tag)"
            :items="tag"
            variant="outlined"
            density="compact"
            color="primary"
            :label="getFieldLabelByKey(getTagKey(tag))"
        />
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    getFieldLabelByKey: (key: string) => string
    getTagKey: (tag: any) => string
    tag?: ContentTag | string[]
}>()

const isTagWithContent = (tag: any): tag is ContentTag => {
    return (tag && typeof tag === 'object' && 'content' in tag)
}
</script>

<style>

</style>
