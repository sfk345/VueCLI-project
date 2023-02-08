<template>
  <form class="login" @submit.prevent="login">
    <h1>Войти</h1>
    <label>Email</label>
    <input type="email" required v-model="email">
    <label>Пароль</label>
    <input type="password" required v-model="password">
    <button type="submit">Войти</button>
  </form>
  <p v-if="this.$store.state.ERRORS.length !== 0">{{this.$store.state.ERRORS}}</p>
</template>

<script>
export default {
  name: 'Login-Temp',
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
    };
  },
  methods:{
    login() {
        const userData = {
          email: JSON.parse(JSON.stringify(this.email)),
          password: JSON.parse(JSON.stringify(this.password))
        }
        this.$store.dispatch('login', userData)


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
  .login button:hover{
    box-shadow: inset 2px 8px 10px #600606;
  }
  label{
    color: brown;
    font-weight: bold;
  }
  h1 {
    color: brown;
    margin: 20px 0;
  }
  p{
    color: #ff1457;
    font-family: fantasy;
  }
</style>