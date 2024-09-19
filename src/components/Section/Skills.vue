<template>
    <v-container
        id="skills"
        class="my-16"
    >
        <h2 class="text-h3 my-12 text-center custom-font">
            Skills &amp; Expertise
        </h2>
        <div class="skills-grid">
            <div
                v-for="skill in skills"
                :key="skill.name"
                class="skill-item border"
            >
                <SkillsCard v-bind="skill" />
            </div>
        </div>
    </v-container>
</template>

<script lang="ts" setup>
const skills = [
    { name: 'Vue.js', icon: 'mdi-vuejs', color: 'green' },
    { name: 'React', icon: 'mdi-react', color: 'light-blue' },
    { name: 'Node.js', icon: 'mdi-nodejs', color: 'green darken-3' },
    { name: 'Python', icon: 'mdi-language-python', color: 'yellow darken-3' },
    { name: 'UI/UX', icon: 'mdi-palette-swatch', color: 'purple' },
    { name: 'DevOps', icon: 'mdi-cloud-sync', color: 'red lighten-2' },
]
</script>

<style scoped>
.skill-item {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  transition: all 0.3s ease;
}
.skill-item:hover {
  transform: translateY(-5px);
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
