<script setup lang="ts">
import { computed, ref } from 'vue'
import PopUp from './PopUp.vue'
import LogInForm from './LogInForm.vue'
import RegisterForm from './RegisterForm.vue'
import { useRouter } from 'vue-router'
import VLink from './VLink.vue'

enum AuthTypeEnum {
  auth,
  reg
}

const router = useRouter()

const selectType = ref<AuthTypeEnum>(AuthTypeEnum.auth)

const isVisible = defineModel<boolean>('isVisible')

const onSubmitForm = () => {
  isVisible.value = false
  router.push({ name: 'userPage' })
}

const title = computed<string>(() => {
  if (selectType.value === AuthTypeEnum.auth) {
    return 'Вход в ваш аккаунт'
  }
  if (selectType.value === AuthTypeEnum.reg) {
    return 'Регистрация'
  }
  return ''
})

const switcherText = computed<{ text: string; linkText: string }>(() => {
  if (selectType.value === AuthTypeEnum.auth) {
    return { text: 'У вас нет аккаунта?', linkText: 'Зарегистрируйтесь' }
  } else {
    return { text: 'У вас есть аккаунт?', linkText: 'Войдите' }
  }
})

const handleSwitchForm = () => {
  if (selectType.value === AuthTypeEnum.reg) {
    selectType.value = AuthTypeEnum.auth
  } else {
    selectType.value = AuthTypeEnum.reg
  }
}
</script>

<template>
  <PopUp :title="title" v-model:is-visible="isVisible">
    <LogInForm v-if="selectType === AuthTypeEnum.auth" :on-submit="onSubmitForm" />
    <RegisterForm v-if="selectType === AuthTypeEnum.reg" :on-submit="onSubmitForm" />

    <div class="switcher">
      <p class="text-small">{{ switcherText.text }}</p>
      <VLink :text="switcherText.linkText" @click.stop="handleSwitchForm" />
    </div>
  </PopUp>
</template>

<style scoped>
.switcher {
  display: flex;
  align-items: center;
}
</style>
