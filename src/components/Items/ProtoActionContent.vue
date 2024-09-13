<template>
    <div>
        <v-text-field
            v-if="isTagWithContent(tag)"
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
    tag: any
}>()

const isTagWithContent = (tag: any): tag is FullTag | ContentTag => {
    return tag && typeof tag === 'object' && 'content' in tag
}
</script>

<style>

</style>
