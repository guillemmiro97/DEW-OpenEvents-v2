<template>
  <div class="event-detail">
    <div class="event-detail__header">
      <div class="event-detail__header-left">
        <div class="event-detail__header-left-title">
          <h1>Event</h1>
        </div>
        <div class="event-detail__header-left-date">
          <span>Fecha</span>
        </div>
      </div>
      <div class="event-detail__header-right">
        <div class="event-detail__header-right-location">
          <span>Location</span>
        </div>
        <div class="event-detail__header-right-time">
                    <span>
                      Time
                    </span>
        </div>
      </div>
    </div>
    <div class="event-detail__body">
      <div class="event-detail__body-description">
        <p>Description sdnsjjfos</p>
      </div>
      <div class="event-detail__body-attendees">
        <div class="event-detail__body-attendees-title">
          <h2>Attendees</h2>
        </div>
        <div class="event-detail__body-attendees-list">
          <span>Atendees</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDetail"
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
</style>