import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProgressStore = defineStore('progress', () => {
    const progress = ref([
        {
            id: 1,
            userId: 4,
            userName: 'Ahmad Rizki',
            courseId: 1,
            courseName: 'Web Development Fundamentals',
            completionPercentage: 65,
            completedLessons: 13,
            totalLessons: 20,
            quizScores: [85, 90, 75],
            averageScore: 83.3,
            lastAccessed: '2024-10-16',
            status: 'in_progress'
        },
        {
            id: 2,
            userId: 4,
            userName: 'Ahmad Rizki',
            courseId: 2,
            courseName: 'Data Science with Python',
            completionPercentage: 100,
            completedLessons: 25,
            totalLessons: 25,
            quizScores: [95, 88, 92, 90],
            averageScore: 91.25,
            lastAccessed: '2024-09-30',
            status: 'completed',
            certificateIssued: true,
            completedAt: '2024-09-30'
        }
    ])

    const certificates = ref([
        {
            id: 1,
            userId: 4,
            userName: 'Ahmad Rizki',
            courseId: 2,
            courseName: 'Data Science with Python',
            issuedDate: '2024-09-30',
            certificateNumber: 'CERT-2024-001',
            score: 91.25
        }
    ])

    return {
        progress,
        certificates
    }
})

