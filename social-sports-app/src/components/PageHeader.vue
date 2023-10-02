<template>
  <div>
    <h4>{{ title }}</h4>
    <button v-if="modelValue" @click="goToEvents" />
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Default title'
  }
})

// Go to events page
const router = useRouter()

const goToEvents = () => {
  router.push('/events')
}
</script>
