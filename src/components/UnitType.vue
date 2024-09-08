<template>
  <v-expansion-panels v-model="panelOpen">
    <v-expansion-panel>
      <v-expansion-panel-title>Unit Types</v-expansion-panel-title>
      <v-expansion-panel-text>
        <VRow>
          <VCol cols="12" md="6">
            <SearchFilter
              v-model:searchQuery="searchQuery"
              :active-category="activeCategory"
              :categorized-unit-types="categorizedUnitTypes"
              :searchLabel="'Search unit types'"
              @select-category="selectCategory" />
            <Scrollable
              :filtered-unit-types="filteredUnitTypes"
              :selected-unit-types="selectedUnitTypes"
              :hide-selected="hideSelected"
              @add-type="addType"
              @remove-type="removeType" />
          </VCol>
          <VCol cols="12" md="6">
            <Chips :selected-unit-types="selectedUnitTypes" @remove-type="removeType" />
          </VCol>
        </VRow>
        <v-btn class="mt-2 me-2" prepend-icon="mdi-content-save" color="success" :rounded="false" @click="saveAndClose"> Save </v-btn>
        <v-btn
          class="mt-2 me-2"
          color="secondary"
          density="comfortable"
          @click="toggleHideSelected"
          :rounded="false"
          :icon="hideSelected ? 'mdi-eye-off' : 'mdi-eye'" />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts" setup>
const props = defineProps<{ unitTypes: { unittype: string }[] }>()

// Refs
const selectedUnitTypes = ref<string[]>([])
const searchQuery = ref<string>("")
const activeCategory = ref<UnitTypeCategory>("Logical")
const filteredUnitTypes = ref<string[]>([])
const hideSelected = ref(false)

const toggleHideSelected = () => {
  hideSelected.value = !hideSelected.value
}

const filterUnitTypes = () => {
  const allTypes = categorizedUnitTypes.value[activeCategory.value]
  if (searchQuery.value) {
    filteredUnitTypes.value = allTypes.filter((type) => type.toLowerCase().includes(searchQuery.value.toLowerCase()))
  } else {
    filteredUnitTypes.value = allTypes
  }
}

const selectCategory = (category: UnitTypeCategory) => {
  activeCategory.value = category
  filterUnitTypes()
}

const addType = (type: string) => {
  if (type && !selectedUnitTypes.value.includes(type)) {
    selectedUnitTypes.value.push(type)
  }
}

const removeType = (type: string) => {
  selectedUnitTypes.value = selectedUnitTypes.value.filter((t) => t !== type)
}

// Simplified saving and loading logic
const isClient = !import.meta.env.SSR

const panelOpen = ref([true])

if (isClient) {
  const savedUnitTypes = localStorage.getItem("selectedUnitTypes")
  if (savedUnitTypes) {
    selectedUnitTypes.value = JSON.parse(savedUnitTypes)
  }
}

const saveAndClose = () => {
  if (isClient) {
    localStorage.setItem("selectedUnitTypes", JSON.stringify(selectedUnitTypes.value))
  }
  panelOpen.value = []
}

// Watch for changes in the selected unit's unit types (props.unitTypes)
watch(
  () => props.unitTypes,
  (newUnitTypes) => {
    if (selectedUnitTypes.value.length === 0) {
      // Only set if no selectedUnitTypes already exist
      selectedUnitTypes.value = []
      newUnitTypes.forEach((type) => {
        Object.keys(categorizedUnitTypes.value).forEach((category) => {
          const typedCategory = category as UnitTypeCategory
          if (categorizedUnitTypes.value[typedCategory].includes(type.unittype) && !selectedUnitTypes.value.includes(type.unittype)) {
            selectedUnitTypes.value.push(type.unittype)
          }
        })
      })
    }
  },
  { immediate: true },
)

watch(searchQuery, filterUnitTypes)
</script>

<style scoped lang="scss"></style>
