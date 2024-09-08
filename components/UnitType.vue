<template>
  <v-expansion-panels v-model="panelOpen">
    <v-expansion-panel>
      <v-expansion-panel-title>Unit Types</v-expansion-panel-title>
      <v-expansion-panel-text>
        <VRow>
          <VCol cols="12" md="6">
            <ToolsSearchFilter
              v-model:searchQuery="searchQuery"
              :active-category="activeCategory"
              :categorized-unit-types="categorizedUnitTypes"
              @select-category="selectCategory" />
            <ListsScrollable
              :filtered-unit-types="filteredUnitTypes"
              :selected-unit-types="selectedUnitTypes"
              :hide-selected="hideSelected"
              @add-type="addType" />
          </VCol>
          <VCol cols="12" md="6">
            <ItemsChips :selected-unit-types="selectedUnitTypes" @remove-type="removeType" />
          </VCol>
        </VRow>
        <v-btn class="mt-2 me-2" prepend-icon="mdi-content-save" color="success" :rounded="false" @click="saveAndClose"> Save </v-btn>
        <v-btn class="mt-2 me-2" size="x-small" @click="toggleHideSelected" :rounded="false" :icon="hideSelected ? 'mdi-eye-off' : 'mdi-eye'" />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick } from "vue"

// Props
const props = defineProps<{ unitTypes: { unittype: string }[] }>()

// Refs
const selectedUnitTypes = ref<string[]>([])
const searchQuery = ref<string>("")
const activeCategory = ref<Category>("Logical")
const filteredUnitTypes = ref<string[]>([])
const hideSelected = ref(false)

const toggleHideSelected = () => {
  hideSelected.value = !hideSelected.value
}
type Category = "All" | "Logical" | "Abstract" | "Other"

// Watch for changes in the selected unit's unit types (props.unitTypes)
watch(
  () => props.unitTypes,
  (newUnitTypes) => {
    selectedUnitTypes.value = []
    newUnitTypes.forEach((type) => {
      // Here we cast `category` as `UnitCategory` to ensure it matches the expected key type
      Object.keys(categorizedUnitTypes.value).forEach((category) => {
        const typedCategory = category as UnitCategory
        if (categorizedUnitTypes.value[typedCategory].includes(type.unittype) && !selectedUnitTypes.value.includes(type.unittype)) {
          selectedUnitTypes.value.push(type.unittype)
        }
      })
    })
  },
  { immediate: true },
)

const filterUnitTypes = () => {
  const allTypes = categorizedUnitTypes.value[activeCategory.value]
  if (searchQuery.value) {
    filteredUnitTypes.value = allTypes.filter((type) => type.toLowerCase().includes(searchQuery.value.toLowerCase()))
  } else {
    filteredUnitTypes.value = allTypes
  }
}

watch(searchQuery, filterUnitTypes)

const selectCategory = (category: Category) => {
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
</script>

<style scoped lang="scss"></style>
