import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'header',
        name: 'header',
        component: () =>
          import(
            /* webpackChunkName: "myHeader" */ '@/layout/components/MyHeader.vue'
          )
      },
      {
        path: 'footer',
        name: 'footer',
        component: () =>
          import(
            /* webpackChunkName: "myFooter" */ '@/layout/components/MyFooter.vue'
          )
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router
