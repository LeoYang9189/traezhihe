<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo区域 -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <span class="text-xl font-bold text-gray-800">智和明远</span>
          </router-link>
        </div>

        <!-- 桌面端导航菜单 -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link
              v-for="item in navigationItems"
              :key="item.name"
              :to="item.path"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                isActiveRoute(item.path)
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
              ]"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- 联系按钮 -->
        <div class="hidden md:block">
          <router-link
            to="/contact"
            class="btn-primary"
          >
            联系我们
          </router-link>
        </div>

        <!-- 移动端菜单按钮 -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-controls="mobile-menu"
            :aria-expanded="isMobileMenuOpen"
          >
            <span class="sr-only">打开主菜单</span>
            <!-- 汉堡菜单图标 -->
            <svg
              v-if="!isMobileMenuOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- 关闭图标 -->
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- 移动端菜单 -->
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden"
        id="mobile-menu"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            @click="closeMobileMenu"
            :class="[
              'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200',
              isActiveRoute(item.path)
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
            ]"
          >
            {{ item.name }}
          </router-link>
          <router-link
            to="/contact"
            @click="closeMobileMenu"
            class="block w-full text-left btn-primary mt-4"
          >
            联系我们
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

// 当前路由
const route = useRoute()

// 移动端菜单状态
const isMobileMenuOpen = ref(false)

// 导航菜单项
const navigationItems = ref([
  { name: '首页', path: '/' },
  { name: '公司介绍', path: '/company' },
  { name: '业务介绍', path: '/business' },
  { name: '班列优势', path: '/advantages' },
  { name: '行业资讯', path: '/news' },
  { name: '关于我们', path: '/about' }
])

/**
 * 判断是否为当前激活路由
 * @param path 路由路径
 */
const isActiveRoute = (path: string): boolean => {
  return route.path === path
}

/**
 * 切换移动端菜单
 */
const toggleMobileMenu = (): void => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

/**
 * 关闭移动端菜单
 */
const closeMobileMenu = (): void => {
  isMobileMenuOpen.value = false
}

// 监听路由变化，自动关闭移动端菜单
computed(() => {
  if (route.path) {
    isMobileMenuOpen.value = false
  }
})
</script>

<style scoped>
/* 组件特定样式 */
.router-link-active {
  @apply bg-indigo-100 text-indigo-700;
}

/* 平滑过渡效果 */
#mobile-menu {
  transition: all 0.3s ease-in-out;
}

/* 确保移动端菜单在正确的层级 */
.md\:hidden {
  position: relative;
  z-index: 40;
}
</style>
