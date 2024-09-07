<template>
  <div class="my-2">
    <!-- Button to toggle form visibility -->
    <button class="btn neumorphic-btn w-100 mb-2" :class="{ active: isOpen }" @click="toggleForm">Basic Information</button>

    <!-- Collapsible form section -->
    <div class="collapse row justify-content-center" :class="{ show: isOpen }">
      <div class="col-12">
        <Form label="Name" />
      </div>
      <div class="col-12">
        <Form label="Display Name ID" />
      </div>
      <div class="col-12">
        <Form label="Rollover Text ID" />
      </div>
      <div class="col-12">
        <Form label="Short Rollover Text ID" />
      </div>
      <div class="col-12">
        <Form label="Editor Name ID" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// State to control form visibility
const isOpen = ref(true)

// Toggle form visibility
const toggleForm = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
$bg-color: #e0e5ec;
$shadow-light: #ffffff;
$shadow-dark: #a3b1c6;
$text-color: #4a4a4a;
$accent-color: #ff6b35;
$primary-color: #421715;
$highlight-color: #ffffff;
$shadow-color: #babecc;

.neumorphic-container {
  background: $bg-color;
  border-radius: 15px; // Smaller border-radius
  box-shadow: 6px 6px 12px $shadow-dark, -6px -6px 12px $shadow-light; // Smaller shadow
  padding: 10px; // Smaller padding
}

.neumorphic-btn {
  background: $bg-color;
  color: $text-color;
  border-radius: 15px; // Smaller border-radius
  font-size: 14px; // Smaller font-size
  padding: 8px 12px; // Smaller padding
  box-shadow: 6px 6px 12px $shadow-color, -6px -6px 12px $highlight-color; // Smaller shadow

  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 8px 8px 16px $shadow-color, -8px -8px 16px $highlight-color;
  }

  &:active,
  &.active {
    background-color: $primary-color;
    color: $bg-color;
  }
}

.neumorphic-content {
  background-color: $bg-color;
  border-radius: 10px;
  box-shadow: inset 4px 4px 8px $shadow-dark, inset -4px -4px 8px $shadow-light; // Smaller inset shadow
}

.collapse {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out; // Faster transition

  &.show {
    max-height: 100vh;
  }
}
</style>
