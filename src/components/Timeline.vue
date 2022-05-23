<template>
  <header class="container"><!--Header con el título de la web y el menu de usuario-->
    <div class="header-title">
      <router-link to="/main">OpenEvents</router-link>
    </div>
    <ProfileMenu/>
  </header>

  <!-- navbar -->
  <sidebar-menu :menu="menu"/>
  <div class="flex-search-container">
    <div class="col-md-12">
      <div class="search-bar">
        <input  v-model="searchdata" type="text" placeholder="Name of event..." name="search-data">
        <button v-on:click.prevent="searchEvents(searchdata)" class="submit"><i class="fa fa-search"></i></button>
      </div>
    </div>
  </div>
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
  <FooterComponent/>
</template>

<script>
import EventItem from "@/components/EventItem";
import FooterComponent from "@/components/Footer";
import ProfileMenu from "@/components/ProfileMenu";

export default {
  name: "TimelineComponent",
  components: {
    ProfileMenu,
    FooterComponent,
    EventItem
  },
  data() {
    return {
      events: [],
      searchdata: "",
      menu: [
        {
          header: 'Main Navigation',
          hiddenOnCollapse: true,
        },
        {
          href: '/createEvent',
          title: 'Create Event',
          icon: 'fa fa-solid fa-bomb'
        },
        {
          href: '/timeline',
          title: 'Timeline',
          icon: 'fa fa-regular fa-calendar'
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
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$storage.getStorageSync('token')
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
    },
    searchEvents() {
      fetch('http://puigmal.salle.url.edu/api/v2/events/search?keyword=' + this.searchdata, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$storage.getStorageSync('token')
        },
      })
          .then(res => res.json())
          .then((data) => {
            this.events = [];
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
  margin: 10px 0;
  border: none;
  cursor: pointer;
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
  flex-direction: row;
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
  margin-left: 2%;
}

.search-bar {
  width: 100%;
  display: flex;
  padding: 12px 20px;
  margin: 8px 0;
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
</style>