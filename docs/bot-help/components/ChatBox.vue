<script setup lang="ts">
// 转换自 [cite: 1, 2, 3]
interface Message {
  text: string;
  from: 'user' | 'bot';
  mono?: boolean;
}

// 转换自 
withDefaults(defineProps<{
  messages?: Message[];
}>(), {
  messages: () => []
});
</script>

<template>
  <div class="chatbox">
    <div 
      v-for="(m, index) in messages" 
      :key="index"
      :class="['chat-row', m.from === 'user' ? 'chat-right' : 'chat-left']"
    >
      <div class="chat-avatar">
        <svg v-if="m.from === 'user'" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
        </svg>
        <img v-else src="/assets/images/icon.ico" alt="Bot" />
      </div>
      <div :class="['chat-bubble', { mono: m.mono }]" v-html="m.text" />
    </div>
  </div>
</template>

<style scoped>
.chatbox {
  --chat-panel-bg: var(--vp-c-bg-soft);
  --chat-panel-border: var(--vp-c-divider);
  --chat-bot-bg: var(--vp-c-bg);
  --chat-bot-text: var(--vp-c-text-1);
  --chat-bot-avatar-bg: var(--vp-c-bg);
  --chat-bot-avatar-border: var(--vp-c-divider);
  --chat-user-bg: var(--vp-c-brand-soft);
  --chat-user-text: var(--vp-c-brand-1);
  --chat-user-avatar-bg: var(--vp-c-brand-3);
  --chat-user-avatar-text: var(--vp-c-white);
  --chat-code-bg: rgb(0 0 0 / 6%);
  --chat-shadow: rgb(0 0 0 / 6%);

  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: var(--chat-panel-bg);
  border-radius: 14px;
  border: 1px solid var(--chat-panel-border);
  margin: 12px 0;
}

:global(.dark .chatbox) {
  --chat-panel-bg: rgb(255 255 255 / 4%);
  --chat-panel-border: rgb(255 255 255 / 10%);
  --chat-bot-bg: rgb(255 255 255 / 7%);
  --chat-bot-text: var(--vp-c-text-1);
  --chat-bot-avatar-bg: rgb(255 255 255 / 8%);
  --chat-bot-avatar-border: rgb(255 255 255 / 12%);
  --chat-user-bg: rgb(100 140 255 / 18%);
  --chat-user-text: rgb(195 210 255);
  --chat-user-avatar-bg: var(--vp-c-brand-2);
  --chat-user-avatar-text: var(--vp-c-white);
  --chat-code-bg: rgb(255 255 255 / 8%);
  --chat-shadow: rgb(0 0 0 / 24%);
}

.chat-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  max-width: 92%;
}

.chat-right {
  flex-direction: row-reverse;
  align-self: flex-end;
}

.chat-left {
  align-self: flex-start;
}

.chat-avatar {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.chat-left .chat-avatar {
  background: var(--chat-bot-avatar-bg);
  border: 1.5px solid var(--chat-bot-avatar-border);
}

.chat-right .chat-avatar {
  background: var(--chat-user-avatar-bg);
  color: var(--chat-user-avatar-text);
}

.chat-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.chat-bubble {
  padding: 9px 14px;
  border-radius: 14px;
  font-size: 0.92rem;
  line-height: 1.6;
  word-break: break-word;
}

.chat-left .chat-bubble {
  background: var(--chat-bot-bg);
  color: var(--chat-bot-text);
  border-top-left-radius: 4px;
  box-shadow: 0 1px 3px var(--chat-shadow);
}

.chat-right .chat-bubble {
  background: var(--chat-user-bg);
  color: var(--chat-user-text);
  border-top-right-radius: 4px;
  box-shadow: 0 1px 3px var(--chat-shadow);
}

.chat-bubble.mono {
  font-family: Consolas, Monaco, monospace;
  font-size: 0.85rem;
}

/* 在 Vue 中，使用 :deep() 处理深度选择器  */
:deep(.chat-bubble code) {
  background: var(--chat-code-bg);
  padding: 1px 5px;
  border-radius: 4px;
  font-family: Consolas, Monaco, monospace;
  font-size: 0.88em;
}
</style>
