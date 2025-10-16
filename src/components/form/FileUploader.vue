<template>
  <div>
    <label v-if="label" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    
    <div
      @drop.prevent="handleDrop"
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      :class="[
        'border-2 border-dashed rounded-lg p-6 text-center transition-colors',
        isDragging 
          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
          : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-500'
      ]"
    >
      <input
        ref="fileInput"
        type="file"
        :accept="accept"
        :multiple="multiple"
        @change="handleFileSelect"
        class="hidden"
      />

      <div v-if="files.length === 0">
        <svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          <button type="button" @click="$refs.fileInput.click()" class="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700">
            Pilih file
          </button>
          atau drag & drop
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
          {{ acceptText }}
        </p>
      </div>

      <div v-else class="space-y-2">
        <div
          v-for="(file, index) in files"
          :key="index"
          class="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <div class="flex items-center space-x-3 flex-1 min-w-0">
            <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-800 dark:text-gray-100 truncate">{{ file.name }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ formatFileSize(file.size) }}</p>
            </div>
          </div>
          <button
            type="button"
            @click="removeFile(index)"
            class="ml-2 text-red-500 hover:text-red-700 dark:hover:text-red-400 flex-shrink-0"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <button
          v-if="multiple"
          type="button"
          @click="$refs.fileInput.click()"
          class="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 font-medium"
        >
          + Tambah file lain
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: String,
  modelValue: {
    type: [File, Array],
    default: null
  },
  required: Boolean,
  accept: {
    type: String,
    default: '*'
  },
  multiple: {
    type: Boolean,
    default: false
  },
  acceptText: {
    type: String,
    default: 'PDF, DOC, DOCX hingga 10MB'
  }
})

const emit = defineEmits(['update:modelValue'])

const fileInput = ref(null)
const files = ref([])
const isDragging = ref(false)

const handleFileSelect = (event) => {
  const selectedFiles = Array.from(event.target.files)
  addFiles(selectedFiles)
}

const handleDrop = (event) => {
  isDragging.value = false
  const droppedFiles = Array.from(event.dataTransfer.files)
  addFiles(droppedFiles)
}

const addFiles = (newFiles) => {
  if (props.multiple) {
    files.value = [...files.value, ...newFiles]
    emit('update:modelValue', files.value)
  } else {
    files.value = [newFiles[0]]
    emit('update:modelValue', newFiles[0])
  }
}

const removeFile = (index) => {
  files.value.splice(index, 1)
  emit('update:modelValue', props.multiple ? files.value : null)
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}
</script>

