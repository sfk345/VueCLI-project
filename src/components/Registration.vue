<template>
  <form class="registration" @submit.prevent="registration">
    <h1>Sign up</h1>
    <label>User name</label>
    <input type="text" required v-model="username">
    <label>Password</label>
    <input type="password" required v-model="password">
    <hr>
    <button type="submit">Registration</button>
  </form>
</template>

<script>
export default {
  data(){
    return{
      username: "",
      password: "",
    };
  },
  methods: {
    registration(){
      const userData = {
        username: this.username,
        password: this.password
      };

    }
  }
}
</script>

<style scoped>
.registration {
  display: flex;
  flex-direction: column;
  width: 420px;
  padding: 30px;
  margin: 10px;
  background: linear-gradient(47deg, #faebd757, #faebd7, rgb(139 55 55 / 84%));
  border-radius: 15px;
  box-shadow: 0px 7px 13px 4px rgb(139 55 55 / 75%);
}
.registration input{
  border: none;
  border-bottom: solid brown;
  background: none;
  margin-bottom: 10px;
}
.registration button {
  border: none;
  background: rgb(139 55 55 / 82%);
  padding: 7px;
  border-radius: 13px;
  color: antiquewhite;
  font-size: 15px;
}
label{
  color: brown;
  font-weight: bold;
}
h1 {
  color: brown;
  margin: 20px 0;
}
</style>