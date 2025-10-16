<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Sidebar -->
    <Sidebar />
    
    <!-- Main Content -->
    <div class="flex-1 overflow-auto transition-all duration-300" :class="mainContentClasses">
      <div class="p-4 md:p-6 lg:p-8 pt-16 lg:pt-8">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import { useSidebar } from '../composables/useSidebar'

const { isMobile, isCollapsed, mainContentMargin } = useSidebar()

const mainContentClasses = computed(() => {
  if (isMobile.value) {
    return 'ml-0'
  } else {
    return isCollapsed.value ? 'ml-16' : 'ml-64'
  }
})
</script>

