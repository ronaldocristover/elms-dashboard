<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Tambah Kursus Baru</h1>
      <p class="text-gray-600 mt-1">Isi formulir untuk menambahkan kursus baru</p>
    </div>

    <div class="bg-white p-6 rounded-lg shadow">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Judul Kursus *</label>
            <input
              v-model="form.title"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Masukkan judul kursus"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Instruktur *</label>
            <input
              v-model="form.instructor"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Nama instruktur"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Kategori *</label>
            <select
              v-model="form.category"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">Pilih Kategori</option>
              <option value="Programming">Programming</option>
              <option value="Data Science">Data Science</option>
              <option value="Mobile">Mobile</option>
              <option value="Design">Design</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Level *</label>
            <select
              v-model="form.level"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">Pilih Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Durasi *</label>
            <input
              v-model="form.duration"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Contoh: 40 jam"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Harga (Rp) *</label>
            <input
              v-model.number="form.price"
              type="number"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Masukkan harga"
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Deskripsi *</label>
          <textarea
            v-model="form.description"
            required
            rows="4"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="Deskripsi kursus"
          ></textarea>
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

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">URL Thumbnail</label>
          <input
            v-model="form.thumbnail"
            type="url"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div class="flex justify-end space-x-4 pt-4">
          <BaseButton
            type="button"
            variant="outline"
            @click="$router.push('/courses')"
          >
            Batal
          </BaseButton>
          <BaseButton type="submit">
            Simpan Kursus
          </BaseButton>
        </div>
      </form>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCoursesStore } from '../../stores/courses'
import MainLayout from '../../layouts/MainLayout.vue'
import Breadcrumb from '../../components/Breadcrumb.vue'
import BaseButton from '../../components/BaseButton.vue'

const router = useRouter()
const coursesStore = useCoursesStore()

const breadcrumbs = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Manajemen Kursus', to: '/courses' },
  { label: 'Tambah Kursus' }
]

const form = ref({
  title: '',
  description: '',
  instructor: '',
  category: '',
  level: '',
  duration: '',
  price: 0,
  status: 'active',
  thumbnail: 'https://via.placeholder.com/300x200'
})

const handleSubmit = () => {
  coursesStore.addCourse(form.value)
  router.push('/courses')
}
</script>

