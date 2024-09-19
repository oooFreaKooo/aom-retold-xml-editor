<template>
    <TypedText />
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-img
                    rounded="xl"
                    src="https://picsum.photos/1200/600"
                    alt="A panoramic view of a vibrant cityscape at sunset, showcasing modern architecture and natural beauty"
                    class="custom-image"
                />
            </v-col>
        </v-row>
        <div class="my-16">
            <div style="height: 10px;" />
        </div>
        <v-row class="mt-8">
            <v-col
                cols="12"
            >
                <h1 class="text-h2 mb-6 text-center">
                    About Me
                </h1>
                <p class="about-text">
                    Welcome to my portfolio! I'm Jane Doe, a passionate and creative web developer with a keen eye for design and a love for cutting-edge technologies.
                    With over 5 years of experience in the industry, I've had the pleasure of working on a diverse range of projects, from sleek corporate websites to innovative e-commerce platforms.
                </p>
                <p class="about-text mt-4">
                    My expertise lies in front-end development, where I specialize in crafting responsive and intuitive user interfaces
                    using modern frameworks like Vue.js and Vuetify. I'm also well-versed in back-end technologies, allowing me to create full-stack solutions that are both powerful and efficient.
                </p>
                <p class="about-text mt-4">
                    When I'm not coding, you can find me exploring the great outdoors, experimenting with new recipes in the kitchen, or
                    contributing to open-source projects. I believe in the power of continuous learning and always strive to stay ahead of the curve in this ever-evolving field of web development.
                </p>
                <p class="about-text mt-4">
                    I'm excited about the possibility of bringing my skills, creativity, and passion to your next project. Let's collaborate and turn your ideas into reality!
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  .custom-image {
    max-height: 600px;
    object-fit: cover;
    width: 100%;
  }
  .about-text {
    font-size: 1.2rem;
    line-height: 1.8;
  }
</style>
