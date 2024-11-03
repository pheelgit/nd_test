<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader id="app-header" />
  <RouterView id="app-content" />
</template>

<style>
#app-header {
  flex-basis: 136px;
}

#app-content {
  flex-grow: 1;
  padding: 1em;
}
</style>
