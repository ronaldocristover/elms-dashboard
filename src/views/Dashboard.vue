<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <!-- Welcome Card -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
        Welcome, {{ authStore.user?.name }}!
      </h2>
      <p class="text-gray-600 dark:text-gray-400">
        Manage your courses, students, and learning materials with ease.
      </p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Total Courses -->
      <StatCard
        title="Total Courses"
        :value="coursesStore.courses.length"
        :change-percentage="12.5"
        change-label="vs last month"
        icon="graduation-cap"
        icon-color="primary"
      />

      <!-- Total Members -->
      <StatCard
        title="Total Members"
        :value="membersStore.members.length"
        :change-percentage="8.2"
        change-label="vs last month"
        icon="users"
        icon-color="secondary"
      />

      <!-- New Members Today -->
      <StatCard
        title="New Members Today"
        :value="newMembersToday"
        :change-percentage="newMembersChange"
        change-label="vs yesterday"
        icon="user-plus"
        icon-color="success"
      />

      <!-- Total Content -->
      <StatCard
        title="Total Content"
        :value="totalContent"
        :change-percentage="15.3"
        change-label="vs last month"
        icon="file-alt"
        icon-color="accent"
      />
    </div>

    <!-- Revenue & Active Courses Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <!-- Revenue -->
      <StatCard
        title="Total Revenue"
        :value="totalRevenue"
        :change-percentage="22.1"
        change-label="vs last month"
        icon="dollar-sign"
        icon-color="success"
        format="currency"
      />

      <!-- Active Courses -->
      <StatCard
        title="Active Courses"
        :value="activeCourses"
        :change-percentage="5.7"
        change-label="vs last month"
        icon="play-circle"
        icon-color="primary"
      />
    </div>

    <!-- Member Registration Chart -->
    <div class="mb-8">
      <Chart
        title="Member Registration Trend"
        :data="memberRegistrationData"
        type="line"
        @period-change="handlePeriodChange"
      />
    </div>

    <!-- Recent Courses -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft mb-8">
      <div class="px-6 py-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">Recent Courses</h3>
        <BaseButton
          size="sm"
          variant="outline"
          @click="$router.push('/courses')"
        >
          View All
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
              <span class="text-gray-500 dark:text-gray-400">{{ course.students }} Students</span>
              <span
                class="px-2.5 py-1 text-xs font-medium rounded-lg"
                :class="course.status === 'active' ? 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'"
              >
                {{ course.status === 'active' ? 'Active' : 'Inactive' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Members -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft">
      <div class="px-6 py-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">Recent Members</h3>
        <BaseButton
          size="sm"
          variant="outline"
          @click="$router.push('/members')"
        >
          View All
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
                {{ member.role === 'instructor' ? 'Instructor' : 'Student' }}
              </span>
              <span
                class="px-2.5 py-1 text-xs font-medium rounded-lg"
                :class="member.status === 'active' ? 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'"
              >
                {{ member.status === 'active' ? 'Active' : 'Inactive' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useCoursesStore } from '../stores/courses'
import { useMembersStore } from '../stores/members'
import MainLayout from '../layouts/MainLayout.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import BaseButton from '../components/BaseButton.vue'
import StatCard from '../components/StatCard.vue'
import Chart from '../components/Chart.vue'

const authStore = useAuthStore()
const coursesStore = useCoursesStore()
const membersStore = useMembersStore()

const breadcrumbs = [
  { label: 'Dashboard' }
]

// Mock data for new members today
const newMembersToday = ref(12)
const newMembersChange = ref(25.0) // 25% increase vs yesterday

// Mock data for total content
const totalContent = ref(156)

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

// Mock data for member registration chart
const memberRegistrationData = ref([
  { label: 'Mon', value: 8 },
  { label: 'Tue', value: 12 },
  { label: 'Wed', value: 15 },
  { label: 'Thu', value: 10 },
  { label: 'Fri', value: 18 },
  { label: 'Sat', value: 14 },
  { label: 'Sun', value: 16 }
])

const handlePeriodChange = (period) => {
  // Mock data for different periods
  if (period === '7d') {
    memberRegistrationData.value = [
      { label: 'Mon', value: 8 },
      { label: 'Tue', value: 12 },
      { label: 'Wed', value: 15 },
      { label: 'Thu', value: 10 },
      { label: 'Fri', value: 18 },
      { label: 'Sat', value: 14 },
      { label: 'Sun', value: 16 }
    ]
  } else if (period === '30d') {
    memberRegistrationData.value = [
      { label: 'Week 1', value: 45 },
      { label: 'Week 2', value: 52 },
      { label: 'Week 3', value: 38 },
      { label: 'Week 4', value: 61 }
    ]
  } else if (period === '90d') {
    memberRegistrationData.value = [
      { label: 'Month 1', value: 180 },
      { label: 'Month 2', value: 195 },
      { label: 'Month 3', value: 210 }
    ]
  }
}
</script>
