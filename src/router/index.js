import Vue from 'vue'
import VueRouter from 'vue-router'


import MainLayout from "../layouts/MainLayout.vue"

import Home from '../views/Home.vue'
import Shopping from '../views/ShoppingList.vue'
import Login from '../components/Login.vue'
Vue.use(VueRouter)

const routes = [{
        path: "/",
        component: MainLayout,
        children: [{
                path: '/',
                name: 'Home',
                component: Home
            }, {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/shoppinglist',
                name: 'Shopping',
                component: Shopping
            },
        ]
    },


]

const router = new VueRouter({
    routes
})

export default router