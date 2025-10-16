<template>
  <nav class="flex mb-6" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li v-for="(item, index) in items" :key="index" class="inline-flex items-center">
        <svg
          v-if="index > 0"
          class="w-3 h-3 text-gray-400 dark:text-gray-600 mx-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <router-link
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {{ item.label }}
        </router-link>
        <span
          v-else
          class="inline-flex items-center text-sm font-medium"
          :class="index === items.length - 1 ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'"
        >
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>
