import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const isAuthenticated = ref(false)

    const login = (username, password) => {
        // Simulasi login sederhana
        if (username && password) {
            user.value = {
                username: username,
                name: 'User Demo',
                email: username + '@example.com'
            }
            isAuthenticated.value = true
            localStorage.setItem('user', JSON.stringify(user.value))
            return true
        }
        return false
    }

    const logout = () => {
        user.value = null
        isAuthenticated.value = false
        localStorage.removeItem('user')
    }

    const checkAuth = () => {
        const savedUser = localStorage.getItem('user')
        if (savedUser) {
            user.value = JSON.parse(savedUser)
            isAuthenticated.value = true
        }
    }

    return {
        user,
        isAuthenticated,
        login,
        logout,
        checkAuth
    }
})

