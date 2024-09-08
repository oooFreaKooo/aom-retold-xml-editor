<template>
  <div class="my-3">
    <v-expansion-panels v-model="panelOpen">
      <v-expansion-panel>
        <v-expansion-panel-title>Combat/Stats</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div v-for="(label, index) in formLabels" :key="index">
            <TextField class="my-3" :label="label" v-model="formValues[label]" />
          </div>
          <v-btn prepend-icon="mdi-content-save" color="success" :rounded="false" @click="saveAndClose">Save</v-btn>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts" setup>
const isClient = !import.meta.env.SSR

const panelOpen = ref([true])

// Form labels for Combat/Stats
const formLabels = [
  "Initial Hitpoints",
  "Max Hitpoints",
  "Line of Sight (LOS)",
  "Weight Class",
  "Auto Attack Range",
  "Unit Regen",
  "Recharge Time",
  "Max Contained Units",
  "Aux Recharge Time",
  "Armor Angle",
  "Armor Value",
]

const formValues = reactive<Record<string, string>>({})

// Load existing values from localStorage if they exist
if (isClient) {
  formLabels.forEach((label) => {
    formValues[label] = localStorage.getItem(label) || ""
  })
}

// Save values to localStorage on save
const saveAndClose = () => {
  if (isClient) {
    formLabels.forEach((label) => {
      localStorage.setItem(label, formValues[label] || "")
    })
  }
  panelOpen.value = []
}
</script>

<style></style>
