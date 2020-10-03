import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue')
    // redirect: '/header',
    // children: [
    //   {
    //     path: 'header',
    //     name: 'header',
    //     component: () => import('@/layout/components/MyHeader.vue')
    //   },
    //   {
    //     path: 'footer',
    //     name: 'footer',
    //     component: () => import('@/layout/components/MyFooter.vue')
    //   }
    // ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router
