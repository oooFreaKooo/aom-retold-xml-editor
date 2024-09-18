<template>
    <v-app-bar
        scroll-behavior="hide"
        scroll-threshold="100"
    >
        <v-container fluid>
            <v-row
                align="center"
                justify="space-between"
                no-gutters
            >
                <!-- Left Side: Logo and Title -->
                <v-col
                    cols="6"
                    md="4"
                    class="d-flex align-center"
                >
                    <v-app-bar-title class="gradient-text creative-title">
                        Your Name
                    </v-app-bar-title>
                </v-col>

                <!-- Center: Navigation Menu -->
                <v-col
                    class="d-none d-md-flex justify-center"
                    md="4"
                >
                    <v-btn
                        v-for="item in menuItems"
                        :key="item.title"
                        variant="text"
                        class="creative-btn"
                        @click="scrollTo(item.href)"
                    >
                        {{ item.title }}
                    </v-btn>
                </v-col>

                <!-- Right Side: Theme Toggle Button (visible on md and above) -->
                <v-col
                    cols="6"
                    md="4"
                    class="d-none d-md-flex justify-end"
                >
                    <v-btn
                        :icon="theme.global.name.value === 'light' ? 'mdi-white-balance-sunny' : 'mdi-moon-waxing-crescent'"
                        class="creative-theme-btn"
                        @click="toggleTheme"
                    />
                </v-col>

                <!-- Mobile menu icon -->
                <v-col
                    cols="6"
                    class="d-flex justify-end d-md-none"
                >
                    <v-app-bar-nav-icon @click="drawer = !drawer" />
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>

    <!-- Navigation Drawer for Mobile -->
    <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        class="d-md-none"
    >
        <v-list>
            <v-list-item
                v-for="item in menuItems"
                :key="item.title"
                :href="item.href"
                @click="drawer = false"
            >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>

            <v-btn
                class="mt-2"
                text="Switch Theme"
                variant="text"
                @click="toggleTheme"
            />
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()
const isScrolled = ref(false)
const drawer = ref(false)

const scrollTo = (containerId: string): void => {
    const element = document.getElementById(containerId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}

const menuItems = [
    { title: 'Home', href: '' },
    { title: 'Projects', href: 'projects' },
    { title: 'Skills', href: 'skills' },
    { title: 'Contact', href: 'contact' },
]
function handleScroll () {
    isScrolled.value = window.scrollY > 50
}
function toggleTheme () {
    theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light'
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.gradient-text {
    background: linear-gradient(45deg, #ff6f61, #ffcc00);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    transition: font-size 0.3s ease;
}

.v-app-bar--is-scrolled .creative-title {
    font-size: 1.5rem;
}

.creative-btn {
    margin: 0 10px;
    font-weight: 600;
    transition: color 0.3s;
}

.creative-btn:hover {
    color: #ffcc00;
}

.creative-theme-btn {
    transition: transform 0.3s ease;
}

.creative-theme-btn:hover {
    transform: rotate(20deg);
}

.v-app-bar--creative {
    backdrop-filter: blur(10px);
}
</style>
