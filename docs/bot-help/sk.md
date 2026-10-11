---
title: 榜线与 SK
outline: false
---

<script setup>
import ChatBox from '/bot-help/components/ChatBox.vue'

const sklineDemo = [
  { text: '/sk线', from: 'user' },
  { text: '[当期活动各名次的榜线]', from: 'bot' }
]

const skDemo = [
  { text: '/sk', from: 'user' },
  { text: '[自己在当期活动的名次和 PT]', from: 'bot' }
]

const sk1DeckDemo = [
  { text: '/sk 1', from: 'user' },
  { text: '[当期活动第 1 名玩家的 PT]', from: 'bot' }
]

const wlsklineDemo = [
  { text: '/wl榜线 knd', from: 'user' },
  { text: '[当期 WL 活动 knd 章节各名次的榜线]', from: 'bot' }
]

</script>

# 榜线与 SK

## 常用指令

- `/榜线` `/sk线` `/skl` `/sk-line` `/pjsk sk line` `/pjsk board line`
  - 查询各名次当前的 PT，不写名次时显示常用名次，例如 `/榜线 100 1000`、`/sk线 event123`。
- `/sk` `/sk查分` `/sk查询` `/sk-query` `/pjsk board` `/pjsk sk board`
  - 查询活动排名：自己、指定玩家或指定名次的 PT 和名次，不写时查询自己，例如 `/sk 100`、`/sk 1-10`、`/sk u2`。
  - 对方发送 `/隐藏sk` 后，不能再通过 @ 查询对方的活动排名。
- `/时速` `/sks` `/skv` `/时速线` `/sk时速` `/sktime` `/sk-speed` `/pjsk sk speed` `/pjsk board speed`
  - 查询常用名次最近一段时间的 PT 增长速度，可以写分钟数（默认 60），例如 `/时速 30`。
- `/日速` `/每日时速` `/skds` `/skdv` `/sk日速` `/pjsk sk daily speed` `/pjsk board daily speed`
  - 查询常用名次最近几天的日均 PT 增长，可以写天数（默认 1），例如 `/日速 3`。
- `/榜线预测` `/sk预测` `/skp` `/pjsk sk predict` `/pjsk board predict`
  - 查询各名次活动结束时的预测 PT，例如 `/sk预测 100 1000`。
- `/查房` `/cf` `/sk查房` `/pjsk查房` `/sk-check-room`
  - 查看指定玩家或名次附近最近的打榜记录，不写时查询自己，例如 `/查房 100`、`/cf u2`。
- `/cfl`
  - 一次查看前 100 名的常用名次最近的打榜记录。
- `/查水表` `/csb` `/停车时间` `/pjsk查水表`
  - 查看指定玩家或名次的停车时间（停止打榜的时段），不写时查询自己，例如 `/查水表 100`、`/csb @群友`。
- `/玩家追踪` `/ptr` `/玩家轨迹` `/sk玩家轨迹` `/pjsk ptr` `/pjsk玩家追踪` `/sk-player-trace`
  - 查看玩家本期活动的 PT 变化曲线。可以写玩家或名次（最多 2 个），写 `#100` 可以同时画出某个名次的曲线作对比，例如 `/玩家追踪 u2 #100`、`/ptr 100`。
- `/排名追踪` `/rtr` `/skt` `/sklt` `/sktl` `/pjsk追踪` `/pjsk sk追踪` `/sk-rank-trace` `/档线轨迹` `/sk档线轨迹`
  - 查看名次的 PT 变化曲线，例如 `/排名追踪 100 1000`、`/排名追踪 event123 100`。
- `/胜率预测` `/胜率` `/预测胜率` `/5v5预测` `/5v5胜率` `/预测5v5` `/pjsk winrate predict`
  - 预测当前欢乐嘉年华(5v5)活动两队的胜率，只支持日服(JP)。

## 说明

- 名次：一个或多个正整数，用空格分隔；范围写成 `起始-结束`，一次最多 20 个名次。
- 玩家：写游戏 UID、`u序号`（自己的第几个绑定账号）或 `@群友`。
- 活动：`event123` 或 `e123` 指定活动；不写时使用当前活动。
- WL 章节：在指令前加 `wl` 查询 WL 章节榜，角色写在参数开头，例如 `/wl榜线 miku`、`/wlsk miku 100`；不写角色时查询当前章节。也可以在参数里写 `wl2`（第 2 章）或 `wlmiku`。
- `/时速` 后的数字单位是分钟，例如 `/时速 10` 是 10 分钟内的 PT 增长量换算成的时速。
- `/日速` 后的数字单位是天，例如 `/日速 2` 是 2 天内的 PT 增长量换算成的日速。
- 通过 @群友 查询时，对方的游戏 UID 是否打码由对方的 `/隐藏id` 设置决定，见[隐私设置](/bot-help/account#隐私设置)。

## 指令示例

<div class="chatbox-grid">

<ChatBox :messages="sklineDemo" />

<ChatBox :messages="skDemo" />

<ChatBox :messages="sk1DeckDemo" />

<ChatBox :messages="wlsklineDemo" />

</div>