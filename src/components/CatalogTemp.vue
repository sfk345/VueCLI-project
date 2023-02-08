<template>
  <div class="catalog">
    <div class="one-product">
      <img src="#" alt="img">
      <h3>Lorem Ipsum</h3>
      <p>Lorem Ipsum dolor sit amet</p>
      <input  v-if="this.$store.state.USER_TOKEN" type="submit" value="Добавить">
    </div>
    <div class="one-product">
      <img src="#" alt="img">
      <h3>Lorem Ipsum</h3>
      <p>Lorem Ipsum dolor sit amet</p>
      <input  v-if="this.$store.state.USER_TOKEN" type="submit" value="Добавить">
    </div>
    <div class="one-product">
      <img src="#" alt="img">
      <h3>Lorem Ipsum</h3>
      <p>Lorem Ipsum dolor sit amet</p>
      <input  v-if="this.$store.state.USER_TOKEN" type="submit" value="Добавить">
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
input[type=submit]{
  border: none;
  background: rgb(139 55 55 / 82%);
  padding: 7px;
  border-radius: 13px;
  color: antiquewhite;
  font-size: 15px;
}


</style>