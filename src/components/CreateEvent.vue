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

  <!-- navbar -->
  <sidebar-menu :menu="menu"/>

  <main>
    <h1>Create Event</h1>
    <form class="flex-form-container">
      <input v-model="event.name" type="text" placeholder="Name" name="name" required>
      <input v-model="event.image" type="text" placeholder="Image of event" name="picevent" required>
      <input v-model="event.location" type="text" placeholder="Location" name="location" required>
      <textarea v-model="event.description" name="description">Description of Event</textarea>
      <input v-model="event.eventStart_date" type="text" placeholder="Starting Date" name="startdate" required>
      <input v-model="event.eventEnd_date" type="text" placeholder="Finishing Date" name="finishdate" required>
      <input v-model="event.n_participators" type="text" placeholder="Number of Participants" name="participants" required>
      <input v-model="event.type" type="text" placeholder="Type of Event" name="Type of Event" required>

      <button v-on:click.prevent="createEvent()" type="submit">Create Event</button>
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
  name: "CreateEvent",
  methods: {
    getProfileImage() {
      return this.$storage.getStorageSync("user").image
    },
    createEvent() {
      fetch('http://puigmal.salle.url.edu/api/v2/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$storage.getStorageSync('token')
        },
        body: JSON.stringify(this.event)
      })
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            alert("Event created successfully "+ data.name)
          })
          .catch(err => console.error(err))
    }
  },
  data() {
    return {
      event: {
        name: "Drawing 101: Portraits",
        image: "https://i.imgur.com/JprpLyc.jpg",
        location: "Barcelona",
        description: "Learn the basics of portrait drawing with a" +
            "professional artist with +10 years of experience.",
        eventStart_date: "2022-01-20T12:00:00.000Z",
        eventEnd_date: "2022-01-20T13:30:00.000Z",
        n_participators: "20",
        type: "Education"
      },
      menu: [
        {
          header: 'Main Navigation',
          hiddenOnCollapse: true,
        },
        {
          href: '/createEvent',
          title: 'Create Event',
          icon: 'fa fa-user'
        },
        {
          href: '/timeline',
          title: 'Timeline',
          icon: 'fa fa-chart-area'

        }
      ]
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

.flex-form-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;

}

input[type=text], input[type=password], textarea {
  width: 25%;
  padding: 12px 200px 12px 40px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

textarea {
  height: 8em;
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

.side-nav a {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-family: Calibri, serif;
  font-size: x-large;
  color: ghostwhite;
  transition: 0.3s;
  padding: 10px;
}

.side-nav a:hover {
  color: lightgoldenrodyellow;
}

.side-nav .btn-close {
  position: absolute;
  top: 0;
  right: 22px;
  font-size: 36px;
}

main {
  transition: 0.5s;
  font-family: Calibri, serif;
}

main h1 {
  display: flex;
  justify-content: center;
  flex-direction: row;
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