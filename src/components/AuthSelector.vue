<script setup lang="ts">
import { computed, ref } from 'vue'
import PopUp from './PopUp.vue'
import LogInForm from './LogInForm.vue'
import RegisterForm from './RegisterForm.vue'
import { useRouter } from 'vue-router'

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
</script>

<template>
  <PopUp :title="title" v-model:is-visible="isVisible">
    <LogInForm v-if="selectType === AuthTypeEnum.auth" :on-submit="onSubmitForm" />
    <RegisterForm v-if="selectType === AuthTypeEnum.reg" :on-submit="onSubmitForm" />
  </PopUp>
</template>

<style scoped></style>
