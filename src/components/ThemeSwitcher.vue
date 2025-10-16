<template>
  <div class="relative" ref="dropdown">
    <button
      @click="isOpen = !isOpen"
      class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      title="Theme Settings"
    >
      <svg v-if="!isDarkMode" class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <svg v-else class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>

    <!-- Dropdown -->
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-soft-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
      >
        <div class="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <p class="text-sm font-semibold text-gray-700 dark:text-gray-300">Theme Settings</p>
        </div>

        <!-- Dark Mode Toggle -->
        <div class="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700">
          <label class="flex items-center justify-between cursor-pointer">
            <span class="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
            <button
              @click="toggleDarkMode"
              :class="[
                'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                isDarkMode ? 'bg-primary-600' : 'bg-gray-300'
              ]"
            >
              <span
                :class="[
                  'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                  isDarkMode ? 'translate-x-6' : 'translate-x-1'
                ]"
              />
            </button>
          </label>
        </div>

        <!-- Theme Presets -->
        <div class="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
          <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Color Presets</p>
          <div class="space-y-1">
            <button
              v-for="preset in presets"
              :key="preset"
              @click="applyPreset(preset)"
              :class="[
                'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                currentTheme === preset
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              ]"
            >
              {{ preset.charAt(0).toUpperCase() + preset.slice(1) }}
            </button>
          </div>
        </div>

        <div class="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
          <p class="text-xs text-gray-500 dark:text-gray-400">
            Colors: 
            <span class="inline-block w-3 h-3 rounded" :style="{ backgroundColor: primaryColor }"></span>
            <span class="inline-block w-3 h-3 rounded ml-1" :style="{ backgroundColor: secondaryColor }"></span>
            <span class="inline-block w-3 h-3 rounded ml-1" :style="{ backgroundColor: accentColor }"></span>
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isDarkMode, currentTheme, presets, toggleDarkMode, applyPreset, primaryColor, secondaryColor, accentColor } = useTheme()

const isOpen = ref(false)
const dropdown = ref(null)

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

