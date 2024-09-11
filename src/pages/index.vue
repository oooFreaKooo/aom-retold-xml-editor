<template>
    <VRow class="mt-16">
        <v-expansion-panels
            v-model="panelOpen"
            multiple
            ripple
        >
            <VCol
                cols="12"
                md="6"
            >
                <DynamicForms
                    title="Basic Information"
                    :form-fields="basicInformationFields"
                    :selected-unit="selectedUnit"
                    local-storage-key="basicInformation"
                />
            </VCol>
            <VCol
                cols="12"
                md="6"
            >
                <DynamicForms
                    title="Movement Information"
                    :form-fields="movementInformationFields"
                    :selected-unit="selectedUnit"
                    local-storage-key="movementInformation"
                />
            </VCol>
            <VCol
                cols="12"
                md="6"
            >
                <DynamicForms
                    title="Combat/Stats"
                    :form-fields="unitCombatFields"
                    :selected-unit="selectedUnit"
                    local-storage-key="combatInformation"
                />
            </VCol>
            <VCol
                cols="12"
            >
                <ProtoActionForms
                    title="Protoaction Editor"
                    :proto-action-form-fields="protoActionsFields"
                />
            </VCol>
            <VCol cols="12">
                <SelectorWithChips
                    title="Unit Types"
                    :unit-types="selectedUnit?.unit.filter((item: UnitItem) => item.unittype).map((item: UnitItem) => item.unittype) || []"
                    :categorized-items="categorizedUnitTypes"
                    search-label="Search unit types"
                    storage-key="selectedUnitTypes"
                />
            </VCol>
            <VCol cols="12">
                <SelectorWithChips
                    title="Flag Types"
                    :unit-flags="selectedUnit?.unit.filter((item: UnitItem) => item.flag).map((item: UnitItem) => item.flag) || []"
                    :categorized-items="categorizedFlagTypes"
                    search-label="Search flag types"
                    storage-key="selectedFlagTypes"
                />
            </VCol>
        </v-expansion-panels>
    </VRow>
    <div>
        <h1>Select Unit</h1>
        <select
            v-if="protoData"
            @change="selectUnit($event)"
        >
            <option
                v-for="unit in protoData"
                :key="unit['unit@name']"
                :value="unit['unit@name']"
            >
                {{ unit["unit@name"] }}
            </option>
        </select>
        <div v-else>
            Loading...
        </div>

        <div v-if="selectedUnit">
            <h2>Editing: {{ selectedUnit["unit@name"] }}</h2>
            <div>
                <h2>Unit Configuration</h2>
                <div
                    v-for="(value, key) in selectedUnit"
                    :key="key"
                >
                    <label :for="String(key)">{{ key }}</label>

                    <!-- Recursively render the nested object or array -->
                    <div v-if="Array.isArray(value) || typeof value === 'object'">
                        <RecursiveRenderer :data="value" />
                    </div>

                    <!-- Render non-nested values as input -->
                    <input
                        v-else
                        :id="String(key)"
                        v-model="selectedUnit[key]"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProtoActionForms from '~/components/Form/ProtoActionForms.vue'
import SelectorWithChips from '~/components/Form/SelectorWithChips.vue'

const panelOpen = ref([true])
// Define Unit interface
interface Unit {
    'unit@name': string
    [key: string]: any
}

interface UnitItem {
    unittype?: string
    flag?: string
    [key: string]: any
}

const protoData = ref<Unit[] | null>(null)
const selectedUnit = ref<Unit | null>(null)

// Fetch the JSON file
const { data } = await useFetch<{ proto: Unit[] }>('http://localhost:3000/units_data.json')

if (data.value) {
    protoData.value = data.value.proto
}

function selectUnit (event: Event) {
    const target = event.target as HTMLSelectElement
    const selectedUnitName = target.value
    const unit = protoData.value?.find(unit => unit['unit@name'] === selectedUnitName)
    if (unit) {
        selectedUnit.value = { ...unit }
    }
}
</script>
