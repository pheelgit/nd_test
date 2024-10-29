<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader id="app-header" />
  <div id="app-content">
    <RouterView />
  </div>
</template>

<style>
#app-header {
  flex-basis: 136px;
}

#app-content {
  flex-grow: 1;
}
</style>
