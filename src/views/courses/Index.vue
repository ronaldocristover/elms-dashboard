<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Manajemen Kursus</h1>
      <p class="text-gray-600 dark:text-gray-400 mt-1">Kelola semua kursus yang tersedia</p>
    </div>

    <!-- Filter and Search -->
    <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-soft mb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SearchInput
          v-model="searchQuery"
          placeholder="Cari kursus..."
          class="md:col-span-2"
        />
        <FilterDropdown
          v-model="categoryFilter"
          label="Kategori"
          placeholder="Semua Kategori"
          :options="categoryOptions"
        />
        <FilterDropdown
          v-model="statusFilter"
          label="Status"
          placeholder="Semua Status"
          :options="statusOptions"
        />
      </div>
      <div class="mt-4 flex justify-between items-center">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Menampilkan {{ filteredCourses.length }} dari {{ coursesStore.courses.length }} kursus
        </p>
        <BaseButton @click="$router.push('/courses/create')">
          <svg class="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Tambah Kursus
        </BaseButton>
      </div>
    </div>

    <!-- Table -->
    <BaseTable
      :columns="columns"
      :data="filteredCourses"
      :loading="loading"
      :enable-pagination="true"
      :current-page="currentPage"
      :items-per-page="10"
      @update:current-page="currentPage = $event"
    >
      <template #cell-thumbnail="{ value }">
        <img :src="value" alt="Thumbnail" class="w-16 h-12 object-cover rounded-lg" />
      </template>
      
      <template #cell-price="{ value }">
        <span class="font-semibold text-secondary-600 dark:text-secondary-400">
          Rp {{ value.toLocaleString('id-ID') }}
        </span>
      </template>
      
      <template #cell-status="{ value }">
        <span
          class="px-2.5 py-1 text-xs font-medium rounded-lg"
          :class="value === 'active' ? 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'"
        >
          {{ value === 'active' ? 'Aktif' : 'Nonaktif' }}
        </span>
      </template>
      
      <template #actions="{ row }">
        <BaseButton
          size="sm"
          variant="outline"
          @click="$router.push(`/courses/${row.id}`)"
        >
          Detail
        </BaseButton>
        <BaseButton
          size="sm"
          variant="warning"
          @click="$router.push(`/courses/${row.id}/edit`)"
        >
          Edit
        </BaseButton>
        <BaseButton
          size="sm"
          variant="danger"
          @click="openDeleteModal(row)"
        >
          Hapus
        </BaseButton>
      </template>
    </BaseTable>

    <!-- Delete Confirmation Modal -->
    <ConfirmModal
      v-model="showDeleteModal"
      title="Hapus Kursus"
      :message="`Apakah Anda yakin ingin menghapus kursus '${selectedCourse?.title}'? Data yang dihapus tidak dapat dikembalikan.`"
      confirm-text="Ya, Hapus"
      cancel-text="Batal"
      type="danger"
      @confirm="confirmDelete"
    />
  </MainLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCoursesStore } from '../../stores/courses'
import MainLayout from '../../layouts/MainLayout.vue'
import Breadcrumb from '../../components/Breadcrumb.vue'
import SearchInput from '../../components/SearchInput.vue'
import FilterDropdown from '../../components/FilterDropdown.vue'
import BaseButton from '../../components/BaseButton.vue'
import BaseTable from '../../components/BaseTable.vue'
import ConfirmModal from '../../components/ConfirmModal.vue'

const coursesStore = useCoursesStore()

const breadcrumbs = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Manajemen Kursus' }
]

const columns = [
  { key: 'thumbnail', label: 'Gambar' },
  { key: 'title', label: 'Judul' },
  { key: 'instructor', label: 'Instruktur' },
  { key: 'category', label: 'Kategori' },
  { key: 'students', label: 'Siswa' },
  { key: 'price', label: 'Harga' },
  { key: 'status', label: 'Status' }
]

const loading = ref(false)
const searchQuery = ref('')
const categoryFilter = ref('')
const statusFilter = ref('')
const showDeleteModal = ref(false)
const selectedCourse = ref(null)
const currentPage = ref(1)

const categoryOptions = [
  { value: 'Programming', label: 'Programming' },
  { value: 'Data Science', label: 'Data Science' },
  { value: 'Mobile', label: 'Mobile' },
  { value: 'Design', label: 'Design' }
]

const statusOptions = [
  { value: 'active', label: 'Aktif' },
  { value: 'inactive', label: 'Nonaktif' }
]

const filteredCourses = computed(() => {
  let result = coursesStore.courses

  if (searchQuery.value) {
    result = result.filter(course =>
      course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (categoryFilter.value) {
    result = result.filter(course => course.category === categoryFilter.value)
  }

  if (statusFilter.value) {
    result = result.filter(course => course.status === statusFilter.value)
  }

  return result
})

const openDeleteModal = (course) => {
  selectedCourse.value = course
  showDeleteModal.value = true
}

const confirmDelete = () => {
  if (selectedCourse.value) {
    coursesStore.deleteCourse(selectedCourse.value.id)
    selectedCourse.value = null
  }
}
</script>
