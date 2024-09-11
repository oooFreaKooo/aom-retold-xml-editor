import { md3 } from 'vuetify/blueprints'
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
    ssr: {
        clientWidth: 100,
    },
    defaults: {
        VBtn: { color: 'blue' },
    },
    aliases: {
        MyBadge: 'VBadge',
        MyBadge2: 'VBadge',
        VDatePicker2: 'VDatePicker',
        VDatePicker3: 'VDatePicker',
    },
    directives: [
        'ClickOutside', 'Resize', 'Ripple',
    ],
    components: [
        'VDialog', 'VExpansionPanel', 'VExpansionPanelText', 'VExpansionPanelTitle',
    ],
    blueprint: md3,
    theme: {
        defaultTheme: 'dark',
        themes: {
            light: {
                dark: false,
                colors: {
                    background: '#F8F9FA', // Light gray for background
                    surface: '#FFFFFF', // White for card and surface elements
                    primary: '#7289DA', // Discord's signature blue
                    secondary: '#99AAB5', // Light grayish blue for secondary elements
                    accent: '#5865F2', // More saturated blue for accent elements
                    error: '#F04747', // Bright red for errors
                    info: '#7289DA', // Blue for info elements (same as primary)
                    success: '#43B581', // Green for success states
                    warning: '#FAA61A', // Yellow for warnings
                    text: '#2C2F33', // Dark gray for readable text on white backgrounds
                    disabled: '#DCDDDE', // Light gray for disabled elements
                },
            },
            dark: {
                dark: true,
                colors: {
                    background: '#36393F', // Dark gray for the background
                    surface: '#2F3136', // Slightly lighter gray for surfaces
                    primary: '#7289DA', // Discord's blue for primary elements
                    secondary: '#99AAB5', // Light grayish blue for secondary elements
                    accent: '#5865F2', // Brighter blue for accent elements
                    error: '#F04747', // Bright red for errors
                    info: '#7289DA', // Blue for info elements (same as primary)
                    success: '#43B581', // Green for success states
                    warning: '#FAA61A', // Yellow for warnings
                    text: '#FFFFFF', // White text for readability on dark surfaces
                    disabled: '#4F545C', // Darker gray for disabled elements
                },
            },
        },
    },
    date: {
        adapter: 'vuetify',
    },
    icons: {
        defaultSet: 'mdi',
        sets: [
            {
                name: 'mdi',
                cdn: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
            },
        ],
    },
})
