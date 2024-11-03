<script setup lang="ts">
import AppLogo from './AppLogo.vue'
import VButton from './VButton.vue'
import { IconNamesEnum } from '../assets/IconNames.enum.ts'
import { useRoute } from 'vue-router'
import UserActions from './UserActions.vue'
import { ref } from 'vue'
import AuthSelector from './AuthSelector.vue'
const route = useRoute()
const showAuthForms = ref<boolean>(false)
</script>

<template>
  <div id="app-header">
    <AppLogo />
    <VButton
      v-if="route.name === 'mainPage'"
      text="Вход"
      :icon="IconNamesEnum.login"
      @click="showAuthForms = true"
    >
    </VButton>
    <AuthSelector v-model:is-visible="showAuthForms" />
    <UserActions v-if="route.name === 'userPage'" />
  </div>
</template>

<style scoped>
#app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
