import { createRouter, createWebHistory } from 'vue-router'

import Login from "@/components/Login";
import Register from "@/components/Register";

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router