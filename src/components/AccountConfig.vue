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
      <input v-model="username" type="text" placeholder="Name" name="username" required>
      <input v-model="lastname" type="text" placeholder="Last Name" name="lastname" required>
      <input v-model="email" type="text" placeholder="Email" name="email" required>
      <input v-model="image" type="text" placeholder="Image" name="image" required>
    </form>

    <h2 class="flex-container-update">Change password</h2>

    <form class="flex-form-container">
      <input v-model="password" type="password" placeholder="Password" name="password" required>
      <input v-model="confirm_password" type="password" placeholder="Confirm Password" name="confirmpassword" required>
      <button v-on:click.prevent="updateProfile()" type="submit">Submit</button>
    </form>
  </main>

  <FooterComponent/>
</template>

<script>
import FooterComponent from "@/components/Footer";

export default {
  name: "AccountConfigComponent",
  components: {FooterComponent},
  data() {
    return {
      username: "",
      lastname: "",
      email: "",
      password: "",
      confirm_password: "",
      image: ""
    }
  },
  methods: {
    getProfileImage() {
      return this.$storage.getStorageSync("user").image
    },
    populateData() {
      this.username = this.$storage.getStorageSync("user").name
      this.lastname = this.$storage.getStorageSync("user").last_name
      this.email = this.$storage.getStorageSync("user").email
      this.image = this.$storage.getStorageSync("user").image
    },
    updateProfile() {
      let data = null;
      if (this.password === null || this.password === undefined || this.password === "") {
        data = {
          name: this.username,
          last_name: this.lastname,
          email: this.email,
          image: this.image
        };
        this.executeApiCall(data);
      } else {
        if (this.password === this.confirm_password && this.password.length > 8) {
          data = {
            name: this.username,
            last_name: this.lastname,
            email: this.email,
            password: this.password,
            image: this.image
          };
          this.executeApiCall(data);
        } else {
          alert("Password does not match or is too short")
        }
      }
    },
    executeApiCall(data) {
      fetch('http://puigmal.salle.url.edu/api/v2/users/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$storage.getStorageSync('token')
        },
        body: JSON.stringify(data)
      })
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            this.setUserStorage()
            alert("Profile updated for " + data.name);
          })
          .catch(err => console.error(err))
    },
    setUserStorage() {
      this.$storage.setStorageSync("user", {
        name: this.username,
        last_name: this.lastname,
        email: this.email,
        image: this.image
      });
    }
  }
  ,
  created() {
    this.populateData()
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

.dropdown {
  background-color: whitesmoke;
  border-radius: 50%;
  font-family: Verdana, serif;
}

.dropdown-content {
  display: none;
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

.profile-icon {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

body {
  background-color: #EFEFEF;
}

.flex-container-update {
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
</style>