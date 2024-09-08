<template>
  <VRow class="mt-16">
    <VCol cols="12" md="6">
      <BasicInformation />
    </VCol>
    <VCol cols="12" md="6">
      <MovementInformation />
    </VCol>
    <VCol cols="12" md="6">
      <UnitCombat />
    </VCol>
    <VCol cols="12">
      <UnitType :unit-types="selectedUnit?.unit || []" />
    </VCol>
    <VCol cols="12">
      <UnitFlag />
    </VCol>
  </VRow>
  <div>
    <h1>Select Unit</h1>
    <select v-if="protoData" @change="selectUnit($event)">
      <option v-for="unit in protoData" :key="unit['unit@name']" :value="unit['unit@name']">
        {{ unit["unit@name"] }}
      </option>
    </select>
    <div v-else>Loading...</div>

    <div v-if="selectedUnit">
      <h2>Editing: {{ selectedUnit["unit@name"] }}</h2>
      <div>
        <h2>Unit Configuration</h2>
        <div v-for="(value, key) in selectedUnit" :key="key">
          <label :for="String(key)">{{ key }}</label>

          <!-- Recursively render the nested object or array -->
          <div v-if="Array.isArray(value) || typeof value === 'object'">
            <ToolsRecursiveRenderer :data="value" />
          </div>

          <!-- Render non-nested values as input -->
          <input v-else :id="String(key)" v-model="selectedUnit[key]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define Unit interface
interface Unit {
  "unit@name": string
  [key: string]: any // Allow dynamic keys in unit
}

const protoData = ref<Unit[] | null>(null)
const selectedUnit = ref<Unit | null>(null)

// Fetch the JSON file
const { data } = await useFetch<{ proto: Unit[] }>("http://localhost:3000/units_data.json")

if (data.value) {
  protoData.value = data.value.proto
}

function selectUnit(event: Event) {
  const target = event.target as HTMLSelectElement
  const selectedUnitName = target.value
  const unit = protoData.value?.find((unit) => unit["unit@name"] === selectedUnitName)
  if (unit) {
    selectedUnit.value = { ...unit }
  }
}
</script>
