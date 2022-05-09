<template>
  <header class="container"><!--Header con el título de la web y el menu de usuario-->
    <div class="header-title">
      <router-link to="/main">OpenEvents</router-link>
    </div>
    <div class="dropdown">
      <img class="profile-icon" alt="Profile picture" src="../assets/profile_picture.webp">
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
  <!-- <main>
     <h1>Timeline</h1>
     <div class="flex-timeline-container">
       <form class="flex-search-container">
         <label>
           <input type="text" placeholder="Name of Event" name="name" required>
         </label>
         <button type="submit">Search</button>
       </form>
       <section class="flex-events-timeline-container">
         <a href="detailed_event.html" class="flex-event-detail">
           <div class="flex-event-data1">
             <h3>Name of event</h3>
             <p>Location</p>
             <p>Starting Hour</p>
           </div>
           <div class="flex-event-data2">
             <p>Description of event</p>
           </div>
         </a>
         <a href="detailed_event.html" class="flex-event-detail">
           <div class="flex-event-data1">
             <h3>Name of event</h3>
             <p>Location</p>
             <p>Starting Hour</p>
           </div>
           <div class="flex-event-data2">
             <p>Description of event</p>
           </div>
         </a>
         <a href="detailed_event.html" class="flex-event-detail">
           <div class="flex-event-data1">
             <h3>Name of event</h3>
             <p>Location</p>
             <p>Starting Hour</p>
           </div>
           <div class="flex-event-data2">
             <p>Description of event</p>
           </div>
         </a>
       </section>
     </div>
   </main>

   <footer>
     <div class="flex-container-icons">
       <div><a href="#" class="fa fa-facebook" style="color: white"></a></div>
       <div><a href="#" class="fa fa-twitter" style="color: white"></a></div>
       <div><a href="#" class="fa fa-google" style="color: white"></a></div>
     </div>
   </footer>-->
</template>

<script>
export default {
  name: "TimelineComponent",
  data() {
    return {
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


.side-nav {
  height: 82%;
  width: 0;
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  background-color: #111;
  opacity: 0.6;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s
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

.flex-events-timeline-container {
  display: flex;
  flex-direction: column;
  gap: 20px;

}

.flex-event-detail {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: #111111;
  width: 80%;
  border-style: groove;
  justify-content: space-evenly;

  align-items: center;
  margin-left: 5%;
}

.flex-event-data1 {
  margin-left: 5%;
  flex: 3;
}

.flex-event-data2 {
  border: groove;
  flex: 1;
  margin-right: 5%;
  height: 100px;
  text-align: justify;
  padding: 5px;
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