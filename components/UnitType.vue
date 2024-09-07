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
            <ListsScrollable :filtered-unit-types="filteredUnitTypes" @add-type="addType" />
          </VCol>
          <VCol cols="12" md="6">
            <ItemsChips :selected-unit-types="selectedUnitTypes" @remove-type="removeType" />
          </VCol>
        </VRow>
        <v-btn class="mt-4" prepend-icon="mdi-content-save" color="success" :rounded="false" @click="saveAndClose">Save</v-btn>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts" setup>
type Category = "All" | "Logical" | "Abstract" | "Other"

const fillAllCategory = () => {
  categorizedUnitTypes.value.All = Object.entries(categorizedUnitTypes.value)
    .filter(([key]) => key !== "All")
    .flatMap(([_, types]) => types)
}
fillAllCategory()

// Refs
const selectedUnitTypes = ref<string[]>([])
const searchQuery = ref<string>("")
const activeCategory = ref<Category>("Logical")
const filteredUnitTypes = ref<string[]>([])

const filterUnitTypes = () => {
  const allTypes = categorizedUnitTypes.value[activeCategory.value]
  if (searchQuery.value) {
    filteredUnitTypes.value = allTypes.filter((type) => type.toLowerCase().includes(searchQuery.value.toLowerCase()))
  } else {
    filteredUnitTypes.value = allTypes
  }
}

// Watch the searchQuery and trigger filterUnitTypes when it changes
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

// Saving types logic
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
