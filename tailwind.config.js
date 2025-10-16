import themeConfig from './src/config/theme.js'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: themeConfig.darkMode.strategy,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: themeConfig.colors,
      fontFamily: themeConfig.typography.fontFamily,
      fontSize: themeConfig.typography.fontSize,
      borderRadius: themeConfig.borderRadius,
      boxShadow: themeConfig.shadows,
      spacing: themeConfig.spacing,
    },
  },
  plugins: [],
}
