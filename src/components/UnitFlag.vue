<template>
  <v-expansion-panels v-model="panelOpen">
    <v-expansion-panel>
      <v-expansion-panel-title>Flag Types</v-expansion-panel-title>
      <v-expansion-panel-text>
        <VRow>
          <VCol cols="12" md="6">
            <SearchFilter
              v-model:searchQuery="searchQuery"
              :active-category="activeCategory"
              :categorized-unit-types="categorizedFlagTypes"
              :searchLabel="'Search flag types'"
              @select-category="selectCategory" />
            <Scrollable
              :filtered-unit-types="filteredFlagTypes"
              :selected-unit-types="selectedFlagTypes"
              :hide-selected="hideSelected"
              @add-type="addType"
              @remove-type="removeType" />
          </VCol>
          <VCol cols="12" md="6">
            <Chips :selected-unit-types="selectedFlagTypes" @remove-type="removeType" />
          </VCol>
        </VRow>
        <v-btn class="mt-2 me-2" prepend-icon="mdi-content-save" color="success" :rounded="false" @click="saveAndClose">Save</v-btn>
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
// Function to fill the "All" category
const fillAllCategory = () => {
  categorizedFlagTypes.value.All = Object.entries(categorizedFlagTypes.value)
    .filter(([key]) => key !== "All")
    .flatMap(([_, types]) => types)
}
fillAllCategory()

// Refs
const selectedFlagTypes = ref<string[]>([])
const searchQuery = ref<string>("")
const activeCategory = ref<UnitFlagCategory>("Animation")
const filteredFlagTypes = ref<string[]>([])
const hideSelected = ref(false)

const toggleHideSelected = () => {
  hideSelected.value = !hideSelected.value
}

// Filter logic
const filterFlagTypes = () => {
  const allTypes = categorizedFlagTypes.value[activeCategory.value]
  if (searchQuery.value) {
    filteredFlagTypes.value = allTypes.filter((type) => type.toLowerCase().includes(searchQuery.value.toLowerCase()))
  } else {
    filteredFlagTypes.value = allTypes
  }
}

// Watch searchQuery and trigger filterFlagTypes when it changes
watch(searchQuery, filterFlagTypes)

const selectCategory = (category: UnitFlagCategory) => {
  activeCategory.value = category
  filterFlagTypes()
}

const addType = (type: string) => {
  if (type && !selectedFlagTypes.value.includes(type)) {
    selectedFlagTypes.value.push(type)
  }
}

const removeType = (type: string) => {
  selectedFlagTypes.value = selectedFlagTypes.value.filter((t) => t !== type)
}

// Saving logic
const isClient = !import.meta.env.SSR

const panelOpen = ref([true])

if (isClient) {
  const savedFlagTypes = localStorage.getItem("selectedFlagTypes")
  if (savedFlagTypes) {
    selectedFlagTypes.value = JSON.parse(savedFlagTypes)
  }
}

const saveAndClose = () => {
  if (isClient) {
    localStorage.setItem("selectedFlagTypes", JSON.stringify(selectedFlagTypes.value))
  }
  panelOpen.value = []
}
</script>

<style scoped lang="scss"></style>
