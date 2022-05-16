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

  <!--Contenido de la página-->
  <main>
    <sidebar-menu :menu="menu"/>
    <!---Tabla con la lista de amigos organizada con una section y articles dentro-->

    <section>
      <h2>List of friends</h2>
      <FriendManagementFriendItem
          v-for="friend in friends"
          :key="friend.id"
          :friend-id="friend.id"
          :friend-name="friend.name"
          :friend-lastname="friend.last_name"
          :friend-email="friend.email"
          :friend-photo="friend.image"
      />
      <!--<article>

      </article>
      <article>
        <img class="friend-photo" alt="Friend photo" src="../media/images/profile_picture.webp">
        <div class="flex-friend-data">
          <h2>Name Surname</h2>
          <div class="flex-list-container">
            <p>email@email.com</p>
            <a class="remove-friend-link" href="#">Remove as a friend</a>
          </div>
        </div>
      </article>
      <article>
        <img class="friend-photo" alt="Friend photo" src="../media/images/profile_picture.webp">
        <div class="flex-friend-data">
          <h2>Name Surname</h2>
          <div class="flex-list-container">
            <p>email@email.com</p>
            <a class="remove-friend-link" href="#">Remove as a friend</a>
          </div>
        </div>
      </article>-->
    </section>
  </main>


  <!-- Footer de la página-->
  <footer>
    <div class="flex-container-icons">
      <div><a href="#" class="fa fa-facebook" style="color: white"></a></div>
      <div><a href="#" class="fa fa-twitter" style="color: white"></a></div>
      <div><a href="#" class="fa fa-google" style="color: white"></a></div>
    </div>
  </footer>
</template>

<script>

import FriendManagementFriendItem from "@/components/FriendManagementFriendItem";

export default {
  name: "ListOfFriends",
  data() {
    return {
      friends: [],
      menu: [
        {
          header: 'Main Navigation',
          hiddenOnCollapse: true,
        },
        {
          href: '/listOfFriends',
          title: 'List of Friends',
          icon: ''
        },
        {
          href: '/friendsManagement',
          title: 'Friends Management',
          icon: ''

        }
      ]
    }


  },
  components: {
    FriendManagementFriendItem
  },

  methods: {
    getProfileImage() {
      return this.$storage.getStorageSync("user").image
    },
    getListOfFriends(){
      fetch('http://puigmal.salle.url.edu/api/v2/friends', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$storage.getStorageSync('token')

        }
      })
          .then(res => res.json())
          .then((data) => {
            data.map(friend => {
              if (friend.image.toLowerCase().indexOf("http") === -1) {
                friend.image = "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?s=612x612";
              }
              this.friends.push(friend);
            })

            console.log(this.friends);
          })
          .catch(err => console.error(err))
    }
  },
  created() {
    this.getListOfFriends();
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

main h2 {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

main section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;

}

main section article {
  display: flex;
  margin-left: 20%;
  border-style: groove;
  width: 60%;

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