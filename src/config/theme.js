/**
 * LMS Dashboard - Theme Configuration
 * 
 * Centralized theme configuration for the entire application.
 * Change colors here to customize the entire application theme.
 * 
 * @version 1.0.0
 */

export const themeConfig = {
  // ============================================
  // COLOR PALETTE
  // ============================================
  
  colors: {
    // Primary Color (Blue) - Main brand color
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3B82F6',  // 👈 Main primary color
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },

    // Secondary Color (Green) - Success, positive indicators
    secondary: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10B981',  // 👈 Main secondary color
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },

    // Accent Color (Orange) - CTA, important highlights
    accent: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#F59E0B',  // 👈 Main accent color
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },

    // Neutral Grays - Text, backgrounds, borders
    gray: {
      50: '#F9FAFB',   // 👈 Main background
      100: '#F3F4F6',  // 👈 Secondary background
      200: '#E5E7EB',  // 👈 Border color
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',  // 👈 Secondary text
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',  // 👈 Primary text
      900: '#111827',  // 👈 Dark mode background
    },

    // Danger Color (Red) - Errors, destructive actions
    danger: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },

    // Warning Color (Yellow) - Warnings, cautions
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },

    // Info Color (Cyan) - Information
    info: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
  },

  // ============================================
  // TYPOGRAPHY
  // ============================================
  
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      mono: ['Monaco', 'Courier New', 'monospace'],
    },

    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    },

    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },

  // ============================================
  // SPACING
  // ============================================
  
  spacing: {
    // Custom spacing values (in addition to default)
    '18': '4.5rem',
    '88': '22rem',
    '128': '32rem',
  },

  // ============================================
  // BORDER RADIUS
  // ============================================
  
  borderRadius: {
    'DEFAULT': '0.5rem',  // 8px - Default
    'sm': '0.375rem',     // 6px
    'md': '0.5rem',       // 8px
    'lg': '0.75rem',      // 12px - Cards, buttons
    'xl': '1rem',         // 16px - Modals
    '2xl': '1.5rem',      // 24px - Hero sections
    'full': '9999px',     // Fully rounded
  },

  // ============================================
  // SHADOWS
  // ============================================
  
  shadows: {
    'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    'soft-md': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    'soft-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    'soft-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
  },

  // ============================================
  // BREAKPOINTS
  // ============================================
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // ============================================
  // TRANSITIONS
  // ============================================
  
  transitions: {
    duration: {
      fast: '150ms',
      normal: '200ms',
      slow: '300ms',
    },
    timing: 'ease-in-out',
  },

  // ============================================
  // DARK MODE
  // ============================================
  
  darkMode: {
    enabled: true,
    strategy: 'class', // 'class' or 'media'
  },
}

// ============================================
// THEME PRESETS
// ============================================

export const themePresets = {
  // Default theme (Blue, Green, Orange)
  default: {
    primary: '#3B82F6',
    secondary: '#10B981',
    accent: '#F59E0B',
  },

  // Professional theme (Navy, Teal, Gold)
  professional: {
    primary: '#1e3a8a',
    secondary: '#0891b2',
    accent: '#d97706',
  },

  // Modern theme (Purple, Pink, Blue)
  modern: {
    primary: '#7c3aed',
    secondary: '#ec4899',
    accent: '#3b82f6',
  },

  // Minimal theme (Slate, Gray, Black)
  minimal: {
    primary: '#475569',
    secondary: '#64748b',
    accent: '#1e293b',
  },

  // Vibrant theme (Orange, Purple, Pink)
  vibrant: {
    primary: '#f97316',
    secondary: '#a855f7',
    accent: '#ec4899',
  },

  // Nature theme (Green, Brown, Amber)
  nature: {
    primary: '#22c55e',
    secondary: '#92400e',
    accent: '#f59e0b',
  },

  // Ocean theme (Blue, Cyan, Teal)
  ocean: {
    primary: '#0ea5e9',
    secondary: '#06b6d4',
    accent: '#14b8a6',
  },

  // Sunset theme (Orange, Red, Pink)
  sunset: {
    primary: '#f97316',
    secondary: '#ef4444',
    accent: '#ec4899',
  },
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get color value by path
 * @param {string} path - Color path (e.g., 'primary.500')
 * @returns {string} Color value
 */
export function getColor(path) {
  const keys = path.split('.')
  let value = themeConfig.colors
  
  for (const key of keys) {
    value = value[key]
    if (!value) return null
  }
  
  return value
}

/**
 * Apply theme preset
 * @param {string} presetName - Name of preset from themePresets
 * @returns {object} Updated theme config
 */
export function applyThemePreset(presetName) {
  const preset = themePresets[presetName]
  if (!preset) {
    console.warn(`Theme preset "${presetName}" not found`)
    return themeConfig
  }

  // Update theme config with preset colors
  return {
    ...themeConfig,
    colors: {
      ...themeConfig.colors,
      primary: { ...themeConfig.colors.primary, 500: preset.primary },
      secondary: { ...themeConfig.colors.secondary, 500: preset.secondary },
      accent: { ...themeConfig.colors.accent, 500: preset.accent },
    }
  }
}

export default themeConfig

