<template>
  <div>
    <label v-if="label" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Dari</label>
        <input
          :value="modelValue?.start"
          @input="updateStart($event.target.value)"
          type="date"
          :required="required"
          class="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors text-gray-800 dark:text-gray-100"
        />
      </div>
      <div>
        <label class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Sampai</label>
        <input
          :value="modelValue?.end"
          @input="updateEnd($event.target.value)"
          type="date"
          :required="required"
          class="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors text-gray-800 dark:text-gray-100"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  modelValue: {
    type: Object,
    default: () => ({ start: '', end: '' })
  },
  required: Boolean
})

const emit = defineEmits(['update:modelValue'])

const updateStart = (value) => {
  emit('update:modelValue', { ...props.modelValue, start: value })
}

const updateEnd = (value) => {
  emit('update:modelValue', { ...props.modelValue, end: value })
}
</script>

