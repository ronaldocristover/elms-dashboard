<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <div class="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
      <div>
        <h1 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">Detail Kursus</h1>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">Informasi lengkap tentang kursus</p>
      </div>
      <div class="flex gap-2 w-full md:w-auto">
        <BaseButton
          variant="warning"
          size="sm"
          @click="$router.push(`/courses/${course?.id}/edit`)"
          class="flex-1 md:flex-none"
        >
          Edit Kursus
        </BaseButton>
        <BaseButton
          variant="outline"
          size="sm"
          @click="$router.push('/courses')"
          class="flex-1 md:flex-none"
        >
          Kembali
        </BaseButton>
      </div>
    </div>

    <div v-if="!course" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft text-center">
      <p class="text-gray-500 dark:text-gray-400">Kursus tidak ditemukan</p>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Main Info -->
      <div class="lg:col-span-2 space-y-6">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft">
          <img
            :src="course.thumbnail"
            alt="Thumbnail"
            class="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">{{ course.title }}</h2>
          
          <div class="flex flex-wrap items-center gap-3 mb-6">
            <span
              class="px-3 py-1.5 text-sm font-medium rounded-lg"
              :class="course.status === 'active' ? 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'"
            >
              {{ course.status === 'active' ? 'Aktif' : 'Nonaktif' }}
            </span>
            <span class="text-gray-600 dark:text-gray-400">{{ course.category }}</span>
            <span class="text-gray-600 dark:text-gray-400">{{ course.level }}</span>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Deskripsi</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ course.description }}</p>
          </div>
        </div>

        <!-- Course Stats -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Statistik</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Siswa</p>
              <p class="text-2xl font-bold text-primary-600 dark:text-primary-400">{{ course.students }}</p>
            </div>
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Durasi</p>
              <p class="text-2xl font-bold text-secondary-600 dark:text-secondary-400">{{ course.duration }}</p>
            </div>
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Harga</p>
              <p class="text-2xl font-bold text-accent-600 dark:text-accent-400">Rp {{ course.price.toLocaleString('id-ID') }}</p>
            </div>
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Dibuat</p>
              <p class="text-xl font-bold text-gray-600 dark:text-gray-400">{{ formatDate(course.createdAt) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar Info -->
      <div class="space-y-6">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Informasi Instruktur</h3>
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-12 h-12 bg-primary-500 dark:bg-primary-600 rounded-lg flex items-center justify-center text-white font-semibold">
              {{ course.instructor.charAt(0) }}
            </div>
            <div>
              <p class="font-semibold text-gray-800 dark:text-gray-100">{{ course.instructor }}</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">Instruktur</p>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Detail Kursus</h3>
          <dl class="space-y-3">
            <div>
              <dt class="text-sm text-gray-500 dark:text-gray-400">Kategori</dt>
              <dd class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ course.category }}</dd>
            </div>
            <div>
              <dt class="text-sm text-gray-500 dark:text-gray-400">Level</dt>
              <dd class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ course.level }}</dd>
            </div>
            <div>
              <dt class="text-sm text-gray-500 dark:text-gray-400">Durasi</dt>
              <dd class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ course.duration }}</dd>
            </div>
            <div>
              <dt class="text-sm text-gray-500 dark:text-gray-400">Status</dt>
              <dd class="text-sm font-medium text-gray-900 dark:text-gray-100">
                {{ course.status === 'active' ? 'Aktif' : 'Nonaktif' }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCoursesStore } from '../../stores/courses'
import MainLayout from '../../layouts/MainLayout.vue'
import Breadcrumb from '../../components/Breadcrumb.vue'
import BaseButton from '../../components/BaseButton.vue'

const route = useRoute()
const coursesStore = useCoursesStore()

const course = ref(null)

const breadcrumbs = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Manajemen Kursus', to: '/courses' },
  { label: 'Detail Kursus' }
]

onMounted(() => {
  course.value = coursesStore.getCourseById(route.params.id)
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>
