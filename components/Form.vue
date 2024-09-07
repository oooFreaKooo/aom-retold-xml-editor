<template>
  <form>
    <div class="mb-2">
      <label for="inputField" class="h6 small-label">{{ label }}</label>
      <input type="text" id="inputField" v-model="inputValue" class="form-control neumorphic-input" placeholder="Type here..." />
    </div>
  </form>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: "Value",
  },
})
// Form input state
const inputValue = ref("")
</script>

<style scoped lang="scss">
$bg-color: #e0e5ec;
$shadow-light: #ffffff;
$shadow-dark: #a3b1c6;
$text-color: #4a4a4a;
$primary-color: #ff4136;
$highlight-color: #ffffff;
$shadow-color: #babecc;

.small-label {
  font-size: 12px; // Smaller label size
}

.neumorphic-input {
  background: $bg-color;
  color: $text-color;
  border: none;
  border-radius: 8px; // Smaller border-radius
  padding: 6px 10px; // Smaller padding for input
  font-size: 12px; // Smaller font size
  box-shadow: inset 3px 3px 7px $shadow-dark, inset -3px -3px 7px $shadow-light; // Smaller shadows
  width: 100%;
}

.neumorphic-btn {
  background-color: $bg-color;
  color: $text-color;
  border-radius: 10px;
  font-size: 14px; // Smaller font size for buttons
  padding: 6px 10px; // Reduced padding for the button
  box-shadow: 6px 6px 12px $shadow-color, -6px -6px 12px $highlight-color; // Smaller shadows

  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 8px 8px 16px $shadow-color, -8px -8px 16px $highlight-color;
  }

  &:active,
  &.active {
    background-color: $primary-color;
    color: $bg-color;
    box-shadow: inset 6px 6px 12px $shadow-color, inset -6px -6px 12px $highlight-color;
  }
}
</style>
