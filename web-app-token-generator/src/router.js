import { createRouter, createWebHistory } from "vue-router";
import Dictionary from './views/Dictionary.vue'
import Home from './views/Home.vue'
import CreateToken from './views/CreateToken.vue'


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
    },
    {
        path: '/create-token',
        name: 'Create token',
        component: CreateToken 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
