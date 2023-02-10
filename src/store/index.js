import { createStore } from 'vuex';
import axios from "axios";
import router from "@/router";


export const store = createStore({
    state:{
        API_URL: 'https://jurapro.bhuser.ru/api-shop/',
        USER_TOKEN: localStorage.getItem('USER_TOKEN'),
        IS_AUTHENTICATED: false,
        ERRORS: '',
        PRODUCT_CART: [],
        PRODUCT_GROUP: '',
        PRODUCT_ORDER: []
    },
    mutations:{
        EDIT_PRODUCT: (state, payload)=>{
            state.PRODUCT_CART = payload
        },
        PRODUCTS_ORDERS: (state, payload)=>{
            state.PRODUCT_ORDER = payload
        },
        ADD_PRODUCT: (state, product)=>{
            state.PRODUCT_CART = product
        }
    },
    actions:{
        async login({commit}, user){
            console.log(commit)
            try {
                await axios.post(this.state.API_URL + 'login', user).then((response)=>{
                    this.state.ERRORS = ''
                    this.state.USER_TOKEN = response.data.data.user_token
                    localStorage.setItem('USER_TOKEN', this.state.USER_TOKEN)
                    axios.defaults.headers = {Authorization: 'Bearer' + this.state.USER_TOKEN}
                    router.push('/')
                })
            }catch (error){
                this.state.ERRORS = 'Пользователь не найден'
            }
        },
        async registration({commit}, user){
            console.log(commit)
            try {
                await axios.post(this.state.API_URL + 'signup', user).then((response)=>{
                    this.state.ERRORS = ''
                    this.state.USER_TOKEN = response.data.data.user_token
                    localStorage.setItem('USER_TOKEN', this.state.USER_TOKEN)
                    axios.defaults.headers = {Authorization: 'Bearer' + this.state.USER_TOKEN}
                    router.push('/')
                })
            }catch (error){
                this.state.ERRORS = 'Email уже существует'
            }
        },
        async logout(){
            this.state.USER_TOKEN = ''
            await axios.get(this.state.API_URL + 'logout')
        },
        async addToCart({commit}, id){
            console.log(commit)
            await axios.post(this.state.API_URL + `cart/${id}`, id,{
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': 'Bearer ' + this.state.USER_TOKEN
                }
            }).then((response)=> {
                    commit('ADD_PRODUCT', response.data.data)
                })
                // }).then((response) => {
                //     commit('ADD_PRODUCT', response.data.data.message)
                //     console.log(this.state.PRODUCT_CART)
                //     router.push('/')
                // })
        },
        async removeFromCart({commit}, id){
            console.log(commit)
            await axios.delete(this.state.API_URL + 'cart/' + id, {headers:{Authorization: 'Bearer' + this.state.USER_TOKEN}})
        },
        async listProducts({commit}){
            console.log(commit)
            try {
                await axios.get(this.state.API_URL + 'cart',{headers:{Authorization: 'Bearer' + this.state.USER_TOKEN}})
                    .then((response)=>{
                        commit('EDIT_PRODUCT', response.data.data)
                    })
            }catch (error){
                console.log(error)
            }
        },
        async ordersList({commit}){
            console.log(commit)
            await axios.get(this.state.API_URL + 'order' + {headers:{Authorization: 'Bearer' + this.state.USER_TOKEN}})
                .then((response)=>{
                    commit('PRODUCTS_ORDERS', response.data.data)
                })
        },
        async addOrder({commit}){
            console.log(commit)
            await axios.post(this.state.API_URL + 'order', {}, {headers:{Authorization: 'Bearer' + this.state.USER_TOKEN}})
        }

    }
})

// export default createStore({
//   state: {
//     token: localStorage.getItem('MyAppToken') || '',
//   },
//    getters: {
//     isAuthenticated: (state) => !!state.token,
//   },
//   mutations: {
//     AUTH_SUCCESS: (state, token) => {
//       state.token = token;
//     },
//     AUTH_ERROR: (state) => {
//       state.token = '';
//     },
//   },
//   actions: {
//     AUTH_REQUEST: ({ commit }, user) => {
//       return new Promise((resolve, reject) => {
//         loginRequest(user)
//             .then((token) => {
//               commit('AUTH_SUCCESS', token);
//               resolve();
//             })
//             .catch(() => {
//               commit('AUTH_ERROR');
//               localStorage.removeItem('MyAppToken');
//               reject();
//             });
//       });
//     },
//   },
//   modules: {
//   }
// })
