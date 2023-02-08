<template>
  <div class="catalog">
    <div class="one-product">
      <img src="#" alt="img">
      <h3>Lorem Ipsum</h3>
      <p>Lorem Ipsum dolor sit amet</p>
    </div>
    <div class="one-product">
      <img src="#" alt="img">
      <h3>Lorem Ipsum</h3>
      <p>Lorem Ipsum dolor sit amet</p>
    </div>
    <div class="one-product">
      <img src="#" alt="img">
      <h3>Lorem Ipsum</h3>
      <p>Lorem Ipsum dolor sit amet</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catalog-Temp"
}
</script>

<style scoped>
.catalog{
  display: flex;
  margin: 25px;
  align-items: center;
}
.one-product{
  margin-left: 40px;
  background-color: antiquewhite;
  padding: 30px;
  border-radius: 10px;
  color: brown;
}


</style>