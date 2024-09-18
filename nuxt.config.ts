import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    srcDir: 'src/',
    css: ['~/assets/scss/main.scss'],
    modules: [
        '@vueuse/nuxt',
        '@nuxt/image',
        'vuetify-nuxt-module',
        '@nuxt/eslint',
        'nuxt-particles',
    ],
    vuetify: {
        moduleOptions: {
            includeTransformAssetsUrls: {
                'v-card': [
                    'image',
                    'prepend-avatar',
                    'append-avatar',
                ],
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
            target: 'esnext',
        },
        vue: {
            script: {
                propsDestructure: true,
            },
        },
    },
    app: {
        baseURL: '/',
        head: {
            meta: [{ charset: 'utf-8' }],
        },
    },
    components: {
        dirs: [
            {
                path: '~/components',
                global: true,
                pathPrefix: false,
            },
        ],
    },
})
