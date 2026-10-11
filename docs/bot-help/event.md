---
title: 活动查询
outline: false
---

<script setup>
import ChatBox from '/bot-help/components/ChatBox.vue'

const eventdetail = [
  { text: '/活动 17', from: 'user' },
  { text: '[活动 ID 17 的详情]', from: 'bot' }
]

const eventlist = [
  { text: '/活动列表', from: 'user' },
  { text: '[当前区服所有活动的列表]', from: 'bot' }
]

const eventlistmmj = [
  { text: '/活动列表 mmj 橙', from: 'user'},
  { text: '[有 mmj 成员参与、加成属性为快乐（橙）的活动列表]', from: 'bot' }
]

const eventlistonlymmj = [
  { text: '/活动列表 纯mmj 蓝', from: 'user'},
  { text: '[mmj 单团、加成属性为帅气（蓝）的活动列表]', from: 'bot' }
]

const eventplanner = [
  { text: '/活动规划 pt1000w 当前pt120w 虾ex 龙hd', from: 'user' },
  { text: '[按目标 PT、歌曲、演出能量和组卡结果生成的活动规划]', from: 'bot' }
]

</script>

# 活动

## 活动指令

- `/活动` `/查活动` `/event` `/pjsk event` `/pjsk_event`
  - 查看活动详情，不写参数时查看当前活动；写筛选条件时列出符合条件的活动。
- `/活动列表` `/活动一览` `/events` `/event-list` `/pjsk events` `/pjsk_events`
  - 列出活动，可以按类型、团体、属性、角色和年份筛选。
- `/活动记录` `/冲榜记录` `/pjsk event record` `/pjsk_event_record`
  - 查看自己参加过的活动和最终 PT、名次。需要抓包数据（Suite）。
- `/活动规划` `/event-planner` `/pjsk event planner`
  - 按目标 PT 或目标名次，估算需要打多少场、多少时间和多少演出能量（火）。需要抓包数据。

## 可选参数说明

- 查看单个活动：
  - 活动 ID：`123` 或 `event123`
  - 序号：`-1` 是最近一期，`-2` 是再前一期；`上期`、`下期` 也可以
  - 箱活：角色昵称加序号，例如 `mnr1` 是 mnr 的第 1 期箱活
- 筛选活动（`/活动列表`，`/活动` 写筛选条件时同样适用）：
  - 类型：`普活`、`5v5`、`wl`，或 `wl1` `wl2` `wl3` 指定 WL 期数
  - 团体：`ln` `mmj` `vbs` `ws` `25h` `vs`；前面加 `纯`（如 `纯25h`）只看单团活动，`混活` 只看混团活动
  - 属性：`可爱`（`粉`）、`帅气`（`蓝`）、`纯真`（`绿`）、`快乐`（`橙`）、`神秘`（`紫`）
  - 角色：角色昵称，可以写多个；`mnr箱` 只看 mnr 的箱活
  - 年份：`2024`、`25年`、`去年`
- 以上参数可以混合使用，用空格分隔。

注意，`纯25h` 和 `25h` 是两个不同的参数：前者只会列出单团活动，后者会列出所有有该团体成员参与的活动。

## 活动规划参数

用法：`/活动规划 <目标> [当前 PT] [活动] [歌曲…] [演出能量（火）] [组卡条件…]`

- `目标`：必填，目标 PT（如 `pt1000w`、`目标1200w`）或目标名次（如 `t100`、`100名`）。
- `当前 PT`：可选，例如 `当前pt120w`；不写时从查榜服务读取你在该活动前 100 名的 PT，不在前 100 名时按 0 计算。
- `活动`：可选，`event123`；WL 活动写 `wl3 角色`，按总榜规划时加 `总榜`。不写时使用当前活动。
- `歌曲`：可选，可以写多首并带难度（如 `虾ex`、`龙hd`）；不写时估算虾 EXPERT、龙 HARD 和野车。
- `演出能量（火）`：可选，`1火` 到 `10火`；不写时估算 `5火` 和 `10火`。
- 组卡条件：和 `/组卡` 相同，例如 `当前`、`顶配`、`#固定卡`，详见[组卡](/bot-help/recommend)。
- `u序号`：可选，选择自己的第几个绑定账号，例如 `u2`；不写时使用默认绑定。

示例：`/活动规划 pt1000w`、`/活动规划 pt1000w 当前pt120w 虾ex 龙hd`、`/活动规划 t100 wl3 mzk 总榜 10火`。

查看内置帮助可以发送 `/活动规划 -help`。

## 指令示例
<div class="chatbox-grid">
<ChatBox :messages="eventdetail" />

<ChatBox :messages="eventlist" />

<ChatBox :messages="eventlistmmj" />

<ChatBox :messages="eventlistonlymmj" />

<ChatBox :messages="eventplanner" />
</div>
