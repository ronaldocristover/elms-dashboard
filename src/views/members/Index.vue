<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Manajemen Member</h1>
      <p class="text-gray-600 mt-1">Kelola semua member yang terdaftar</p>
    </div>

    <!-- Filter and Search -->
    <div class="bg-white p-4 rounded-lg shadow mb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SearchInput
          v-model="searchQuery"
          placeholder="Cari member..."
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
      <div class="mt-4 flex justify-between items-center">
        <p class="text-sm text-gray-600">
          Menampilkan {{ filteredMembers.length }} dari {{ membersStore.members.length }} member
        </p>
        <BaseButton @click="$router.push('/members/create')">
          <svg class="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Tambah Member
        </BaseButton>
      </div>
    </div>

    <!-- Table -->
    <BaseTable
      :columns="columns"
      :data="filteredMembers"
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
          :class="value === 'instructor' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'"
        >
          {{ value === 'instructor' ? 'Instruktur' : 'Siswa' }}
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
          @click="$router.push(`/members/${row.id}`)"
        >
          Detail
        </BaseButton>
        <BaseButton
          size="sm"
          variant="warning"
          @click="$router.push(`/members/${row.id}/edit`)"
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
  </MainLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMembersStore } from '../../stores/members'
import MainLayout from '../../layouts/MainLayout.vue'
import Breadcrumb from '../../components/Breadcrumb.vue'
import SearchInput from '../../components/SearchInput.vue'
import FilterDropdown from '../../components/FilterDropdown.vue'
import BaseButton from '../../components/BaseButton.vue'
import BaseTable from '../../components/BaseTable.vue'

const membersStore = useMembersStore()

const breadcrumbs = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Manajemen Member' }
]

const columns = [
  { key: 'avatar', label: 'Avatar' },
  { key: 'name', label: 'Nama & Email' },
  { key: 'phone', label: 'Telepon' },
  { key: 'role', label: 'Role' },
  { key: 'enrolledCourses', label: 'Kursus' },
  { key: 'status', label: 'Status' }
]

const loading = ref(false)
const searchQuery = ref('')
const roleFilter = ref('')
const statusFilter = ref('')

const roleOptions = [
  { value: 'student', label: 'Siswa' },
  { value: 'instructor', label: 'Instruktur' }
]

const statusOptions = [
  { value: 'active', label: 'Aktif' },
  { value: 'inactive', label: 'Nonaktif' }
]

const filteredMembers = computed(() => {
  let result = membersStore.members

  // Filter by search query
  if (searchQuery.value) {
    result = result.filter(member =>
      member.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      member.phone.includes(searchQuery.value)
    )
  }

  // Filter by role
  if (roleFilter.value) {
    result = result.filter(member => member.role === roleFilter.value)
  }

  // Filter by status
  if (statusFilter.value) {
    result = result.filter(member => member.status === statusFilter.value)
  }

  return result
})

const handleDelete = (id) => {
  if (confirm('Apakah Anda yakin ingin menghapus member ini?')) {
    membersStore.deleteMember(id)
  }
}
</script>

