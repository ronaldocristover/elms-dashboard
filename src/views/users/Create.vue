<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <div class="mb-4 md:mb-6">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-800">Tambah User Baru</h1>
      <p class="text-sm md:text-base text-gray-600 mt-1">Isi formulir untuk menambahkan user baru</p>
    </div>

    <div class="bg-white p-4 md:p-6 rounded-lg shadow">
      <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
              placeholder="Masukkan nama lengkap"
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
            <label class="block text-sm font-medium text-gray-700 mb-2">Telepon *</label>
            <input
              v-model="form.phone"
              type="tel"
              required
              class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
              placeholder="081234567890"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Role *</label>
            <select
              v-model="form.role"
              required
              class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm md:text-base"
            >
              <option value="">Pilih Role</option>
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
            placeholder="Alamat lengkap"
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
            Simpan User
          </BaseButton>
        </div>
      </form>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUsersStore } from '../../stores/users'
import MainLayout from '../../layouts/MainLayout.vue'
import Breadcrumb from '../../components/Breadcrumb.vue'
import BaseButton from '../../components/BaseButton.vue'

const router = useRouter()
const usersStore = useUsersStore()

const breadcrumbs = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Manajemen Users', to: '/users' },
  { label: 'Tambah User' }
]

const form = ref({
  name: '',
  email: '',
  phone: '',
  role: '',
  status: 'active',
  address: ''
})

const handleSubmit = () => {
  usersStore.addUser(form.value)
  router.push('/users')
}
</script>

