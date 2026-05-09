---
title: 养成查询
outline: false
---

<script setup>
import ChatBox from '/bot-help/components/ChatBox.vue'

const challenge = [
  { text: '/每日挑战', from: 'user' },
  { text: '[包含所有角色的每日挑战的分数信息和剩余奖励的长图]', from: 'bot' }
]

const power = [
  { text: '/角色加成', from: 'user' },
  { text: '[包含所有加成信息的长图]', from: 'bot' }
]

const areaitem = [
  { text: '/区域道具 mmj', from: 'user' },
  { text: '[包含给予mmj团体或者团队角色加成的区域道具的列表]', from: 'bot' }
]

const kizuna = [
  { text: '/羁绊等级', from: 'user' },
  { text: '[包含所有已经解锁羁绊等级的羁绊的等级进度的列表]', from: 'bot' }
]

</script>
## 养成

- `/每日挑战` `/pjsk challenge info` `/挑战信息` `/挑战详情` `/挑战进度`
  - 查询账号每日挑战的奖励获取进度。
- `/角色加成` `/pjsk power bonus info` `/加成信息` `/加成详情` `/加成进度`
  - 查询账号的各角色加成信息。
- `/区域道具` `/pjsk area item` `/area item` `/区域道具升级`
  - 查询对应区域道具升级所需要的素材。
- `/羁绊` `/pjsk bonds` `/羁绊等级` `/角色羁绊` `/牵绊`
  - 查询账号的羁绊等级。
- `/队长统计` `队长次数` `/领队统计` `/角色领队` `/pjsk leader count`
  - 查询队长次数。

## 区域道具可选参数说明

| 参数类型 | 具体参数 | 特殊说明 |
|---|---|---|
| 团队名 | `mmj` `25h` `ln` | 查询指定团队的区域道具 |
| 角色名 | `mnr` `hrk` `airi` `szk` | 查询指定角色的区域道具 |
| 属性 | `蓝` `橙` `红` | 查询指定加成属性的区域道具 |
| 植物类型 | `树` `花` | 查询类型为树或者花的区域道具(也就是校园里的属性加成道具) |
| 全部 | `full` | 查询所有的区域道具 |

请注意，如果一个区域道具已经升级完毕，它将不会显示任何升级需求

# 指令示例
<div class="chatbox-grid">
<ChatBox :messages="challenge" />

<ChatBox :messages="power" />

<ChatBox :messages="areaitem" />

<ChatBox :messages="kizuna" />
</div>
