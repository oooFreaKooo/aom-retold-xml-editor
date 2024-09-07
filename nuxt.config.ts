import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  css: ["~/assets/scss/main.scss"],

  typescript: {
    typeCheck: true,
  },

  modules: ["@nuxt/image", "vuetify-nuxt-module"],
  vuetify: {
    moduleOptions: {
      includeTransformAssetsUrls: {
        "v-card": ["image", "prepend-avatar", "append-avatar"],
      },
      ssrClientHints: {
        reloadOnFirstRequest: false,
        prefersColorScheme: true,
        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },
        viewportSize: true,
      },
      // styles: { configFile: 'assets/custom-vuetify.scss' },
    },
  },
  vite: {
    clearScreen: false,
    build: {
      target: "esnext",
    },
    vue: {
      script: {
        propsDestructure: true,
      },
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },
  app: {
    baseURL: "/",
    head: {
      meta: [{ charset: "utf-8" }],
    },
  },
  experimental: {
    payloadExtraction: false,
    typedPages: false,
    watcher: "parcel",
  },
})
