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
        <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Lupa Password</h1>
        <p class="text-gray-600 dark:text-gray-400">Masukkan email Anda untuk reset password</p>
      </div>

      <!-- Success State -->
      <div v-if="isSuccess" class="space-y-6">
        <div class="bg-secondary-50 dark:bg-secondary-900/20 border-l-4 border-secondary-500 p-4 rounded-lg">
          <div class="flex items-center">
            <svg class="w-6 h-6 text-secondary-600 dark:text-secondary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p class="font-medium text-secondary-800 dark:text-secondary-300">Email Terkirim!</p>
              <p class="text-sm text-secondary-700 dark:text-secondary-400 mt-1">
                Silakan cek email Anda untuk instruksi reset password.
              </p>
            </div>
          </div>
        </div>

        <BaseButton
          variant="outline"
          class="w-full"
          @click="$router.push('/login')"
        >
          <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Login
        </BaseButton>
      </div>

      <!-- Form State -->
      <form v-else @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition text-gray-800 dark:text-gray-100"
            placeholder="email@example.com"
          />
        </div>

        <div v-if="error" class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-400 px-4 py-3 rounded text-sm">
          {{ error }}
        </div>
        
        <BaseButton
          type="submit"
          variant="primary"
          class="w-full"
          :disabled="isLoading"
        >
          <span v-if="isLoading">Mengirim...</span>
          <span v-else>Kirim Link Reset Password</span>
        </BaseButton>

        <div class="text-center">
          <router-link 
            to="/login" 
            class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Login
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'

const email = ref('')
const error = ref('')
const isLoading = ref(false)
const isSuccess = ref(false)

const handleSubmit = async () => {
  error.value = ''
  isLoading.value = true

  // Simulate API call
  setTimeout(() => {
    isLoading.value = false
    
    if (email.value) {
      isSuccess.value = true
    } else {
      error.value = 'Email tidak valid'
    }
  }, 1500)
}

const handleImageError = (event) => {
  event.target.style.display = 'none'
}
</script>

