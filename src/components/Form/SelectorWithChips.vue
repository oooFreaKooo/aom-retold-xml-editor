<template>
    <v-expansion-panel>
        <v-expansion-panel-title class="section-title">
            {{ title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
            <VRow>
                <VCol
                    cols="12"
                    md="6"
                >
                    <SearchFilter
                        v-model:search-query="searchQuery"
                        :active-category="activeCategory"
                        :categorized-unit-types="categorizedItems"
                        :search-label="searchLabel"
                        @select-category="selectCategory"
                    />
                    <Scrollable
                        :filtered-unit-types="filteredItems"
                        :selected-unit-types="selectedItems"
                        :hide-selected="hideSelected"
                        @add-type="addType"
                        @remove-type="removeType"
                    />
                </VCol>
                <VCol
                    cols="12"
                    md="6"
                >
                    <Chips
                        :selected-unit-types="selectedItems"
                        @remove-type="removeType"
                    />
                </VCol>
            </VRow>
            <v-row>
                <v-col>
                    <v-btn
                        class="mt-2 me-2"
                        prepend-icon="mdi-content-save"
                        color="success"
                        :rounded="false"
                        @click="saveAndClose"
                    >
                        Save
                    </v-btn>
                    <v-btn
                        class="mt-2 me-2"
                        color="secondary"
                        density="comfortable"
                        :rounded="false"
                        :icon="hideSelected ? 'mdi-eye-off' : 'mdi-eye'"
                        @click="toggleHideSelected"
                    />
                </v-col>
                <v-col class="d-flex justify-end">
                    <v-btn
                        variant="text"
                        prepend-icon="mdi-undo"
                        color="warning"
                        :rounded="false"
                        :disabled="!canUndo"
                        @click="undo"
                    >
                        Undo
                    </v-btn>
                    <v-btn
                        variant="text"
                        prepend-icon="mdi-redo"
                        color="info"
                        :rounded="false"
                        :disabled="!canRedo"
                        @click="redo"
                    >
                        Redo
                    </v-btn>
                </v-col>
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<script lang="ts" setup>
const props = defineProps<{
    title: string
    categorizedItems: { [key: string]: string[] }
    unitTypes?: { unittype?: string }[]
    unitFlags?: { flag?: string }[]
    searchLabel: string
    storageKey: string
}>()

const selectedItems = ref<string[]>([])
const searchQuery = ref<string>('')
const activeCategory = ref<string>(Object.keys(props.categorizedItems)[0])
const filteredItems = ref<string[]>([])
const hideSelected = ref(false)
const panelOpen = ref([true])

const { commit, undo, redo, canUndo, canRedo } = useManualRefHistory(selectedItems, { clone: true })

const toggleHideSelected = () => {
    hideSelected.value = !hideSelected.value
}

const filterItems = () => {
    const allItems = props.categorizedItems[activeCategory.value]
    filteredItems.value = searchQuery.value
        ? allItems.filter(item => item.toLowerCase().includes(searchQuery.value.toLowerCase()))
        : allItems
}

const selectCategory = (category: string) => {
    activeCategory.value = category
    filterItems()
}

const addType = (type: string) => {
    if (type && !selectedItems.value.includes(type)) {
        selectedItems.value.push(type)
        commit()
    }
}

const removeType = (type: string) => {
    selectedItems.value = selectedItems.value.filter(t => t !== type)
    commit()
}

// Watch for changes in unitTypes and unitFlags
watch(
    [ () => props.unitTypes, () => props.unitFlags ],
    ([ newUnitTypes, newUnitFlags ]) => {
        selectedItems.value = []
        const updatedItems = [...selectedItems.value]

        if (Array.isArray(newUnitTypes) && newUnitTypes.length > 0) {
            newUnitTypes.forEach((type) => {
                const typeValue = typeof type === 'string' ? type : type?.unittype
                if (typeValue && !updatedItems.includes(typeValue)) {
                    updatedItems.push(typeValue)
                }
            })
        }

        if (Array.isArray(newUnitFlags) && newUnitFlags.length > 0) {
            newUnitFlags.forEach((flag) => {
                const flagValue = typeof flag === 'string' ? flag : flag?.flag
                if (flagValue && !updatedItems.includes(flagValue)) {
                    updatedItems.push(flagValue)
                }
            })
        }

        selectedItems.value = updatedItems
    },
    { immediate: true },
)

// Use import.meta.env.SSR to check client-side
if (!import.meta.env.SSR) {
    const savedItems = localStorage.getItem(props.storageKey)
    if (savedItems) { selectedItems.value = JSON.parse(savedItems) }
}

const saveAndClose = () => {
    if (!import.meta.env.SSR) {
        localStorage.setItem(props.storageKey, JSON.stringify(selectedItems.value))
    }
    panelOpen.value = []
}

watch(searchQuery, filterItems)
</script>

<style scoped>
  .section-title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
</style>
