<template>
    <div class="hero-container">
        <div class="glow" />
        <NuxtParticles
            id="tsparticles"
            url="particles.json"
            class="bg-background"
        />
        <div class="hero-content text-white">
            <h1
                id="heroTitle"
                class="hero-title text-h2"
            />
            <p class="hero-subtitle">
                Crafting Digital Marvels
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
const developerName = 'Your Name'

onMounted(() => {
    const heroTitle = document.getElementById('heroTitle')
    if (heroTitle) {
        developerName.split('').forEach((char, index) => {
            const span = document.createElement('span')
            span.textContent = char
            span.classList.add('char')
            span.style.animationDelay = `${index * 0.1}s`
            heroTitle.appendChild(span)
        })
    }
})
</script>

<style scoped>
.hero-container {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #0a0a0a3d, #1a1a1a5b);
  }

  .hero-title {
    font-size: 5vw;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5vw;
    position: relative;
    z-index: 2;
  }

  .hero-subtitle {
    font-size: 2vw;
    margin-top: 1vw;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s ease-out 1s forwards;
  }

  .glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(0,255,255,0.2) 0%, rgba(0,0,0,0) 70%);
    filter: blur(20px);
    opacity: 0;
    animation: pulse 4s ease-in-out infinite;
  }

  .particles {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.1; transform: scale(0.9); }
    50% { opacity: 0.3; transform: scale(1.1); }
  }

  @keyframes fadeInUp {
    to { opacity: 1; transform: translateY(0); }
  }

  .char {
    display: inline-block;
    opacity: 0;
    transform: translateY(50px);
    animation: fadeInUpChar 0.5s ease-out forwards;
  }

  @keyframes fadeInUpChar {
    to { opacity: 1; transform: translateY(0); }
  }
</style>
