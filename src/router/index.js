import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Catalog from '@/views/Catalog.vue'
import Card from '@/views/Card.vue'
import Map from '@/views/Map.vue'
import Delivery from '@/views/Delivery.vue'
import Error from '@/views/Error.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/card',
      name: 'card',
      component: Card
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: Delivery
    },    {
      path: '/:catchAll(.*)*',
      redirect: {name: 'error'}
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    }
  ]
})

export default router