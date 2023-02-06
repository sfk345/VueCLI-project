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
  .registration{
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
    margin: 0 auto;
  }
  .registration input, button{
    border: 1px solid black;
    border-radius: 5px;
  }
  .hr{
    margin: 10px 0;
  }
</style>