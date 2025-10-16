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
        'border-2 border-dashed rounded-lg p-6 transition-colors',
        isDragging 
          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
          : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-500'
      ]"
    >
      <input
        ref="imageInput"
        type="file"
        accept="image/*"
        :multiple="multiple"
        @change="handleImageSelect"
        class="hidden"
      />

      <div v-if="previews.length === 0" class="text-center">
        <svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          <button type="button" @click="$refs.imageInput.click()" class="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700">
            Upload gambar
          </button>
          atau drag & drop
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
          PNG, JPG, GIF hingga {{ maxSizeText }}
        </p>
      </div>

      <div v-else class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="(preview, index) in previews"
          :key="index"
          class="relative group"
        >
          <img
            :src="preview.url"
            :alt="preview.name"
            class="w-full h-32 object-cover rounded-lg"
          />
          <button
            type="button"
            @click="removeImage(index)"
            class="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-600"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <p class="mt-1 text-xs text-gray-600 dark:text-gray-400 truncate">{{ preview.name }}</p>
        </div>
        <button
          v-if="multiple"
          type="button"
          @click="$refs.imageInput.click()"
          class="h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span class="text-sm font-medium">Tambah</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  label: String,
  modelValue: {
    type: [File, Array],
    default: null
  },
  required: Boolean,
  multiple: {
    type: Boolean,
    default: false
  },
  maxSize: {
    type: Number,
    default: 5 * 1024 * 1024 // 5MB
  },
  maxSizeText: {
    type: String,
    default: '5MB'
  }
})

const emit = defineEmits(['update:modelValue'])

const imageInput = ref(null)
const previews = ref([])
const isDragging = ref(false)

const handleImageSelect = (event) => {
  const selectedFiles = Array.from(event.target.files)
  addImages(selectedFiles)
}

const handleDrop = (event) => {
  isDragging.value = false
  const droppedFiles = Array.from(event.dataTransfer.files).filter(file => file.type.startsWith('image/'))
  addImages(droppedFiles)
}

const addImages = (newFiles) => {
  const validFiles = newFiles.filter(file => file.size <= props.maxSize)
  
  if (validFiles.length !== newFiles.length) {
    alert(`Beberapa file melebihi ukuran maksimal ${props.maxSizeText}`)
  }

  validFiles.forEach(file => {
    const reader = new FileReader()
    reader.onload = (e) => {
      previews.value.push({
        file: file,
        url: e.target.result,
        name: file.name
      })
      updateModel()
    }
    reader.readAsDataURL(file)
  })
}

const removeImage = (index) => {
  previews.value.splice(index, 1)
  updateModel()
}

const updateModel = () => {
  if (props.multiple) {
    emit('update:modelValue', previews.value.map(p => p.file))
  } else {
    emit('update:modelValue', previews.value[0]?.file || null)
  }
}

watch(() => props.modelValue, (newValue) => {
  if (!newValue) {
    previews.value = []
  }
})
</script>

