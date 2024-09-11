<template>
    <VChipGroup column>
        <VChip
            v-for="(type, index) in selectedUnitTypes"
            :key="index"
            density="compact"
            closable
            class="mr-2 mb-2"
            @click="emit('remove-type', type)"
        >
            {{ type }}
        </VChip>
    </VChipGroup>
</template>

<script lang="ts" setup>
defineProps<{ selectedUnitTypes: string[] }>()

const emit = defineEmits<{
    (e: 'remove-type', type: string): void
}>()
</script>
