<template>
  <v-card>
    <v-row>
      <v-navigation-drawer permanent expand-on-hover rail>
        <v-list>
          <v-list-item
            @click="toggleTheme"
            :prepend-icon="theme.global.name.value === 'light' ? 'mdi-moon-waxing-crescent' : 'mdi-white-balance-sunny'"
            :title="capitalize(theme.global.name.value)"
            subtitle="Color Theme">
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

function toggleTheme() {
  theme.global.name.value = theme.global.name.value === "light" ? "dark" : "light"
}

const navItems = [
  { name: "Home", link: "/", icon: "mdi-home" },
  { name: "About", link: "/about", icon: "mdi-head-question" },
  { name: "Tools", link: "/tools", icon: "mdi-tools" },
  { name: "Contact", link: "/contact", icon: "mdi-email" },
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
