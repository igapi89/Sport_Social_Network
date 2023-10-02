<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useStoreEvents } from '@/stores/storeEvents'
import { provide } from 'vue'

// Store events
const storeEvents = useStoreEvents()

// Mounted
onMounted(() => {
  storeEvents.getEvents()
})

const { events } = storeToRefs(storeEvents)

provide('events', events)
</script>
<style lang="scss" scoped></style>
