import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: '首页 - 智和明远' }
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('../views/CompanyView.vue'),
      meta: { title: '公司介绍 - 智和明远' }
    },
    {
      path: '/business',
      name: 'business', 
      component: () => import('../views/BusinessView.vue'),
      meta: { title: '业务介绍 - 智和明远' }
    },
    {
      path: '/advantages',
      name: 'advantages',
      component: () => import('../views/AdvantagesView.vue'),
      meta: { title: '班列优势 - 智和明远' }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue'),
      meta: { title: '行业资讯 - 智和明远' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: '关于我们 - 智和明远' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { title: '联系我们 - 智和明远' }
    },
  ],
})

// 路由守卫：设置页面标题
router.beforeEach((to) => {
  document.title = to.meta.title as string || '智和明远'
})

export default router
