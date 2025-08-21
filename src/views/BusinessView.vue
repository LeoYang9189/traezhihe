<template>
  <div class="business-view">
    <!-- 页面头部 -->
    <section class="bg-gradient-to-r from-green-600 to-green-800 text-white section-padding">
      <div class="container-custom">
        <h1 class="text-4xl font-bold mb-4">业务介绍</h1>
        <p class="text-xl opacity-90">专业的国际铁路运输与多式联运服务</p>
      </div>
    </section>

    <!-- 服务流程可视化 -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">国际铁路运输服务流程</h2>
        <div class="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <div v-for="(step, index) in serviceSteps" :key="index" class="flex items-center">
            <div class="text-center">
              <div class="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                {{ index + 1 }}
              </div>
              <p class="text-sm font-medium text-gray-700 max-w-20">{{ step }}</p>
            </div>
            <div v-if="index < serviceSteps.length - 1" class="hidden md:block">
              <svg class="w-8 h-8 text-gray-400 mx-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 业务分类展示 -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">核心业务服务</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in businessServices" :key="service.title" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-800">{{ service.title }}</h3>
              </div>
              
              <div class="mb-4">
                <h4 class="font-medium text-gray-700 mb-2">服务内容：</h4>
                <p class="text-gray-600 text-sm">{{ service.content }}</p>
              </div>
              
              <div class="mb-4">
                <h4 class="font-medium text-gray-700 mb-2">核心优势：</h4>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li v-for="advantage in service.advantages" :key="advantage" class="flex items-start">
                    <span class="text-green-500 mr-2">•</span>
                    {{ advantage }}
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-medium text-gray-700 mb-2">适用场景：</h4>
                <p class="text-gray-600 text-sm">{{ service.scenario }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务优势总结 -->
    <section class="section-padding bg-blue-600 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-8">为什么选择智和明远</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold mb-2">10+</div>
            <p class="text-blue-100">年行业经验</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold mb-2">NOVCC</div>
            <p class="text-blue-100">合规资质</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold mb-2">24/7</div>
            <p class="text-blue-100">全天候服务</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold mb-2">99%+</div>
            <p class="text-blue-100">客户满意度</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 服务流程步骤
const serviceSteps = ref([
  '询价',
  '订舱', 
  '装箱',
  '报关',
  '班列发运',
  '境外清关',
  '尾程派送'
])

// 业务服务详情
const businessServices = ref([
  {
    title: '铁路整箱服务',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    content: '提供完整集装箱的国际铁路运输服务，适合大批量货物运输',
    advantages: [
      '运输成本低于空运',
      '运输时间短于海运', 
      '安全性高，损耗率低',
      '环保节能'
    ],
    scenario: '适用于大批量、对时效有一定要求的货物运输，如机械设备、汽车配件等'
  },
  {
    title: '铁路拼箱服务',
    icon: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    content: '为中小批量货物提供拼箱服务，降低运输成本',
    advantages: [
      '降低小批量运输成本',
      '灵活的发货频次',
      '专业的货物配载',
      '全程跟踪服务'
    ],
    scenario: '适用于货量较小但需要定期发货的客户，如贸易公司、电商企业等'
  },
  {
    title: '海运空运多式联运',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    content: '整合海运、空运、铁路运输资源，提供最优运输方案',
    advantages: [
      '多种运输方式组合',
      '成本与时效平衡',
      '一站式服务',
      '全球网络覆盖'
    ],
    scenario: '适用于对成本和时效都有要求的复杂运输需求'
  },
  {
    title: '跨境卡航服务',
    icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0zM7 12h14l-4-4M7 12l4-4M7 12l4 4',
    content: '提供跨境公路运输服务，连接铁路运输网络',
    advantages: [
      '门到门服务',
      '灵活的运输路线',
      '快速通关',
      '实时货物跟踪'
    ],
    scenario: '适用于铁路无法直达地区的货物运输，提供最后一公里服务'
  },
  {
    title: '境外清关派送服务',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    content: '提供目的地清关和最终配送服务，确保货物顺利到达',
    advantages: [
      '专业清关团队',
      '熟悉各国法规',
      '快速通关流程',
      '本地化服务'
    ],
    scenario: '适用于需要在目的地国家进行清关和配送的进出口贸易'
  }
])
</script>

<style scoped>
/* 组件特定样式 */
.business-view {
  min-height: 100vh;
}
</style>
