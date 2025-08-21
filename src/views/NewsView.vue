<template>
  <div class="news-view">
    <!-- 页面头部 -->
    <section class="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white section-padding">
      <div class="container-custom">
        <h1 class="text-4xl font-bold mb-4">行业资讯</h1>
        <p class="text-xl opacity-90">关注国际铁路运输行业最新动态</p>
      </div>
    </section>

    <!-- 资讯分类导航 -->
    <section class="bg-white border-b">
      <div class="container-custom">
        <div class="flex flex-wrap gap-4 py-6">
          <button 
            v-for="category in newsCategories" 
            :key="category.id"
            @click="activeCategory = category.id"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-colors duration-200',
              activeCategory === category.id 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- 资讯列表 -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- 主要资讯区域 -->
          <div class="lg:col-span-2">
            <div class="space-y-8">
              <article 
                v-for="article in filteredNews" 
                :key="article.id"
                class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div class="md:flex">
                  <div class="md:w-1/3">
                    <img 
                      :src="article.image" 
                      :alt="article.title"
                      class="w-full h-48 md:h-full object-cover"
                    >
                  </div>
                  <div class="md:w-2/3 p-6">
                    <div class="flex items-center mb-2">
                      <span class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {{ getCategoryName(article.category) }}
                      </span>
                      <span class="text-gray-500 text-sm ml-3">{{ article.date }}</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3 hover:text-indigo-600 cursor-pointer">
                      {{ article.title }}
                    </h3>
                    <p class="text-gray-600 mb-4 line-clamp-3">{{ article.summary }}</p>
                    <div class="flex items-center justify-between">
                      <span class="text-gray-500 text-sm">阅读量: {{ article.views }}</span>
                      <button class="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                        阅读更多 →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <!-- 分页 -->
            <div class="flex justify-center mt-12">
              <nav class="flex space-x-2">
                <button class="px-3 py-2 text-gray-500 hover:text-gray-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button 
                  v-for="page in 5" 
                  :key="page"
                  :class="[
                    'px-4 py-2 rounded-md font-medium',
                    page === 1 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  ]"
                >
                  {{ page }}
                </button>
                <button class="px-3 py-2 text-gray-500 hover:text-gray-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </nav>
            </div>
          </div>

          <!-- 侧边栏 -->
          <div class="space-y-8">
            <!-- 热门资讯 -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-4">热门资讯</h3>
              <div class="space-y-4">
                <div v-for="(hot, index) in hotNews" :key="hot.id" class="flex items-start">
                  <span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">
                    {{ index + 1 }}
                  </span>
                  <div>
                    <h4 class="text-sm font-medium text-gray-800 hover:text-indigo-600 cursor-pointer line-clamp-2">
                      {{ hot.title }}
                    </h4>
                    <p class="text-xs text-gray-500 mt-1">{{ hot.date }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 行业数据 -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-4">行业数据</h3>
              <div class="space-y-4">
                <div v-for="stat in industryStats" :key="stat.label" class="flex justify-between items-center">
                  <span class="text-gray-600">{{ stat.label }}</span>
                  <span class="font-bold text-indigo-600">{{ stat.value }}</span>
                </div>
              </div>
            </div>

            <!-- 相关链接 -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-4">相关链接</h3>
              <div class="space-y-2">
                <a 
                  v-for="link in relatedLinks" 
                  :key="link.name"
                  :href="link.url"
                  target="_blank"
                  class="block text-indigo-600 hover:text-indigo-800 text-sm"
                >
                  {{ link.name }} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 当前激活的分类
const activeCategory = ref('all')

// 资讯分类
const newsCategories = ref([
  { id: 'all', name: '全部' },
  { id: 'policy', name: '政策法规' },
  { id: 'market', name: '市场动态' },
  { id: 'technology', name: '技术创新' },
  { id: 'cooperation', name: '国际合作' }
])

// 资讯数据
const newsData = ref([
  {
    id: 1,
    title: '中欧班列运行质量持续提升，2024年开行数量再创新高',
    summary: '据统计，2024年中欧班列累计开行超过1.7万列，同比增长6%，运输货物总重量达到190万标箱，为"一带一路"建设注入新动力。',
    category: 'market',
    date: '2024-01-15',
    views: '2.3k',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop'
  },
  {
    id: 2,
    title: '国家发改委发布新版国际铁路运输管理办法',
    summary: '新办法进一步规范了国际铁路运输市场秩序，明确了运输企业的资质要求和服务标准，为行业健康发展提供了制度保障。',
    category: 'policy',
    date: '2024-01-12',
    views: '1.8k',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
  },
  {
    id: 3,
    title: '数字化技术助力铁路运输效率提升',
    summary: '通过引入物联网、大数据、人工智能等技术，铁路运输的智能化水平不断提高，货物跟踪精度和运输效率显著提升。',
    category: 'technology',
    date: '2024-01-10',
    views: '1.5k',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop'
  },
  {
    id: 4,
    title: '中国与哈萨克斯坦签署铁路运输合作新协议',
    summary: '双方将在铁路基础设施建设、运输组织优化、通关便利化等方面深化合作，进一步提升中亚班列运行效率。',
    category: 'cooperation',
    date: '2024-01-08',
    views: '1.2k',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=250&fit=crop'
  },
  {
    id: 5,
    title: '绿色物流成为铁路运输发展新趋势',
    summary: '随着环保意识的增强，越来越多的企业选择铁路运输作为绿色物流解决方案，铁路运输的环保优势日益凸显。',
    category: 'market',
    date: '2024-01-05',
    views: '980',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop'
  }
])

// 热门资讯
const hotNews = ref([
  {
    id: 101,
    title: '中欧班列运行质量持续提升，2024年开行数量再创新高',
    date: '2024-01-15'
  },
  {
    id: 102,
    title: '"一带一路"铁路运输网络不断完善',
    date: '2024-01-14'
  },
  {
    id: 103,
    title: '国际铁路运输标准化进程加速推进',
    date: '2024-01-13'
  },
  {
    id: 104,
    title: '智能化技术在铁路运输中的应用前景',
    date: '2024-01-12'
  },
  {
    id: 105,
    title: '中亚班列运输效率持续优化',
    date: '2024-01-11'
  }
])

// 行业数据
const industryStats = ref([
  { label: '年度班列开行', value: '1.7万列' },
  { label: '货物运输量', value: '190万标箱' },
  { label: '覆盖国家', value: '25个' },
  { label: '通达城市', value: '200+' },
  { label: '同比增长', value: '6%' }
])

// 相关链接
const relatedLinks = ref([
  { name: '中国国家铁路集团', url: '#' },
  { name: '中欧班列信息平台', url: '#' },
  { name: '"一带一路"官网', url: '#' },
  { name: '国际铁路联盟', url: '#' },
  { name: '海关总署', url: '#' }
])

// 过滤后的资讯
const filteredNews = computed(() => {
  if (activeCategory.value === 'all') {
    return newsData.value
  }
  return newsData.value.filter(news => news.category === activeCategory.value)
})

// 获取分类名称
const getCategoryName = (categoryId: string) => {
  const category = newsCategories.value.find(cat => cat.id === categoryId)
  return category ? category.name : '未知'
}
</script>

<style scoped>
/* 组件特定样式 */
.news-view {
  min-height: 100vh;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
