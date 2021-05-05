import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Property from '../views/Property.vue'
import Team from '../views/Team.vue'
import Add from '../views/Add.vue'
import Edit from '../views/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Property',
    component: Property,
    children: [
      {
        path: 'Add',
        component: Add
      },
      {
        path: 'Edit',
        component: Edit
      }
    ]
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
