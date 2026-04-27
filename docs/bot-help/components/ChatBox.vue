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
/* 样式直接复用即可 [cite: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] */
.chatbox {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: #f0f4e8;
  border-radius: 14px;
  border: 1px solid #d8e3cc;
  margin: 12px 0;
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
  background: #fff;
  border: 1.5px solid #c5e1a5;
}

.chat-right .chat-avatar {
  background: #66bb6a;
  color: #fff;
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
  background: #fff;
  color: #263238;
  border-top-left-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}

.chat-right .chat-bubble {
  background: #a5d6a7;
  color: #1b5e20;
  border-top-right-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.chat-bubble.mono {
  font-family: Consolas, Monaco, monospace;
  font-size: 0.85rem;
}

/* 在 Vue 中，使用 :deep() 处理深度选择器  */
:deep(.chat-bubble code) {
  background: rgba(0, 0, 0, 0.06);
  padding: 1px 5px;
  border-radius: 4px;
  font-family: Consolas, Monaco, monospace;
  font-size: 0.88em;
}
</style>