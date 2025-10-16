<template>
  <div>
    <label v-if="label" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <QuillEditor
      :content="modelValue"
      @update:content="$emit('update:modelValue', $event)"
      :toolbar="toolbar"
      theme="snow"
      :class="editorClass"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

defineProps({
  label: String,
  modelValue: String,
  required: Boolean,
  placeholder: {
    type: String,
    default: 'Tulis sesuatu...'
  },
  editorClass: {
    type: String,
    default: 'bg-white dark:bg-gray-900'
  }
})

defineEmits(['update:modelValue'])

const toolbar = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'align': [] }],
  ['link', 'image'],
  ['clean']
]
</script>

<style>
.ql-toolbar {
  @apply bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-t-lg;
}

.ql-container {
  @apply bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-b-lg text-gray-800 dark:text-gray-100;
  min-height: 200px;
}

.ql-editor {
  @apply text-gray-800 dark:text-gray-100;
}

.ql-editor.ql-blank::before {
  @apply text-gray-400 dark:text-gray-500;
}

.dark .ql-stroke {
  stroke: #9ca3af;
}

.dark .ql-fill {
  fill: #9ca3af;
}

.dark .ql-picker-label {
  color: #9ca3af;
}
</style>

