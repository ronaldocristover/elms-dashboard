<template>
  <!-- Mobile Menu Button -->
  <button
    @click="toggleSidebar"
    class="lg:hidden fixed top-4 left-4 z-50 p-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-soft-md hover:shadow-soft-lg"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

  <!-- Overlay for Mobile -->
  <div
    v-if="isOpen"
    @click="toggleSidebar"
    class="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40 backdrop-blur-sm"
  ></div>

  <!-- Sidebar -->
  <div
    :class="[
      'h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 fixed left-0 top-0 flex flex-col z-40 transition-transform duration-300',
      isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]"
  >
    <!-- Logo -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-800">
      <div class="flex items-center space-x-3">
        <img 
          src="/sample-logo.jpg" 
          alt="LMS Logo" 
          class="w-10 h-10 rounded-lg shadow-soft object-cover"
          @error="handleImageError"
        />
        <div>
          <h1 class="text-lg font-bold text-gray-800 dark:text-gray-100">LMS Dashboard</h1>
          <p class="text-xs text-gray-500 dark:text-gray-400">Learning System</p>
        </div>
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="flex-1 overflow-y-auto p-4 space-y-1">
      <router-link
        v-for="item in menuItems"
        :key="item.to"
        :to="item.to"
        @click="closeSidebarOnMobile"
        class="flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors group"
        active-class="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium"
      >
        <svg class="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
        </svg>
        <span class="truncate">{{ item.label }}</span>
      </router-link>
    </nav>

    <!-- User Info & Actions -->
    <div class="p-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
      <!-- Theme Switcher -->
      <div class="flex items-center justify-between px-3 py-2">
        <span class="text-sm text-gray-600 dark:text-gray-400">Dark Mode</span>
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
      </div>

      <!-- User Profile Link -->
      <router-link
        to="/profile"
        @click="closeSidebarOnMobile"
        class="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors group"
      >
        <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <span class="text-sm font-bold text-white">{{ userInitial }}</span>
        </div>
        <div class="ml-3 flex-1 min-w-0">
          <p class="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">{{ authStore.user?.name }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ authStore.user?.email }}</p>
        </div>
      </router-link>

      <!-- Logout Button -->
      <button
        @click="showLogoutModal = true"
        class="w-full flex items-center justify-center px-4 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span class="text-sm">Logout</span>
      </button>

    <!-- Logout Confirmation Modal -->
    <ConfirmModal
      v-model="showLogoutModal"
      title="Konfirmasi Logout"
      message="Apakah Anda yakin ingin keluar dari aplikasi?"
      confirm-text="Ya, Logout"
      cancel-text="Batal"
      type="warning"
      @confirm="handleLogout"
    />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useTheme } from '../composables/useTheme'
import ConfirmModal from './ConfirmModal.vue'

const router = useRouter()
const authStore = useAuthStore()
const { isDarkMode, toggleDarkMode } = useTheme()
const isOpen = ref(false)
const showLogoutModal = ref(false)

const menuItems = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    label: 'Manajemen Kursus',
    to: '/courses',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    label: 'Manajemen Member',
    to: '/members',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    label: 'Manajemen Users',
    to: '/users',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    label: 'Form Components',
    to: '/form-demo',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    label: 'Profil Saya',
    to: '/profile',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  }
]

const userInitial = computed(() => {
  return authStore.user?.name?.charAt(0).toUpperCase() || 'U'
})

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}

const closeSidebarOnMobile = () => {
  if (window.innerWidth < 1024) {
    isOpen.value = false
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
