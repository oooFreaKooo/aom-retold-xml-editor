<template>
    <!--     <VRow class="mt-16">
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
            <VCol cols="12">
                <ProtoActionForms
                    title="Protoaction Editor"
                    :proto-action-form-fields="protoActionsFields"
                />
                <p v-if="selectedUnit">
                    {{ selectedUnit['@name'] }}
                </p>
            </VCol>
        </v-expansion-panels>
    </VRow> -->
    <VRow class="mt-16">
        <v-expansion-panels
            v-model="panelOpen"
            multiple
            ripple
        >
            <VCol
                v-for="(protoAction, index) in (Array.isArray(selectedUnit?.['protoaction']) ? selectedUnit['protoaction'] : [selectedUnit?.['protoaction'] || {}])"
                :key="index"
                cols="12"
            >
                <ProtoActionForms
                    title="Protoaction Editor"
                    :selected-unit-data="protoAction"
                />
            </VCol>
        </v-expansion-panels>
    </VRow>
    <div class="mt-16">
        <h1>Select Unit</h1>
        <v-combobox
            v-if="unitData"
            v-model="selectedUnitName"
            :items="unitData.map((unit: Unit) => unit['@name'])"
            label="Select Unit"
        />
        <div v-if="selectedUnit">
            <div>
                <div
                    v-for="(value, key) in selectedUnit"
                    :key="key"
                >
                    <label :for="String(key)">{{ key }}</label>

                    <div v-if="Array.isArray(value) || typeof value === 'object'">
                        <RecursiveRenderer :data="value" />
                    </div>

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
const panelOpen = ref([true])
// Define Unit interface
interface Unit {
    '@name': string
    [key: string]: any
}

/* interface UnitItem {
    unittype?: string
    flag?: string
    [key: string]: any
} */

const unitData = ref<Unit[] | undefined>(undefined)
const selectedUnit = ref<Unit | undefined>(undefined)
const selectedUnitName = ref<string | undefined>(undefined)

// Fetch the JSON file
const { data } = await useFetch<{ unit: Unit[] }>('http://localhost:3000/proto.json')

if (data.value) {
    unitData.value = data.value.unit
}

watch(selectedUnitName, (newValue) => {
    selectedUnit.value = unitData.value?.find(unit => unit['@name'] === newValue) || undefined
})
</script>
