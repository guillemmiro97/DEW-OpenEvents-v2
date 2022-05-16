import {createRouter, createWebHistory} from 'vue-router'

import Login from "@/components/Login";
import Register from "@/components/Register";
import Main from "@/components/Main";
import Profile from "@/components/Profile";
import Stats from "@/components/Stats";
import AccountConfig from "@/components/AccountConfig";
import Timeline from "@/components/Timeline";
import FriendsManagement from "@/components/FriendsManagement";
import CreateEvent from "@/components/CreateEvent";
import EventDetail from "@/components/EventDetail";
import ListOfFriends from "@/components/ListOfFriends";

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
    },
    {
        path: '/timeline',
        name: 'timeline',
        component: Timeline
    },
    {
        path: '/createEvent',
        name: 'createEvent',
        component: CreateEvent
    },
    {
        path: '/friendsManagement',
        name: 'friendsManagement',
        component: FriendsManagement
    },
    {
        path: '/eventDetail',
        name: 'eventDetail',
        component: EventDetail
    },
    {
        path: '/listOfFriends',
        name: 'listOfFriends',
        component: ListOfFriends
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
