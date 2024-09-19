<template>
    <v-container
        height="50vh"
        width="100%"
        class="d-flex align-center justify-center"
    >
        <v-row
            justify="center"
        >
            <v-col
                cols="12"
                md="8"
                class="text-center"
            >
                <h1 class="text-h2 font-weight-bold mb-14">
                    <span id="typed-output" />
                </h1>
                <p class="text-h5">
                    Blending Code, Design, and Imagination
                </p>
            </v-col>
        </v-row>
    </v-container>
    <div class="scroll-down">
        <v-icon x-large>
            mdi-chevron-down
        </v-icon>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const phrases = [
    'Welcome to My Creative Universe',
    'Where Code Meets Imagination',
    'Innovative Web Experiences',
]

let currentPhraseIndex = 0
let currentCharacterIndex = 0
let isDeleting = false
const typingSpeed = 100
const backspacingSpeed = 50
const delayBetweenPhrases = 2000

const typeText = () => {
    const typedElement = document.getElementById('typed-output')
    if (typedElement) {
        const currentPhrase = phrases[currentPhraseIndex]
        const updatedText = currentPhrase.slice(0, currentCharacterIndex)

        // Update text
        typedElement.textContent = updatedText

        if (!isDeleting) {
            // Typing
            if (currentCharacterIndex < currentPhrase.length) {
                currentCharacterIndex++
                setTimeout(typeText, typingSpeed)
            } else {
                // Pause at the end of the phrase
                setTimeout(() => {
                    isDeleting = true
                    setTimeout(typeText, backspacingSpeed)
                }, delayBetweenPhrases)
            }
        } else if (currentCharacterIndex > 0) {
            currentCharacterIndex--
            setTimeout(typeText, backspacingSpeed)
        } else {
            // Move to the next phrase
            isDeleting = false
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length
            setTimeout(typeText, typingSpeed)
        }
    }
}

onMounted(() => {
    typeText()

    gsap.utils.toArray('.v-card').forEach((card) => {
        const target = card as HTMLElement
        ScrollTrigger.create({
            trigger: target,
            start: 'top bottom-=100',
            end: 'top center',
            scrub: true,
            onEnter: () => gsap.to(target, { opacity: 1, y: 0, duration: 2, ease: 'power3.out' }),
            onLeaveBack: () => gsap.to(target, { opacity: 0, y: 100, duration: 2 }),
        })
    })
})
</script>

<style scoped>
#typed-output {
    border-right: 2px solid;
    animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
    50% {
        border-color: transparent;
    }
}

.scroll-down {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
}
</style>
