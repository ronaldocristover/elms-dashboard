import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAssessmentsStore = defineStore('assessments', () => {
    const assessments = ref([
        {
            id: 1,
            title: 'Quiz: Web Development Basics',
            courseId: 1,
            courseName: 'Web Development Fundamentals',
            type: 'quiz',
            duration: 30,
            totalQuestions: 10,
            passingScore: 70,
            status: 'published',
            attempts: 45,
            createdAt: '2024-10-01'
        },
        {
            id: 2,
            title: 'Final Exam: Python Programming',
            courseId: 2,
            courseName: 'Data Science with Python',
            type: 'exam',
            duration: 120,
            totalQuestions: 50,
            passingScore: 80,
            status: 'published',
            attempts: 28,
            createdAt: '2024-10-10'
        }
    ])

    const questions = ref([
        {
            id: 1,
            assessmentId: 1,
            type: 'multiple_choice',
            question: 'What does HTML stand for?',
            options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
            correctAnswer: 0,
            points: 10
        }
    ])

    return {
        assessments,
        questions
    }
})

