import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/komponenty',
      name: 'komponenty',
      component: () => import('../views/KomponentyView.vue')
    },
    {
      path: '/sloty',
      name: 'sloty',
      component: () => import('../views/SlotyView.vue')
    },
    {
      path: '/sass',
      name: 'sass',
      component: () => import('../views/SASSView.vue')
    },
    {
      path: '/mail',
      name: 'mail',
      component: () => import('../views/MailView.vue')
    },
    {
      path: '/meeting_room',
      name: 'meeting_room',
      component: () => import('../views/MeetingRoomView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
})

export default router
