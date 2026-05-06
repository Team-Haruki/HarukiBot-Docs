---
title: 活动查询
---

<script setup>
import ChatBox from '/bot-help/components/ChatBox.vue'

const eventdetail = [
  { text: '/活动 17', from: 'user' },
  { text: '[id为17的活动详情]', from:'bot' }
]

</script>

# 活动

## 活动指令

- `/活动列表` `/pjsk events` `/events` `/活动一览` `/event-list`
  - 活动列表。
- `/查活动` `/pjsk event` `/活动` `/event`
  - 查询当前/指定活动信息。
- `/冲榜记录` `/pjsk event record` `/活动记录`
  - 查询指定账号的冲榜记录（⚠️需要上传 suite 数据）。

## 可选参数说明

- 查询单个活动格式：
  - 直接使用活动 id：`123`
  - 负数索引，表示倒数第几个活动：`-1`
  - 箱活缩写，例如 `mnr1`
- 查询多个活动筛选方式：
  - 团名英文缩写：`mmj` `vs`
  - 查询某个角色有出场的活动：`miku` `miku ick`
  - 查询角色箱活：`ick箱` `ickban`
  - 查询混活：`混活`
  - bonus 属性：`cool` `蓝` `蓝星`
  - 年份：`2025年` `今年` `去年`
  - 活动类型：`普活` `5v5` `wl` `wl`
- 以上参数可以混合使用，用空格分隔。

## 指令示例
<div class="chatbox-grid">
<ChatBox :messages="eventdetail" />
</div>
