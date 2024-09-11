<template>
    <VVirtualScroll
        class="border"
        :items="hideSelected ? filteredAndUnselectedUnitTypes : filteredUnitTypes"
        height="300"
    >
        <template #default="{ item }">
            <VListItem
                :key="item as PropertyKey"
                density="compact"
                :append-icon="selectedUnitTypes?.includes(item) && !hideSelected ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'"
                @click="selectedUnitTypes?.includes(item) ? emit('remove-type', item) : emit('add-type', item)"
            >
                {{ item }}
            </VListItem>
        </template>
    </VVirtualScroll>
</template>

<script lang="ts" setup>
const props = defineProps<{
    filteredUnitTypes: string[]
    selectedUnitTypes: string[]
    hideSelected: boolean
}>()

const emit = defineEmits<{
    (e: 'remove-type', item: string): void
    (e: 'add-type', item: string): void
}>()

const virtualScrollKey = ref(0)
const filteredAndUnselectedUnitTypes = computed(() =>
    props.filteredUnitTypes?.filter(item => !props.selectedUnitTypes?.includes(item)),
)

watchEffect(() => {
    props.selectedUnitTypes?.forEach(() => {})
    virtualScrollKey.value++
})
</script>
