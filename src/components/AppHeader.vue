<script setup lang="ts">
import AppLogo from './AppLogo.vue'
import VButton from './VButton.vue'
import { IconNamesEnum } from '../assets/IconNames.enum.ts'
import VIcon from './VIcon.vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
// const iconName = computed(()=>)
const handleClick = () => {
  console.log('click')
  router.push({ query: { auth: 'auth' } })
}
</script>

<template>
  <div id="app-header">
    <AppLogo />
    <VIcon :name="IconNamesEnum.login" class="button__icon" />
    <VButton
      v-if="route.name === 'mainPage'"
      text="Вход"
      :icon="IconNamesEnum.login"
      buttonStyle="normal"
      textStyle="icon+text"
      iconStyle="normal"
      @click="handleClick"
    />
  </div>
</template>

<style scoped>
#app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
