<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const login = () => {
  // Логика авторизации здесь
  console.log('Logging in', { email: email.value, password: password.value })
}
</script>

<template>
  <form @submit.prevent="login">
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
</template>
