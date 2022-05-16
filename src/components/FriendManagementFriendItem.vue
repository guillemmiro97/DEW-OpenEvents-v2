<template>
  <div class="flex-friend-container">
    <img class="friend-photo" alt="Friend photo" :src=this.friendPhoto>
    <div class="flex-friend-data">
      <h2>{{ this.friendName }} {{ this.friendLastname }}</h2>
      <div class="flex-list-container">
        <p>{{ this.friendEmail }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendManagementDelete",
  props: [
    'friendId',
    'friendName',
    'friendLastname',
    'friendEmail',
    'friendPhoto'
  ],
  methods: {}
}
</script>

<style scoped>

.flex-friend-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 3px groove #000000;
  gap: 15%;
  padding: 10px;
  margin: 1% 20%;
}

.friend-photo {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}


.flex-list-container {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

</style>