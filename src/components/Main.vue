<template>
  <header class="container"><!--Header con el título de la web y el menu de usuario-->
    <div class="header-title">
      <router-link to="/main">OpenEvents</router-link>
    </div>
    <ProfileMenu/>
  </header>

  <main>
    <div class="flex-container-boxes">
      <a v-on:click="goToRoute('friendsManagement')">Friend zone</a>
      <a v-on:click="goToRoute('timeline')">Events</a>
    </div>
  </main>
  <FooterComponent/>
</template>

<script>
import FooterComponent from "@/components/Footer";
import ProfileMenu from "@/components/ProfileMenu";

export default {
  name: "MainComponent",
  components: {ProfileMenu, FooterComponent},
  data() {
    return {
      message: "Hello Vue!"
    }
  },
  methods: {
    goToRoute(route) {
      this.$router.push(route)
    },
    getProfileImage() {
      return this.$storage.getStorageSync("user").image
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

.header-title a {
  text-decoration: none;
  color: black;
}

.dropdown:hover .dropdown-content {
  background-color: ghostwhite;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2px;
  position: absolute;
  overflow: hidden;
}

.dropdown-content a {
  padding: 10px;
  text-decoration: none;
  color: inherit;
}

.dropdown-content a:hover {
  background-color: #8080801c;
}

body {
  background-color: #EFEFEF;
}

button:hover {
  opacity: 0.8;
}

.flex-container-boxes {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  margin-top: 10%;
  height: 30vh;
}

@media screen and (max-width: 600px) {
  .flex-container-boxes {
    flex-direction: column;
    justify-content: space-around;
    padding: 10%;
    gap: 10px
  }
}

.flex-container-boxes a {
  border: groove #f2e6d9;
  border-radius: 10px;
  font-style: italic;
  padding: 2em;
  text-decoration: none;
  font-family: "Calibri", serif;
  font-size: xx-large;
  background: #f9f2ec;
  color: black;
}

.flex-container-boxes a:hover {
  opacity: 0.5;
}
</style>