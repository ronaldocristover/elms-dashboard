import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePaymentsStore = defineStore('payments', () => {
    const payments = ref([
        {
            id: 1,
            invoiceNumber: 'INV-2024-001',
            userId: 4,
            userName: 'Ahmad Rizki',
            courseId: 1,
            courseName: 'Web Development Fundamentals',
            amount: 500000,
            status: 'paid',
            paymentMethod: 'credit_card',
            paymentDate: '2024-01-15',
            createdAt: '2024-01-10'
        },
        {
            id: 2,
            invoiceNumber: 'INV-2024-002',
            userId: 5,
            userName: 'Siti Aminah',
            courseId: 2,
            courseName: 'Data Science with Python',
            amount: 750000,
            status: 'pending',
            paymentMethod: 'bank_transfer',
            createdAt: '2024-10-14'
        }
    ])

    const subscriptions = ref([
        {
            id: 1,
            userId: 4,
            userName: 'Ahmad Rizki',
            plan: 'premium',
            price: 300000,
            billingCycle: 'monthly',
            status: 'active',
            startDate: '2024-01-01',
            nextBillingDate: '2024-11-01'
        }
    ])

    return {
        payments,
        subscriptions
    }
})

