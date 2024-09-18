<template>
    <div class="parallax-container">
        <AppHeader />
        <ModelRender />
        <Particles />
        <TypedText />
    </div>
    <v-row
        justify="center"
        class="bg-background"
    >
        <v-col
            cols="11"
            sm="10"
            md="8"
        >
            <slot />
        </v-col>
    </v-row>
    <AppFooter />
</template>

<script setup lang="ts">
//
</script>

<style scoped lang="scss">
.parallax-container {
  perspective: 5px;
  height: 80vh;
  overflow-x: hidden;
  overflow-y: hidden;
}
.bg-background {
  position: relative;
  z-index: 1;
}
</style>
