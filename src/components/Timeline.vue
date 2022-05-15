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
  <ul>
    <EventItem v-for="event in events"
               :key="event.id"
               :eventName="event.name"
               :event-location="event.location"
               :event-start-hour="event.eventStart_date"
               :event-description="event.description"
               :event-image="event.image"
               :event-id="event.id"
    ></EventItem>
  </ul>
  <footer>
    <div class="flex-container-icons">
      <div><a href="#" class="fa fa-facebook" style="color: white"></a></div>
      <div><a href="#" class="fa fa-twitter" style="color: white"></a></div>
      <div><a href="#" class="fa fa-google" style="color: white"></a></div>
    </div>
  </footer>
</template>

<script>

import EventItem from "@/components/EventItem";

export default {
  name: "TimelineComponent",
  components: {
    EventItem
  },
  data() {
    return {
      events: [],
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
  },
  methods: {
    getProfileImage() {
      return this.$storage.getStorageSync("user").image
    },
    getEvents() {
      fetch('http://puigmal.salle.url.edu/api/v2/events', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
          .then(res => res.json())
          .then((data) => {
            for (let i = 0; i < data.length; i++) {
              //check if the event has a picture, if not, use the default one
              if (data[i].image.toLowerCase().indexOf("http") === -1) {
                data[i].image = "https://www.onlineontime.es/wp-content/uploads/2018/04/cuestionario-evento.png";
              }
              this.events.push(data[i]);
            }
            console.log(this.events);
          })
          .catch(err => console.error(err))
    }
  },
  created() {
    this.getEvents();
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
  display: flex;
  flex-direction: column;
  justify-content: center;

}

main h1, h2 {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.flex-search-container {
  display: flex;
  justify-content: space-around;
  gap: 1%;
  margin-left: 5%;
  align-items: baseline;
}


main section {
  display: flex;
  flex-direction: column;
}

.flex-search-container label {
  flex: 25;
}

.flex-search-container button {
  flex: 1;
  margin-right: 2%;
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