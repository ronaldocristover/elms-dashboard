<template>
  <div>
    <div class="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-soft">
      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th
              v-for="column in columns"
              :key="column.key"
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              {{ column.label }}
            </th>
            <th
              v-if="hasActions"
              scope="col"
              class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Aksi
            </th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          <tr v-if="loading">
            <td :colspan="columns.length + (hasActions ? 1 : 0)" class="px-6 py-8 text-center">
              <div class="flex items-center justify-center">
                <svg class="animate-spin h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span class="ml-3 text-gray-500 dark:text-gray-400">Memuat data...</span>
              </div>
            </td>
          </tr>
          <tr v-else-if="paginatedData.length === 0">
            <td :colspan="columns.length + (hasActions ? 1 : 0)" class="px-6 py-8 text-center">
              <svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p class="mt-2 text-gray-500 dark:text-gray-400">Tidak ada data</p>
            </td>
          </tr>
          <tr v-else v-for="(row, index) in paginatedData" :key="index" class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <td
              v-for="column in columns"
              :key="column.key"
              class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100"
            >
              <slot :name="`cell-${column.key}`" :row="row" :value="row[column.key]">
                {{ row[column.key] }}
              </slot>
            </td>
            <td v-if="hasActions" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
              <slot name="actions" :row="row"></slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <Pagination
      v-if="enablePagination && data.length > itemsPerPage"
      :current-page="currentPage"
      :total-items="data.length"
      :items-per-page="itemsPerPage"
      @update:current-page="$emit('update:currentPage', $event)"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Pagination from './Pagination.vue'

const props = defineProps({
  columns: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  hasActions: {
    type: Boolean,
    default: true
  },
  enablePagination: {
    type: Boolean,
    default: true
  },
  currentPage: {
    type: Number,
    default: 1
  },
  itemsPerPage: {
    type: Number,
    default: 10
  }
})

defineEmits(['update:currentPage'])

const paginatedData = computed(() => {
  if (!props.enablePagination) {
    return props.data
  }

  const start = (props.currentPage - 1) * props.itemsPerPage
  const end = start + props.itemsPerPage
  return props.data.slice(start, end)
})
</script>
