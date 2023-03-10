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
      path: '/vif',
      name: 'vif',
      component: () => import('../views/VifView.vue')
    },
    {
      path: '/propsy',
      name: 'propsy',
      component: () => import('../views/PropsyView.vue')
    },
    {
      path: '/metody',
      name: 'metody',
      component: () => import('../views/MetodyView.vue')
    },
    {
      path: '/watchery',
      name: 'watchery',
      component: () => import('../views/WatcheryView.vue')
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
})

export default router
