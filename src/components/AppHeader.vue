<script setup lang="ts">
import AppLogo from './AppLogo.vue'
import VButton from './VButton.vue'
import { IconNamesEnum } from '../assets/IconNames.enum.ts'
</script>

<template>
  <div id="app-header">
    <AppLogo />
    <VButton :icon="IconNamesEnum.add" text="qwe" button-style="normal" />
  </div>
</template>

<style scoped>
#app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
