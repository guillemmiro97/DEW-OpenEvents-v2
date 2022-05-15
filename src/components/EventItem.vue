<template>
  <li>
    <router-link class="flex-events-timeline-container" to="/eventDetail" v-on:click.prevent="saveId(eventId)">
      <img class="flex-events-timeline-image" :src="eventImage" alt="Event image"/>
      <div class="flex-event-data1">
        <h3>{{ eventName }}</h3>
        <p>{{ eventLocation }}</p>
        <p>{{ eventStartHour }}</p>
      </div>
      <div class="flex-event-data2">
        <p>{{ eventDescription }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "EventItem",
  props: [
    'eventName',
    'eventLocation',
    'eventStartHour',
    'eventDescription',
    'eventImage',
    'eventId'
  ],
  methods: {
    saveId(id) {
      console.log(this.eventId);
      this.$storage.setStorageSync('eventId', id);
    }
  }
}
</script>

<style scoped>

.flex-events-timeline-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  border: 2px solid #ccc;
  padding: 10px;
  align-items: center;
  margin-left: 20%;
  margin-right: 20%;

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

.flex-events-timeline-image {
  width: 100px;
  height: 100px;
  border: groove;
  margin-right: 5%;
}

a {
  text-decoration: none;
  color: inherit;
  margin-bottom: 1%;
}

</style>