import { createRouter, createWebHistory } from 'vue-router'

import Login from "@/components/Login";
import Register from "@/components/Register";
import Main from "@/components/Main";
import Profile from "@/components/Profile";
import Stats from "@/components/Stats";
import AccountConfig from "@/components/AccountConfig";

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
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/stats',
    name: 'stats',
    component: Stats
  },
  {
    path: '/accountConfig',
    name: 'accountConfig',
    component: AccountConfig
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
