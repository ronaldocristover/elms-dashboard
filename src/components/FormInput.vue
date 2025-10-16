<template>
  <div>
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <input
      v-if="type !== 'textarea' && type !== 'select'"
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
      :placeholder="placeholder"
      class="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
    />
    <textarea
      v-else-if="type === 'textarea'"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
      :rows="rows"
      :placeholder="placeholder"
      class="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
    ></textarea>
    <select
      v-else-if="type === 'select'"
      :id="id"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :required="required"
      class="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors text-gray-800 dark:text-gray-100"
    >
      <slot />
    </select>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  modelValue: [String, Number],
  required: Boolean,
  placeholder: String,
  rows: {
    type: Number,
    default: 4
  }
})

defineEmits(['update:modelValue'])
</script>

