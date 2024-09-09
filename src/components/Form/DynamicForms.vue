<template>
  <v-expansion-panel :min-height="1">
    <v-expansion-panel-title>{{ title }}</v-expansion-panel-title>
    <v-expansion-panel-text>
      <div v-for="(field, index) in formFields" :key="index">
        <template v-if="field.type === 'select'">
          <v-combobox
            density="compact"
            clearable
            :label="field.label"
            v-model="formValues[field.label]"
            :items="field.options"
            @blur="commit"
            @focus="setActiveField(field.label)"
            variant="outlined" />
        </template>
        <template v-else>
          <v-text-field
            density="compact"
            :label="field.label"
            v-model="formValues[field.label]"
            @blur="commit"
            @focus="setActiveField(field.label)" />
        </template>
      </div>
      <v-row>
        <v-col>
          <v-btn variant="text" prepend-icon="mdi-content-save" color="success" :rounded="false" @click="saveAndClose"> Save </v-btn>
          <v-snackbar timeout="1000" v-model="snackbarVisible" color="success">
            Saved
            <template v-slot:actions> <v-btn icon="mdi-close" color="white" variant="text" @click="snackbarVisible = false" /> </template
          ></v-snackbar>
        </v-col>
        <v-col class="d-flex justify-end">
          <v-btn variant="text" prepend-icon="mdi-undo" color="warning" :rounded="false" @click="undo" :disabled="!canUndo"> Undo </v-btn>
          <v-btn variant="text" prepend-icon="mdi-redo" color="info" :rounded="false" @click="redo" :disabled="!canRedo"> Redo </v-btn>
        </v-col>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
  formFields: { label: string; type: "text" | "select"; options?: string[] }[]
  localStorageKey: string
  selectedUnit: Record<string, any> | null
}>()

const isClient = !import.meta.env.SSR
const panelOpen = ref([true])
const formValues = ref<Record<string, string>>({})
const { commit, undo, redo, canUndo, canRedo } = useManualRefHistory(formValues, { clone: true })
const activeField = ref<string | null>(null)
const snackbarVisible = ref(false)

// Watch selectedUnit for changes and populate form fields
watch(
  () => props.selectedUnit,
  (newUnit) => {
    if (newUnit) {
      props.formFields.forEach((field) => {
        formValues.value[field.label] = newUnit[field.label.toLowerCase()] || ""
      })
      commit()
    }
  },
  { immediate: true },
)

const setActiveField = (label: string) => {
  activeField.value = label
}

const saveAndClose = () => {
  if (isClient) {
    props.formFields.forEach((field) => {
      localStorage.setItem(`${props.localStorageKey}-${field.label}`, formValues.value[field.label] || "")
    })
  }
  panelOpen.value = []
  snackbarVisible.value = true
}
</script>
