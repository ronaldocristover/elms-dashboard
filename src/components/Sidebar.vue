<template>
  <!-- Mobile Menu Button -->
  <button
    @click="toggleSidebar"
    class="lg:hidden fixed top-3 left-3 z-50 p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-soft-md hover:shadow-soft-lg transition-all duration-200 touch-manipulation"
  >
    <i class="fas fa-bars w-5 h-5"></i>
  </button>

  <!-- Desktop Toggle Button -->
  <button
    @click="toggleSidebar"
    class="hidden lg:flex fixed top-4 left-4 z-50 p-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-soft-md hover:shadow-soft-lg transition-all duration-200"
    :class="isCollapsed ? 'left-4' : 'left-60'"
  >
    <i :class="isCollapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left'" class="w-5 h-5"></i>
  </button>

  <!-- Overlay for Mobile -->
  <div
    v-if="isOpen && isMobile"
    @click="closeSidebar"
    class="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40 backdrop-blur-sm transition-opacity duration-300"
  ></div>

  <!-- Sidebar -->
  <div :class="sidebarClasses">
    <!-- Logo -->
    <div class="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800">
      <div class="flex items-center" :class="isCollapsed ? 'justify-center' : 'space-x-3'">
        <img 
          src="/sample-logo.jpg" 
          alt="LMS Logo" 
          class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg shadow-soft object-cover flex-shrink-0"
          @error="handleImageError"
        />
        <div v-if="!isCollapsed" class="min-w-0">
          <h1 class="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-100 truncate">LMS Dashboard</h1>
          <p class="text-xs text-gray-500 dark:text-gray-400 truncate">Learning System</p>
        </div>
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1">
      <router-link
        v-for="item in menuItems"
        :key="item.to"
        :to="item.to"
        @click="closeSidebarOnMobile"
        class="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors group relative touch-manipulation"
        active-class="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium"
        :title="isCollapsed ? item.label : ''"
      >
        <i :class="`fas fa-${item.icon} w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${isCollapsed ? '' : 'mr-2 sm:mr-3'}`"></i>
        <span v-if="!isCollapsed" class="truncate text-sm sm:text-base">{{ item.label }}</span>
        
        <!-- Tooltip for collapsed state -->
        <div 
          v-if="isCollapsed" 
          class="absolute left-full ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs sm:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50"
        >
          {{ item.label }}
        </div>
      </router-link>
    </nav>

    <!-- User Info & Actions -->
    <div v-if="!isCollapsed || isMobile" class="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
      <!-- Theme Switcher -->
      <div class="flex items-center justify-between px-2 sm:px-3 py-2">
        <span class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Dark Mode</span>
        <button
          @click="toggleDarkMode"
          :class="[
            'relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors touch-manipulation',
            isDarkMode ? 'bg-primary-600' : 'bg-gray-300'
          ]"
        >
          <span
            :class="[
              'inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform',
              isDarkMode ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
            ]"
          />
        </button>
      </div>

      <!-- User Profile Link -->
      <router-link
        to="/profile"
        @click="closeSidebarOnMobile"
        class="flex items-center p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors group touch-manipulation"
      >
        <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <span class="text-xs sm:text-sm font-bold text-white">{{ userInitial }}</span>
        </div>
        <div class="ml-2 sm:ml-3 flex-1 min-w-0">
          <p class="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">{{ authStore.user?.name }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ authStore.user?.email }}</p>
        </div>
      </router-link>

      <!-- Logout Button -->
      <button
        @click="showLogoutModal = true"
        class="w-full flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium touch-manipulation"
      >
        <i class="fas fa-sign-out-alt w-4 h-4 sm:w-5 sm:h-5 mr-2"></i>
        <span class="text-xs sm:text-sm">Logout</span>
      </button>
    </div>

    <!-- Logout Confirmation Modal -->
    <ConfirmModal
      v-model="showLogoutModal"
      title="Confirm Logout"
      message="Are you sure you want to logout from the application?"
      confirm-text="Yes, Logout"
      cancel-text="Cancel"
      type="warning"
      @confirm="handleLogout"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useTheme } from '../composables/useTheme'
import { useSidebar } from '../composables/useSidebar'
import ConfirmModal from './ConfirmModal.vue'

const router = useRouter()
const authStore = useAuthStore()
const { isDarkMode, toggleDarkMode } = useTheme()
const { 
  isOpen, 
  isCollapsed, 
  isMobile, 
  sidebarClasses, 
  toggleSidebar, 
  closeSidebar 
} = useSidebar()
const showLogoutModal = ref(false)

const menuItems = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: 'chart-line'
  },
  {
    label: 'Course Management',
    to: '/courses',
    icon: 'graduation-cap'
  },
  {
    label: 'Member Management',
    to: '/members',
    icon: 'users'
  },
  {
    label: 'User Management',
    to: '/users',
    icon: 'user-cog'
  },
  {
    label: 'Form Components',
    to: '/form-demo',
    icon: 'file-alt'
  },
  {
    label: 'My Profile',
    to: '/profile',
    icon: 'user-circle'
  }
]

const userInitial = computed(() => {
  return authStore.user?.name?.charAt(0).toUpperCase() || 'U'
})

const closeSidebarOnMobile = () => {
  if (isMobile.value) {
    closeSidebar()
  }
}

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}

const handleImageError = (event) => {
  // Fallback to icon if logo not found
  event.target.style.display = 'none'
  const iconDiv = document.createElement('div')
  iconDiv.className = 'w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-soft'
  iconDiv.innerHTML = `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`
  event.target.parentNode.insertBefore(iconDiv, event.target)
}
</script>
