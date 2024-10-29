<script setup>
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')

const register = () => {
  // Регистрация логика здесь
  console.log('Registering', {
    username: username.value,
    email: email.value,
    password: password.value
  })
}
</script>

<template>
  <form @submit.prevent="register">
    <input v-model="username" type="text" placeholder="Username" required />
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Register</button>
  </form>
</template>
