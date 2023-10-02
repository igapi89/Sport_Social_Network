<template>
  <div>
    <header elevated>
      <div>
        <button flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <!-- <q-toolbar-title> This will be auth user UN </q-toolbar-title> -->
        <div>
          <RouterLink to="/" class="q-mx-md">Home</RouterLink>
          <RouterLink to="/events" class="q-mx-md">Events</RouterLink>
        </div>
      </div>
    </header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      overlay
      bordered
      :width="400"
      class="q-pa-md relative-position"
    >
      <p>User Profile content</p>
      <q-icon
        @click="toggleLeftDrawer"
        name="close"
        size="32px"
        class="cursor-pointer absolute-top-right q-pa-sm"
      />
    </q-drawer> -->

    <div class="content-wrapper">
      <div class="row">
        <div class="col left-column">
          <h5>Left column</h5>
        </div>
        <div class="col-6 middle-column">
          <div>
            <router-view />
          </div>
        </div>
        <div class="col right-column q-pa-md">
          <h5>Right column</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Handle Profile menu drawer open

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
<style lang="scss" scoped>
.content-wrapper {
  margin-top: 40px;
}
.left-column,
.right-column,
.middle-column {
  border: 1px solid #eee;
}
</style>
