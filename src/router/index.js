import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index.vue' // 你的首页组件
import Knowledge from '../views/Knowledge.vue' // 知识导航页
import Customs from '../views/Customs.vue' // 知识导航页
import Festivals from '@/views/Festivals.vue'
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
  }

  // 可以继续添加其他路由...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router