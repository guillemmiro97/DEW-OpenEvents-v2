<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <LoginComponent />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
import LoginComponent from './components/Login.vue';
import RegisterComponent from "@/components/Register";

export default {
  name: 'App',
  components: {
    LoginComponent,
    RegisterComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
