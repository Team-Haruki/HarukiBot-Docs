---
title: 卡牌查询
outline: false
---

<script setup>
import ChatBox from '/bot-help/components/ChatBox.vue'

const cardlist = [
  { text: '/查卡 25h', from: 'user' },
  { text: '[25h所属卡牌的列表]', from: 'bot' }
]

const cardlist1 = [
  { text: '/查卡 mzk1 4', from: 'user' },
  { text: '[mzk1活动卡牌的四星卡列表]', from: 'bot' }
]

const cardlistmmj = [
  { text: '/卡牌列表 mmj 4', from: 'user' },
  { text: '[包含所有mmj四星卡牌的卡牌列表，可能会因为卡牌过多变为卡牌一览]', from: 'bot' }
]

const cardlistminori = [
  { text: '/卡牌一览 mnr', from: 'user' },
  { text: '[包含所有mnr卡牌略缩图的卡牌一览]', from: 'bot' }
]

const minoriminori = [
  { text: '/查卡面 190', from: 'user' },
  { text: '[卡牌id190所有卡面的图片]', from: 'bot' }
]

</script>

# 卡牌查询

## 常用卡牌指令

- `/查卡` `/card-detail` `/查牌` `/查卡牌` `/pjsk card`
  - 按指定属性、人物或 id 查卡。
- `/卡牌列表` `/cards` `/pjsk cards` `/card-list`
  - 按指定条件筛选卡牌列表。
- `/卡牌一览` `/查箱` `/卡面一览` `/卡一览` `/box` `/card-box` `/pjsk box`
  - 按指定条件筛选卡牌，如果有抓包上传的 suite 数据，未拥有的卡牌会以灰色显示。
- `/查卡面` `/pjsk card img` `/卡面原图` `/卡面` `/card` `/卡图`
  - 按 id 查询指定卡的卡图。

## 可选参数说明

| 参数类型 | 具体参数 | 特殊说明 |
|---|---|---|
| 卡牌id | `123` |  |
| 角色昵称 + 负数索引| `miku-1` | 表示角色的倒数第几张卡 |
| 团名 | `ln` `vbs` `ws` `mmj` `25h` |  |
| 对应团 oc/纯 vs | `mmjoc` `25oc` `纯v` |  |
| 对应团 vs | `mmjv` `25v` | 对应团的vs需要加所属团名字 |
| 角色昵称 | `miku` `mnr` |  |
| 卡牌稀有度 | `4` `四星` `生日` `4星` |  |
| 卡牌属性 | `cool` `蓝` `蓝星` |  |
| 限定类型 | `非限` `限定` `期间限定` `fes限定` |  |
| 卡牌技能类型 | `奶卡` `奶` `判` `分` `p分` |  |
| 年份 | `2025年` `今年` `去年` |  |
| 活动 id 或者箱活缩写 | `event123` `mnr1` |  |

请注意，参数 纯数字的 4 ，在 查卡 和 查卡面中解析为卡牌id 4 ，在 卡牌列表 和 卡牌一览 中 解析为卡牌稀有度4星
查卡指令查询到多张卡牌时，会自动转为卡牌列表模式
假设查询的卡牌过多，会自动转为卡牌一览模式

## 卡牌获取时间线 {#card-acquisition-timeline}

在 `/卡牌一览` 后添加 `时间`，可以按真实获取时间查看自己的卡牌收藏历程。

- 使用前需绑定对应区服的游戏账号，并在工具箱上传 suite 数据，详见[工具箱使用教程](/bot-help/toolbox_guide)。
- 仅展示所选账号已经拥有的卡牌，按获取时间由早到晚排列，以月份为横轴，底色对应角色。
- 缺失获取时间的卡牌会单独显示，不会使用卡牌上线时间代替。
- 可搭配角色、团体、稀有度等卡牌筛选条件，以及 `id`、`before` 等显示参数。
- 使用 `u2` 等参数选择自己的其他绑定账号；省略时使用当前区服默认绑定。可添加 `jp`、`cn`、`en`、`tw`、`kr` 区服前缀。
- 时间模式不能与属性分组（`属性` / `attr`）或未持有筛选（`未持有` / `unowned`）同时使用。

示例：

- `/卡牌一览 时间`：查看自己的卡牌获取时间线。
- `/卡牌一览 mnr 时间`：只看花里实乃理的卡牌。
- `/卡牌一览 u2 时间`：查看当前区服第二个绑定账号。
- `/cn卡牌一览 时间`：查看国服账号的卡牌获取时间线。

## 指令示例
<div class="chatbox-grid">
<ChatBox :messages="cardlist" />

<ChatBox :messages="cardlist1" />

<ChatBox :messages="cardlistmmj" />

<ChatBox :messages="cardlistminori" />

<ChatBox :messages="minoriminori" />
</div>