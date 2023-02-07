<template>
  <h1>Just buy</h1>
  <div class="list">
    <router-link to="catalog" @click="activeButton(); catalogActiveButton = true" :class="{active_button : catalogActiveButton}"><p>Каталог</p></router-link>
    <router-link to="cart" @click="activeButton(); cartActiveButton = true" :class="{active_button : cartActiveButton}"><p>Корзина</p></router-link>
    <router-link to="orders" @click="activeButton(); ordersActiveButton = true" :class="{active_button : ordersActiveButton}"><p>Оформленные заказы</p></router-link>
    <div class="dop-list">
      <router-link v-if="!this.$store.state.token" to="login" @click="activeButton(); loginActiveButton = true" :class="{active_button : loginActiveButton}"><p>Логин</p></router-link>
      <router-link to="registration" @click="activeButton(); registerActiveButton = true" :class="{active_button : registerActiveButton}"><p>Регистрация</p></router-link>
      <router-link v-if="this.$store.state.token" to="logout" @click="Exit">Выход</router-link>
    </div>
  </div>
</template>
<script>

export default {
  name: "HomeView",
  data(){
    return{
      catalogActiveButton: true,
      cartActiveButton: false,
      loginActiveButton: false,
      registerActiveButton: false,
      ordersActiveButton: false,
      get isAuthenticated(){
        return localStorage.getItem('is_authenticated')
      }
    }
  },
  methods:{
    activeButton(){
      this.catalogActiveButton = false
      this.cartActiveButton = false
      this.loginActiveButton = false
      this.registerActiveButton = false
      this.ordersActiveButton = false
    },
    Exit(){
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style scoped>
h1{
  color: brown;
}
a, button{
  color: rgb(139 55 55 / 82%);
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  background: none;
  border: none;
}
.list {
  display: flex;
  width: 550px;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}
.active_button p{
  border-radius: 5px;
  background-color: antiquewhite;
  border: none;
  box-shadow: 0px 1px 10px #ae9460;
  padding: 5px;
  color: brown;
}
.dop-list{
  display: flex;
  align-items: center;
}
</style>