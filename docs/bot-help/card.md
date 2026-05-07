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
查卡指令的卡牌过多时，会自动转为卡牌列表模式

## 指令示例
<div class="chatbox-grid">
<ChatBox :messages="cardlist" />

<ChatBox :messages="cardlist1" />
</div>