import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAnnouncementsStore = defineStore('announcements', () => {
    const announcements = ref([
        {
            id: 1,
            title: 'Platform Update - New Features Available',
            content: 'We are excited to announce new features including discussion forums and improved analytics dashboard.',
            priority: 'high',
            target: 'all',
            author: 'Admin User',
            status: 'published',
            views: 250,
            createdAt: '2024-10-15',
            expiresAt: '2024-11-15'
        },
        {
            id: 2,
            title: 'Upcoming Maintenance Schedule',
            content: 'The platform will undergo scheduled maintenance on October 20, 2024 from 02:00 AM to 04:00 AM.',
            priority: 'medium',
            target: 'all',
            author: 'Admin User',
            status: 'published',
            views: 180,
            createdAt: '2024-10-14',
            expiresAt: '2024-10-20'
        }
    ])

    return {
        announcements
    }
})

