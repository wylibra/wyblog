import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
  {
    path: '/iview-tree',
    name: 'iviewTree',
    component: () => import('@/views/iview-tree/index.vue')
  },
  { path: '/', redirect: '/iview-tree' },
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