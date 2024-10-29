import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  const state = useLocalStorage('user', {
    email: '',
    token: ''
  })

  const updateUserData = (email, token) => {
    state.value.email = email
    state.value.token = token
  }

  return {
    state,
    updateUserData
  }
})
