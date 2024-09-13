<template>
    <v-row
        v-for="(value, key) in dataCopy"
        :key="key"
        class="mb-3"
    >
        <v-col
            v-if="typeof value === 'object' && value !== null"
            cols="12"
        >
            <template v-if="Array.isArray(value)">
                <h4>{{ label }}</h4>
                <v-row
                    v-for="(item, index) in value"
                    :key="index"
                >
                    <v-col cols="12">
                        <v-text-field
                            v-model="dataCopy[key][index]"
                            variant="outlined"
                            :label="`${label} ${index + 1}`"
                        />
                    </v-col>
                </v-row>
            </template>

            <template v-else>
                <h4>{{ label }}</h4>
                <RecursiveRenderer
                    :data="value"
                    :label="String(key)"
                />
            </template>
        </v-col>

        <v-col
            v-else
            cols="12"
        >
            <v-text-field
                v-model="dataCopy[key]"
                variant="outlined"
                :label="label"
            />
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface RecursiveData {
    [key: string]: any
}

const props = defineProps<{ data: RecursiveData | RecursiveData[], label: string }>()

const dataCopy = ref(JSON.parse(JSON.stringify(props.data)))

watch(() => props.data, (newData) => {
    dataCopy.value = JSON.parse(JSON.stringify(newData))
}, { deep: true })
</script>
