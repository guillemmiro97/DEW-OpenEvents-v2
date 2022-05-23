<template>
  <header class="container"><!--Header con el título de la web y el menu de usuario-->
    <div class="header-title">
      <router-link to="/main">OpenEvents</router-link>
    </div>
    <!---Menu de usuario-->
    <ProfileMenu/>
  </header>
  <!--Contenido de la pagina-->
  <main>
    <!---Una sola section con el contenido de usuario-->
    <section>
      <h1>Profile</h1>
      <div class="flex-container">
        <div class="flex-item">
          <img class="event-location-image" :src="getProfileImage()" alt="Profile picture">
        </div>
        <div class="flex-item">
          <h2>{{ name }}</h2>
          <h2>{{ lastName }}</h2>
          <h2>{{ email }}</h2>
        </div>
      </div>
    </section>
  </main>
  <FooterComponent/>
</template>

<script>
import FooterComponent from "@/components/Footer";
import ProfileMenu from "@/components/ProfileMenu";

export default {
  name: "ProfileComponent",
  components: {ProfileMenu, FooterComponent},
  data() {
    return {
      name: this.$storage.getStorageSync("user").name,
      lastName: this.$storage.getStorageSync("user").last_name,
      email: this.$storage.getStorageSync("user").email,
    }
  },
  methods: {
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

form {
  border: 3px solid black;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 200px 12px 40px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: lightgray;
  color: white;
  padding: 14px 20px;
  margin: 10px 0;
  border: none;
  cursor: pointer;
  width: 10%;
  border-radius: 8%;
}

button:hover {
  opacity: 0.8;
}


table {
  font-family: Calibri, serif;
  border-collapse: collapse;
  width: 80%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

main {
  transition: 0.5s;
  font-family: Calibri, serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

main h1 {
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: xx-large;
}

main h2 {
  display: flex;
  justify-content: left;
  flex-direction: row;
  font-family: Calibri, serif, sans-serif;
  font-size: large;
}

main img {
  width: 40%;
  height: 40%;
}


.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.flex-item:nth-child(1) {
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
}

.flex-item:nth-child(2) {
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  width: 50%;
}
</style>