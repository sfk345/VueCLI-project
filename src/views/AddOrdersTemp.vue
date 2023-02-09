<template>
  <div class="add-orders">
    <h3>Номер заказа: {{productData.id}}</h3>
    <p>Товары: {{productData.products}}</p>
    <h4>Сумма: {{productData.order_price}}</h4>
  </div>
</template>

<script>
export default {
  name: "AddOrdersTemp",
  props: ['productData']
}
</script>

<style scoped>

</style>