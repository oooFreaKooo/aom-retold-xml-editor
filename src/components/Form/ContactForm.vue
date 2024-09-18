<template>
    <v-row
        id="contact"
        justify="center"
        class="my-16"
    >
        <v-col
            cols="12"
            md="8"
        >
            <h2 class="text-h3 mb-6 text-center custom-font">
                Let's Connect
            </h2>
            <v-row justify="center">
                <v-col
                    v-for="contact in contacts"
                    :key="contact.name"
                    cols="auto"
                >
                    <v-btn
                        color="transparent"
                        size="56"
                        :href="contact.link"
                        target="_blank"
                    >
                        <v-icon
                            :color="contact.color"
                            size="46"
                        >
                            {{ contact.icon }}
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
const contacts = [
    { name: 'GitHub', icon: 'mdi-github', color: 'grey lighten-3', link: 'https://github.com/creativepersona' },
    { name: 'LinkedIn', icon: 'mdi-linkedin', color: 'blue darken-1', link: 'https://linkedin.com/in/creativepersona' },
    { name: 'Twitter', icon: 'mdi-twitter', color: 'light-blue accent-4', link: 'https://twitter.com/creativepersona' },
    { name: 'Email', icon: 'mdi-email', color: 'red lighten-1', link: 'mailto:hello@creativepersona.com' },
]
</script>

<style>
.custom-font {
    font-family: 'Inter', sans-serif;
}
</style>
