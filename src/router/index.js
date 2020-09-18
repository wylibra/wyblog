import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

Vue.use(Router)

const commonRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/iview-tree',
    children: [
      {
        path: 'iview-tree',
        component: () => import('@/views/iview-tree/index'),
        name: 'iviewTree',
        meta: { title: 'iviewTree', icon: 'dashboard', affix: true }
      }
    ]
  },
]

// 需要通过后台数据来生成的组件
export const asyncRoutes = {
}

const createRouter = () => new Router({
  routes: commonRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router