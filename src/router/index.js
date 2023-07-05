import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import MenuView from '@/views/MenuView.vue'
import CateringView from '@/views/CateringView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/catering',
    name: 'catering',
    component: CateringView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
