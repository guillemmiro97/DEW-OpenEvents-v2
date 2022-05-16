<template>
  <footer>
    <div class="flex-container-icons">
      <div><a href="#" class="fa fa-facebook" style="color: white"></a></div>
      <div><a href="#" class="fa fa-twitter" style="color: white"></a></div>
      <div><a href="#" class="fa fa-google" style="color: white"></a></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
}
</script>

<style scoped>
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
  position: fixed;
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