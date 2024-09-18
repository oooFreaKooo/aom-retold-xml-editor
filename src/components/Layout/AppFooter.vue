<template>
    <v-footer
        color="deep-purple"
        dark
    >
        <v-container>
            <v-row align="center">
                <v-col
                    cols="12"
                    md="6"
                    class="text-center text-md-left"
                >
                    &copy; {{ new Date().getFullYear() }} Your Name. All rights reserved.
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                    class="text-center text-md-right"
                >
                    <v-btn
                        v-for="icon in socialIcons"
                        :key="icon.name"
                        :href="icon.link"
                        target="_blank"
                        size="large"
                        class="mx-2"
                        color="transparent"
                        :icon="icon.name"
                        flat
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script lang="ts" setup>
const socialIcons = [
    { name: 'mdi-github', link: 'https://github.com/alexchen' },
    { name: 'mdi-linkedin', link: 'https://linkedin.com/in/alexchen' },
    { name: 'mdi-twitter', link: 'https://twitter.com/alexchen' },
    { name: 'mdi-instagram', link: 'https://instagram.com/alexchen' },
]
</script>

<style>

</style>
