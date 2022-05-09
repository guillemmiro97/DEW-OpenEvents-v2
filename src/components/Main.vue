<template>
  <header class="container"><!--Header con el título de la web y el menu de usuario-->
    <div class="header-title">
      <router-link to="/main">OpenEvents</router-link>
    </div>
    <div class="dropdown">
      <img class="profile-icon" alt="Profile picture" src="../assets/profile_picture.webp">
      <div class="dropdown-content">
        <router-link to="/profile">Profile</router-link>
        <router-link to="/stats">Account stats</router-link>
        <router-link to="/accountConfig">Account configuration</router-link>
        <a href="#">Logout</a>
      </div>
    </div>
  </header>

  <main>
    <div class="flex-container-boxes">
      <a v-on:click="goToRoute('friendzone')">Friend zone</a>
      <a v-on:click="goToRoute('timeline')">Events</a>
    </div>
  </main>
  <footer>
    <div class="flex-container-icons">
      <div><a href="#" class="fa fa-facebook" style="color: white"></a></div>
      <div><a href="#" class="fa fa-twitter" style="color: white"></a></div>
      <div><a href="#" class="fa fa-google" style="color: white"></a></div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "MainComponent"
  ,


  data() {
    return {
      message: "Hello Vue!"
    }
  },
  methods: {
    goToRoute(route) {
      this.$router.push('/'+route)
    }
  }

}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 50vw;
  height: 110px;
}

.header-title {
  display: flex;
  flex-direction: column;
  font-family: "Brush Script MT", serif;
  font-size: 4em;
  text-decoration: none;
  justify-content: center;
  width: 5%;
}

.header-title a{
  text-decoration: none;
  color: black;
}

.dropdown{
  background-color: whitesmoke;
  border-radius: 50%;
  font-family: Verdana, serif;
}

.dropdown-content{
  display:none;
}

.dropdown:hover .dropdown-content{
  background-color: ghostwhite;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2px;
  position: absolute;
  overflow: hidden;
}

.dropdown-content a{
  padding: 10px;
  text-decoration: none;
}

.dropdown-content a:hover{
  background-color: #8080801c;
}

.profile-icon {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

body {
  background-color: #EFEFEF;
}

button:hover {
  opacity: 0.8;
}

.flex-container-boxes{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  margin-top: 10%;
  height: 30vh;
}

@media screen and (max-width: 600px) {
  .flex-container-boxes{
    flex-direction: column;
    justify-content: space-around;
    padding: 10%;
    gap: 10px
  }
}

.flex-container-boxes a{
  border: groove #f2e6d9;
  border-radius: 10px;
  font-style: italic;
  padding: 2em;
  text-decoration: none;
  font-family: "Calibri", serif;
  font-size: xx-large;
  background: #f9f2ec;
  color:black;
}

.flex-container-boxes a:hover{
  opacity: 0.5;
}

footer{
  position: fixed;
  padding: 10px 10px 0 10px;
  bottom: 0;
  width: 100%;
}

.fa {
  padding: 10px;
  font-size: 30px;
  text-decoration: none;
  border-radius: 50%;
  margin-left: 1px;
}

.fa-facebook {
  background: #3B5998;
}

.fa-twitter {
  background: #55ACEE;
}

.fa-google {
  background: #dd4b39;
}
.flex-container-icons {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: right;
  align-items: flex-end;
  align-content: stretch;
  margin-top: 5%;
  margin-right: 2%;
}
</style>