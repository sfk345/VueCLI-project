import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/components/Login.vue";
import Registration from "@/components/Registration.vue";
import Cart from "@/components/Cart.vue";
import Orders from "@/components/Orders.vue";
import Catalog from "@/components/Catalog.vue";
import HomeView from "@/views/HomeView.vue";

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
    {path: '', redirect: {name: HomeView}},
    {path: '/catalog', name: 'catalog', component: Catalog},
    {path: '/login', name: 'login', component: Login},
    {path: '/registration', name: 'registration', component: Registration},
    {path: '/cart', name: 'cart', component: Cart},
    {path: '/orders', name: 'orders', component: Orders},
    {path: '/logout', name: 'logout', component: Logout}
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
    history: createWebHistory(), routes
})

export default router
