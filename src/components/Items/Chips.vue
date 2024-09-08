<template>
  <VChipGroup column>
    <VChip
      density="compact"
      v-for="(type, index) in selectedUnitTypes"
      closable
      :key="index"
      @click="$emit('remove-type', type)"
      class="mr-2 mb-2">
      {{ type }}
    </VChip>
  </VChipGroup>
</template>

<script lang="ts" setup>
const props = defineProps<{ selectedUnitTypes: string[] }>()
</script>
