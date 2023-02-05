import { createRouter, createWebHistory} from 'vue-router'

import TheLogin from '@/views/Login/TheLogin.vue'
import HomePage from '@/views/HomePage.vue'


const routes = [
    { 
        path: '/login',
        component: TheLogin,
    },
    { 
        path: '/',
        component: HomePage,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router