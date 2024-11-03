<script setup lang="ts">
import { ref } from 'vue'
import { useAuthUser } from '../hooks/useAuthUser.ts'
import VInput from './VInput.vue'
import VButton from './VButton.vue'
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
  <form @submit.prevent="login" v-bind="$attrs">
    <VInput v-model="email" type="email" placeholder="Email" required autocomplete="email" />
    <VInput
      v-model="password"
      type="password"
      placeholder="Password"
      required
      autocomplete="current-password"
    />
    <VButton type="submit" text="Войти" />
  </form>
</template>
