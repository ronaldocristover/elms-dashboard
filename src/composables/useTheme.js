/**
 * Theme Composable
 * 
 * Utility functions for working with themes in Vue components
 */

import { ref, computed } from 'vue'
import themeConfig, { themePresets, applyThemePreset } from '../config/theme.js'

const isDarkMode = ref(false)
const currentTheme = ref('default')

export function useTheme() {
  /**
   * Toggle dark mode
   */
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }

  /**
   * Initialize dark mode from localStorage
   */
  const initDarkMode = () => {
    const savedMode = localStorage.getItem('darkMode')
    
    if (savedMode === 'true') {
      isDarkMode.value = true
      document.documentElement.classList.add('dark')
    } else if (savedMode === 'false') {
      isDarkMode.value = false
      document.documentElement.classList.remove('dark')
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDarkMode.value = prefersDark
      
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      }
    }
  }

  /**
   * Get current theme config
   */
  const theme = computed(() => themeConfig)

  /**
   * Get available theme presets
   */
  const presets = computed(() => Object.keys(themePresets))

  /**
   * Apply a theme preset
   * @param {string} presetName - Name of the preset
   */
  const applyPreset = (presetName) => {
    currentTheme.value = presetName
    localStorage.setItem('themePreset', presetName)
    
    // In a real implementation, you would reload or update CSS variables
    console.log(`Applied theme preset: ${presetName}`)
  }

  /**
   * Get color from theme
   * @param {string} path - Color path (e.g., 'primary.500')
   */
  const getColor = (path) => {
    const keys = path.split('.')
    let value = themeConfig.colors
    
    for (const key of keys) {
      value = value?.[key]
      if (!value) return null
    }
    
    return value
  }

  /**
   * Get primary color
   */
  const primaryColor = computed(() => themeConfig.colors.primary['500'])

  /**
   * Get secondary color
   */
  const secondaryColor = computed(() => themeConfig.colors.secondary['500'])

  /**
   * Get accent color
   */
  const accentColor = computed(() => themeConfig.colors.accent['500'])

  return {
    // State
    isDarkMode,
    currentTheme,
    theme,
    presets,
    
    // Colors
    primaryColor,
    secondaryColor,
    accentColor,
    
    // Methods
    toggleDarkMode,
    initDarkMode,
    applyPreset,
    getColor,
  }
}

