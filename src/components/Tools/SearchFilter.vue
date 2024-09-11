<template>
    <VTextField
        v-model="localSearchQuery"
        density="compact"
        :label="searchLabel"
        hide-details
        variant="outlined"
    />
    <VList>
        <VBtn
            v-for="category in Object.keys(categorizedUnitTypes)"
            :key="category"
            density="compact"
            :variant="activeCategory === category ? 'flat' : 'outlined'"
            :rounded="false"
            color="accent"
            :active="activeCategory === category"
            @click="$emit('select-category', category)"
        >
            {{ category }}
        </VBtn>
    </VList>
</template>

<script lang="ts" setup>
const props = defineProps({
    searchQuery: String,
    activeCategory: String,
    categorizedUnitTypes: {
        type: Object,
        required: true,
    },
    searchLabel: {
        type: String,
        default: 'Search types', // default label, can be customized by parent
    },
})

const emit = defineEmits(['update:searchQuery', 'select-category'])

const localSearchQuery = ref(props.searchQuery)

watch(localSearchQuery, (newValue) => {
    emit('update:searchQuery', newValue)

    // Automatically switch to the "All" category when user types something
    if (newValue) {
        emit('select-category', 'All')
    }
})
</script>
