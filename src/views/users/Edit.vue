<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <div class="mb-4 md:mb-6">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-800">Edit User</h1>
      <p class="text-sm md:text-base text-gray-600 mt-1">Perbarui informasi user</p>
    </div>

    <div v-if="!user" class="bg-white p-4 md:p-6 rounded-lg shadow text-center">
      <p class="text-gray-500">User tidak ditemukan</p>
      <BaseButton class="mt-4" @click="$router.push('/users')">
        Kembali ke Daftar User
      </BaseButton>
    </div>

    <div v-else class="bg-white p-4 md:p-6 rounded-lg shadow">
      <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Telepon *</label>
            <input
              v-model="form.phone"
              type="tel"
              required
              class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Role *</label>
            <select
              v-model="form.role"
              required
              class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
            >
              <option value="admin">Admin</option>
              <option value="instructor">Instruktur</option>
              <option value="student">Siswa</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Status *</label>
            <select
              v-model="form.status"
              required
              class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
            >
              <option value="active">Aktif</option>
              <option value="inactive">Nonaktif</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Alamat</label>
          <textarea
            v-model="form.address"
            rows="3"
            class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
          ></textarea>
        </div>

        <div class="flex flex-col-reverse md:flex-row justify-end gap-3 md:space-x-4 pt-4">
          <BaseButton
            type="button"
            variant="outline"
            @click="$router.push('/users')"
            class="w-full md:w-auto"
          >
            Batal
          </BaseButton>
          <BaseButton type="submit" class="w-full md:w-auto">
            Update User
          </BaseButton>
        </div>
      </form>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUsersStore } from '../../stores/users'
import MainLayout from '../../layouts/MainLayout.vue'
import Breadcrumb from '../../components/Breadcrumb.vue'
import BaseButton from '../../components/BaseButton.vue'

const router = useRouter()
const route = useRoute()
const usersStore = useUsersStore()

const user = ref(null)
const form = ref({
  name: '',
  email: '',
  phone: '',
  role: '',
  status: 'active',
  address: ''
})

const breadcrumbs = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Manajemen Users', to: '/users' },
  { label: 'Edit User' }
]

onMounted(() => {
  user.value = usersStore.getUserById(route.params.id)
  if (user.value) {
    form.value = { ...user.value }
  }
})

const handleSubmit = () => {
  usersStore.updateUser(route.params.id, form.value)
  router.push('/users')
}
</script>

