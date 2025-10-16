import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsersStore = defineStore('users', () => {
  const users = ref([
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@lms.com',
      phone: '081234567890',
      role: 'admin',
      status: 'active',
      address: 'Jakarta, Indonesia',
      joinDate: '2024-01-01',
      avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=3b82f6',
      lastLogin: '2024-10-16',
      permissions: ['all']
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john.doe@lms.com',
      phone: '081234567891',
      role: 'instructor',
      status: 'active',
      address: 'Bandung, Indonesia',
      joinDate: '2024-01-15',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=8b5cf6',
      lastLogin: '2024-10-15',
      coursesTeaching: 5,
      totalStudents: 120
    },
    {
      id: 3,
      name: 'Jane Smith',
      email: 'jane.smith@lms.com',
      phone: '081234567892',
      role: 'instructor',
      status: 'active',
      address: 'Surabaya, Indonesia',
      joinDate: '2024-01-20',
      avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=8b5cf6',
      lastLogin: '2024-10-16',
      coursesTeaching: 3,
      totalStudents: 85
    },
    {
      id: 4,
      name: 'Ahmad Rizki',
      email: 'ahmad.rizki@lms.com',
      phone: '081234567893',
      role: 'student',
      status: 'active',
      address: 'Yogyakarta, Indonesia',
      joinDate: '2024-02-01',
      avatar: 'https://ui-avatars.com/api/?name=Ahmad+Rizki&background=10b981',
      lastLogin: '2024-10-16',
      coursesEnrolled: 4,
      coursesCompleted: 1
    },
    {
      id: 5,
      name: 'Siti Aminah',
      email: 'siti.aminah@lms.com',
      phone: '081234567894',
      role: 'student',
      status: 'active',
      address: 'Semarang, Indonesia',
      joinDate: '2024-02-10',
      avatar: 'https://ui-avatars.com/api/?name=Siti+Aminah&background=10b981',
      lastLogin: '2024-10-15',
      coursesEnrolled: 3,
      coursesCompleted: 2
    },
    {
      id: 6,
      name: 'Budi Santoso',
      email: 'budi.santoso@lms.com',
      phone: '081234567895',
      role: 'student',
      status: 'inactive',
      address: 'Medan, Indonesia',
      joinDate: '2024-03-01',
      avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=10b981',
      lastLogin: '2024-09-20',
      coursesEnrolled: 2,
      coursesCompleted: 0
    }
  ])

  const getUserById = (id) => {
    return users.value.find(user => user.id === parseInt(id))
  }

  const addUser = (user) => {
    const newUser = {
      ...user,
      id: users.value.length + 1,
      joinDate: new Date().toISOString().split('T')[0],
      lastLogin: new Date().toISOString().split('T')[0],
      avatar: `https://ui-avatars.com/api/?name=${user.name}&background=${getRoleColor(user.role)}`
    }
    
    // Set default values based on role
    if (user.role === 'student') {
      newUser.coursesEnrolled = 0
      newUser.coursesCompleted = 0
    } else if (user.role === 'instructor') {
      newUser.coursesTeaching = 0
      newUser.totalStudents = 0
    } else if (user.role === 'admin') {
      newUser.permissions = ['all']
    }
    
    users.value.push(newUser)
    return newUser
  }

  const updateUser = (id, updatedUser) => {
    const index = users.value.findIndex(user => user.id === parseInt(id))
    if (index !== -1) {
      users.value[index] = {
        ...users.value[index],
        ...updatedUser,
        avatar: `https://ui-avatars.com/api/?name=${updatedUser.name || users.value[index].name}&background=${getRoleColor(updatedUser.role || users.value[index].role)}`
      }
      return users.value[index]
    }
    return null
  }

  const deleteUser = (id) => {
    const index = users.value.findIndex(user => user.id === parseInt(id))
    if (index !== -1) {
      users.value.splice(index, 1)
      return true
    }
    return false
  }

  const getRoleColor = (role) => {
    const colors = {
      admin: '3b82f6',      // blue
      instructor: '8b5cf6',  // purple
      student: '10b981'      // green
    }
    return colors[role] || '6b7280' // gray default
  }

  const getUsersByRole = (role) => {
    return users.value.filter(user => user.role === role)
  }

  return {
    users,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    getUsersByRole
  }
})

