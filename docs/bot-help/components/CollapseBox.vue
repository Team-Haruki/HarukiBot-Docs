<template>
  <details class="collapse-box" :open="isOpen">
    <summary class="collapse-summary" @click="toggle">
      <span class="collapse-icon"></span>
      {{ title }}
    </summary>
    <div class="collapse-content">
      <slot />
    </div>
  </details>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '点击展开内容'
  },
  defaultOpen: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(props.defaultOpen)

function toggle(event: Event) {
  event.preventDefault()
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.collapse-box {
  border: 2px solid #99CCFF;
  border-radius: 14px;
  background: #DDAACC;
  padding: 4px 14px;
  max-width: 640px;
  width: min(100%, 640px);
  margin: 8px auto;
}

.collapse-summary {
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  list-style: none;
  user-select: none;
}

.collapse-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-right: 10px;
  border-radius: 50%;
  background: #4b7cff;
  mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M8.5 5.5L15.5 12L8.5 18.5V5.5Z"/></svg>') no-repeat center / contain;
  transition: transform 0.2s ease;
}

details[open] .collapse-icon {
  transform: rotate(90deg);
}

.collapse-content {
  margin-top: 6px;
  color: #333;
  line-height: 1.5;
}
</style>
