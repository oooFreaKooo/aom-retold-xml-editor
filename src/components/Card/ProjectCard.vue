<template>
    <v-card
        class="project-card border rounded-xl my-8"
        elevation="24"
    >
        <v-img
            :src="project.image"
            height="200"
            cover
        />
        <v-card-title class="text-h5">
            {{ project.title }}
        </v-card-title>

        <v-card-text>
            <p>{{ project.description }}</p>
            <v-chip-group>
                <v-chip
                    v-for="tech in project.technologies"
                    :key="tech"
                    small
                >
                    {{ tech }}
                </v-chip>
            </v-chip-group>
        </v-card-text>

        <v-card-actions>
            <v-btn
                color="primary"
                :href="project.link"
                target="_blank"
            >
                View Project
            </v-btn>
            <v-spacer />
            <v-btn
                :icon="project.expand ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="$emit('toggleExpand')"
            />
        </v-card-actions>

        <v-expand-transition>
            <div v-show="project.expand">
                <v-divider />
                <v-card-text>
                    <p>{{ project.fullDescription }}</p>
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script lang="ts" setup>
defineProps({
    project: {
        type: Object,
        required: true,
    },
})

defineEmits(['toggleExpand'])
</script>

<style scoped>
.project-card {
  transition: transform 0.3s ease-in-out;
}

.project-card:hover {
  transform: translateY(-10px);
}
</style>
