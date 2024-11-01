import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: () => import('./views/MainPage.vue')
    },
    {
      path: '/user',
      name: 'userPage',
      component: () => import('./views/UserPage.vue')
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
