<template>
  <div class="cart">
    <div class="buttons">
      <button @click="Back">Назад</button>
      <button @click="addOrder">Заказать</button>
    </div>
    <div v-if="productCart.length !== 0">
      <group-product-temp v-for="product in productCart" v-bind:key="product" :product-data="product"></group-product-temp>
    </div>
    <h3 v-else>В корзине пока нет товаров!</h3>
    <div>
      <h3>Общее количество товара в корзине: {{$store.state.PRODUCT_CART.length}}</h3>
      <h3>Общая стоимость товара в корзине: {{sumPrice}}</h3>
    </div>
  </div>
</template>

<script>
import GroupProductTemp from "@/views/GroupProductTemp.vue";

export default {
  name: "CartTemp",
  components: {GroupProductTemp},
  data(){
    return{
      sumPrice: 0
    }
  },
  // mounted() {
  //   axios.get(this.$store.state.API_URL + 'cart').then((response)=>{
  //     this.cart = response.data
  //   })
  // },
  computed:{
    productCart(){
      this.$store.dispatch('PRODUCT_CART')
      let map = new Map
      for (let i in this.$store.state.PRODUCT_CART){
        map.set(this.$store.state.PRODUCT_CART[i].product_id, this.$store.state.PRODUCT_CART[i])
      }
      let value = {}
      for(let key of map.keys()){
        value[key] = 0
      }
      for (let i = 0; i < this.$store.state.PRODUCT_CART.length; i++){
        value[this.$store.state.PRODUCT_CART[i].product_d] += 1
      }
      let cart = []
      for (let key of map.keys()){
        cart.push({'value': value[key], 'product': [map.get(key)]})
      }
      let summa = 0
      for (let i = 0; i < cart.length; i++){
        summa += (cart[i].product[0].price * cart[i].value)
      }
      this.summeryPrice(summa)
      return cart
    }
  },
  methods:{
    Back(){
      this.$router.push('/')
    },
    summeryPrice(summa){
      this.sumPrice = summa
    },
    addOrder(){
      this.$store.dispatch('addOrder')
      this.$store.dispatch('listProducts')
    }
  }
}
</script>

<style scoped>
button{
  border: none;
  background: rgb(139 55 55 / 82%);
  padding: 7px;
  border-radius: 13px;
  color: antiquewhite;
  font-size: 15px;
}
button:hover{
  box-shadow: inset 2px 8px 10px #600606;
}
.buttons{
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
}
</style>