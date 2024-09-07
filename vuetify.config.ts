import { md3 } from "vuetify/blueprints"
import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration"
import { aliases, mdi } from "vuetify/iconsets/mdi"

export default defineVuetifyConfiguration({
  ssr: {
    clientWidth: 100,
  },
  defaults: {
    VBtn: { color: "blue" },
  },
  aliases: {
    MyBadge: "VBadge",
    MyBadge2: "VBadge",
    VDatePicker2: "VDatePicker",
    VDatePicker3: "VDatePicker",
  },
  directives: ["ClickOutside", "Resize", "Ripple"],
  components: ["VDialog", "VExpansionPanel", "VExpansionPanelText", "VExpansionPanelTitle"],
  // labComponents: ['VDataTable', 'VDatePickerControls', 'VDatePickerHeader'],
  blueprint: md3,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
      },
      dark: {
        dark: true,
      },
    },
  },
  date: {
    // adapter: 'date-fns',
    // adapter: 'luxon',
    adapter: "vuetify",
  },
  icons: {
    defaultSet: "mdi",
    sets: [
      {
        name: "mdi",
        cdn: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
      },
    ],
    // defaultSet: 'unocss-mdi',
    // defaultSet: 'mdi-svg',
    /* svg: {
      mdi: {
        aliases: {
          account: 'mdiAccount',
        },
      },
    }, */
  },
})
