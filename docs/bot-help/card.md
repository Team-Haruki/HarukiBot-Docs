---
title: 卡牌查询
outline: false
---

<script setup>
import ChatBox from '/bot-help/components/ChatBox.vue'

const cardlist = [
  { text: '/查卡 25h', from: 'user' },
  { text: '[25h 所属卡牌的列表]', from: 'bot' }
]

const cardlist1 = [
  { text: '/查卡 mzk1 4星', from: 'user' },
  { text: '[mzk1 活动卡牌中的四星卡列表]', from: 'bot' }
]

const cardlistmmj = [
  { text: '/卡牌列表 mmj 4星', from: 'user' },
  { text: '[包含所有 mmj 四星卡牌的卡牌列表]', from: 'bot' }
]

const cardlistminori = [
  { text: '/查箱 mnr', from: 'user' },
  { text: '[包含所有 mnr 卡牌缩略图的卡牌一览]', from: 'bot' }
]

const minoriminori = [
  { text: '/卡面 190', from: 'user' },
  { text: '[卡牌 ID 190 的卡面原图]', from: 'bot' }
]

</script>

# 卡牌查询

## 常用卡牌指令

- `/查卡` `/查牌` `/查卡牌` `/pjsk card` `/card-detail`
  - 查看一张卡的详情，写卡牌 ID 或角色新卡（如 `mnr-1` 是 mnr 最新的一张卡，`-1` 是当前区服最新上线的卡）；写筛选条件时列出符合条件的卡牌。
- `/卡牌列表` `/cards` `/card-list` `/pjsk cards`
  - 列出符合条件的卡牌。写 `u序号` 时按这个账号的持有情况标记，需要抓包数据（Suite）。
- `/查箱` `/卡牌一览` `/卡面一览` `/卡一览` `/box` `/card-box` `/pjsk box`
  - 把符合条件的卡面排成一览图。上传了抓包数据时会标记持有情况，未拥有的卡牌以灰色显示。
- `/卡面` `/卡图` `/查卡面` `/卡面原图` `/card` `/pjsk card img`
  - 查看卡面原图，写卡牌 ID 或角色新卡，可以加 `特训前` 或 `特训后`（也可以写 `前`、`后`），例如 `/卡面 190 特训后`。

## 筛选条件

筛选条件可以组合，用空格分隔。

| 参数类型 | 具体参数 | 特殊说明 |
|---|---|---|
| 卡牌 ID | `123` | 只在 `/查卡`、`/卡面` 中使用 |
| 角色新卡 | `mnr-1` `-1` | 角色昵称加负数表示这个角色最新的第几张卡；只写负数表示当前区服最新上线的卡 |
| 角色 | `miku` `mnr` | 角色名或昵称 |
| 团体 | `ln` `mmj` `vbs` `ws` `25h` `vs` |  |
| 原创角色 / 虚拟歌手 | `mmjoc` `mmjv` `纯vs` | `mmjoc` 只看原创角色，`mmjv` 只看虚拟歌手，`纯vs` 只看 VIRTUAL SINGER 团 |
| 稀有度 | `1星` `2星` `3星` `4星` `生日` |  |
| 属性 | `可爱`（`粉`）、`帅气`（`蓝`）、`纯真`（`绿`）、`快乐`（`橙`）、`神秘`（`紫`） |  |
| 限定类型 | `非限` `限定` `期间限定` `fes` `cfes` `bfes` `联动限定` |  |
| 技能 | `分卡` `判卡` `奶卡`，或 `大分` `p分` `判分` `血分` `组分` |  |
| 年份 | `2024` `25年` `去年` `今年` |  |
| 活动 | `event123` `mnr1` | `mnr1` 表示 mnr 的第 1 期箱活 |

请注意，只写数字（如 `4`）时，`/查卡` 和 `/卡面` 按卡牌 ID 解析，`/卡牌列表` 和 `/查箱` 按稀有度解析。

`/查卡` 写了 `box`、`id`、`before`、`属性`、`未持有` 时改为卡牌一览，见 `/查箱`。

## 一览图显示选项

以下选项用于 `/查箱`：

- `id`：在图中显示卡牌 ID
- `box`：显示活动归属
- `before`：使用特训前的卡面
- `属性`：按属性分组
- `未持有`：只显示自己没有的卡，也可以写 `unowned`
- `时间`：只显示自己的卡，按获得时间排列，见[卡牌获取时间线](#card-acquisition-timeline)

例如 `/查箱 mnr1 id box`、`/查箱 miku 4星 属性 未持有`。

## 卡牌获取时间线 {#card-acquisition-timeline}

在 `/查箱` 后添加 `时间`，可以按真实获取时间查看自己的卡牌收藏历程。

- 使用前需绑定对应区服的游戏账号，并在 Haruki 工具箱上传抓包数据（Suite），详见[工具箱使用教程](/bot-help/toolbox_guide)。
- 仅展示所选账号已经拥有的卡牌，按获取时间由早到晚排列，以月份为横轴，底色对应角色。
- 缺失获取时间的卡牌会单独显示，不会使用卡牌上线时间代替。
- 可搭配角色、团体、稀有度等筛选条件，以及 `id`、`before` 等显示选项。
- 使用 `u2` 等参数选择自己的其他绑定账号；不写时使用默认绑定。可以加区服代码，例如 `/cn查箱 时间`。
- 时间模式不能和 `属性`、`未持有` 一起使用。

示例：

- `/查箱 时间`：查看自己的卡牌获取时间线。
- `/查箱 mnr 时间`：只看花里实乃理的卡牌。
- `/查箱 u2 时间`：查看自己第二个绑定账号。
- `/cn查箱 时间`：查看国服(CN)账号的卡牌获取时间线。

## 指令示例
<div class="chatbox-grid">
<ChatBox :messages="cardlist" />

<ChatBox :messages="cardlist1" />

<ChatBox :messages="cardlistmmj" />

<ChatBox :messages="cardlistminori" />

<ChatBox :messages="minoriminori" />
</div>