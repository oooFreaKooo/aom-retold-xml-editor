<template>
  <VForm>
    <v-text-field v-model="inputValue" :label="label" hide-details></v-text-field>
  </VForm>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: "Value",
  },
  modelValue: {
    type: String,
    required: true,
  },
})

// Emits event for two-way binding
const emit = defineEmits(["update:modelValue"])

// Use the modelValue prop as the initial input value
const inputValue = ref(props.modelValue)

watch(inputValue, (newValue) => {
  emit("update:modelValue", newValue)
})
</script>

<style scoped lang="scss"></style>
