<template>
  <div class="orders">
    <button @click="Back">Назад</button>
  </div>
  <div>
    <add-orders-temp v-for="product in $store.state.PRODUCT_ORDER" v-bind:key="product" :product-data="product"></add-orders-temp>
  </div>
</template>

<script>
import AddOrdersTemp from "@/views/AddOrdersTemp.vue";

export default {
  name: "OrdersTemp",
  components: {AddOrdersTemp},

  mounted() {
    this.$store.dispatch('ordersList')
  },
  methods:{
    Back(){
      this.$router.push('cart')
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
</style>