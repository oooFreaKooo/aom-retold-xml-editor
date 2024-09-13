<template>
    <div>
        <div
            v-for="(value, key) in data"
            :key="key"
        >
            <!-- If the value is an object or array, render it recursively -->
            <div v-if="typeof value === 'object' && value !== null">
                <RecursiveRenderer :data="value" />
            </div>

            <!-- Render basic values -->
            <div v-else>
                <label>{{ key }}: </label>
                <input
                    :value="value"
                    disabled
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface RecursiveData {
    [key: string]: any
}

defineProps<{ data: RecursiveData | RecursiveData[] }>()
</script>
