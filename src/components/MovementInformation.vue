<template>
  <div class="my-3">
    <v-expansion-panels v-model="panelOpen">
      <v-expansion-panel>
        <v-expansion-panel-title>Movement Information</v-expansion-panel-title>
        <v-expansion-panel-text>
          <!-- Dropdown for Movement Type -->
          <v-select class="my-3" label="Movement Type" v-model="movementValues.movementType" :items="movementTypes" outlined />
          <!-- Other Movement Fields -->
          <TextField class="my-3" label="Max Velocity" v-model="movementValues.maxVelocity" />
          <TextField class="my-3" label="Turn Rate" v-model="movementValues.turnRate" />
          <TextField class="my-3" label="Max Run Velocity" v-model="movementValues.maxRunVelocity" />
          <v-btn prepend-icon="mdi-content-save" color="success" :rounded="false" @click="saveMovementAndClose">Save</v-btn>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts" setup>
const isClient = !import.meta.env.SSR

const panelOpen = ref([true])

// Movement Values explicitly typed
const movementValues = reactive({
  movementType: "",
  maxVelocity: "",
  turnRate: "",
  maxRunVelocity: "",
})

// Movement Types
const movementTypes = ["amphibious", "land", "water", "air"]

if (isClient) {
  // Load values from localStorage (if they exist)
  movementValues.movementType = localStorage.getItem("Movement Type") || ""
  movementValues.maxVelocity = localStorage.getItem("Max Velocity") || ""
  movementValues.turnRate = localStorage.getItem("Turn Rate") || ""
  movementValues.maxRunVelocity = localStorage.getItem("Max Run Velocity") || ""
}

const saveMovementAndClose = () => {
  if (isClient) {
    // Save values to localStorage
    localStorage.setItem("Movement Type", movementValues.movementType)
    localStorage.setItem("Max Velocity", movementValues.maxVelocity)
    localStorage.setItem("Turn Rate", movementValues.turnRate)
    localStorage.setItem("Max Run Velocity", movementValues.maxRunVelocity)
  }
  panelOpen.value = []
}
</script>
