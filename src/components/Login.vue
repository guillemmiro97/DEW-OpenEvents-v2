<template>
  <main>
    <section>
      <div class="flex-container">
        <div class="flex-items">
          <img class="party-photo" alt="Profile picture" src="../assets/party_image.jpeg">
        </div>
        <div class="flex-items">
          <h1>OpenEvents</h1>
        </div>
      </div>
    </section>
    <section>

      <form class="flex-form-container">
        <input v-model="email" type="text" placeholder="Email" name="email" required>
        <input v-model="password" type="password" placeholder="Password" name="password" required>
        <button v-on:click.prevent="login(email,password)" type="submit">Login</button>
      </form>

      <div class="flex-form-register">
        <div class="flex-items-register"><a>Not registered?</a></div>
        <div class="flex-items-register">
          <router-link to="/register">Register</router-link>
        </div>
      </div>
    </section>

  </main>
  <FooterComponent/>
</template>

<script>
import FooterComponent from "@/components/Footer";
export default {
  name: "LoginComponent",
  components: {FooterComponent},
  data() {
    return {
      email: 'test@test.com',
      password: '12345678',
    }
  },
  created() {
    if (this.$storage.getStorageSync('token') != null) {
      this.$router.push('main')
    }
  },
  methods: {
    login(email, password) {

      console.log(email);
      console.log(password);
      const data = {
        email: email,
        password: password
      };

      fetch('http://puigmal.salle.url.edu/api/v2/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
          .then(res => res.json())
          .then((data) => {
            console.log(data);

            //session storage
            this.$storage.setStorageSync("token", data.accessToken)
            this.getUserData(email)
          })
          .catch(err => console.error(err))
    },
    getUserData(email) {
      fetch('http://puigmal.salle.url.edu/api/v2/users/search?' + "s=" + email, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$storage.getStorageSync('token')
        }
      })
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            this.$storage.setStorageSync("user", data[0])
            this.$router.push('main');
          })
    }
  }
}

</script>

<style scoped>

body {
  background-color: #EFEFEF;
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  margin-top: 5%;
}

.flex-items:nth-child(1) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  margin-right: -10%;
}

.flex-items:nth-child(2) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.party-photo {
  width: 60%;
}

h1 {
  font-family: "Brush Script MT", serif;
  font-size: 100px;
}

hr {
  width: 60%;
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
  width: 30%;
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
  border: none;
  cursor: pointer;
  border-radius: 8%;
}

button:hover {
  opacity: 0.8;
}

.flex-form-register {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  margin-top: 1%;
}

.flex-items-register:nth-child(2) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  margin-left: 1%;
}

.flex-items h1 {
  font-size: 5.5em;
}

a {
  font-family: Verdana, serif;
}

a:visited {
  text-decoration: none;
  color: navy;
}
</style>