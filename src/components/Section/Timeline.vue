<template>
    <v-container>
        <h1
            class="text-h2 mb-10 text-center font-weight-bold"
            style="background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
        >
            My Creative Journey
        </h1>
        <v-row class="position-relative">
            <v-divider
                vertical
                class="mx-auto gradient-timeline"
            />

            <v-col
                v-for="(item, index) in timelineItems"
                :key="index"
                cols="12"
                class="d-flex timeline-item"
                :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'"
            >
                <v-icon
                    color="white"
                    class="timeline-icon"
                    size="large"
                >
                    {{ item.icon }}
                </v-icon>

                <v-card
                    elevation="16"
                    class="timeline-content"
                    :class="index % 2 === 0 ? 'left' : 'right'"
                >
                    <v-card-title class="text-h6">
                        {{ item.date }}
                    </v-card-title>
                    <v-card-title class="text-h5 font-weight-bold">
                        {{ item.title }}
                    </v-card-title>

                    <v-card-text>
                        <p class="text-body-1 mb-4">
                            {{ item.description }}
                        </p>
                        <v-chip-group>
                            <v-chip
                                v-for="skill in item.skills"
                                :key="skill"
                                color="primary"
                                label
                                text-color="white"
                            >
                                {{ skill }}
                            </v-chip>
                        </v-chip-group>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            color="primary"
                            variant="elevated"
                            :href="item.link"
                            target="_blank"
                        >
                            Learn More
                            <v-icon end>
                                mdi-arrow-right
                            </v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    nextTick(() => {
        const items = document.querySelectorAll('.timeline-item')

        items.forEach((item) => {
            gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none reverse',
                },
            })
        })
    })
})

const timelineItems = [
    {
        date: '2018',
        icon: 'mdi-school',
        title: 'Graduated from Design School',
        description: 'Completed my degree in Graphic Design with honors, specializing in digital media and interactive design.',
        skills: [
            'Adobe Creative Suite', 'UI/UX', 'Typography',
        ],
        link: 'https://myportfolio.com/education',
    },
    {
        date: '2019',
        icon: 'mdi-briefcase',
        title: 'First Job as Junior Designer',
        description: 'Joined a startup as a junior designer, working on branding and marketing materials for tech companies.',
        skills: [
            'Branding', 'Marketing', 'Illustrator',
        ],
        link: 'https://myportfolio.com/first-job',
    },
    {
        date: '2020',
        icon: 'mdi-web',
        title: 'Freelance Web Designer',
        description: 'Started freelancing as a web designer, creating responsive websites for small businesses and entrepreneurs.',
        skills: [
            'HTML/CSS', 'JavaScript', 'WordPress',
        ],
        link: 'https://myportfolio.com/freelance',
    },
    {
        date: '2021',
        icon: 'mdi-pencil',
        title: 'Published Design Blog',
        description: 'Launched a design blog sharing insights, tutorials, and industry trends, gaining a substantial following.',
        skills: [
            'Content Creation', 'SEO', 'Social Media',
        ],
        link: 'https://mydesignblog.com',
    },
    {
        date: '2022',
        icon: 'mdi-book-open-page-variant',
        title: 'Design Workshop Instructor',
        description: 'Began teaching design workshops online, helping aspiring designers improve their skills and build portfolios.',
        skills: [
            'Teaching', 'Public Speaking', 'Mentoring',
        ],
        link: 'https://myportfolio.com/workshops',
    },
    {
        date: '2023',
        icon: 'mdi-rocket',
        title: 'Senior UX Designer at Tech Giant',
        description: 'Joined a leading tech company as a Senior UX Designer, working on innovative products used by millions.',
        skills: [
            'UX Research', 'Prototyping', 'Design Systems',
        ],
        link: 'https://myportfolio.com/current-role',
    },
]
</script>

<style scoped>
.gradient-timeline {
  background: linear-gradient(180deg, #6a11cb 0%, #2575fc 100%);
  width: 4px;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.timeline-icon {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  padding: 16px;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-content {
  position: relative;
  width: 45%;
  padding: 2rem;
  border-radius: 15px;
  transition: all 0.3s ease;
  z-index: 2;
}

.timeline-content.left {
  margin-right: auto;
  transform: translateX(-40%);
}

.timeline-content.right {
  margin-left: auto;
  transform: translateX(40%);
}

.timeline-item {
  margin-bottom: 4rem;
  position: relative;
}

.timeline-date {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  border-radius: 30px;
  padding: 0.75rem;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.timeline-left .timeline-icon {
  right: auto;
  left: calc(50%);
}

.timeline-right .timeline-icon {
  left: calc(50%);
}

@media (max-width: 768px) {
  .timeline-content {
    width: calc(100% - 50px);
    transform: none !important;
  }

.timeline-left .timeline-content {
  right: auto;
  left: calc(10%);
}

  .timeline-icon {
    left: 20px !important;
  }

  .gradient-timeline {
    left: 20px;
  }
}
</style>
