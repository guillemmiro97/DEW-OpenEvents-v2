<template>
  <!-- navbar -->
  <sidebar-menu :menu="menu"/>
  <div class="event-detail">
    <div class="event-detail__header">
      <div class="event-detail__header-left">
        <div class="event-detail__header-left-title">
          <h1>{{ this.event.name }}</h1>
        </div>
        <div class="event-detail__header-left-date">
          <span>{{ this.event.date }}</span>
        </div>
      </div>
      <div class="event-detail__header-right">
        <div class="event-detail__header-right-location">
          <span>{{ this.event.location }}</span>
        </div>
      </div>
    </div>
    <div class="event-detail__body">
      <div class="event-detail__body-description">
        <p>{{ this.event.description }}</p>
      </div>
      <div class="event-detail__body-image">
        <img :src=this.event.image alt="Event image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDetail",
  data() {
    return {
      event: [],
      menu: [
        {
          header: 'Main Navigation',
          hiddenOnCollapse: true,
        },
        {
          href: '/createEvent',
          title: 'Create Event',
          icon: ''
        },
        {
          href: '/timeline',
          title: 'Timeline',
          icon: ''

        }
      ]
    }
  },
  methods: {
    getEventData() {
      fetch('http://puigmal.salle.url.edu/api/v2/events/' + this.$storage.getStorageSync('eventId'), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
          .then(res => res.json())
          .then((data) => {
            this.event = data[0];
            console.log(this.event);
          })
          .catch(err => console.error(err))
    }
  },
  async created() {
    this.getEventData();
  }
}
</script>

<style scoped>
.event-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.event-detail__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.event-detail__header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #fff;
}

.event-detail__header-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.event-detail__header-left-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.event-detail__header-left-title h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
}

.event-detail__header-left-date {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.event-detail__header-left-date span {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
}

.event-detail__header-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.event-detail__header-right-location {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.event-detail__header-right-location span {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
}

.event-detail__body-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 50%;
  height: 50%;
}
</style>