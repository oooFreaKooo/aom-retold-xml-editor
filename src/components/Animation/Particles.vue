<template>
    <NuxtParticles
        id="tsparticles"
        url="particles.json"
        class="transparent"
        @load="onLoad"
    />
</template>

<script lang="ts" setup>
import type { Container } from '@tsparticles/engine'

const onLoad = (container: Container) => {
    container.pause()
    setTimeout(() => container.play(), 2000)
}
</script>

<style scoped>
#tsparticles {
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 1;
}
</style>
