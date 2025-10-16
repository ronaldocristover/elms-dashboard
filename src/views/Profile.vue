<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <div class="mb-4 md:mb-6">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-800">Profil Saya</h1>
      <p class="text-sm md:text-base text-gray-600 mt-1">Kelola informasi profil Anda</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
      <!-- Profile Card -->
      <div class="lg:col-span-1">
        <div class="bg-white p-4 md:p-6 rounded-lg shadow">
          <div class="text-center">
            <div class="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4">
              <div class="w-full h-full bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl font-bold">
                {{ authStore.user?.name?.charAt(0).toUpperCase() }}
              </div>
            </div>
            <h2 class="text-lg md:text-xl font-bold text-gray-800">{{ authStore.user?.name }}</h2>
            <p class="text-sm md:text-base text-gray-600">{{ authStore.user?.email }}</p>
            <div class="mt-3 md:mt-4">
              <span class="px-3 py-1 text-xs md:text-sm bg-blue-100 text-blue-800 rounded-full">
                User
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Profile Information -->
      <div class="lg:col-span-2">
        <div class="bg-white p-4 md:p-6 rounded-lg shadow">
          <h3 class="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">Informasi Profil</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
                  placeholder="Nama lengkap"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Username *</label>
                <input
                  v-model="form.username"
                  type="text"
                  required
                  class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
                  placeholder="Username"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Telepon</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
                  placeholder="081234567890"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Alamat</label>
              <textarea
                v-model="form.address"
                rows="3"
                class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
                placeholder="Alamat lengkap"
              ></textarea>
            </div>

            <div class="pt-4 border-t">
              <h4 class="text-base md:text-lg font-semibold text-gray-800 mb-4">Ubah Password</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Password Lama</label>
                  <input
                    v-model="form.oldPassword"
                    type="password"
                    class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
                    placeholder="Password lama"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Password Baru</label>
                  <input
                    v-model="form.newPassword"
                    type="password"
                    class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
                    placeholder="Password baru"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-col-reverse md:flex-row justify-end gap-3 md:space-x-4 pt-4">
              <BaseButton
                type="button"
                variant="outline"
                @click="$router.push('/dashboard')"
                class="w-full md:w-auto"
              >
                Batal
              </BaseButton>
              <BaseButton type="submit" class="w-full md:w-auto">
                Simpan Perubahan
              </BaseButton>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Activity Stats -->
    <div class="mt-4 md:mt-6 bg-white p-4 md:p-6 rounded-lg shadow">
      <h3 class="text-lg md:text-xl font-semibold text-gray-800 mb-4">Statistik Aktivitas</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div class="border border-gray-200 rounded-lg p-3 md:p-4 text-center">
          <p class="text-xs md:text-sm text-gray-600 mb-1">Login Terakhir</p>
          <p class="text-lg md:text-2xl font-bold text-blue-600">Hari ini</p>
        </div>
        <div class="border border-gray-200 rounded-lg p-3 md:p-4 text-center">
          <p class="text-xs md:text-sm text-gray-600 mb-1">Total Session</p>
          <p class="text-lg md:text-2xl font-bold text-green-600">45</p>
        </div>
        <div class="border border-gray-200 rounded-lg p-3 md:p-4 text-center">
          <p class="text-xs md:text-sm text-gray-600 mb-1">Aktivitas</p>
          <p class="text-lg md:text-2xl font-bold text-purple-600">128</p>
        </div>
        <div class="border border-gray-200 rounded-lg p-3 md:p-4 text-center">
          <p class="text-xs md:text-sm text-gray-600 mb-1">Notifikasi</p>
          <p class="text-lg md:text-2xl font-bold text-yellow-600">12</p>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth'
import MainLayout from '../layouts/MainLayout.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import BaseButton from '../components/BaseButton.vue'

const authStore = useAuthStore()

const breadcrumbs = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Profil Saya' }
]

const form = ref({
  name: '',
  email: '',
  username: '',
  phone: '',
  address: '',
  oldPassword: '',
  newPassword: ''
})

onMounted(() => {
  if (authStore.user) {
    form.value.name = authStore.user.name
    form.value.email = authStore.user.email
    form.value.username = authStore.user.username || ''
  }
})

const handleSubmit = () => {
  // Update user info in store
  if (authStore.user) {
    authStore.user.name = form.value.name
    authStore.user.email = form.value.email
    localStorage.setItem('user', JSON.stringify(authStore.user))
  }
  alert('Profil berhasil diperbarui!')
}
</script>

