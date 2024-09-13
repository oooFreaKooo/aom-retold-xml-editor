<template>
    <!--    <VRow class="mt-16">
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
    </VRow> -->
    <div class="mt-16">
        <v-container>
            <v-row>
                <v-col>
                    <h1>Select Unit</h1>
                    <v-combobox
                        v-if="protoData && protoData.unit.length"
                        v-model="selectedUnitName"
                        :items="unitOptions"
                        label="Select Unit"
                        clearable
                    />

                    <v-progress-circular
                        v-else
                        indeterminate
                        color="primary"
                    >
                        Loading...
                    </v-progress-circular>
                </v-col>
            </v-row>

            <v-row v-if="selectedUnit">
                <v-col>
                    <h2>Unit Configuration</h2>
                    <v-row
                        v-for="(value, key) in selectedUnit"
                        :key="key"
                    >
                        <v-col>
                            <v-text-field
                                v-if="!Array.isArray(value) && typeof value !== 'object'"
                                v-model="selectedUnit[key]"
                                :label="String(key)"
                                variant="outlined"
                            />

                            <RecursiveRenderer
                                v-else
                                :data="value"
                                :label="String(key)"
                            />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup lang="ts">
interface Unit {
    '@name': string
    [key: string]: any
}

interface ProtoData {
    unit: Unit[]
}
const { data } = await useFetch<ProtoData>('http://localhost:3000/units_data.json')

const protoData = ref<ProtoData | null>(null)
const selectedUnit = ref<Unit | null>(null)
type UnitOption = { value: string, title: string } | string
const selectedUnitName = ref<UnitOption | null>(null)

if (data.value) {
    protoData.value = { ...data.value }
}

const unitOptions = computed(() => {
    return protoData.value?.unit.map(unit => ({
        value: unit['@name'],
        title: unit['@name'],
    })) || []
})

watch(selectedUnitName, (selected) => {
    const unitName = typeof selected === 'object' && selected !== null ? selected.value : selected
    const unit = protoData.value?.unit.find(unit => unit['@name'] === unitName)
    if (unit) {
        selectedUnit.value = { ...unit }
    }
})
</script>

<!--
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
    <div class="mt-16">
        <h1>Select Unit</h1>
        <v-combobox
            v-if="protoData && protoData.length"
            v-model="selectedUnitName"
            :items="protoData.map(unit => unit['unit@name'])"
            label="Select Unit"
        />
        <div v-else>
            Loading...
        </div>

        <v-container
            v-if="selectedUnit"
            fluid
        >
            <h2>Editing: {{ selectedUnit['unit@name'] }}</h2>

            <v-expansion-panels multiple>

                <v-expansion-panel>
                    <v-expansion-panel-title>Flags</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div
                            v-for="(value, key) in filteredData('flag')"
                            :key="key"
                        >
                            <div v-if="typeof value === 'object'">
                                <RecursiveRenderer :data="value" />
                            </div>
                            <v-text-field
                                v-else
                                v-model="selectedUnit[key]"
                                :label="String(key)"
                                density="compact"
                                variant="outlined"
                            />
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-title>Unit Types</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div
                            v-for="(value, key) in filteredData('unittype')"
                            :key="key"
                        >
                            <div v-if="typeof value === 'object'">
                                <RecursiveRenderer :data="value" />
                            </div>
                            <v-text-field
                                v-else
                                v-model="selectedUnit[key]"
                                :label="String(key)"
                                density="compact"
                                variant="outlined"
                            />
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-title>Proto Actions</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div
                            v-for="(value, key) in filteredData('protoaction')"
                            :key="key"
                        >
                            <div v-if="typeof value === 'object'">
                                <RecursiveRenderer :data="value" />
                            </div>
                            <v-text-field
                                v-else
                                v-model="selectedUnit[key]"
                                :label="String(key)"
                                density="compact"
                                variant="outlined"
                            />
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-title>Other</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div
                            v-for="(value, key) in filteredData('other')"
                            :key="key"
                        >
                            <div v-if="typeof value === 'object'">
                                <RecursiveRenderer :data="value" />
                            </div>
                            <v-text-field
                                v-else
                                v-model="selectedUnit[key]"
                                :label="String(key)"
                                density="compact"
                                variant="outlined"
                            />
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
    </div>
</template>

<script setup lang="ts">
// Define Unit interface
interface Unit {
    'unit@name': string
    [key: string]: any
}

const protoData = ref<Unit[] | null>(null)
const selectedUnit = ref<Unit | null>(null)
const selectedUnitName = ref<string | null>(null)

// Fetch the JSON file
const { data } = await useFetch<{ proto: Unit[] }>('http://localhost:3000/units_data.json')

if (data.value) {
    protoData.value = data.value.proto
}

/* eslint-disable vue/script-indent */
// Update the filteredData method to handle 'sharedselectionunittypes' correctly
const filteredData = (type: 'flag' | 'unittype' | 'protoaction' | 'other') => {
    if (!selectedUnit.value) {
        return {}
    }

    const entries = Object.entries(selectedUnit.value).flatMap(([ key, value ]) => {
        if (Array.isArray(value)) {
            // Flatten nested arrays for rendering
            return value.flatMap(item => Object.entries(item))
        }
        return [[ key, value ]]
    })

    switch (type) {
        case 'flag':
            return Object.fromEntries(
                entries.filter(([key]) =>
                    key.toLowerCase().includes('flag'),
                ),
            )
        case 'unittype':
            return Object.fromEntries(
                entries.filter(([key]) =>
                    key.toLowerCase().includes('unittype'),
                ),
            )
        case 'protoaction':
            return Object.fromEntries(
                entries.filter(([key]) =>
                    key.toLowerCase().includes('protoaction'),
                ),
            )
        default:
            return Object.fromEntries(
                entries.filter(([key]) =>
                    ![
                        'flag', 'unittype', 'protoaction',
                    ].some(k =>
                        key.toLowerCase().includes(k),
                    ),
                ),
            )
    }
}

watch(selectedUnitName, (newValue) => {
    if (newValue) {
        // Find the unit in protoData by its name
        const unit = protoData.value?.find(unit => unit['unit@name'] === newValue)

        if (unit) {
            const flattenedUnit = unit.unit.reduce((acc: any, item: any) => {
                Object.entries(item).forEach(([ key, value ]) => {
                    if (key === 'flag') {
                        acc[key] = acc[key] ? [ ...acc[key], value ] : [value]
                    } else {
                        acc[key] = value
                    }
                })
                return acc
            }, {})

            selectedUnit.value = { 'unit@name': unit['unit@name'], ...flattenedUnit }
        }
    }
})
</script>
 -->
