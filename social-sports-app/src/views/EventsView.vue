<template>
  <div v-if="!events.length" class="spinner-wrapper">
    <div color="primary" size="50px" class="spinner" />
    ...
  </div>
  <div v-else class="events-wrapper">
    <div class="title-wrapper row justify-between items-center">
      <h4>Events page</h4>
      <button @click="goToAddNewEvent">Go to Add new event</button>
    </div>
    <div v-for="(event, index) in events" :key="index">
      <div>
        <div>{{ event.content.name }}</div>
        <div>{{ event.content.description }}</div>
      </div>

      <button @click="goToEventDetails(event)">Details</button>
      <button>Delete</button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { inject } from 'vue'

// Get events from App.vue
const events = inject('events')

// Go to Add new event page
const goToAddNewEvent = () => {
  router.push('/addNewEvent')
}

// Get event details and Go to event details page
const router = useRouter()

const goToEventDetails = async (event) => {
  router.push(`/eventDetail/${event.id}`)
}
</script>
<style lang="scss" scoped>
.spinner-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 99999;
}
</style>
