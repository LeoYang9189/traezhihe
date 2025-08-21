<template>
  <div class="company-view">
    <!-- 页面头部 -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white section-padding">
      <div class="container-custom">
        <h1 class="text-4xl font-bold mb-4">公司介绍</h1>
        <p class="text-xl opacity-90">了解智和明远的发展历程与企业实力</p>
      </div>
    </section>

    <!-- 公司背景 -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-gray-800">公司背景</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span class="text-lg"><strong>成立时间：</strong>2022年</span>
              </div>
              <div class="flex items-center">
                <div class="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span class="text-lg"><strong>资质认证：</strong>NOVCC资质</span>
              </div>
              <div class="flex items-start">
                <div class="w-4 h-4 bg-blue-600 rounded-full mr-4 mt-1"></div>
                <span class="text-lg"><strong>业务范围：</strong>国际铁路运输代理，兼海运、空运、国内运输等多式联运服务</span>
              </div>
            </div>
          </div>
          <div class="bg-gray-100 p-8 rounded-lg">
            <h3 class="text-2xl font-semibold mb-4 text-center">企业愿景</h3>
            <p class="text-center text-gray-700 text-lg leading-relaxed">
              志同道合｜明智致远<br>
              智和明远｜轨道链接
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 业务范围与客户群体 -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">业务范围与客户群体</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- 业务范围 -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold mb-6 text-blue-600">核心业务</h3>
            <ul class="space-y-3">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                国际铁路运输
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                一带一路沿线集装箱买卖和租赁
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                多式联运服务
              </li>
            </ul>
          </div>
          
          <!-- 客户群体 -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold mb-6 text-blue-600">服务客户</h3>
            <ul class="space-y-3">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
                国企货运公司
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
                包列庄家客户
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
                中小企业客户
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队优势 -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">团队优势</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">丰富经验</h3>
            <p class="text-gray-600">10年国际铁路运输经验，深度了解行业运作规律</p>
          </div>
          
          <div class="text-center">
            <div class="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">专业解决</h3>
            <p class="text-gray-600">专业解决运输疑难问题，提供定制化解决方案</p>
          </div>
          
          <div class="text-center">
            <div class="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">一站式服务</h3>
            <p class="text-gray-600">提供门到门一站式服务，全程跟踪货物运输</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 公司介绍页面组件
// 展示智和明远公司的背景信息、业务范围和团队优势
</script>

<style scoped>
/* 组件特定样式 */
</style>
