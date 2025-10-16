<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <!-- Welcome Card -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
        Selamat Datang, {{ authStore.user?.name }}!
      </h2>
      <p class="text-gray-600 dark:text-gray-400">
        Kelola kursus, siswa, dan materi pembelajaran Anda dengan mudah.
      </p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Total Kursus -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-6 hover:shadow-soft-md transition-shadow">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Total Kursus</p>
            <p class="text-3xl font-bold text-gray-800 dark:text-gray-100">{{ coursesStore.courses.length }}</p>
          </div>
          <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Total Member -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-6 hover:shadow-soft-md transition-shadow">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Total Member</p>
            <p class="text-3xl font-bold text-gray-800 dark:text-gray-100">{{ membersStore.members.length }}</p>
          </div>
          <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Pendapatan -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-6 hover:shadow-soft-md transition-shadow">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Pendapatan</p>
            <p class="text-3xl font-bold text-gray-800 dark:text-gray-100">Rp {{ (totalRevenue / 1000000).toFixed(1) }}jt</p>
          </div>
          <div class="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Kursus Aktif -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-6 hover:shadow-soft-md transition-shadow">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Kursus Aktif</p>
            <p class="text-3xl font-bold text-gray-800 dark:text-gray-100">{{ activeCourses }}</p>
          </div>
          <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Courses -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft mb-8">
      <div class="px-6 py-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">Kursus Terbaru</h3>
        <BaseButton
          size="sm"
          variant="outline"
          @click="$router.push('/courses')"
        >
          Lihat Semua
        </BaseButton>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="course in recentCourses"
            :key="course.id"
            class="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-soft-md transition-all cursor-pointer group"
            @click="$router.push(`/courses/${course.id}`)"
          >
            <h4 class="font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {{ course.title }}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{{ course.description }}</p>
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-500 dark:text-gray-400">{{ course.students }} Siswa</span>
              <span
                class="px-2.5 py-1 text-xs font-medium rounded-lg"
                :class="course.status === 'active' ? 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'"
              >
                {{ course.status === 'active' ? 'Aktif' : 'Nonaktif' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Members -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft">
      <div class="px-6 py-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">Member Terbaru</h3>
        <BaseButton
          size="sm"
          variant="outline"
          @click="$router.push('/members')"
        >
          Lihat Semua
        </BaseButton>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <div
            v-for="member in recentMembers"
            :key="member.id"
            class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-soft-md transition-all cursor-pointer group"
            @click="$router.push(`/members/${member.id}`)"
          >
            <div class="flex items-center space-x-4">
              <img :src="member.avatar" alt="Avatar" class="w-12 h-12 rounded-lg" />
              <div>
                <p class="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {{ member.name }}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ member.email }}</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <span
                class="px-2.5 py-1 text-xs font-medium rounded-lg"
                :class="member.role === 'instructor' ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400' : 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400'"
              >
                {{ member.role === 'instructor' ? 'Instruktur' : 'Siswa' }}
              </span>
              <span
                class="px-2.5 py-1 text-xs font-medium rounded-lg"
                :class="member.status === 'active' ? 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'"
              >
                {{ member.status === 'active' ? 'Aktif' : 'Nonaktif' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useCoursesStore } from '../stores/courses'
import { useMembersStore } from '../stores/members'
import MainLayout from '../layouts/MainLayout.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import BaseButton from '../components/BaseButton.vue'

const authStore = useAuthStore()
const coursesStore = useCoursesStore()
const membersStore = useMembersStore()

const breadcrumbs = [
  { label: 'Dashboard' }
]

const activeCourses = computed(() => {
  return coursesStore.courses.filter(c => c.status === 'active').length
})

const totalRevenue = computed(() => {
  return coursesStore.courses.reduce((sum, course) => {
    return sum + (course.price * course.students)
  }, 0)
})

const recentCourses = computed(() => {
  return coursesStore.courses.slice(0, 3)
})

const recentMembers = computed(() => {
  return membersStore.members.slice(0, 4)
})
</script>
