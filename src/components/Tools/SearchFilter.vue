<template>
  <VTextField v-model="localSearchQuery" label="Search unit types" hide-details variant="outlined" />
  <VList>
    <VBtn
      :variant="activeCategory === category ? 'flat' : 'outlined'"
      v-for="category in Object.keys(categorizedUnitTypes)"
      :rounded="false"
      :key="category"
      color="accent"
      @click="$emit('select-category', category as Category)"
      :value="category"
      :active="activeCategory === category">
      {{ category }}
    </VBtn>
  </VList>
</template>

<script lang="ts" setup>
type Category = "All" | "Logical" | "Abstract" | "Other"

const props = defineProps({
  searchQuery: String,
  activeCategory: String,
  categorizedUnitTypes: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits(["update:searchQuery", "select-category"])

const localSearchQuery = ref(props.searchQuery)

watch(localSearchQuery, (newValue) => {
  emit("update:searchQuery", newValue)

  // Automatically switch to the "All" category when user types something
  if (newValue) {
    emit("select-category", "All")
  }
})
</script>
