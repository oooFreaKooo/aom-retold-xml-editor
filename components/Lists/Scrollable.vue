<template>
  <VVirtualScroll class="border" :items="filteredUnitTypes" height="300">
    <template v-slot:default="{ item }">
      <VListItem variant="text" @click="$emit('add-type', item)">
        {{ item }}
      </VListItem>
    </template>
  </VVirtualScroll>
</template>

<script lang="ts" setup>
defineProps({
  filteredUnitTypes: Array,
})
</script>
