import { useUserStore } from '../stores/user.ts'
import { computed, nextTick, watch } from 'vue'
import HTTPService from '../services/HTTPService.ts'
import { useRouter } from 'vue-router'

export const useAuthUser = () => {
  const userStore = useUserStore()
  const router = useRouter()

  const hasToken = computed(() => Boolean(userStore.token))

  const getUserData = async () => {
    if (hasToken.value) {
      const { data } = await HTTPService.getUser()
      userStore.updateUserData(data.email, data.id)
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
  }

  const regUser = async (email: string, password: string, confirm_password: string) => {
    const { data: signInData } = await HTTPService.signIn({
      email,
      password,
      confirm_password
    })
    userStore.updateUserData(email, signInData.id)

    await router.push({ name: 'userPage' })
  }

  watch(hasToken, (newVal) => {
    if (newVal === false) {
      userStore.removeUser()
    }
  })

  return { hasToken, regUser, getUserData, authUser }
}
