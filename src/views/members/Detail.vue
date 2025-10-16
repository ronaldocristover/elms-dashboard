<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Detail Member</h1>
        <p class="text-gray-600 mt-1">Informasi lengkap tentang member</p>
      </div>
      <div class="space-x-2">
        <BaseButton
          variant="warning"
          @click="$router.push(`/members/${member.id}/edit`)"
        >
          Edit Member
        </BaseButton>
        <BaseButton
          variant="outline"
          @click="$router.push('/members')"
        >
          Kembali
        </BaseButton>
      </div>
    </div>

    <div v-if="!member" class="bg-white p-6 rounded-lg shadow text-center">
      <p class="text-gray-500">Member tidak ditemukan</p>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Main Info -->
      <div class="lg:col-span-2 space-y-6">
        <div class="bg-white p-6 rounded-lg shadow">
          <div class="flex items-center space-x-6 mb-6">
            <img
              :src="member.avatar"
              alt="Avatar"
              class="w-24 h-24 rounded-full"
            />
            <div>
              <h2 class="text-2xl font-bold text-gray-800">{{ member.name }}</h2>
              <p class="text-gray-600">{{ member.email }}</p>
              <div class="flex items-center space-x-2 mt-2">
                <span
                  class="px-3 py-1 text-sm rounded-full"
                  :class="member.role === 'instructor' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'"
                >
                  {{ member.role === 'instructor' ? 'Instruktur' : 'Siswa' }}
                </span>
                <span
                  class="px-3 py-1 text-sm rounded-full"
                  :class="member.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                >
                  {{ member.status === 'active' ? 'Aktif' : 'Nonaktif' }}
                </span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p class="text-sm text-gray-500 mb-1">Telepon</p>
              <p class="font-medium text-gray-900">{{ member.phone }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-500 mb-1">Tanggal Bergabung</p>
              <p class="font-medium text-gray-900">{{ formatDate(member.joinDate) }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-500 mb-1">Kursus Terdaftar</p>
              <p class="font-medium text-gray-900">{{ member.enrolledCourses }} Kursus</p>
            </div>
            <div>
              <p class="text-sm text-gray-500 mb-1">Role</p>
              <p class="font-medium text-gray-900">
                {{ member.role === 'instructor' ? 'Instruktur' : 'Siswa' }}
              </p>
            </div>
          </div>
        </div>

        <!-- Activity Stats -->
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Statistik Aktivitas</h3>
          <div class="grid grid-cols-3 gap-4">
            <div class="border border-gray-200 rounded-lg p-4 text-center">
              <p class="text-sm text-gray-600">Kursus Aktif</p>
              <p class="text-3xl font-bold text-blue-600">{{ member.enrolledCourses }}</p>
            </div>
            <div class="border border-gray-200 rounded-lg p-4 text-center">
              <p class="text-sm text-gray-600">Kursus Selesai</p>
              <p class="text-3xl font-bold text-green-600">0</p>
            </div>
            <div class="border border-gray-200 rounded-lg p-4 text-center">
              <p class="text-sm text-gray-600">Sertifikat</p>
              <p class="text-3xl font-bold text-purple-600">0</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar Info -->
      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Informasi Akun</h3>
          <dl class="space-y-3">
            <div>
              <dt class="text-sm text-gray-500">Status Akun</dt>
              <dd class="text-sm font-medium text-gray-900">
                {{ member.status === 'active' ? 'Aktif' : 'Nonaktif' }}
              </dd>
            </div>
            <div>
              <dt class="text-sm text-gray-500">Role</dt>
              <dd class="text-sm font-medium text-gray-900">
                {{ member.role === 'instructor' ? 'Instruktur' : 'Siswa' }}
              </dd>
            </div>
            <div>
              <dt class="text-sm text-gray-500">Member ID</dt>
              <dd class="text-sm font-medium text-gray-900">#{{ String(member.id).padStart(6, '0') }}</dd>
            </div>
            <div>
              <dt class="text-sm text-gray-500">Bergabung Sejak</dt>
              <dd class="text-sm font-medium text-gray-900">{{ formatDate(member.joinDate) }}</dd>
            </div>
          </dl>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Aksi Cepat</h3>
          <div class="space-y-2">
            <BaseButton
              variant="outline"
              class="w-full"
              @click="$router.push(`/members/${member.id}/edit`)"
            >
              Edit Profil
            </BaseButton>
            <BaseButton
              variant="secondary"
              class="w-full"
            >
              Reset Password
            </BaseButton>
            <BaseButton
              variant="danger"
              class="w-full"
              @click="handleDelete"
            >
              Hapus Member
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
import { useMembersStore } from '../../stores/members'
import MainLayout from '../../layouts/MainLayout.vue'
import Breadcrumb from '../../components/Breadcrumb.vue'
import BaseButton from '../../components/BaseButton.vue'

const route = useRoute()
const router = useRouter()
const membersStore = useMembersStore()

const member = ref(null)

const breadcrumbs = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Manajemen Member', to: '/members' },
  { label: 'Detail Member' }
]

onMounted(() => {
  member.value = membersStore.getMemberById(route.params.id)
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
}

const handleDelete = () => {
  if (confirm('Apakah Anda yakin ingin menghapus member ini?')) {
    membersStore.deleteMember(member.value.id)
    router.push('/members')
  }
}
</script>

