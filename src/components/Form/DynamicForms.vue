<template>
    <div
        v-for="(section, index) in sections"
        :key="index"
        class="form-section"
    >
        <v-expansion-panel
            v-model="panelOpen[index]"
            :min-height="1"
        >
            <v-expansion-panel-title class="section-title">
                {{ section.title }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <div
                    v-for="(field, fieldIndex) in section.formFields"
                    :key="fieldIndex"
                >
                    <template v-if="field.type === 'select'">
                        <v-combobox
                            v-model="formValues[field.label]"
                            density="compact"
                            clearable
                            :label="field.label"
                            :items="field.options"
                            variant="outlined"
                            @blur="commit"
                            @focus="setActiveField(field.label)"
                        />
                    </template>
                    <template v-else>
                        <v-text-field
                            v-model="formValues[field.label]"
                            density="compact"
                            :label="field.label"
                            @blur="commit"
                            @focus="setActiveField(field.label)"
                        />
                    </template>
                </div>
                <v-row>
                    <v-col>
                        <v-btn
                            variant="text"
                            prepend-icon="mdi-content-save"
                            color="success"
                            :rounded="false"
                            @click="saveAndClose(section)"
                        >
                            Save
                        </v-btn>
                        <v-snackbar
                            v-model="snackbarVisible"
                            timeout="1000"
                            color="success"
                        >
                            Saved
                            <template #actions>
                                <v-btn
                                    icon="mdi-close"
                                    color="white"
                                    variant="text"
                                    @click="snackbarVisible = false"
                                />
                            </template>
                        </v-snackbar>
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
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    sections: {
        title: string
        formFields: { label: string, type: 'text' | 'select', options?: string[] }[]
        localStorageKey: string
    }[]
    selectedUnit: Record<string, any> | undefined
}>()

const isClient = !import.meta.env.SSR
const panelOpen = ref(Array(props.sections.length).fill(true))
const formValues = ref<Record<string, string>>({})
const { commit, undo, redo, canUndo, canRedo } = useManualRefHistory(formValues, { clone: true })
const activeField = ref<string | undefined>(undefined)
const snackbarVisible = ref(false)

watch(
    () => props.selectedUnit,
    (newUnit) => {
        if (newUnit) {
            props.sections.forEach((section) => {
                section.formFields.forEach((field) => {
                    formValues.value[field.label] = newUnit[field.label.toLowerCase()] || ''
                })
            })
            commit()
        }
    },
    { immediate: true },
)

const setActiveField = (label: string) => {
    activeField.value = label
}

const saveAndClose = (section: { localStorageKey: string, formFields: any[] }) => {
    if (isClient) {
        section.formFields.forEach((field) => {
            localStorage.setItem(`${section.localStorageKey}-${field.label}`, formValues.value[field.label] || '')
        })
    }
    snackbarVisible.value = true
}
</script>

  <style scoped>
  .form-section {
    margin-bottom: 20px;
  }

  .section-title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  </style>
