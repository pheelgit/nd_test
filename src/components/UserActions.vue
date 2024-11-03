<script setup lang="ts">
import { useUserStore } from '../stores/user.ts'
import VIcon from './VIcon.vue'
import { IconNamesEnum } from '../assets/IconNames.enum.ts'

const userStore = useUserStore()
</script>

<template>
  <div class="wrap">
    <span>{{ userStore.state.email }}</span>
    <VIcon :name="IconNamesEnum.user" />
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  gap: 0.5em;
  align-items: center;
}
</style>
