<template>
    <v-icon
        size="48"
        :color="color"
    >
        {{ icon }}
    </v-icon>
    <div class="mt-2">
        {{ name }}
    </div>
</template>

<script lang="ts" setup>
defineProps({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
})
</script>

<style scoped>
.skill-item {
    text-align: center;
    padding: 20px;
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    transition: all 0.3s ease;
}
.skill-item:hover {
    transform: translateY(-5px);
    background: rgba(255,255,255,0.2);
}
.custom-font {
    font-family: 'Inter', sans-serif;
}
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
}
</style>
