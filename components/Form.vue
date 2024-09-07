<template>
  <form>
    <div class="mb-2">
      <label for="inputField" class="h6 small-label">{{ label }}</label>
      <input type="text" id="inputField" v-model="inputValue" class="form-control input-neumorphic" placeholder="Type here..." />
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

const inputValue = ref("")
</script>

<style scoped lang="scss"></style>
