import { useUserStore } from '../stores/user.ts'
import { computed, nextTick, watch } from 'vue'
import HTTPService from '../services/HTTPService.ts'

export const useAuthUser = () => {
  const userStore = useUserStore()

  const hasToken = computed(() => Boolean(userStore.token))

  const getUserData = async () => {
    await nextTick()
    if (hasToken.value) {
      const { data } = await HTTPService.getUser()
      await nextTick()
      userStore.updateUserData(data.email, data.id)
      await nextTick()
    }
  }

  const authUser = async (email: string, password: string) => {
    const { data } = await HTTPService.logIn({
      email,
      password
    })
    userStore.updateToken(data.accessToken)
    await nextTick()
    await getUserData()
    await nextTick()
  }

  const regUser = async (email: string, password: string, confirm_password: string) => {
    const { data: signInData } = await HTTPService.signIn({
      email,
      password,
      confirm_password
    })
    userStore.updateUserData(email, signInData.id)

    await authUser(email, password)
  }

  watch(hasToken, (newVal) => {
    if (!newVal) {
      userStore.removeUser()
    }
  })

  return { hasToken, regUser, getUserData, authUser }
}
