<template>
  <div class="advantages-view">
    <!-- 页面头部 -->
    <section class="bg-gradient-to-r from-purple-600 to-purple-800 text-white section-padding">
      <div class="container-custom">
        <h1 class="text-4xl font-bold mb-4">班列优势</h1>
        <p class="text-xl opacity-90">智和明远国际铁路运输的核心竞争力</p>
      </div>
    </section>

    <!-- 核心优势展示 -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">我们的核心优势</h2>
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div v-for="advantage in coreAdvantages" :key="advantage.title" class="text-center group">
            <div class="bg-gradient-to-br from-blue-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="advantage.icon"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ advantage.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 班列运输优势对比 -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">运输方式对比</h2>
        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead class="bg-blue-600 text-white">
              <tr>
                <th class="px-6 py-4 text-left">对比项目</th>
                <th class="px-6 py-4 text-center">铁路运输</th>
                <th class="px-6 py-4 text-center">海运</th>
                <th class="px-6 py-4 text-center">空运</th>
                <th class="px-6 py-4 text-center">公路运输</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in comparisonData" :key="index" :class="index % 2 === 0 ? 'bg-gray-50' : 'bg-white'">
                <td class="px-6 py-4 font-medium text-gray-800">{{ item.category }}</td>
                <td class="px-6 py-4 text-center">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" :class="getScoreClass(item.rail)">
                    {{ item.rail }}
                  </span>
                </td>
                <td class="px-6 py-4 text-center">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" :class="getScoreClass(item.sea)">
                    {{ item.sea }}
                  </span>
                </td>
                <td class="px-6 py-4 text-center">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" :class="getScoreClass(item.air)">
                    {{ item.air }}
                  </span>
                </td>
                <td class="px-6 py-4 text-center">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" :class="getScoreClass(item.road)">
                    {{ item.road }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 班列网络覆盖 -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">班列网络覆盖</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-semibold mb-6 text-blue-600">覆盖范围</h3>
            <div class="space-y-4">
              <div v-for="route in railwayRoutes" :key="route.name" class="flex items-center p-4 bg-gray-50 rounded-lg">
                <div class="bg-blue-100 p-2 rounded-full mr-4">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">{{ route.name }}</h4>
                  <p class="text-gray-600 text-sm">{{ route.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
            <h3 class="text-2xl font-semibold mb-6 text-center text-gray-800">运输数据</h3>
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <p class="text-gray-600">覆盖国家</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-600 mb-2">50+</div>
                <p class="text-gray-600">目的地城市</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600 mb-2">100+</div>
                <p class="text-gray-600">万吨货量</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-orange-600 mb-2">99%+</div>
                <p class="text-gray-600">准点率</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务保障 -->
    <section class="section-padding bg-blue-600 text-white">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12">服务保障</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="guarantee in serviceGuarantees" :key="guarantee.title" class="text-center">
            <div class="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="guarantee.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ guarantee.title }}</h3>
            <p class="text-blue-100 text-sm">{{ guarantee.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 核心优势数据
const coreAdvantages = ref([
  {
    title: 'NOVCC合规资质',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    description: '拥有国际铁路运输合规资质，确保运输过程的合法性和安全性，为客户提供可靠的服务保障。'
  },
  {
    title: '全球箱源网络',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
    description: '建立了覆盖全球的集装箱资源网络，确保充足的箱源供应，满足不同客户的运输需求。'
  },
  {
    title: '全客户类型服务经验',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    description: '服务过国企、包列庄家、中小企业等各类客户，积累了丰富的服务经验和解决方案。'
  }
])

// 运输方式对比数据
const comparisonData = ref([
  {
    category: '运输时效',
    rail: '优秀',
    sea: '一般',
    air: '优秀',
    road: '良好'
  },
  {
    category: '运输成本',
    rail: '优秀',
    sea: '优秀',
    air: '一般',
    road: '良好'
  },
  {
    category: '运输安全',
    rail: '优秀',
    sea: '良好',
    air: '优秀',
    road: '良好'
  },
  {
    category: '环保程度',
    rail: '优秀',
    sea: '良好',
    air: '一般',
    road: '一般'
  },
  {
    category: '运输容量',
    rail: '优秀',
    sea: '优秀',
    air: '一般',
    road: '一般'
  }
])

// 班列路线数据
const railwayRoutes = ref([
  {
    name: '中欧班列',
    description: '连接中国与欧洲主要城市，覆盖德国、波兰、俄罗斯等国家'
  },
  {
    name: '中亚班列',
    description: '通往哈萨克斯坦、乌兹别克斯坦、吉尔吉斯斯坦等中亚国家'
  },
  {
    name: '中俄班列',
    description: '直达俄罗斯各主要城市，包括莫斯科、圣彼得堡等'
  },
  {
    name: '中蒙班列',
    description: '连接蒙古国乌兰巴托等重要城市，服务中蒙贸易'
  }
])

// 服务保障数据
const serviceGuarantees = ref([
  {
    title: '全程跟踪',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18H3a2 2 0 01-2-2V8a2 2 0 012-2h2m0 12h10a2 2 0 002-2v-8a2 2 0 00-2-2H5m0 12V6',
    description: '实时货物跟踪系统，随时掌握货物位置和状态'
  },
  {
    title: '保险保障',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    description: '提供货物运输保险，保障客户利益'
  },
  {
    title: '24/7服务',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    description: '全天候客户服务，及时响应客户需求'
  },
  {
    title: '专业团队',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
    description: '经验丰富的专业团队，提供专业服务'
  }
])

// 获取评分样式类
const getScoreClass = (score: string) => {
  switch (score) {
    case '优秀':
      return 'bg-green-100 text-green-800'
    case '良好':
      return 'bg-blue-100 text-blue-800'
    case '一般':
      return 'bg-yellow-100 text-yellow-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}
</script>

<style scoped>
/* 组件特定样式 */
.advantages-view {
  min-height: 100vh;
}
</style>
