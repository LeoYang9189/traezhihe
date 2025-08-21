<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- 头部导航 -->
    <HeaderNav />
    
    <!-- 主要内容区域 -->
    <main class="flex-1">
      <RouterView />
    </main>
    
    <!-- 页脚 -->
    <footer class="bg-gray-800 text-white py-8 mt-16">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <span class="text-lg font-bold">智和明远</span>
            </div>
            <p class="text-gray-300 mb-4">专业的国际铁路运输服务提供商，致力于为客户提供高效、安全、可靠的物流解决方案。</p>
            <p class="text-sm text-gray-400">© 2024 智和明远. 保留所有权利.</p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">快速链接</h3>
            <ul class="space-y-2 text-gray-300">
              <li><a href="/company" class="hover:text-white transition-colors">公司介绍</a></li>
              <li><a href="/business" class="hover:text-white transition-colors">业务介绍</a></li>
              <li><a href="/advantages" class="hover:text-white transition-colors">班列优势</a></li>
              <li><a href="/news" class="hover:text-white transition-colors">行业资讯</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">联系我们</h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li>电话: +86 400-123-4567</li>
              <li>邮箱: info@zhihe.com</li>
              <li>地址: 北京市朝阳区xxx路xxx号</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #374151;
}

#app {
  display: flex;
  flex-direction: column;
}

/* 确保主要内容区域占据剩余空间 */
main {
  flex: 1;
}
</style>
