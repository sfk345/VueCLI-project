<template>
  <div class="gr-product">
    <h3>{{productData.product[0].name}}</h3>
    <h3>Описание:</h3><p>{{productData.product[0].description}}</p>
    <h4>Цена: {{productData.product[0].price * productData.quantity}}</h4>
    <div class="button">
      <h3 @click="addProduct">+</h3>
      <span>{{value}}</span>
      <h3 @click="removeFromCart">-</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupProductTemp",
  props: ['productData'],
  data(){
    return{
      value: this.productData.value
    }
  },
  methods:{
    addProduct(){
      this.value += 1
      this.$store.dispatch('addToCart', this.productData.product[0].product_id)
      this.$store.display('listProducts')
    },
    removeFromCart(){
      if(this.productData.value >= 1){
        this.value -= 1
        let productID = 0
        console.log(this.$store.state.PRODUCT_CART)
        console.log(productID)

        for (let i = 0; i < this.$store.state.PRODUCT_CART.length; i++){
          if(this.$store.state.PRODUCT_CART[i].product_id === this.productData.product[0].product_id){
            productID = this.$store.state.PRODUCT_CART[i].id
            break
          }
        }
        console.log(this.$store.state.PRODUCT_CART)
        console.log(productID)

        this.$store.state.PRODUCT_CART = this.$store.state.PRODUCT_CART.filter((item)=>{
          return item.id !== productID
        })
        console.log(this.$store.state.PRODUCT_CART)
        console.log(productID)
        this.$store.dispatch('removeFromCart', productID)
      }
    },
  }
}
</script>

<style scoped>

</style>