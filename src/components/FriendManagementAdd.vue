<template>
  <div class="flex-friend-data">
    <img class="friend-photo" alt="Friend photo" :src=this.friend.friendPhoto>
    <h4>{{ this.friend.friendName }}</h4>
    <p>{{ this.friend.friendEmail }}</p>
    <button type="submit">Add</button>
  </div>
</template>

<script>
export default {
  name: "FriendManagementAdd",
  props:{
    friend:{
      friendName:'',
      friendEmail:'',
      friendPhoto:''
    }
  }
}
</script>

<style scoped>
.flex-friend-data{
  display: flex;
  width: 92%;
  border-style:groove ;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 5%;
  flex: 25;
}
.friend-photo{
  width: 80px;
  height: 80px;
  margin-top: 10px;
}
</style>