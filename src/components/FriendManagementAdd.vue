<template>
  <div class="flex-friend-data">
    <img class="friend-photo" alt="Friend photo" :src=this.friendPhoto>
    <h4>{{ this.friendName }}</h4>
    <p>{{ this.friendEmail }}</p>
    <button type="submit">Add</button>
  </div>
</template>

<script>
export default {
  name: "FriendManagementAdd",
  props: [

    'friendName',
    'friendEmail',
    'friendPhoto'
  ]

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