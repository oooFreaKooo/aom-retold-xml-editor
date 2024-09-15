import { md3 } from 'vuetify/blueprints'
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
    ssr: {
        clientWidth: 100,
    },
    defaults: {
        VBtn: { density: 'compact' },
        VDialog: { density: 'compact' },
        VExpansionPanel: { density: 'compact' },
        VExpansionPanelText: { density: 'compact' },
        VExpansionPanelTitle: { density: 'compact' },
        VTextField: { density: 'compact' },
        VSelect: { density: 'compact' },
        VCombobox: { density: 'compact' },
        VComboboxChip: { density: 'compact' },
        VList: { density: 'compact' },
        VChipGroup: { density: 'compact' },
        VChip: { density: 'compact' },
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
                    background: '#FFFFFF',
                    potato: '#FDD835',
                    surface: '#F2F2F2',
                    primary: '#6200EE',
                    secondary: '#018786',
                    accent: '#03DAC6',
                    error: '#B00020',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
                    text: '#000000',
                    disabled: '#9E9E9E',
                },
            },
            dark: {
                dark: true,
                colors: {
                    background: '#121212',
                    surface: '#1E1E1E',
                    primary: '#BB86FC',
                    secondary: '#03DAC6',
                    accent: '#03DAC6',
                    error: '#CF6679',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
                    text: '#FFFFFF',
                    disabled: '#616161',
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
