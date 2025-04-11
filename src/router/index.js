import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index.vue' // 你的首页组件
import Knowledge from '../views/Knowledge.vue' // 知识导航页
import Customs from '../views/Customs.vue' // 知识导航页
import Festivals from '@/views/Festivals.vue'
import EthnicMap from '@/views/EthnicMap.vue' // 民族分布地图页
import Heritage from '@/views/Heritage.vue' // 非物质文化遗产展示页
import Profile from '@/views/Profile.vue' // 个人中心页面

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/knowledge',
    name: 'Knowledge',
    component: Knowledge
  },
  {
    path: '/customs',
    name: 'Customs',
    component: Customs
  },
  {
    path: '/festivals',
    name: 'Festivals',
    component: Festivals
  },
  {
    path: '/ethnic-map',
    name: 'EthnicMap',
    component: EthnicMap
  },
  {
    path: '/heritage',
    name: 'Heritage',
    component: Heritage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  }

  // 可以继续添加其他路由...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router