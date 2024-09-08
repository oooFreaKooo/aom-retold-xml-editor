<template>
  <v-card style="z-index: 2">
    <v-row>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Unit XML Editor</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" :temporary="$vuetify.display.smAndDown" :rail="!$vuetify.display.smAndDown" expand-on-hover>
        <v-list>
          <v-list-item
            @click="toggleTheme"
            :prepend-icon="theme.global.name.value === 'light' ? 'mdi-white-balance-sunny' : 'mdi-moon-waxing-crescent'"
            :title="capitalize(theme.global.name.value) + ' Theme'"
            subtitle="Click to switch">
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list selectable density="comfortable" nav>
          <NuxtLink v-for="(item, index) in navItems" :key="index" :to="item.link" class="nav-link">
            <v-list-item :prepend-icon="item.icon" :title="item.name"></v-list-item>
          </NuxtLink>
        </v-list>
      </v-navigation-drawer>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify"

const theme = useTheme()
const drawer = ref(false)

function toggleTheme() {
  theme.global.name.value = theme.global.name.value === "light" ? "dark" : "light"
}

const navItems = [
  { name: "Home", link: "/", icon: "mdi-home" },
  { name: "About", link: "#", icon: "mdi-head-question" },
  { name: "Tools", link: "#", icon: "mdi-tools" },
  { name: "Contact", link: "#", icon: "mdi-email" },
]
function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: inherit;
}
</style>
