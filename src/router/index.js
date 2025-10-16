import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Login from '../views/Login.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import FormDemo from '../views/FormDemo.vue'

// Course Management
import CoursesIndex from '../views/courses/Index.vue'
import CoursesCreate from '../views/courses/Create.vue'
import CoursesEdit from '../views/courses/Edit.vue'
import CoursesDetail from '../views/courses/Detail.vue'

// Member Management
import MembersIndex from '../views/members/Index.vue'
import MembersCreate from '../views/members/Create.vue'
import MembersEdit from '../views/members/Edit.vue'
import MembersDetail from '../views/members/Detail.vue'

// User Management
import UsersIndex from '../views/users/Index.vue'
import UsersCreate from '../views/users/Create.vue'
import UsersEdit from '../views/users/Edit.vue'
import UsersDetail from '../views/users/Detail.vue'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { requiresAuth: true }
    },
    {
        path: '/form-demo',
        name: 'FormDemo',
        component: FormDemo,
        meta: { requiresAuth: true }
    },
    // Course Routes
    {
        path: '/courses',
        name: 'CoursesIndex',
        component: CoursesIndex,
        meta: { requiresAuth: true }
    },
    {
        path: '/courses/create',
        name: 'CoursesCreate',
        component: CoursesCreate,
        meta: { requiresAuth: true }
    },
    {
        path: '/courses/:id',
        name: 'CoursesDetail',
        component: CoursesDetail,
        meta: { requiresAuth: true }
    },
    {
        path: '/courses/:id/edit',
        name: 'CoursesEdit',
        component: CoursesEdit,
        meta: { requiresAuth: true }
    },
    // Member Routes
    {
        path: '/members',
        name: 'MembersIndex',
        component: MembersIndex,
        meta: { requiresAuth: true }
    },
    {
        path: '/members/create',
        name: 'MembersCreate',
        component: MembersCreate,
        meta: { requiresAuth: true }
    },
    {
        path: '/members/:id',
        name: 'MembersDetail',
        component: MembersDetail,
        meta: { requiresAuth: true }
    },
    {
        path: '/members/:id/edit',
        name: 'MembersEdit',
        component: MembersEdit,
        meta: { requiresAuth: true }
    },
    // User Routes
    {
        path: '/users',
        name: 'UsersIndex',
        component: UsersIndex,
        meta: { requiresAuth: true }
    },
    {
        path: '/users/create',
        name: 'UsersCreate',
        component: UsersCreate,
        meta: { requiresAuth: true }
    },
    {
        path: '/users/:id',
        name: 'UsersDetail',
        component: UsersDetail,
        meta: { requiresAuth: true }
    },
    {
        path: '/users/:id/edit',
        name: 'UsersEdit',
        component: UsersEdit,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next('/login')
    } else if (to.path === '/login' && authStore.isAuthenticated) {
        next('/dashboard')
    } else {
        next()
    }
})

export default router
