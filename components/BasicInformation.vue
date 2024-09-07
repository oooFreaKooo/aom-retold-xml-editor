<template>
  <div class="my-3">
    <v-expansion-panels v-model="panelOpen">
      <v-expansion-panel>
        <v-expansion-panel-title>Basic Information</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div v-for="(label, index) in formLabels" :key="index">
            <FormTextField class="my-3" :label="label" v-model="formValues[label]" />
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

// Form labels
const formLabels = ["Name", "Display Name ID", "Rollover Text ID", "Short Rollover Text ID", "Editor Name ID"]
const formValues = reactive<Record<string, string>>({})

if (isClient) {
  formLabels.forEach((label) => {
    formValues[label] = localStorage.getItem(label) || ""
  })
}

const saveAndClose = () => {
  if (isClient) {
    formLabels.forEach((label) => {
      localStorage.setItem(label, formValues[label] || "")
    })
  }
  panelOpen.value = []
}
</script>

<style scoped lang="scss"></style>
