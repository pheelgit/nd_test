<script setup lang="ts">
import { ref } from 'vue'
import { useAuthUser } from '../hooks/useAuthUser.ts'
const props = defineProps<{ onSubmit?: Function }>()
const { authUser } = useAuthUser()

const email = ref('')
const password = ref('')

const login = async () => {
  await authUser(email.value, password.value)
  props.onSubmit && props.onSubmit()
}
</script>

<template>
  <form @submit.prevent="login">
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
</template>
