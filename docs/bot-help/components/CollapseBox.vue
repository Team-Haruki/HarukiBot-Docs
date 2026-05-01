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
  --cb-border: rgb(255 255 255 / 62%);
  --cb-bg: rgb(255 255 255 / 10%);
  --cb-bg-strong: rgb(255 255 255 / 26%);
  --cb-bg-soft: rgb(255 255 255 / 6%);
  --cb-shadow: rgb(32 43 68 / 10%);
  --cb-line: rgb(255 255 255 / 42%);
  --cb-summary-text: var(--vp-c-text-1);
  --cb-content-text: var(--vp-c-text-2);
  --cb-icon-start: #4b7cff;
  --cb-icon-end: #28c9b7;

  border: 1px solid var(--cb-border);
  border-radius: 14px;
  position: relative;
  background:
    radial-gradient(circle at 18% 0%, rgb(255 255 255 / 34%), transparent 34%),
    linear-gradient(135deg, var(--cb-bg-strong), var(--cb-bg-soft) 58%, rgb(255 255 255 / 12%)),
    var(--cb-bg);
  box-shadow:
    0 12px 30px var(--cb-shadow),
    inset 0 1px 0 rgb(255 255 255 / 70%),
    inset 0 -1px 0 rgb(255 255 255 / 18%);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  padding: 6px 16px;
  max-width: 640px;
  width: min(100%, 640px);
  margin: 12px auto;
  overflow: hidden;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}

:global(.dark .collapse-box) {
  --cb-border: rgb(255 255 255 / 16%);
  --cb-bg: rgb(0 0 0 / 28%);
  --cb-shadow: rgb(0 0 0 / 30%);
  --cb-line: rgb(255 255 255 / 10%);
  --cb-summary-text: rgb(240 245 252 / 96%);
  --cb-content-text: rgb(218 226 238 / 88%);
  --cb-icon-start: #58a6ff;
  --cb-icon-end: #7dd3fc;
}

:global(.dark .collapse-box) {
  background: var(--cb-bg);
  backdrop-filter: blur(18px) saturate(130%);
  -webkit-backdrop-filter: blur(18px) saturate(130%);
  box-shadow:
    0 12px 28px var(--cb-shadow),
    inset 0 0 0 1px rgb(255 255 255 / 2%);
}

.collapse-summary {
  display: flex;
  align-items: center;
  font-weight: 700;
  color: var(--cb-summary-text);
  cursor: pointer;
  list-style: none;
  user-select: none;
  min-height: 34px;
}

.collapse-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-right: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cb-icon-start), var(--cb-icon-end));
  mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M8.5 5.5L15.5 12L8.5 18.5V5.5Z"/></svg>') no-repeat center / contain;
  transition: transform 0.2s ease;
}

details[open] .collapse-icon {
  transform: rotate(90deg);
}

.collapse-content {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--cb-line);
  color: var(--cb-content-text);
  line-height: 1.5;
}
</style>
