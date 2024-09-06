import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  css: ["~/assets/scss/main.scss"],

  typescript: {
    typeCheck: true,
  },

  modules: ["@nuxt/image"],
})
