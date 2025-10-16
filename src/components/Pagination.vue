<template>
  <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
    <!-- Info -->
    <div class="text-sm text-gray-600 dark:text-gray-400">
      Menampilkan <span class="font-medium text-gray-800 dark:text-gray-100">{{ startItem }}</span> - 
      <span class="font-medium text-gray-800 dark:text-gray-100">{{ endItem }}</span> dari 
      <span class="font-medium text-gray-800 dark:text-gray-100">{{ totalItems }}</span> data
    </div>

    <!-- Pagination -->
    <nav class="isolate inline-flex -space-x-px rounded-lg shadow-soft" v-if="totalPages > 1">
      <!-- Previous Button -->
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="relative inline-flex items-center rounded-l-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span class="ml-1 hidden sm:inline">Previous</span>
      </button>

      <!-- Page Numbers -->
      <button
        v-for="page in displayedPages"
        :key="page"
        @click="goToPage(page)"
        :class="[
          'relative inline-flex items-center px-4 py-2 text-sm font-medium border transition-colors',
          page === currentPage
            ? 'z-10 bg-primary-600 text-white border-primary-600'
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
        ]"
      >
        {{ page }}
      </button>

      <!-- Next Button -->
      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="relative inline-flex items-center rounded-r-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <span class="mr-1 hidden sm:inline">Next</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalItems: {
    type: Number,
    required: true
  },
  itemsPerPage: {
    type: Number,
    default: 10
  },
  maxPages: {
    type: Number,
    default: 7
  }
})

const emit = defineEmits(['update:currentPage'])

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))

const startItem = computed(() => {
  return (props.currentPage - 1) * props.itemsPerPage + 1
})

const endItem = computed(() => {
  const end = props.currentPage * props.itemsPerPage
  return end > props.totalItems ? props.totalItems : end
})

const displayedPages = computed(() => {
  const pages = []
  const maxDisplay = props.maxPages
  let start = Math.max(1, props.currentPage - Math.floor(maxDisplay / 2))
  let end = Math.min(totalPages.value, start + maxDisplay - 1)

  if (end - start + 1 < maxDisplay) {
    start = Math.max(1, end - maxDisplay + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:currentPage', page)
  }
}
</script>

