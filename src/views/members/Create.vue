<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Tambah Member Baru</h1>
      <p class="text-gray-600 mt-1">Isi formulir untuk menambahkan member baru</p>
    </div>

    <div class="bg-white p-6 rounded-lg shadow">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Masukkan nama lengkap"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Telepon *</label>
            <input
              v-model="form.phone"
              type="tel"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="081234567890"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Role *</label>
            <select
              v-model="form.role"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">Pilih Role</option>
              <option value="student">Siswa</option>
              <option value="instructor">Instruktur</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Status *</label>
            <select
              v-model="form.status"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="active">Aktif</option>
              <option value="inactive">Nonaktif</option>
            </select>
          </div>
        </div>

        <div class="flex justify-end space-x-4 pt-4">
          <BaseButton
            type="button"
            variant="outline"
            @click="$router.push('/members')"
          >
            Batal
          </BaseButton>
          <BaseButton type="submit">
            Simpan Member
          </BaseButton>
        </div>
      </form>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMembersStore } from '../../stores/members'
import MainLayout from '../../layouts/MainLayout.vue'
import Breadcrumb from '../../components/Breadcrumb.vue'
import BaseButton from '../../components/BaseButton.vue'

const router = useRouter()
const membersStore = useMembersStore()

const breadcrumbs = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Manajemen Member', to: '/members' },
  { label: 'Tambah Member' }
]

const form = ref({
  name: '',
  email: '',
  phone: '',
  role: '',
  status: 'active'
})

const handleSubmit = () => {
  membersStore.addMember(form.value)
  router.push('/members')
}
</script>

