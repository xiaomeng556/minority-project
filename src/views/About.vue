<template>
    <div class="about-page">
      <div class="top-decoration"></div>
      
      <div class="container">
        <page-header 
          title="关于我们" 
          subtitle="传承民族文化，弘扬中华精神"
        />
        
        <main-nav />
        
        <main>
          <section class="content-section">
            <div class="about-content">
              <div class="about-text">
                <h2 class="section-title">项目简介</h2>
                <p>华夏民族风情网致力于收集、整理和展示中国各少数民族的传统文化遗产，包括服饰、艺术、风俗习惯等各个方面。</p>
                
                <h3>我们的使命</h3>
                <p>保护和传承中华民族多元文化，促进各民族文化交流与理解。</p>
                
                <h3>团队介绍</h3>
                <div class="team-grid">
                  <div v-for="(member, index) in teamMembers" :key="index" class="team-member">
                    <img :src="member.avatar" :alt="member.name">
                    <h4>{{ member.name }}</h4>
                    <p>{{ member.position }}</p>
                  </div>
                </div>
              </div>
              
              <div class="contact-info">
                <h3>联系我们</h3>
                <p><i class="icon">📧</i> contact@huaxia-culture.com</p>
                <p><i class="icon">📞</i> 400-123-4567</p>
                <p><i class="icon">🏠</i> 北京市海淀区民族文化大厦</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import PageHeader from '@/components/PageHeader.vue'
  import MainNav from '@/components/MainNav.vue'
  
  const teamMembers = ref([
    {
      name: '张文化',
      position: '项目负责人',
      avatar: 'https://placeholder.pics/svg/150/8B5A2B/FFFFFF/张'
    },
    {
      name: '李传承',
      position: '内容编辑',
      avatar: 'https://placeholder.pics/svg/150/8B5A2B/FFFFFF/李'
    },
    {
      name: '王艺术',
      position: '设计师',
      avatar: 'https://placeholder.pics/svg/150/8B5A2B/FFFFFF/王'
    }
  ])
  </script>
  
  <style scoped>
  .about-page {
    min-height: 100vh;
    padding-bottom: 50px;
  }
  
  .section-title {
    font-family: 'Ma Shan Zheng', cursive;
    color: #8B5A2B;
    margin: 20px 0;
    font-size: 2rem;
  }
  
  .content-section {
    background: rgba(255, 255, 255, 0.9);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    border: 1px solid #e0d6c2;
  }
  
  .about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
  }
  
  .about-text h3 {
    color: #8B5A2B;
    margin: 25px 0 15px;
    font-size: 1.4rem;
  }
  
  .about-text p {
    line-height: 1.8;
    color: #555;
    margin-bottom: 15px;
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }
  
  .team-member {
    text-align: center;
  }
  
  .team-member img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #D2B48C;
  }
  
  .team-member h4 {
    margin: 10px 0 5px;
    color: #333;
  }
  
  .contact-info {
    background: #f9f4e6;
    padding: 20px;
    border-radius: 6px;
    border: 1px solid #e0d6c2;
  }
  
  .contact-info h3 {
    color: #8B5A2B;
    margin-bottom: 15px;
  }
  
  .contact-info p {
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
  
  .icon {
    margin-right: 10px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    .about-content {
      grid-template-columns: 1fr;
    }
    
    .team-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  </style>