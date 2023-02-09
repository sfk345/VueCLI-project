<template>
  <div class="catalog">
    <product-temp v-for="product in products.data" v-bind:key="product.id" :product-data="product"></product-temp>
<!--    <div class="one-product">-->
<!--      <h3>Lorem Ipsum</h3>-->
<!--      <p>Описание:</p>-->
<!--      <p>Lorem Ipsum dolor sit amet</p>-->
<!--      <p>Цена: 5000</p>-->
<!--      <button  v-if="this.$store.state.USER_TOKEN" type="submit">Добавить</button>-->
<!--    </div>-->
<!--    <div class="one-product">-->
<!--      <h3>Lorem Ipsum</h3>-->
<!--      <p>Описание:</p>-->
<!--      <p>Lorem Ipsum dolor sit amet</p>-->
<!--      <p>Цена: 5000</p>-->
<!--      <button  v-if="this.$store.state.USER_TOKEN" type="submit">Добавить</button>-->
<!--    </div>-->
<!--    <div class="one-product">-->
<!--      <h3>Lorem Ipsum</h3>-->
<!--      <p>Описание:</p>-->
<!--      <p>Lorem Ipsum dolor sit amet</p>-->
<!--      <p>Цена: 5000</p>-->
<!--      <button  v-if="this.$store.state.USER_TOKEN" type="submit">Добавить</button>-->
<!--    </div>-->
  </div>
</template>

<script>
import ProductTemp from "@/components/ProductTemp.vue";
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
  methods:{
      // inCart(product){
      //   state.cart.push(product)
      // }
  }
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