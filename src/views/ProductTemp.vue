<template>
  <div class="one-product">
    <h3>{{productData.name}}</h3>
    <h3>Описание:</h3><p>{{productData.description}}</p>
    <h4>Цена: {{productData.price}}</h4>
    <button v-if="this.$store.state.USER_TOKEN" @click="addToCart">Добавить</button>
  </div>
</template>

<script>
export default {
  name: "ProductTemp",
  props: ['productData'],

  methods:{
    addToCart(){
      this.$store.dispatch('addToCart', this.productData.id)
      this.$store.dispatch('listProducts')
    }
  }
}
</script>

<style scoped>
.one-product{
  margin-left: 40px;
  background-color: antiquewhite;
  padding: 30px;
  border-radius: 10px;
  color: brown;
  margin-top: 25px;
  width: 20%;
  height: 350px;
}
.one-product:hover{
  box-shadow: 0 1px 20px 7px #d7c49f;
}
button{
  border: none;
  background: rgb(139 55 55 / 82%);
  padding: 7px;
  border-radius: 13px;
  color: antiquewhite;
  font-size: 15px;
  width: 100%;
}
button:hover{
  box-shadow: inset 2px 8px 10px #600606;
}
</style>