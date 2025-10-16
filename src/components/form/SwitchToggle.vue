<template>
  <div class="flex items-center justify-between">
    <div v-if="label" class="flex-1">
      <label class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ label }}</label>
      <p v-if="description" class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ description }}</p>
    </div>
    <button
      type="button"
      @click="toggle"
      :class="[
        'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
        modelValue ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
      ]"
    >
      <span
        :class="[
          'inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm',
          modelValue ? 'translate-x-6' : 'translate-x-1'
        ]"
      />
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  description: String,
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const toggle = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

