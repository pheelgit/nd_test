<script setup lang="ts">
import { onMounted, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthUser } from '../hooks/useAuthUser.ts'

import PopUp from '../components/PopUp.vue'
import RegisterForm from '../components/RegisterForm.vue'
import LogInForm from '../components/LogInForm.vue'
import { useUserStore } from '../stores/user.ts'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const { getUserData, hasToken } = useAuthUser()

onMounted(async () => {
  console.log('hasTOken')
  if (hasToken.value) {
    console.log('if  hasTOken')
    await getUserData()
    await router.push({ name: 'userPage' })
  }
})

watch(userStore.state, () => {
  if (userStore.state.email) {
    router.push({ name: 'userPage' })
  }
})
</script>

<template>
  <div class="main-page">
    <div class="my-titles">
      <h1>Мои заметки</h1>
      <p>Не забывай о важном, храни его в облаке.</p>
    </div>
    <div class="main-image-wrap">
      <img src="../assets/main-img.png" alt="main image" class="main-image" />
    </div>
    <PopUp title="Регистрация" :is-visible="route.query.auth === 'reg'">
      <RegisterForm />
    </PopUp>
    <PopUp title="Вход в ваш аккаунт" :is-visible="route.query.auth === 'auth'">
      <LogInForm />
    </PopUp>
  </div>
</template>

<style scoped>
.main-page {
  display: flex;
  justify-content: space-evenly;
  gap: 2em;
  align-items: stretch;
  justify-items: stretch;
}
.my-titles {
  flex-basis: 500%;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-image-wrap {
  flex-basis: 500%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-image {
  width: 100%;
  height: 100%;
}
</style>
