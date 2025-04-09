<template>
    <!-- 顶部装饰 -->
    <div class="top-decoration"></div>
    
    <!-- 主容器 -->
    <div class="container">
      <!-- 网站标题 -->
      <header>
        <h1>华夏民族风情</h1>
        <p class="subtitle">探索少数民族的传统文化瑰宝</p>
      </header>
      
      <!-- 导航栏 -->
      <nav class="ancient-nav" :class="{ 'fixed-nav': isNavFixed }">
        <ul>
          <li v-for="(item, index) in navItems" :key="index">
          <router-link 
          :to="item.path" 
          :class="{ active: $route.path === item.path }"
        >
          {{ item.title }}
        </router-link>
          </li>
        </ul>
      </nav>
      
      <!-- 主要内容 -->
      <main>
        <section class="hero">
          <div class="hero-text">
            <h2>五十六个民族，五十六朵花</h2>
            <p>探索中国少数民族丰富多彩的文化遗产，感受千年传承的独特魅力</p>
            <button class="explore-btn" @click="handleExplore">开始探索</button>
          </div>
          <div class="hero-image">
            <img :src="heroImage" alt="少数民族风情">
          </div>
        </section>
        
        <section class="features">
          <div 
            v-for="(feature, index) in features" 
            :key="index" 
            class="feature-card"
            @mouseenter="hoverFeature = index"
            @mouseleave="hoverFeature = null"
            :style="{ transform: hoverFeature === index ? 'translateY(-5px)' : '' }"
          >
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </section>
      </main>
    </div>
    <br>
    <!-- 页脚 -->
    <footer>
      <p>© 2023 华夏民族风情 - 少数民族传统文化保护与传承</p>
    </footer>
    <br>
    <br>
    <br>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRoute } from 'vue-router'

  // 响应式数据
  const isNavFixed = ref(false)
  const activeNav = ref(0)
  const hoverFeature = ref(null)
  //const $route = useRoute()
  // 导航项数据
//   const navItems = ref([
//     '首页', 
//     '知识导航', 
//     '风俗习惯', 
//     '传统节日', 
//     '民族服饰', 
//     '民间艺术', 
//     '关于我们'
//   ])

const navItems = ref([
  { title: '首页', path: '/' },
  { title: '知识导航', path: '/knowledge' },
  { title: '风俗习惯', path: '/customs' },
  { title: '传统节日', path: '/festivals' },
  { title: '民族服饰', path: '/clothes' },
  { title: '民间艺术', path: '/art' },
  { title: '关于我们', path: '/about' }
  // 其他导航项...
])
  
  // 特色卡片数据

  const features = ref([
    { icon: '🎎', title: '民族服饰', desc: '了解各民族独特的服饰文化' },
    { icon: '🎉', title: '传统节日', desc: '探索丰富多彩的民族节日' },
    { icon: '🍜', title: '饮食文化', desc: '品尝各民族的特色美食' }
  ])
  
  // 图片资源（实际项目中应使用import导入）
  const heroImage = ref('https://placeholder.pics/svg/400x300/DEDEDE/555555/民族风情')
  
  // 处理导航点击
  const handleNavClick = (index) => {
    activeNav.value = index
    console.log('导航到: ' + navItems.value[index])
    // 这里可以添加路由跳转或内容加载逻辑
  }
  
  // 处理探索按钮点击
  const handleExplore = () => {
    alert('即将带您探索少数民族文化的瑰宝世界！')
  }
  
  // 滚动监听
  const handleScroll = () => {
    isNavFixed.value = window.scrollY > 50
  }
  
  // 生命周期钩子
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
  /* 基础样式 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Noto Serif SC', serif;
    background-color: #f9f4e6;
    color: #333;
    line-height: 1.6;
    background-image: url('https://www.transparenttextures.com/patterns/rice-paper.png');
  }
  
  /* 顶部装饰 */
  .top-decoration {
    height: 10px;
    background: linear-gradient(90deg, #8B5A2B, #D2B48C, #8B5A2B);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  /* 标题样式 */
  header {
    text-align: center;
    padding: 30px 0;
  }
  
  h1 {
    font-family: 'Ma Shan Zheng', cursive;
    font-size: 3rem;
    color: #8B5A2B;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-top: 10px;
  }
  
  /* 古风导航栏 */
  .ancient-nav {
    background-color: #8B5A2B;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    border: 1px solid #D2B48C;
    border-top: none;
    transition: all 0.3s ease;
  }
  
  .ancient-nav.fixed-nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    border-radius: 0;
    max-width: 1200px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .ancient-nav ul {
    display: flex;
    list-style: none;
    justify-content: center;
  }
  
  .ancient-nav li {
    position: relative;
  }
  
  .ancient-nav li:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 25%;
    height: 50%;
    width: 1px;
    background-color: rgba(255,255,255,0.3);
  }
  
  .ancient-nav a {
    display: block;
    padding: 15px 25px;
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    position: relative;
  }
  
  .ancient-nav a:hover {
    background-color: #A67C52;
  }
  
  .ancient-nav a.active {
    background-color: #A67C52;
    font-weight: bold;
  }
  
  .ancient-nav a.active::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #f9f4e6;
  }
  
  /* 主要内容区 */
  .hero {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    background-color: #fff;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    border: 1px solid #e0d6c2;
  }
  
  .hero-text {
    flex: 1;
    padding-right: 30px;
  }
  
  .hero-image {
    flex: 1;
  }
  
  .hero h2 {
    font-size: 2rem;
    color: #8B5A2B;
    margin-bottom: 15px;
  }
  
  .hero p {
    font-size: 1.1rem;
    margin-bottom: 20px;
    color: #666;
  }
  
  .explore-btn {
    background-color: #8B5A2B;
    color: white;
    border: none;
    padding: 10px 25px;
    font-size: 1.1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Noto Serif SC', serif;
  }
  
  .explore-btn:hover {
    background-color: #A67C52;
    transform: translateY(-2px);
  }
  
  /* 特色卡片 */
  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .feature-card {
    background-color: #fff;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    border: 1px solid #e0d6c2;
    transition: all 0.3s ease;
  }
  
  .feature-card:hover {
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  }
  
  .feature-icon {
    font-size: 3rem;
    margin-bottom: 15px;
  }
  
  .feature-card h3 {
    color: #8B5A2B;
    margin-bottom: 10px;
  }
  
  /* 页脚 */
  footer {
    text-align: center;
    padding: 20px;
    background-color: #8B5A2B;
    color: white;
    margin-top: 50px;
  }
  
  /* 响应式设计 */
  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
    }
    
    .hero-text {
      padding-right: 0;
      margin-bottom: 20px;
    }
    
    .ancient-nav ul {
      flex-wrap: wrap;
    }
    
    .ancient-nav li {
      flex: 1 0 50%;
    }
    
    .ancient-nav li:not(:last-child)::after {
      display: none;
    }
  }
  </style>