<template>
  <main>
    <h1 id="title-register">OpenEvents</h1>
    <form class="flex-form-container">

      <input v-model="name" type="text" placeholder="Name" name="name" required>
      <input v-model="last_name" type="text" placeholder="Last Name" name="lastname" required>
      <input v-model="email" type="text" placeholder="Email" name="email" required>
      <input v-model="password" type="password" placeholder="Password" name="password" required>
      <input v-model="confirm_paswd" type="password" placeholder="Confirm Password" name="confirmpassword" required>
      <input v-model="image" type="text" placeholder="Add profile picture" name="profilepic" required>
      <button v-on:click.prevent="register(name,last_name,email,password,confirm_paswd,image)" type="submit">Submit
      </button>
    </form>
  </main>
  <FooterComponent/>
</template>

<script>
import FooterComponent from "@/components/Footer";

export default {
  name: "RegisterComponent",
  components: {FooterComponent},
  data() {
    return {
      name: "test2",
      last_name: "test2",
      email: "test2@test2.com",
      password: "12345678",
      confirm_paswd: "12345678",
      image: "https://i.imgur.com/ghy8Xx1.png"
    }

  },

  methods: {
    register(name, last_name, email, password, confirm_paswd, image) {

      if (password === confirm_paswd && password.length >= 8) {
        const data = {
          name: name,
          last_name: last_name,
          email: email,
          password: password,
          image: image
        }

        fetch('http://puigmal.salle.url.edu/api/v2/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((data) => {
              console.log(data);
              alert("User " + name + " created");
              this.$router.push('/');
            })
            .catch(err => console.error(err))
      } else {
        if (password.length < 8) {
          alert("Password must be at least 8 characters");
        } else {
          alert("Passwords do not match");
        }
      }
    }
  }
}


</script>

<style scoped>
body {
  background-color: #EFEFEF;
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

#title-register {
  font-size: 5.5em;
  text-align: center;
}


a {
  font-family: Verdana, serif;
}

a:visited {
  text-decoration: none;
  color: navy;
}
</style>