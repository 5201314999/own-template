
import { createRouter, createWebHistory } from 'vue-router'

const Layout = () => import('@/pages/layout/Layout.vue')
const ErrorPage = () => import('@/pages/error/Error.vue')
const Home = () => import('@/pages/home/Home.vue')
const User = () => import('@/pages/user/User.vue')


// const routes = [
//     {
//         path: '/',
//         name: 'layout',
//         component: Layout,
//         redirect: '/home',
//         children: [
//             { path: 'home', name: 'home', component: Home },
//             { path: 'user', name: 'user', component: User },
//         ],
//     }, {
//         path: '/catchAll',
//         component: ErrorPage
//     }
// ]

import Home2 from '../pages/home/Home.vue'
import User2 from '../pages/user/User.vue'
const routes = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/home',
        children: [
            { path: 'home', name: 'home', component: Home2 },
            { path: 'user', name: 'user', component: User2 },
        ],
    }, {
        path: '/catchAll',
        component: ErrorPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router