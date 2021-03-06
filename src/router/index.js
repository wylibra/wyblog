import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

Vue.use(Router)

/**
 * commonRoutes
 * 没有权限要求的基页 所有角色可以访问
 */
export const commonRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
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

/**
 * asyncRoutes
 * 需要根据用户角色动态加载的路由
 */
// 
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

// mode: 'hash', 默认使用“hash”,所以设置与否浏览器的URL显示像这样(http://localhost:8000/#/firsts/first ),
// mode: 'history'，浏览器URL显示为(http://localhost:8000/firsts/first),设置“history”后链接中没有#
