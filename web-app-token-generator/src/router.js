import { createRouter, createWebHistory } from "vue-router";
import Dictionary from './views/Dictionary.vue'
import Home from './views/Home.vue'


const routes = [
    {
        path: '/dictionary',
        name: 'Dictionary',
        component: Dictionary
    },
    {
        path: '/',
        name: 'Home',
        component: Home 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
