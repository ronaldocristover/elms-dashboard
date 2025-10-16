<template>
  <div>
    <label v-if="label" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="date"
      :required="required"
      class="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors text-gray-800 dark:text-gray-100"
    />
  </div>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: String,
  required: Boolean
})

defineEmits(['update:modelValue'])
</script>

