<template>
  <VVirtualScroll :key="virtualScrollKey" class="border" :items="hideSelected ? filteredAndUnselectedUnitTypes : filteredUnitTypes" height="300">
    <template v-slot:default="{ item }">
      <VListItem
        :key="item as PropertyKey"
        @click="$emit('add-type', item)"
        :disabled="selectedUnitTypes?.includes(item) && !hideSelected ? true : false">
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
