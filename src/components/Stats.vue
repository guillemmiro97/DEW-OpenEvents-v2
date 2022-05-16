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

  <h2 class="flex-container-update">Account Stats</h2>

  <main class="flex-form-container">
    <table>
      <thead>
      <tr>
        <th>Average punctuation</th>
        <th>Number of comments</th>
        <th>% of users with less comments</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{ this.stats.avg_points }} points</td>
        <td>{{ this.stats.num_comments }}</td>
        <td>{{ this.stats.percentage }}%</td>
      </tr>
      </tbody>

    </table>
  </main>


  <FooterComponent/>
</template>

<script>
import FooterComponent from "@/components/Footer";

export default {
  name: "StatsComponent",
  components: {FooterComponent},
  data() {
    return {
      stats: {
        avg_points: "",
        num_comments: "",
        percentage: "",
      }
    }
  },
  methods: {
    getProfileImage() {
      return this.$storage.getStorageSync("user").image
    },
    getStats() {
      let url = "http://puigmal.salle.url.edu/api/v2/users/" + this.$storage.getStorageSync("user").id + "/statistics"
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$storage.getStorageSync('token')
        }
      })
          .then(res => res.json())
          .then((data) => {
            console.log(data);

            if (data.avg_points != null) {
              this.stats.avg_points = data.avg_points;
            } else {
              this.stats.avg_points = "No";
            }
            if (data.num_comments != null) {
              this.stats.num_comments = data.num_comments;
            } else {
              this.stats.num_comments = "0";
            }
            if (data.percentage != null) {
              this.stats.percentage = data.percentage;
            } else {
              this.stats.percentage = "0";
            }
          })
    }
  },
  created() {
    this.getStats()
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
</style>