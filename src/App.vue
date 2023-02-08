<template>
  <div id="app">
    <home-view></home-view>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>

import HomeView from "@/views/HomeView.vue";

export default {
  name: 'App',
  components:{
    HomeView
  },
  beforeMount() {
    localStorage.setItem('USER_TOKEN', this.$store.state.USER_TOKEN)
  }
}

// export default defineComponent({
//   components: {HomeView}
// })
</script>