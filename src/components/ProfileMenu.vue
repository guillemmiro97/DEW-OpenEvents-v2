<template>
  <div class="dropdown">
    <img class="profile-icon" alt="Profile picture" :src="getProfileImage()">
    <div class="dropdown-content">
      <router-link to="/profile">Profile</router-link>
      <router-link to="/stats">Account stats</router-link>
      <router-link to="/accountConfig">Account configuration</router-link>
      <a v-on:click.prevent="removeStorageSync()">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileMenu",
  methods: {
    removeStorageSync() {
      this.$storage.clearStorageSync();
      this.$router.push('/');
    },
    getProfileImage() {
      return this.$storage.getStorageSync("user").image
    }
  }
}
</script>

<style scoped>
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
</style>