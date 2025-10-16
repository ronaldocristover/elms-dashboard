<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
    <div class="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-soft-xl w-full max-w-md">
      <!-- Logo & Title -->
      <div class="text-center mb-8">
        <div class="flex items-center justify-center mb-6">
          <img 
            src="/sample-logo.jpg" 
            alt="LMS Logo" 
            class="h-20 w-auto rounded-lg shadow-soft"
            @error="handleImageError"
          />
        </div>
        <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Welcome Back</h1>
        <p class="text-gray-600 dark:text-gray-400">Login to LMS Dashboard</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Username
          </label>
          <input
            id="username"
            v-model="username"
            type="text"
            required
            class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition text-gray-800 dark:text-gray-100"
            placeholder="Enter username"
          />
        </div>
        
        <div>
          <div class="flex items-center justify-between mb-2">
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <router-link 
              to="/forgot-password" 
              class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
            >
              Forgot password?
            </router-link>
          </div>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition text-gray-800 dark:text-gray-100"
            placeholder="Enter password"
          />
        </div>

        <div v-if="error" class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-400 px-4 py-3 rounded text-sm">
          {{ error }}
        </div>
        
        <BaseButton
          type="submit"
          variant="primary"
          class="w-full"
        >
          <span class="flex items-center justify-center">
            <i class="fas fa-sign-in-alt w-5 h-5 mr-2"></i>
            Login
          </span>
        </BaseButton>
      </form>
      
      <!-- Demo Info -->
      <div class="mt-8 text-center">
        <div class="inline-flex items-center px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
          <svg class="w-4 h-4 text-primary-500 dark:text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          <p class="text-sm text-primary-700 dark:text-primary-400 font-medium">
            Demo: Use any username and password
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import BaseButton from '../components/BaseButton.vue'

const router = useRouter()
const authStore = useAuthStore()

const username = ref('')
const password = ref('')
const error = ref('')

const handleLogin = () => {
  if (authStore.login(username.value, password.value)) {
    router.push('/dashboard')
  } else {
    error.value = 'Login gagal. Silakan coba lagi.'
  }
}

const handleImageError = (event) => {
  // Fallback if logo not found
  event.target.style.display = 'none'
}
</script>
