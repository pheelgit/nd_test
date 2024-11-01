import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { ref } from 'vue'

type UserStateType = {
  email: string
  id: number
}
const DEFAULT_STATE: UserStateType = { email: '', id: 0 }

export const useUserStore = defineStore('user', () => {
  const state = ref<UserStateType>(DEFAULT_STATE)
  // const state = useLocalStorage<UserStateType>('user', DEFAULT_STATE)
  const token = useLocalStorage<string>('token', '')

  const removeUser = () => {
    state.value = DEFAULT_STATE
  }

  const updateUserData = (email: string, id: number) => {
    state.value.email = email
    state.value.id = id
  }

  const updateToken = (newToken: string) => (token.value = newToken)

  return {
    state,
    token,
    updateUserData,
    removeUser,
    updateToken
  }
})
