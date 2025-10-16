import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMembersStore = defineStore('members', () => {
    const members = ref([
        {
            id: 1,
            name: 'Ahmad Rizki',
            email: 'ahmad.rizki@example.com',
            phone: '081234567890',
            role: 'student',
            status: 'active',
            enrolledCourses: 3,
            joinDate: '2024-01-10',
            avatar: 'https://ui-avatars.com/api/?name=Ahmad+Rizki'
        },
        {
            id: 2,
            name: 'Siti Aminah',
            email: 'siti.aminah@example.com',
            phone: '081234567891',
            role: 'student',
            status: 'active',
            enrolledCourses: 2,
            joinDate: '2024-01-15',
            avatar: 'https://ui-avatars.com/api/?name=Siti+Aminah'
        },
        {
            id: 3,
            name: 'Budi Santoso',
            email: 'budi.santoso@example.com',
            phone: '081234567892',
            role: 'instructor',
            status: 'active',
            enrolledCourses: 0,
            joinDate: '2024-01-05',
            avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso'
        },
        {
            id: 4,
            name: 'Dewi Lestari',
            email: 'dewi.lestari@example.com',
            phone: '081234567893',
            role: 'student',
            status: 'inactive',
            enrolledCourses: 1,
            joinDate: '2024-02-01',
            avatar: 'https://ui-avatars.com/api/?name=Dewi+Lestari'
        }
    ])

    const getMemberById = (id) => {
        return members.value.find(member => member.id === parseInt(id))
    }

    const addMember = (member) => {
        const newMember = {
            ...member,
            id: members.value.length + 1,
            enrolledCourses: 0,
            joinDate: new Date().toISOString().split('T')[0],
            avatar: `https://ui-avatars.com/api/?name=${member.name}`
        }
        members.value.push(newMember)
        return newMember
    }

    const updateMember = (id, updatedMember) => {
        const index = members.value.findIndex(member => member.id === parseInt(id))
        if (index !== -1) {
            members.value[index] = {
                ...members.value[index],
                ...updatedMember,
                avatar: `https://ui-avatars.com/api/?name=${updatedMember.name || members.value[index].name}`
            }
            return members.value[index]
        }
        return null
    }

    const deleteMember = (id) => {
        const index = members.value.findIndex(member => member.id === parseInt(id))
        if (index !== -1) {
            members.value.splice(index, 1)
            return true
        }
        return false
    }

    return {
        members,
        getMemberById,
        addMember,
        updateMember,
        deleteMember
    }
})

