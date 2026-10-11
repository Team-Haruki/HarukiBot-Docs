---
title: 养成查询
outline: false
---

<script setup>
import ChatBox from '/bot-help/components/ChatBox.vue'

const challenge = [
  { text: '/每日挑战', from: 'user' },
  { text: '[包含所有角色每日挑战分数和剩余奖励的长图]', from: 'bot' }
]

const power = [
  { text: '/角色加成', from: 'user' },
  { text: '[包含所有加成信息的长图]', from: 'bot' }
]

const areaitem = [
  { text: '/区域道具 mmj', from: 'user' },
  { text: '[给 mmj 团体或团体角色加成的区域道具列表]', from: 'bot' }
]

const kizuna = [
  { text: '/羁绊等级', from: 'user' },
  { text: '[包含所有已经解锁羁绊等级的羁绊的等级进度的列表]', from: 'bot' }
]

</script>
## 养成

以下指令需要先在 Haruki 工具箱上传抓包数据（Suite），都可以加 `u序号` 选择自己的第几个绑定账号。

- `/每日挑战` `/挑战信息` `/挑战一览` `/挑战详情` `/挑战进度` `/pjsk challenge info` `/pjsk_challenge_info`
  - 查看各角色的挑战 Live 等级、最高分和奖励进度。
- `/角色加成` `/加成信息` `/加成一览` `/加成详情` `/加成进度` `/pjsk power bonus info` `/pjsk_power_bonus_info`
  - 查看角色、团体和属性的综合力加成进度。
- `/区域道具` `/区域道具升级` `/区域道具升级材料` `/area item` `/pjsk area item`
  - 查看区域道具的等级和升级材料，必须写对象，例如 `/区域道具 miku`、`/区域道具 25h 花 full`。
- `/羁绊` `/羁绊等级` `/羁绊信息` `/角色羁绊` `/牵绊` `/牵绊等级` `/牵绊信息` `/角色牵绊` `/pjsk bond` `/pjsk bonds`
  - 查看角色之间的羁绊等级，可以写角色只看这个角色的羁绊；不写时显示等级最高的组合。
- `/队长次数` `/角色次数` `/队长统计` `/领队统计` `/角色领队` `/角色游玩次数` `/队长游玩次数` `/pjsk leader count`
  - 查看各角色担任队长的 Live 次数。
- `/cr任务` `/角色等级任务`
  - 查看角色等级任务的进度，必须写角色，例如 `/cr任务 miku`。加 `all`（也可以写 `全部`、`总表`）和任务类型时显示这个任务的全部档位，例如 `/cr任务 miku all 队长次数`、`/角色等级任务 mnr 全部 服装`。
  - 任务类型包括 `队长次数`、`休息室次数`、`服装`、`贴纸`、`区域对话`、`前篇`、`后篇`、`anvo`、`卡面`、`台词`、`单人家具`、`团家具`、`花树`、`大树`、`4星技能`、`低星技能`、`4星专精`、`低星专精` 等，发送 `/cr任务 -help` 查看全部任务类型。

## 区域道具可选参数说明

| 参数类型 | 具体参数 | 特殊说明 |
|---|---|---|
| 团体 | `ln` `mmj` `vbs` `ws` `25h` `vs` | 查询指定团体的区域道具 |
| 角色 | `mnr` `hrk` `airi` `szk` | 查询指定角色的区域道具 |
| 属性 | `粉` `蓝` `绿` `橙` `紫` | 查询指定加成属性的区域道具 |
| 植物类型 | `树` `花` `花树` | 只看树或花；`花树` 同时看两种（也就是校园里的属性加成道具） |
| 大树 | `大树` | 「想いの大樹」，全角色加成 |
| 全部等级 | `full` | 显示全部等级的升级材料，需要同时写对象 |

请注意，如果一个区域道具已经升级完毕，它将不会显示任何升级需求。

# 指令示例
<div class="chatbox-grid">
<ChatBox :messages="challenge" />

<ChatBox :messages="power" />

<ChatBox :messages="areaitem" />

<ChatBox :messages="kizuna" />
</div>
