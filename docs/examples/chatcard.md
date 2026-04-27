# 聊天卡片示例

<script setup>
import ChatBox from '/bot-help/components/ChatBox.vue'

const demoMessages = [
  { text: '/help', from: 'user' },
  { text: 'Bot帮助文档:https://neo.haruki.seiunx.com/', from: 'bot' }
]
</script>

<ChatBox :messages="demoMessages" />