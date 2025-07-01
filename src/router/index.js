// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RSVPView from '@/views/RSVPView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'HomeView', component: HomeView, meta: { title: 'Home Page' } },
  { path: '/rsvp', name: 'RSVPView', component: RSVPView, meta: { title: 'RSVP Page' } },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }
];

export default createRouter({
    history: createWebHistory(),
    routes
})