import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCoursesStore = defineStore('courses', () => {
    const courses = ref([
        {
            id: 1,
            title: 'Web Development Fundamentals',
            description: 'Belajar dasar-dasar pengembangan web dengan HTML, CSS, dan JavaScript',
            instructor: 'John Doe',
            category: 'Programming',
            level: 'Beginner',
            duration: '40 jam',
            students: 45,
            price: 500000,
            status: 'active',
            thumbnail: 'https://via.placeholder.com/300x200',
            createdAt: '2024-01-15'
        },
        {
            id: 2,
            title: 'Data Science with Python',
            description: 'Analisis data dan machine learning menggunakan Python',
            instructor: 'Jane Smith',
            category: 'Data Science',
            level: 'Intermediate',
            duration: '60 jam',
            students: 32,
            price: 750000,
            status: 'active',
            thumbnail: 'https://via.placeholder.com/300x200',
            createdAt: '2024-01-20'
        },
        {
            id: 3,
            title: 'Mobile App Development',
            description: 'Buat aplikasi mobile dengan React Native',
            instructor: 'Bob Johnson',
            category: 'Mobile',
            level: 'Intermediate',
            duration: '50 jam',
            students: 28,
            price: 650000,
            status: 'active',
            thumbnail: 'https://via.placeholder.com/300x200',
            createdAt: '2024-02-01'
        }
    ])

    const getCourseById = (id) => {
        return courses.value.find(course => course.id === parseInt(id))
    }

    const addCourse = (course) => {
        const newCourse = {
            ...course,
            id: courses.value.length + 1,
            students: 0,
            createdAt: new Date().toISOString().split('T')[0]
        }
        courses.value.push(newCourse)
        return newCourse
    }

    const updateCourse = (id, updatedCourse) => {
        const index = courses.value.findIndex(course => course.id === parseInt(id))
        if (index !== -1) {
            courses.value[index] = { ...courses.value[index], ...updatedCourse }
            return courses.value[index]
        }
        return null
    }

    const deleteCourse = (id) => {
        const index = courses.value.findIndex(course => course.id === parseInt(id))
        if (index !== -1) {
            courses.value.splice(index, 1)
            return true
        }
        return false
    }

    return {
        courses,
        getCourseById,
        addCourse,
        updateCourse,
        deleteCourse
    }
})

