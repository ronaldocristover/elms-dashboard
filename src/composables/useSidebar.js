import { ref, computed, watch } from 'vue'

// Global sidebar state
const isOpen = ref(true)
const isCollapsed = ref(false)
const isMobile = ref(false)

export function useSidebar() {
  // Check if device is mobile
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 1024 // lg breakpoint
  }

  // Initialize mobile check
  if (typeof window !== 'undefined') {
    checkMobile()
    window.addEventListener('resize', checkMobile)
  }

  // Toggle sidebar (mobile)
  const toggleSidebar = () => {
    if (isMobile.value) {
      isOpen.value = !isOpen.value
    } else {
      isCollapsed.value = !isCollapsed.value
    }
  }

  // Close sidebar (mobile only)
  const closeSidebar = () => {
    if (isMobile.value) {
      isOpen.value = false
    }
  }

  // Collapse sidebar (desktop only)
  const collapseSidebar = () => {
    if (!isMobile.value) {
      isCollapsed.value = true
    }
  }

  // Expand sidebar (desktop only)
  const expandSidebar = () => {
    if (!isMobile.value) {
      isCollapsed.value = false
    }
  }

  // Computed sidebar width
  const sidebarWidth = computed(() => {
    if (isMobile.value) {
      return isOpen.value ? 'w-64' : 'w-0'
    } else {
      return isCollapsed.value ? 'w-16' : 'w-64'
    }
  })

  // Computed main content margin
  const mainContentMargin = computed(() => {
    if (isMobile.value) {
      return 'ml-0'
    } else {
      return isCollapsed.value ? 'ml-16' : 'ml-64'
    }
  })

  // Computed sidebar classes
  const sidebarClasses = computed(() => {
    const baseClasses = 'h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 fixed left-0 top-0 flex flex-col z-40 transition-all duration-300'
    
    if (isMobile.value) {
      return [
        baseClasses,
        sidebarWidth.value,
        isOpen.value ? 'translate-x-0' : '-translate-x-full'
      ].join(' ')
    } else {
      return [
        baseClasses,
        sidebarWidth.value,
        'translate-x-0'
      ].join(' ')
    }
  })

  // Watch for mobile changes
  watch(isMobile, (newValue) => {
    if (newValue) {
      // On mobile, close sidebar by default
      isOpen.value = false
      isCollapsed.value = false
    } else {
      // On desktop, expand sidebar by default
      isOpen.value = true
      isCollapsed.value = false
    }
  })

  return {
    // State
    isOpen: computed(() => isOpen.value),
    isCollapsed: computed(() => isCollapsed.value),
    isMobile: computed(() => isMobile.value),
    
    // Computed
    sidebarWidth,
    mainContentMargin,
    sidebarClasses,
    
    // Actions
    toggleSidebar,
    closeSidebar,
    collapseSidebar,
    expandSidebar
  }
}
