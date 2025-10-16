import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth'
import { useTheme } from './composables/useTheme'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Check authentication status on app start
const authStore = useAuthStore()
authStore.checkAuth()

// Initialize theme (dark mode)
const { initDarkMode } = useTheme()
initDarkMode()

app.mount('#app')
