<template>
    <div class="knowledge-page">
      <!-- 顶部装饰 -->
      <div class="top-decoration"></div>
      
      <div class="container">
        <!-- 复用主站标题 -->
        <page-header title="民族知识导航" subtitle="探索少数民族的文化宝库" />
        
        <!-- 导航栏 -->
        <main-nav />
        
        <!-- 知识内容 -->
        <main>
          <section class="content-section">
            <h2>少数民族知识体系</h2>
            <div class="knowledge-grid">
              <!-- 内容区 -->
            </div>
          </section>
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import PageHeader from '@/components/PageHeader.vue'
  import MainNav from '@/components/MainNav.vue'
  </script>
  
  <style scoped>
  .knowledge-page {
    min-height: 100vh;
  }
  
  .content-section {
    background: white;
    padding: 30px;
    border-radius: 5px;
    margin: 20px 0;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  }
  
  .knowledge-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  </style>