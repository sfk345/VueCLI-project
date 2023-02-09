<template>
  <form class="registration" @submit.prevent="validation">
    <h1>Регистрация</h1>
    <label>ФИО</label>
    <input type="text" v-model="fullName">
    <label>Email</label>
    <input type="email" v-model="email">
    <label>Пароль</label>
    <input type="password" v-model="password">
    <button type="submit" @click="registration">Зарегистрироваться</button>
  </form>
  <button id="back" @click="Back">Назад</button>
  <p v-for="er in errors" v-bind:key="er">{{er}}</p>
  <p v-if="this.$store.state.ERRORS.length !== 0">{{this.$store.state.ERRORS}}</p>
</template>

<script>
export default {
  name: "RegistrationTemp",
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    registration() {
      let userData = {
        fio: JSON.parse(JSON.stringify(this.fullName)),
        email: JSON.parse(JSON.stringify(this.email)),
        password: JSON.parse(JSON.stringify(this.password))
      }
      this.$store.dispatch('registration', userData)
    },
    Back(){
      this.$router.push('/')
    },
    validation(){
      this.errors = []

      if(!this.fullName && !this.email && !this.password) {
        this.errors.push('*все поля обязательны для заполнения')
      }else{
        if(this.fullName.split(' ').length !== 3){
          this.errors.push('ФИО должно содержать фамилию, имя, отчество')
        }
        if(this.password.length < 6){
          this.errors.push('*пароль должен содержать не менее 8 символов')
        }
        // if(!this.password.indexOf(' ')===0){
        //   this.errors.push('*пароль не должен содержать пробелы')
        // // }
        // if(this.email.indexOf('@')===0){
        //   this.errors.push('*электронная почта должна содержать символ "@"')
        // // }
        // if(!this.email.indexOf(' ')===-1){
        //   this.errors.push('*электронная почта не должна содержать пробелы')
        // }
      }


      if(this.errors.length===0){
        this.register()
      }

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
.registration button:hover{
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
#back{
  border: none;
  background: rgb(139 55 55 / 82%);
  padding: 7px;
  border-radius: 13px;
  color: antiquewhite;
  font-size: 15px;
  position: absolute;
  right: 325px;
  top: 170px;
}
</style>