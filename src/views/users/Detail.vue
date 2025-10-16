<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <div class="mb-4 md:mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
      <div>
        <h1 class="text-2xl md:text-3xl font-bold text-gray-800">Detail User</h1>
        <p class="text-sm md:text-base text-gray-600 mt-1">Informasi lengkap tentang user</p>
      </div>
      <div class="flex gap-2 w-full md:w-auto">
        <BaseButton
          variant="warning"
          @click="$router.push(`/users/${user.id}/edit`)"
          size="sm"
          class="flex-1 md:flex-none"
        >
          Edit User
        </BaseButton>
        <BaseButton
          variant="outline"
          @click="$router.push('/users')"
          size="sm"
          class="flex-1 md:flex-none"
        >
          Kembali
        </BaseButton>
      </div>
    </div>

    <div v-if="!user" class="bg-white p-4 md:p-6 rounded-lg shadow text-center">
      <p class="text-gray-500">User tidak ditemukan</p>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
      <!-- Main Info -->
      <div class="lg:col-span-2 space-y-4 md:space-y-6">
        <div class="bg-white p-4 md:p-6 rounded-lg shadow">
          <div class="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-6">
            <img
              :src="user.avatar"
              alt="Avatar"
              class="w-20 h-20 md:w-24 md:h-24 rounded-full"
            />
            <div class="text-center md:text-left flex-1">
              <h2 class="text-xl md:text-2xl font-bold text-gray-800">{{ user.name }}</h2>
              <p class="text-sm md:text-base text-gray-600">{{ user.email }}</p>
              <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-2 md:mt-3">
                <span
                  class="px-3 py-1 text-xs md:text-sm rounded-full"
                  :class="getRoleClass(user.role)"
                >
                  {{ getRoleLabel(user.role) }}
                </span>
                <span
                  class="px-3 py-1 text-xs md:text-sm rounded-full"
                  :class="user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                >
                  {{ user.status === 'active' ? 'Aktif' : 'Nonaktif' }}
                </span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p class="text-sm text-gray-500 mb-1">Telepon</p>
              <p class="text-sm md:text-base font-medium text-gray-900">{{ user.phone }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-500 mb-1">Tanggal Bergabung</p>
              <p class="text-sm md:text-base font-medium text-gray-900">{{ formatDate(user.joinDate) }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-500 mb-1">Login Terakhir</p>
              <p class="text-sm md:text-base font-medium text-gray-900">{{ formatDate(user.lastLogin) }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-500 mb-1">Alamat</p>
              <p class="text-sm md:text-base font-medium text-gray-900">{{ user.address || '-' }}</p>
            </div>
          </div>
        </div>

        <!-- Role Specific Stats -->
        <div class="bg-white p-4 md:p-6 rounded-lg shadow">
          <h3 class="text-base md:text-lg font-semibold text-gray-800 mb-4">
            {{ user.role === 'instructor' ? 'Statistik Pengajar' : user.role === 'student' ? 'Statistik Siswa' : 'Statistik Admin' }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <div v-if="user.role === 'instructor'" class="border border-gray-200 rounded-lg p-3 md:p-4 text-center">
              <p class="text-xs md:text-sm text-gray-600">Kursus Diajar</p>
              <p class="text-2xl md:text-3xl font-bold text-blue-600">{{ user.coursesTeaching || 0 }}</p>
            </div>
            <div v-if="user.role === 'instructor'" class="border border-gray-200 rounded-lg p-3 md:p-4 text-center">
              <p class="text-xs md:text-sm text-gray-600">Total Siswa</p>
              <p class="text-2xl md:text-3xl font-bold text-green-600">{{ user.totalStudents || 0 }}</p>
            </div>
            <div v-if="user.role === 'student'" class="border border-gray-200 rounded-lg p-3 md:p-4 text-center">
              <p class="text-xs md:text-sm text-gray-600">Kursus Diikuti</p>
              <p class="text-2xl md:text-3xl font-bold text-blue-600">{{ user.coursesEnrolled || 0 }}</p>
            </div>
            <div v-if="user.role === 'student'" class="border border-gray-200 rounded-lg p-3 md:p-4 text-center">
              <p class="text-xs md:text-sm text-gray-600">Kursus Selesai</p>
              <p class="text-2xl md:text-3xl font-bold text-green-600">{{ user.coursesCompleted || 0 }}</p>
            </div>
            <div v-if="user.role === 'admin'" class="border border-gray-200 rounded-lg p-3 md:p-4 text-center">
              <p class="text-xs md:text-sm text-gray-600">Total Akses</p>
              <p class="text-2xl md:text-3xl font-bold text-purple-600">Full</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar Info -->
      <div class="space-y-4 md:space-y-6">
        <div class="bg-white p-4 md:p-6 rounded-lg shadow">
          <h3 class="text-base md:text-lg font-semibold text-gray-800 mb-4">Informasi Akun</h3>
          <dl class="space-y-3">
            <div>
              <dt class="text-sm text-gray-500">Status Akun</dt>
              <dd class="text-sm font-medium text-gray-900">
                {{ user.status === 'active' ? 'Aktif' : 'Nonaktif' }}
              </dd>
            </div>
            <div>
              <dt class="text-sm text-gray-500">Role</dt>
              <dd class="text-sm font-medium text-gray-900">{{ getRoleLabel(user.role) }}</dd>
            </div>
            <div>
              <dt class="text-sm text-gray-500">User ID</dt>
              <dd class="text-sm font-medium text-gray-900">#{{ String(user.id).padStart(6, '0') }}</dd>
            </div>
            <div>
              <dt class="text-sm text-gray-500">Bergabung Sejak</dt>
              <dd class="text-sm font-medium text-gray-900">{{ formatDate(user.joinDate) }}</dd>
            </div>
          </dl>
        </div>

        <div class="bg-white p-4 md:p-6 rounded-lg shadow">
          <h3 class="text-base md:text-lg font-semibold text-gray-800 mb-4">Aksi Cepat</h3>
          <div class="space-y-2">
            <BaseButton
              variant="outline"
              class="w-full"
              size="sm"
              @click="$router.push(`/users/${user.id}/edit`)"
            >
              Edit Profil
            </BaseButton>
            <BaseButton
              variant="secondary"
              class="w-full"
              size="sm"
            >
              Reset Password
            </BaseButton>
            <BaseButton
              variant="danger"
              class="w-full"
              size="sm"
              @click="handleDelete"
            >
              Hapus User
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUsersStore } from '../../stores/users'
import MainLayout from '../../layouts/MainLayout.vue'
import Breadcrumb from '../../components/Breadcrumb.vue'
import BaseButton from '../../components/BaseButton.vue'

const route = useRoute()
const router = useRouter()
const usersStore = useUsersStore()

const user = ref(null)

const breadcrumbs = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Manajemen Users', to: '/users' },
  { label: 'Detail User' }
]

onMounted(() => {
  user.value = usersStore.getUserById(route.params.id)
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
}

const getRoleClass = (role) => {
  const classes = {
    admin: 'bg-blue-100 text-blue-800',
    instructor: 'bg-purple-100 text-purple-800',
    student: 'bg-green-100 text-green-800'
  }
  return classes[role] || 'bg-gray-100 text-gray-800'
}

const getRoleLabel = (role) => {
  const labels = {
    admin: 'Admin',
    instructor: 'Instruktur',
    student: 'Siswa'
  }
  return labels[role] || role
}

const handleDelete = () => {
  if (confirm('Apakah Anda yakin ingin menghapus user ini?')) {
    usersStore.deleteUser(user.value.id)
    router.push('/users')
  }
}
</script>

