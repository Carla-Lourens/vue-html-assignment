// src/router/index.js
/* eslint-disable */

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
{path: '/',name: 'HomeView',component: HomeView,meta: { title: 'Home Page' }},
{path: '/about',name: 'AboutView',component: AboutView,meta: { title: 'About Us' }}
]

export default createRouter({
    history: createWebHistory(),
    routes
})