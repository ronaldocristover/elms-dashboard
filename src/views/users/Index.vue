<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <div class="mb-4 md:mb-6">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-800">Manajemen Users</h1>
      <p class="text-sm md:text-base text-gray-600 mt-1">Kelola semua users (Admin, Instruktur, Siswa)</p>
    </div>

    <!-- Filter and Search -->
    <div class="bg-white p-3 md:p-4 rounded-lg shadow mb-4 md:mb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
        <SearchInput
          v-model="searchQuery"
          placeholder="Cari users..."
          class="md:col-span-2"
        />
        <FilterDropdown
          v-model="roleFilter"
          label="Role"
          placeholder="Semua Role"
          :options="roleOptions"
        />
        <FilterDropdown
          v-model="statusFilter"
          label="Status"
          placeholder="Semua Status"
          :options="statusOptions"
        />
      </div>
      <div class="mt-3 md:mt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <p class="text-xs md:text-sm text-gray-600">
          Menampilkan {{ filteredUsers.length }} dari {{ usersStore.users.length }} users
        </p>
        <BaseButton @click="$router.push('/users/create')" size="sm" class="md:size-md w-full md:w-auto">
          <svg class="w-4 h-4 md:w-5 md:h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Tambah User
        </BaseButton>
      </div>
    </div>

    <!-- Table for Desktop -->
    <div class="hidden md:block">
      <BaseTable
        :columns="columns"
        :data="filteredUsers"
        :loading="loading"
      >
        <template #cell-avatar="{ row }">
          <img :src="row.avatar" alt="Avatar" class="w-10 h-10 rounded-full" />
        </template>
        
        <template #cell-name="{ row }">
          <div>
            <p class="font-medium text-gray-900">{{ row.name }}</p>
            <p class="text-sm text-gray-500">{{ row.email }}</p>
          </div>
        </template>
        
        <template #cell-role="{ value }">
          <span
            class="px-2 py-1 text-xs rounded-full"
            :class="getRoleClass(value)"
          >
            {{ getRoleLabel(value) }}
          </span>
        </template>
        
        <template #cell-status="{ value }">
          <span
            class="px-2 py-1 text-xs rounded-full"
            :class="value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
          >
            {{ value === 'active' ? 'Aktif' : 'Nonaktif' }}
          </span>
        </template>
        
        <template #actions="{ row }">
          <BaseButton
            size="sm"
            variant="outline"
            @click="$router.push(`/users/${row.id}`)"
          >
            Detail
          </BaseButton>
          <BaseButton
            size="sm"
            variant="warning"
            @click="$router.push(`/users/${row.id}/edit`)"
          >
            Edit
          </BaseButton>
          <BaseButton
            size="sm"
            variant="danger"
            @click="handleDelete(row.id)"
          >
            Hapus
          </BaseButton>
        </template>
      </BaseTable>
    </div>

    <!-- Cards for Mobile -->
    <div class="block md:hidden space-y-3">
      <div
        v-for="user in filteredUsers"
        :key="user.id"
        class="bg-white rounded-lg shadow p-4"
        @click="$router.push(`/users/${user.id}`)"
      >
        <div class="flex items-start space-x-3">
          <img :src="user.avatar" alt="Avatar" class="w-12 h-12 rounded-full flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-gray-900 truncate">{{ user.name }}</h3>
            <p class="text-sm text-gray-500 truncate">{{ user.email }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ user.phone }}</p>
            <div class="flex items-center gap-2 mt-2">
              <span class="px-2 py-1 text-xs rounded-full" :class="getRoleClass(user.role)">
                {{ getRoleLabel(user.role) }}
              </span>
              <span
                class="px-2 py-1 text-xs rounded-full"
                :class="user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
              >
                {{ user.status === 'active' ? 'Aktif' : 'Nonaktif' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUsersStore } from '../../stores/users'
import MainLayout from '../../layouts/MainLayout.vue'
import Breadcrumb from '../../components/Breadcrumb.vue'
import SearchInput from '../../components/SearchInput.vue'
import FilterDropdown from '../../components/FilterDropdown.vue'
import BaseButton from '../../components/BaseButton.vue'
import BaseTable from '../../components/BaseTable.vue'

const usersStore = useUsersStore()

const breadcrumbs = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Manajemen Users' }
]

const columns = [
  { key: 'avatar', label: 'Avatar' },
  { key: 'name', label: 'Nama & Email' },
  { key: 'phone', label: 'Telepon' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' }
]

const loading = ref(false)
const searchQuery = ref('')
const roleFilter = ref('')
const statusFilter = ref('')

const roleOptions = [
  { value: 'admin', label: 'Admin' },
  { value: 'instructor', label: 'Instruktur' },
  { value: 'student', label: 'Siswa' }
]

const statusOptions = [
  { value: 'active', label: 'Aktif' },
  { value: 'inactive', label: 'Nonaktif' }
]

const filteredUsers = computed(() => {
  let result = usersStore.users

  if (searchQuery.value) {
    result = result.filter(user =>
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.phone.includes(searchQuery.value)
    )
  }

  if (roleFilter.value) {
    result = result.filter(user => user.role === roleFilter.value)
  }

  if (statusFilter.value) {
    result = result.filter(user => user.status === statusFilter.value)
  }

  return result
})

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

const handleDelete = (id) => {
  if (confirm('Apakah Anda yakin ingin menghapus user ini?')) {
    usersStore.deleteUser(id)
  }
}
</script>

