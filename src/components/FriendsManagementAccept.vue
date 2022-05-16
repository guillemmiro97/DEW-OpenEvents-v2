<template>
  <div class="flex-friend-data">
    <img class="friend-photo" alt="Friend photo" :src=this.friendPhoto>
    <h4>{{ this.friendName }} {{ this.friendLastname }}</h4>
    <p>{{ this.friendEmail }}</p>
    <button v-on:click.prevent="acceptFriend()" type="submit" class="accept">Accept</button>
    <button v-on:click.prevent="rejectFriend()" type="submit" class="reject">Reject</button>
  </div>
</template>

<script>
export default {
  name: "FriendsManagementAccept",
  props: [
    'friendId',
    'friendName',
    'friendLastname',
    'friendEmail',
    'friendPhoto'
  ],
  methods: {
    acceptFriend() {
      fetch('http://puigmal.salle.url.edu/api/v2/friends/' + this.friendId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$storage.getStorageSync('token')
        }
      })
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            if (data.affectedRows === 1) {
              alert('Friend request accepted');
            }
          })
          .catch(err => console.error(err))
    },
    rejectFriend() {
      fetch('http://puigmal.salle.url.edu/api/v2/friends/' + this.friendId, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$storage.getStorageSync('token')
        }
      })
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            if (data.affectedRows === 1) {
              alert('Friend request from ' + this.friendName + ' ' + this.friendLastname + ' has been deleted.');
            }
          })
          .catch(err => console.error(err))
    }
  }

}
</script>

<style scoped>
.flex-friend-data {
  display: flex;
  width: 92%;
  border-style: groove;
  justify-content: space-between;
  align-items: center;
  margin-left: 5%;
  flex: 25;
  padding: 20px;
}

.friend-photo {
  width: 80px;
  height: 80px;
  margin-top: 10px;
}

button {
  color: white;
  padding: 14px 20px;
  margin: 10px 0;
  border: none;
  cursor: pointer;
  width: 10%;
  border-radius: 8%;
}

.accept {
  background-color: darkseagreen;
}

.reject {
  background-color: darkred;
}

button:hover {
  opacity: 0.8;
}

</style>