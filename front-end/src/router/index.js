import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Property from '../views/Property.vue'
import Team from '../views/Team.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Property',
    name: 'Property',
    component: Property
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
