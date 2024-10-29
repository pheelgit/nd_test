import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/:auth?',
      name: 'mainPage',
      component: () => import('./views/MainPage.vue')
      // children: [
      //   {
      //     path: 'logIn',
      //     name: 'logInPage',
      //     component: () => import('./App.vue')
      //   },
      //   {
      //     path: 'signIn',
      //     name: 'signInPage',
      //     component: () => import('./App.vue')
      //   }
      // ]
    }

    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'notFoundPage',
    //
    //   component: () => import('./App.vue')
    // }
  ]
})

// router.beforeEach(async (to, from, next) => {
//   const user = await getUser()
//   if (to.name !== 'authPage' && !user) {
//     next({ name: 'authPage' })
//   } else {
//     defaultSettings()
//     dataBroker.addJobByRouteLocation(to)
//     await dataBroker.execute()
//     next()
//   }
// })
