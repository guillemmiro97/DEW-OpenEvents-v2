<template>
  <header class="container"><!--Header con el título de la web y el menu de usuario-->
    <div class="header-title">
      <router-link to="/main">OpenEvents</router-link>
    </div>
    <div class="dropdown">
      <img class="profile-icon" alt="Profile picture" :src="getProfileImage()">
      <div class="dropdown-content">
        <router-link to="/profile">Profile</router-link>
        <router-link to="/stats">Account stats</router-link>
        <router-link to="/accountConfig">Account configuration</router-link>
        <a href="#">Logout</a>
      </div>
    </div>
  </header>

  <main>
    <h2 class="flex-container-update">Update Profile</h2>

    <form class="flex-form-container">
      <input type="text" placeholder="Name" name="name" required>
      <input type="text" placeholder="Last Name" name="lastname" required>
      <input type="text" placeholder="Date of birth" name="date" required>
      <input type="text" placeholder="Email" name="email" required>
    </form>

    <h2 class="flex-container-update">Change password</h2>

    <form class="flex-form-container">
      <input type="password" placeholder="Password" name="password" required>
      <input type="password" placeholder="Confirm Password" name="confirmpassword" required>
      <button type="submit">Submit</button>
    </form>
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
  name: "AccountConfigComponent",
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
  font-size: xx-large;
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

input[type=text], input[type=password] {
  width: 25%;
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