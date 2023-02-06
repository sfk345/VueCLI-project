import {createRouter, createWebHistory} from 'vue-router'
import store from "@/store";
import HomeView from "@/views/HomeView.vue";
import Login from "@/components/Login.vue";
import Registration from "@/components/Registration.vue";
import Cart from "@/components/Cart.vue";
import Orders from "@/components/Orders.vue";
import Catalog from "@/components/Catalog.vue";

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();
        return;
    }
    next('');
};

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return;
    }
    next('/login');
}

const routes = [
    {path: '', redirect: {name: Catalog}},
    {path: '/login', name: 'login', component: Login},
    {path: '/registration', name: 'registration', component: Registration},
    {path: '/cart', name: 'cart', component: Cart},
    {path: '/orders', name: 'orders', component: Orders},
    // {
    //     path: '/',
    //     name: 'home',
    //     component: function () {
    //         return import('../views/HomeView.vue');
    //     },
    //     beforeEnter: ifAuthenticated,
    // },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: function () {
    //         return import('@/components/Login.vue');
    //     },
    //     beforeEnter: ifNotAuthenticated,
    // }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router
