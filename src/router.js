// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginI from "@/LoginI.vue";
import pruebas from "@/pruebas.vue";
import index from "@/admin/index.vue"


const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginI
    },
    {
        path: '/admin',
        component: index
    },
    {
        path: '/prueba',
        component: pruebas
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
