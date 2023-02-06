<template>
  <form class="login" @submit.prevent="login">
    <h1>Sign in</h1>
    <label>User name</label>
    <input type="text" required v-model="username" />
    <label>Password</label>
    <input type="password" required v-model="password">
    <hr />
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods:{
    login() {
        const userData = {
          username: this.username,
          password: this.password,
        };

        // this.$store
        //     .dispatch(AUTH_REQUEST, userData)
        //     .then(() => this.$router.push("/"));
    },
  },
};
</script>

<style scoped>
  .login {
    display: flex;
    flex-direction: column;
    width: 420px;
    padding: 30px;
    margin: 10px;
    background: linear-gradient(47deg, #faebd757, #faebd7, rgb(139 55 55 / 84%));
    border-radius: 15px;
    box-shadow: 0px 7px 13px 4px rgb(139 55 55 / 75%);
  }
  .login input{
    border: none;
    border-bottom: solid brown;
    background: none;
    margin-bottom: 10px;
  }
  .login button {
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
  h2 {
      margin: 10px 0;
    }
</style>