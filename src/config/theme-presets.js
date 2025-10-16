/**
 * Theme Presets - Ready-to-use Color Schemes
 * 
 * Copy salah satu preset ke theme.js untuk mengubah warna aplikasi
 */

// ============================================
// PRESET 1: DEFAULT (Blue, Green, Orange)
// ============================================
export const defaultTheme = {
  name: 'Default',
  description: 'Blue primary, green success, orange accent',
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3B82F6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    secondary: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10B981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },
    accent: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#F59E0B',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
  }
}

// ============================================
// PRESET 2: PROFESSIONAL (Navy, Teal, Gold)
// ============================================
export const professionalTheme = {
  name: 'Professional',
  description: 'Corporate navy blue, teal, and gold',
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#1e3a8a',
      600: '#1e40af',
      700: '#1d4ed8',
      800: '#1e3a8a',
      900: '#172554',
    },
    secondary: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#0891b2',
      600: '#0e7490',
      700: '#155e75',
      800: '#164e63',
      900: '#083344',
    },
    accent: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#d97706',
      600: '#b45309',
      700: '#92400e',
      800: '#78350f',
      900: '#451a03',
    },
  }
}

// ============================================
// PRESET 3: MODERN (Purple, Pink, Blue)
// ============================================
export const modernTheme = {
  name: 'Modern',
  description: 'Vibrant purple, pink, and blue',
  colors: {
    primary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#7c3aed',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    secondary: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
    },
    accent: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
  }
}

// ============================================
// PRESET 4: NATURE (Green, Earth, Amber)
// ============================================
export const natureTheme = {
  name: 'Nature',
  description: 'Green, earthy tones, and amber',
  colors: {
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    secondary: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#92400e',
      600: '#78350f',
      700: '#713f12',
      800: '#854d0e',
      900: '#713f12',
    },
    accent: {
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
  }
}

// ============================================
// PRESET 5: OCEAN (Blue, Cyan, Teal)
// ============================================
export const oceanTheme = {
  name: 'Ocean',
  description: 'Cool ocean blues and teals',
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    secondary: {
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
    accent: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
  }
}

// ============================================
// EXPORT SEMUA PRESETS
// ============================================

export const allPresets = {
  default: defaultTheme,
  professional: professionalTheme,
  modern: modernTheme,
  nature: natureTheme,
  ocean: oceanTheme,
}

// ============================================
// HELPER: Apply Preset to Config
// ============================================

/**
 * Generate full theme config from preset
 * @param {object} preset - Theme preset object
 * @returns {object} Full theme config
 */
export function generateThemeFromPreset(preset) {
  return {
    colors: {
      ...preset.colors,
      // Keep gray colors (neutral)
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      // Keep danger & warning
      danger: {
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
      },
      warning: {
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
      },
    }
  }
}

export default allPresets

