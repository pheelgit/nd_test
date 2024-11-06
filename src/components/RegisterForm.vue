<script setup lang="ts">
import { ref } from 'vue'
import { useAuthUser } from '../hooks/useAuthUser.ts'
import VInput from './VInput.vue'
import VButton from './VButton.vue'
const props = defineProps<{ onSubmit?: Function }>()

const { regUser } = useAuthUser()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const register = async () => {
  await regUser(email.value, password.value, confirmPassword.value)

  props.onSubmit && props.onSubmit()
}
</script>

<template>
  <form @submit.prevent="register" v-bind="$attrs">
    <VInput v-model="email" type="email" placeholder="Email" required autocomplete="email" />
    <VInput
      v-model="password"
      type="password"
      placeholder="Password"
      required
      autocomplete="new-password"
    />
    <VInput
      v-model="confirmPassword"
      type="password"
      placeholder="Password"
      required
      autocomplete="new-password"
    />

    <VButton type="submit" text="Зарегистрироваться" />
  </form>
</template>
