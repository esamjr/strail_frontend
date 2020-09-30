import Vue from 'vue'
import VueRouter from 'vue-router'


import MainLayout from "../layouts/MainLayout.vue"
import SecondLayout from "../layouts/SecondLayout.vue"

import Home from '../views/Home.vue'
import Shopping from '../views/ShoppingList.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
Vue.use(VueRouter)

const routes = [{
        path: "/",
        component: MainLayout,
        children: [{
            path: '/',
            name: 'Home',
            component: Home
        }, ]

    },
    {
        path: "/",
        component: SecondLayout,
        children: [{
                path: '/shoppinglist',
                name: 'Shopping',
                component: Shopping
            }, {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
        ]
    }



]

const router = new VueRouter({
    routes
})

export default router