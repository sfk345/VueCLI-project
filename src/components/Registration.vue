<template>
  <form class="registration" @submit.prevent="registration">
    <h1>Sign up</h1>
    <label>Full name</label>
    <input type="text" required v-model="fullName" />
    <label>Email</label>
    <input type="email" required v-model="email" />
    <label>Password</label>
    <input type="password" required v-model="password">
    <input type="submit" value="Зарегистрироваться">
  </form>
</template>

<script>
export default {
  name: "Registration",
  data(){
    return{
      fullName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    registration(){
      let userData = {
        fyo: JSON.parse(JSON.stringify(this.fullName)),
        email: JSON.parse(JSON.stringify(this.email)),
        password: JSON.parse(JSON.stringify(this.password))
      }
      this.$store.dispatch('')
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