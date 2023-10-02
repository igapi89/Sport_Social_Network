<template>
  <div class="add-event-wrapper">
    <PageHeader v-model="showBackBtn" title="Add event page"></PageHeader>
    <!-- <Form /> -->
  </div>
</template>
<script setup>
import PageHeader from '@/components/PageHeader.vue'
// import Form from '../components/Form.vue'
import { ref } from 'vue'

// Show back button
const showBackBtn = ref(true)
</script>
<style lang="scss" scoped></style>
