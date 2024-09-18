<template>
    <v-container id="projects">
        <v-row class="my-16">
            <v-col cols="12">
                <h2 class="text-h3 mb-6 text-center gradient-text">
                    Featured Projects
                </h2>
            </v-col>

            <v-col
                v-for="(project, index) in projects"
                :key="project.title"
                cols="12"
                md="4"
            >
                <ProjectCard
                    :project="project"
                    @toggle-expand="toggleExpand(index)"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
const projects = ref([
    {
        title: 'AI-Powered Portfolio Generator',
        description: 'Create stunning portfolios with AI assistance',
        fullDescription: 'An innovative platform that uses AI to help users create professional portfolios.'
            + ' It analyzes user data and preferences to generate personalized layouts and content suggestions.',
        image: 'https://picsum.photos/seed/portfolio/500/300',
        link: 'https://example.com/ai-portfolio',
        technologies: [
            'Vue.js', 'Node.js', 'TensorFlow.js',
        ],
        expand: false,
    },
    {
        title: 'Virtual Reality Art Gallery',
        description: 'Immersive 3D art experiences in your browser',
        fullDescription: 'A WebVR-based virtual art gallery that allows artists to showcase their work in immersive 3D environments.'
            + ' Visitors can explore exhibitions using VR headsets or their web browsers.',
        image: 'https://picsum.photos/seed/vr-gallery/500/300',
        link: 'https://example.com/vr-gallery',
        technologies: [
            'Three.js', 'WebVR', 'React',
        ],
        expand: false,
    },
    {
        title: 'Eco-Friendly Smart Home Hub',
        description: 'Manage your sustainable smart home effortlessly',
        fullDescription: 'A comprehensive IoT platform for eco-conscious homeowners.'
            + ' It integrates with various smart devices to optimize energy consumption, reduce waste, and promote sustainable living.',
        image: 'https://picsum.photos/seed/smart-home/500/300',
        link: 'https://example.com/eco-home',
        technologies: [
            'IoT', 'React Native', 'GraphQL',
        ],
        expand: false,
    },
])
const toggleExpand = (index: number) => {
    projects.value[index].expand = !projects.value[index].expand
}
</script>

<style scoped>

</style>
