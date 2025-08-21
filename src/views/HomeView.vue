<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 数据看板数据
const statsData = ref([
  { label: '累计运输货量', value: 0, target: 150, unit: '万吨', icon: '🚛' },
  { label: '覆盖国家', value: 0, target: 28, unit: '国', icon: '🌍' },
  { label: '客户满意度', value: 0, target: 99, unit: '%+', icon: '⭐' }
])

// 核心业务数据
const businessServices = ref([
  {
    title: '国际铁路运输',
    description: '专业的中欧班列运输服务，覆盖一带一路沿线主要国家',
    icon: '🚄',
    link: '/business#railway',
    features: ['整箱运输', '拼箱服务', '门到门配送']
  },
  {
    title: '集装箱租赁买卖',
    description: '提供各类集装箱租赁和买卖服务，满足不同客户需求',
    icon: '📦',
    link: '/business#container',
    features: ['标准集装箱', '特种集装箱', '灵活租期']
  },
  {
    title: '跨境卡航',
    description: '高效的跨境卡车运输服务，连接亚欧大陆',
    icon: '🚚',
    link: '/business#truck',
    features: ['快速通关', '实时跟踪', '安全保障']
  },
  {
    title: '多式联运',
    description: '整合铁路、公路、海运等多种运输方式的综合物流解决方案',
    icon: '🌐',
    link: '/business#multimodal',
    features: ['一站式服务', '成本优化', '时效保证']
  }
])

// 优势展示数据
const advantages = ref([
  {
    title: 'NOVCC合规资质',
    description: '拥有完整的国际铁路运输资质认证',
    icon: '🏆'
  },
  {
    title: '全球箱源网络',
    description: '遍布全球的集装箱资源网络',
    icon: '🌍'
  },
  {
    title: '全客户类型服务经验',
    description: '服务国企、包列庄家、中小客户等各类型客户',
    icon: '👥'
  }
])

/**
 * 数字动画效果
 */
const animateNumbers = (): void => {
  statsData.value.forEach((stat, index) => {
    const duration = 2000 // 动画持续时间
    const steps = 60 // 动画步数
    const increment = stat.target / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= stat.target) {
        stat.value = stat.target
        clearInterval(timer)
      } else {
        stat.value = Math.floor(current)
      }
    }, duration / steps)
  })
}

/**
 * 滚动到指定业务模块
 * @param link 业务链接
 */
const scrollToBusiness = (link: string): void => {
  // 这里可以实现页面内滚动或路由跳转
  window.location.href = link
}

// 组件挂载后启动数字动画
onMounted(() => {
  // 延迟启动动画，让用户看到从0开始的效果
  setTimeout(() => {
    animateNumbers()
  }, 500)
})
</script>

<template>
  <div class="home-page">
    <!-- 首屏Banner区域 -->
    <section class="hero-section relative overflow-hidden text-white">
      <!-- 背景图片 -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/banner.png')"></div>
      
      <!-- 黑色蒙版 -->
      <div class="absolute inset-0 bg-black/30"></div>
      
      <!-- 装饰性光效 -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-400/20 via-purple-500/10 to-transparent rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-indigo-400/15 via-blue-500/8 to-transparent rounded-full filter blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      </div>
      
      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <!-- 左侧内容 -->
          <div class="text-center lg:text-left">
            <!-- 公司LOGO区域 -->
            <div class="flex items-center justify-center lg:justify-start mb-8">
              <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-4">
                <svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h1 class="text-3xl lg:text-4xl font-bold">智和明远</h1>
                <p class="text-indigo-200 text-sm mt-1">ZHIHE MINGYUAN</p>
              </div>
            </div>
            
            <!-- 宣传标语 -->
            <div class="mb-8">
              <h2 class="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                志同道合 | 明智致远
              </h2>
              <h3 class="text-xl lg:text-2xl text-indigo-200 mb-6">
                智和明远 | 轨道链接
              </h3>
              <p class="text-lg text-indigo-100 max-w-2xl mx-auto lg:mx-0">
                专业的国际铁路运输服务提供商，致力于为全球客户提供高效、安全、可靠的物流解决方案
              </p>
            </div>
            
            <!-- CTA按钮 -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <router-link to="/business" class="btn-primary bg-white text-indigo-600 hover:bg-gray-100">
                了解业务
              </router-link>
              <router-link to="/contact" class="btn-primary bg-blue-600 text-white hover:bg-blue-700">
                联系我们
              </router-link>
            </div>
          </div>
          
          <!-- 右侧装饰 -->
          <div class="flex flex-col items-center lg:items-end">
            <!-- 装饰元素已移除 -->
          </div>
        </div>
      </div>
    </section>

    <!-- 核心业务展示区 -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <!-- 标题 -->
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">核心业务</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            提供全方位的国际物流服务，满足不同客户的运输需求
          </p>
        </div>
        
        <!-- 业务卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(service, index) in businessServices"
            :key="index"
            @click="scrollToBusiness(service.link)"
            class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
          >
            <div class="p-8">
              <!-- 图标 -->
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {{ service.icon }}
              </div>
              
              <!-- 标题和描述 -->
              <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                {{ service.description }}
              </p>
              
              <!-- 特性列表 -->
              <ul class="space-y-2">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="flex items-center text-sm text-gray-500"
                >
                  <svg class="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {{ feature }}
                </li>
              </ul>
              
              <!-- 箭头图标 -->
              <div class="mt-6 flex justify-end">
                <svg class="w-5 h-5 text-indigo-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 优势速览模块 -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <!-- 标题 -->
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">核心优势</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            凭借专业资质和丰富经验，为客户提供优质服务
          </p>
        </div>
        
        <!-- 优势卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(advantage, index) in advantages"
            :key="index"
            class="text-center group"
          >
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <!-- 图标 -->
              <div class="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {{ advantage.icon }}
              </div>
              
              <!-- 标题和描述 -->
              <h3 class="text-xl font-bold text-gray-800 mb-4">
                {{ advantage.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ advantage.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 数据看板 -->
    <section class="section-padding bg-indigo-600 text-white">
      <div class="container-custom">
        <!-- 标题 -->
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">数据看板</h2>
          <p class="text-xl text-indigo-200 max-w-3xl mx-auto">
            用数据说话，见证我们的专业实力
          </p>
        </div>
        
        <!-- 数据展示 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(stat, index) in statsData"
            :key="index"
            class="text-center group"
          >
            <div class="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
              <!-- 图标 -->
              <div class="text-4xl mb-4">
                {{ stat.icon }}
              </div>
              
              <!-- 数值 -->
              <div class="text-4xl lg:text-5xl font-bold mb-2">
                {{ stat.value }}{{ stat.unit }}
              </div>
              
              <!-- 标签 -->
              <p class="text-indigo-200 text-lg">
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">
            准备开始您的物流之旅？
          </h2>
          <p class="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            联系我们的专业团队，获取定制化的物流解决方案
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contact" class="btn-primary bg-white text-indigo-600 hover:bg-gray-100">
              立即咨询
            </router-link>
            <router-link to="/company" class="btn-secondary border-white text-white hover:bg-white hover:text-indigo-600">
              了解更多
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 固定定位的二维码 -->
    <div class="fixed bottom-6 right-6 z-50">
      <div class="bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
        <div class="text-center">
          <div class="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mb-3 mx-auto">
            <!-- 这里应该放置真实的二维码图片 -->
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
            </svg>
          </div>
          <p class="text-gray-700 font-medium text-sm">扫码关注</p>
          <p class="text-gray-500 text-xs">获取资讯</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 自定义动画 */
@keyframes slide-right {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100vw); }
}

@keyframes slide-left {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100vw); }
}

@keyframes slide-down {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}

@keyframes slide-up {
  0% { transform: translateY(100%); }
  100% { transform: translateY(-100vh); }
}

@keyframes spin-slow {
  from { transform: rotate(45deg); }
  to { transform: rotate(405deg); }
}

@keyframes spin-reverse {
  from { transform: rotate(12deg); }
  to { transform: rotate(-348deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes float-reverse {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(20px) rotate(-5deg); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.5); }
}

/* 动画类 */
.animate-slide-right {
  animation: slide-right 8s linear infinite;
}

.animate-slide-left {
  animation: slide-left 8s linear infinite;
}

.animate-slide-down {
  animation: slide-down 10s linear infinite;
}

.animate-slide-up {
  animation: slide-up 10s linear infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse 15s linear infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 8s ease-in-out infinite;
}

.animate-twinkle {
  animation: twinkle 3s ease-in-out infinite;
}

/* 径向渐变背景 */
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}

/* 响应式调整 */
@media (max-width: 768px) {
  .hero-section .absolute.w-96 {
    width: 16rem;
    height: 16rem;
  }
  
  .hero-section .absolute.w-80 {
    width: 12rem;
    height: 12rem;
  }
  
  .hero-section .absolute.w-72 {
    width: 10rem;
    height: 10rem;
  }
}

/* 动画延迟类 */
.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* 英雄区域最小高度 */
.hero-section {
  min-height: 100vh;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 卡片悬停效果增强 */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .hero-section {
    min-height: 80vh;
  }
}
</style>
