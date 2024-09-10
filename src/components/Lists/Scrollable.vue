<template>
    <VVirtualScroll class="border" :items="hideSelected ? filteredAndUnselectedUnitTypes : filteredUnitTypes" height="300">
        <template v-slot:default="{ item }">
            <VListItem
                density="compact"
                :key="item as PropertyKey"
                @click="selectedUnitTypes?.includes(item) ? $emit('remove-type', item) : $emit('add-type', item)"
                :append-icon="selectedUnitTypes?.includes(item) && !hideSelected ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'">
                {{ item }}
            </VListItem>
        </template>
    </VVirtualScroll>
</template>

<script lang="ts" setup>
    const props = defineProps({
        filteredUnitTypes: Array,
        selectedUnitTypes: Array,
        hideSelected: Boolean,
    })

    const virtualScrollKey = ref(0)
    const filteredAndUnselectedUnitTypes = computed(() => props.filteredUnitTypes?.filter((item) => !props.selectedUnitTypes?.includes(item)))

    watchEffect(() => {
        props.selectedUnitTypes?.forEach(() => {})
        virtualScrollKey.value++
    })
</script>
