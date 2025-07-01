// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HommePageView from '@/views/HommePageView.vue'
import RSVPView from '@/views/RSVPView.vue'
import NotFound from '../views/NotFound.vue'
import VenuePage from '@/components/VenuePage.vue'


const routes = [
  { path: '/', name: 'HomePageView', component: HommePageView },
  { path: '/rsvp', name: 'RSVPView', component: RSVPView },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
  { path: '/details/venue', name: 'VenuePage', component: VenuePage }
];

export default createRouter({
    history: createWebHistory(),
    routes
})