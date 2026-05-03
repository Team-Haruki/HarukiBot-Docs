<template>
  <button
    v-if="hasSidebar"
    class="sidebar-toggle"
    type="button"
    :aria-label="collapsed ? '展开侧边栏' : '收起侧边栏'"
    :title="collapsed ? '展开侧边栏' : '收起侧边栏'"
    @click="toggle"
  >
    <span class="sidebar-toggle-icon" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
import { useLayout } from 'vitepress/theme'
import { onMounted, ref, watch } from 'vue'

const storageKey = 'haruki-docs-sidebar-collapsed'
const collapsed = ref(false)
const { hasSidebar } = useLayout()

function applyState() {
  const isCollapsed = hasSidebar.value && collapsed.value
  document.documentElement.classList.toggle('sidebar-collapsed', isCollapsed)
}

function toggle() {
  collapsed.value = !collapsed.value
}

onMounted(() => {
  collapsed.value = localStorage.getItem(storageKey) === 'true'
  applyState()
})

watch(collapsed, (value) => {
  localStorage.setItem(storageKey, String(value))
  applyState()
})

watch(hasSidebar, applyState)
</script>
