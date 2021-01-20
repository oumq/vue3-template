import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    redirect: '/drawBoard',
    children: [
      {
        path: 'drawBoard',
        name: 'drawBoard',
        component: () =>
          import(
            /* webpackChunkName: "drawBoard" */ '@/views/drawBoard/index.vue'
          )
      },
      {
        path: 'waterfall',
        name: 'waterfall',
        component: () =>
          import(
            /* webpackChunkName: "waterfall" */ '@/components/Waterfall/index.vue'
          )
      },
      {
        path: 'wordCloud',
        name: 'wordCloud',
        component: () =>
          import(
            /* webpackChunkName: "wordCloud" */ '@/components/WordCloud/index.vue'
          )
      }
    ]
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
