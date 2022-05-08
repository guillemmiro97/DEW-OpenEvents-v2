<template>
  <header class="container"><!--Header con el título de la web y el menu de usuario-->
    <div class="header-title">
      <router-link to="/main">OpenEvents</router-link>
    </div>
    <!---Menu de usuario-->
    <div class="dropdown">
      <img class="profile-icon" alt="Profile picture" src="../assets/profile_picture.webp">
      <div class="dropdown-content">
        <router-link to="/profile">Profile</router-link>
        <a href="account_stats.html">Account stats</a>
        <a href="account_config.html">Account configuration</a>
        <a href="#">Logout</a>
      </div>
    </div>
  </header>
  <!--Contenido de la pagina-->
  <main>
    <!---Una sola section con el contenido de usuario-->
    <section>
      <h1>Profile</h1>
      <div class="flex-container">
        <div class="flex-item">
          <img class="event-location-image" src="../assets/profile_picture.webp" alt="Profile picture">
        </div>
        <div class="flex-item">
          <h2>Name</h2>
          <h2>Last Name</h2>
          <h2>Date of birth</h2>
          <h2>email@gmail.com</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
        </div>
      </div>
    </section>
  </main>
  <!--Footer de la pagina-->
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
  name: "ProfileComponent"
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

.flex-container-update{
  font-family: Calibri, serif;
  font-size: x-large;
  display: flex;
  justify-content: center;
}

.flex-form-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
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

main{
  transition: 0.5s;
  font-family: Calibri, serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

main h1{
  display: flex;
  justify-content: center;
  flex-direction: row;
}

main h2{
  display: flex;
  justify-content: left;
  flex-direction: row;
  font-family: Calibri, serif, sans-serif;
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

footer {
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