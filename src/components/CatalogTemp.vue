<template>
  <div class="catalog">
    <div class="one-product">
      <h3>Lorem Ipsum</h3>
      <p>Описание:</p>
      <p>Lorem Ipsum dolor sit amet</p>
      <p>Цена: 5000</p>
      <button  v-if="this.$store.state.USER_TOKEN" type="submit">Добавить</button>
    </div>
    <div class="one-product">
      <h3>Lorem Ipsum</h3>
      <p>Описание:</p>
      <p>Lorem Ipsum dolor sit amet</p>
      <p>Цена: 5000</p>
      <button  v-if="this.$store.state.USER_TOKEN" type="submit">Добавить</button>
    </div>
    <div class="one-product">
      <h3>Lorem Ipsum</h3>
      <p>Описание:</p>
      <p>Lorem Ipsum dolor sit amet</p>
      <p>Цена: 5000</p>
      <button  v-if="this.$store.state.USER_TOKEN" type="submit">Добавить</button>
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