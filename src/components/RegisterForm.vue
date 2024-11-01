<script setup lang="ts">
import { ref } from 'vue'
import { useAuthUser } from '../hooks/useAuthUser.ts'
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
  <form @submit.prevent="register">
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <input v-model="confirmPassword" type="password" placeholder="Password" required />
    <button type="submit">Register</button>
  </form>
</template>
