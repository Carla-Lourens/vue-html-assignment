// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RSVPView from '@/views/RSVPView.vue'
import NotFound from '../views/NotFound.vue'
import VenuePage from '@/components/VenuePage.vue'


const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/rsvp', name: 'RSVPView', component: RSVPView },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
  { path: '/venue', name: 'VenuePage', component: VenuePage }
];

export default createRouter({
    history: createWebHistory(),
    routes
})