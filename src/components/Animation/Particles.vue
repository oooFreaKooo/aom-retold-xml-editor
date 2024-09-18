<template>
    <NuxtParticles
        id="tsparticles"
        url="particles.json"
        class="bg-background"
        @load="onLoad"
    />
</template>

<script lang="ts" setup>
import type { Container } from '@tsparticles/engine'
import { gsap } from 'gsap'

const holeSize = ref('800px')
const holeX = ref('20%')
const holeY = ref('40%')

const onLoad = (container: Container) => {
    container.pause()
    setTimeout(() => container.play(), 2000)

    document.addEventListener('mousemove', (event: MouseEvent) => {
        const x = (event.clientX / window.innerWidth) * 100
        const y = (event.clientY / window.innerHeight) * 100

        const distanceFromCenterY = Math.abs(event.clientY - window.innerHeight / 2) / (window.innerHeight / 2)

        const size = 1000 - distanceFromCenterY * 400

        gsap.to(holeX, { value: `${x}%`, duration: 0.5 })
        gsap.to(holeY, { value: `${y}%`, duration: 0.5 })
        gsap.to(holeSize, { value: `${size}px`, duration: 0.5 })
    })
}
</script>

<style scoped>
#tsparticles {
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 1;

  --hole-size: v-bind(holeSize);
  --hole-x: v-bind(holeX);
  --hole-y: v-bind(holeY);

  -webkit-mask-image: radial-gradient(circle var(--hole-size) at var(--hole-x) var(--hole-y), transparent, black);
  mask-image: radial-gradient(circle var(--hole-size) at var(--hole-x) var(--hole-y), transparent, black);
}
</style>
