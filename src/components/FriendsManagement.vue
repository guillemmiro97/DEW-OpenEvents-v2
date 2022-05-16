<template>
  <header class="container"><!--Header con el título de la web y el menu de usuario-->
    <div class="header-title">
      <router-link to="/main">OpenEvents</router-link>
    </div>
    <ProfileMenu/>
  </header>

  <!-- navbar -->
  <sidebar-menu :menu="menu"/>

  <main>

    <h1>Friends management</h1>

    <div class="search-bar">
      <input v-model="searchdata" type="text" placeholder="Name of event..." name="search-data">
      <button v-on:click.prevent="searchFriends(searchdata)" class="submit"><i class="fa fa-search"></i></button>
    </div>
    <section>
      <FriendManagementAdd
          v-for="friend in friends"
          :key="friend.id"
          :friend-id="friend.id"
          :friend-name="friend.name"
          :friend-lastname="friend.last_name"
          :friend-email="friend.email"
          :friend-photo="friend.image"
      />
    </section>
    <section>
      <h2>Pending friend requests</h2>
      <FriendsManagementAccept
          v-for="friend in pending"
          :key="friend.id"
          :friend-id="friend.id"
          :friend-name="friend.name"
          :friend-lastname="friend.last_name"
          :friend-email="friend.email"
          :friend-photo="friend.image"
      />
    </section>
  </main>
  <FooterComponent/>
</template>

<script>

import FriendManagementAdd from "@/components/FriendManagementAdd";
import FriendsManagementAccept from "@/components/FriendsManagementAccept";
import FooterComponent from "@/components/Footer";
import ProfileMenu from "@/components/ProfileMenu";

export default {
  name: "FriendZoneComponent",
  components: {ProfileMenu, FriendManagementAdd, FriendsManagementAccept, FooterComponent},
  data() {
    return {
      friends: [],
      pending: [],
      searchdata: '',
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
      ],
      collapsed: true,

    }
  },
  methods: {
    getProfileImage() {
      return this.$storage.getStorageSync("user").image
    },
    getFriendsFromAPI() {
      fetch('http://puigmal.salle.url.edu/api/v2/users', {
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
    },
    searchFriends() {
      fetch('http://puigmal.salle.url.edu/api/v2/users/search?s=' + this.searchdata, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$storage.getStorageSync('token')

        }
      })
          .then(res => res.json())
          .then((data) => {
            this.friends = []

            data.map(friend => {
              if (friend.image.toLowerCase().indexOf("http") === -1) {
                friend.image = "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?s=612x612";
              }
              this.friends.push(friend);
            })

            console.log(this.friends);
          })
          .catch(err => console.error(err))
    },
    getPendingFriendRequests() {
      fetch('http://puigmal.salle.url.edu/api/v2/friends/requests', {
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
              this.pending.push(friend);
            })

            console.log(this.pending);
          })
          .catch(err => console.error(err))
    },
  },
  created() {
    this.getFriendsFromAPI();
    this.getPendingFriendRequests();
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

.search-bar {
  width: 100%;
  display: flex;
  padding: 12px 20px;
  margin-left: 5%;
  gap: 2%;
  flex-direction: row;
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

.flex-search-container label {
  flex: 25;
}

.flex-search-container button {
  flex: 1;
  margin-right: 2%;
}

main {
  margin-left: 15%;
  margin-right: 15%;
}

main section {
  display: flex;
  flex-direction: column;
}


main section {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>