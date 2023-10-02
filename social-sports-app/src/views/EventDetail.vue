<template>
  <div v-if="storeEvents.loading" class="spinner-wrapper">
    <!-- <q-spinner-grid color="primary" size="50px" class="spinner" /> -->
    <h1>...</h1>
  </div>

  <div v-else class="event-detail-wrapper">
    <PageHeader v-model="showBackBtn" title="Event detail page"></PageHeader>
    <div>{{ storeEvents.singleEvent }}</div>
    <div ref="mapDiv" class="map-wrapper" />
    <button @click="goToEvents"></button>
  </div>
</template>
<script setup>
import PageHeader from '@/components/PageHeader.vue'
// import { ref, onMounted, computed } from 'vue'
import { ref } from 'vue'
import { useStoreEvents } from '@/stores/storeEvents'
import { useRouter, useRoute } from 'vue-router'

// Show event details
const route = useRoute()

// Show back button
const showBackBtn = ref(true)

// Store events
const storeEvents = useStoreEvents()
storeEvents.getEventById(route.params.id)

// Go to events page
const router = useRouter()

const goToEvents = (event) => {
  router.push('/events')
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

.map-wrapper {
  width: 100%;
  height: 500px;
}
</style>
