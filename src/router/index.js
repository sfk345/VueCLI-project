import {createRouter, createWebHistory} from 'vue-router'
import CatalogTemp from "@/components/CatalogTemp.vue";
import LoginTemp from "@/components/LoginTemp.vue";
import RegistrationTemp from "@/components/RegistrationTemp.vue";
import CartTemp from "@/views/CartTemp.vue";
import OrdersTemp from "@/components/OrdersTemp.vue";
import LogoutTemp from "@/components/LogoutTemp.vue";

// const ifNotAuthenticated = (to, from, next) => {
//     if (!store.getters.isAuthenticated) {
//         next();
//         return;
//     }
//     next('');
// };
//
// const ifAuthenticated = (to, from, next) => {
//     if (store.getters.isAuthenticated) {
//         next();
//         return;
//     }
//     next('/login');
// }

const routes = [
    {path: '', redirect: {name: 'catalog'}},
    {path: '/catalog', name: 'catalog', component: CatalogTemp},
    {path: '/login', name: 'login', component: LoginTemp},
    {path: '/registration', name: 'registration', component: RegistrationTemp},
    {path: '/cart', name: 'cart', component: CartTemp},
    {path: '/orders', name: 'orders', component: OrdersTemp},
    {path: '/logout', name: 'logout', component: LogoutTemp},
]


const router = createRouter({
    history: createWebHistory(), routes
})

export default router

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
//         return import('@/components/LoginTemp.vue');
//     },
//     beforeEnter: ifNotAuthenticated,
// }