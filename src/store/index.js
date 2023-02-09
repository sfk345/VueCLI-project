import { createStore } from 'vuex';
import axios from "axios";
import router from "@/router";


export const store = createStore({
    state:{
        API_URL: 'https://jurapro.bhuser.ru/api-shop/',
        USER_TOKEN: localStorage.getItem('USER_TOKEN'),
        ERRORS: [],
        IS_AUTHENTICATED: false,
        // product: {
        //     id: "",
        //     product_id: "",
        //     name_product: "",
        //     description: "",
        //     price: ""
        // },
        // inCart: []
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
                    this.state.USER_TOKEN = response.data.data.use_token
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
        // async addToCart(state, item){
        //     this.state.inCart.push(item)
        //     await axios.post(this.state.API_URL + 'cart' + this.state.product_id)
        // },
        // async removeFromCart(state, item){
        //     this.state.inCart.splice(item, 1)
        //     await axios.delete(this.state.API_URL + 'cart' + this.state.id)
        // }

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
