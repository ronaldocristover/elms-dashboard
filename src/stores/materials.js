import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMaterialsStore = defineStore('materials', () => {
    const materials = ref([
        {
            id: 1,
            title: 'Introduction to HTML',
            courseId: 1,
            courseName: 'Web Development Fundamentals',
            type: 'video',
            url: 'https://example.com/video1.mp4',
            duration: '45:30',
            size: '250 MB',
            order: 1,
            status: 'published',
            views: 120,
            createdAt: '2024-09-15'
        },
        {
            id: 2,
            title: 'CSS Basics Guide',
            courseId: 1,
            courseName: 'Web Development Fundamentals',
            type: 'pdf',
            url: 'https://example.com/css-guide.pdf',
            size: '5.2 MB',
            order: 2,
            status: 'published',
            downloads: 85,
            createdAt: '2024-09-16'
        },
        {
            id: 3,
            title: 'JavaScript Introduction',
            courseId: 1,
            courseName: 'Web Development Fundamentals',
            type: 'document',
            url: 'https://example.com/js-intro.docx',
            size: '2.1 MB',
            order: 3,
            status: 'draft',
            downloads: 0,
            createdAt: '2024-09-20'
        }
    ])

    const getMaterialsByCourse = (courseId) => {
        return materials.value.filter(m => m.courseId === parseInt(courseId))
    }

    return {
        materials,
        getMaterialsByCourse
    }
})

