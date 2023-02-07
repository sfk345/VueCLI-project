import { createStore } from 'vuex';
import axios from "axios";


export const store = createStore({
    state:{
        API_URL: '',
        USER_TOKEN: localStorage.getItem('USER_TOKEN'),
        ERRORS: [],
        IS_AUTHENTICATED: false
    },
    actions:{
        async login({commit}, user){
            console.log(commit)
            try {
                await axios.post(this.state.API_URL + 'login', user).then((response)=>{
                    this.state.USER_TOKEN = response.data.data.us_token
                    axios.defaults.headers = {Authorization: 'Bearer' + this.state.USER_TOKEN}
                })
            }catch (error){
                this.state.ERRORS.push('Пользователь не существует')
            }
        },
        async registration({commit}, user){
            try {
                await axios.post(this.state.API_URL + 'signup', user).then((response)=>{
                    this.state.USER_TOKEN = response.data.data.us_token
                    axios.defaults.headers = {Authorization: 'Bearer' + this.state.USER_TOKEN}
                })
            }catch (error){
                this.state.ERRORS.push('Email уже существует')
            }
        },
        async logout({commit}, user){
            this.state.
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
