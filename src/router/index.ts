import { createRouter, createWebHistory, RouteRecordRaw } from "_vue-router@4.0.12@vue-router";
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router