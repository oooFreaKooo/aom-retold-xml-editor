<template>
  <div class="my-2 neumorphic-container">
    <!-- Button with ripple effect and mousemove event -->
    <VBtn :class="{ active: isOpen }" @click="toggleForm()">Basic Information</VBtn>

    <!-- Collapsible form section -->
    <div class="collapse row justify-content-center" :class="{ show: isOpen }">
      <div class="col-12" v-for="label in formLabels" :key="label">
        <Form :label="label" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// State to control form visibility
const isOpen = ref(true)

// Form labels
const formLabels = ["Name", "Display Name ID", "Rollover Text ID", "Short Rollover Text ID", "Editor Name ID"]

// Toggle form visibility
const toggleForm = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
.collapse {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.6s ease-in-out, padding 0.6s ease-in-out;

  &.show {
    max-height: 500px;
    padding: 10px 0;
  }
}
</style>
