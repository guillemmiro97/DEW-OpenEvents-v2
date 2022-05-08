import { createRouter, createWebHistory } from 'vue-router'

import Login from "@/components/Login";
import Register from "@/components/Register";
import Main from "@/components/Main";

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
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
