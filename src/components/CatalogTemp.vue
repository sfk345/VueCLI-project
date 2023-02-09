<template>
  <div class="catalog">
    <product-temp v-for="product in products.data" v-bind:key="product.id" :product-data="product"></product-temp>
  </div>
  <div>Количество товара в корзине: {{$store.state.PRODUCT_CART.length}}</div>
</template>

<script>
import ProductTemp from "@/views/ProductTemp.vue";
import axios from "axios";

export default {
  name: "Catalog-Temp",
  components: {ProductTemp},
  data(){
    return{
      products: [],
    }
  },
  mounted() {
    axios.get(this.$store.state.API_URL + 'products').then((response)=>{
      this.products = response.data
    })
  },
  // methods:{
  //     // inCart(product){
  //     //   state.cart.push(product)
  //     // }
  // }
}
</script>

<style scoped>
.catalog{
  display: flex;
  margin: 25px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}



</style>