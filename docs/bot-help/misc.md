---
title: 其他命令
outline: false
---

<script setup>
import ChatBox from '/bot-help/components/ChatBox.vue'

const birthday = [
  { text: '/生日', from: 'user' },
  { text: '[距离生日最近的角色的生日相关信息]', from: 'bot' }
]

const birthdayminori = [
  { text: '/生日 mnr', from: 'user' },
  { text: '[mnr生日的相关信息]', from: 'bot' }
]

const gacha = [
  { text: '/卡池 63', from: 'user' },
  { text: '[卡池id63的相关信息]', from: 'bot' }
]

const gachalist = [
  { text: '/卡池列表', from: 'user' },
  { text: '[最新一页卡池的图片]', from: 'bot' }
]

const gachalist10 = [
  { text: '/卡池列表 p3', from: 'user' },
  { text: '[第三页卡池的图片]', from: 'bot'}
]

const vlive = [
  { text: '/vlive', from: 'user' },
  { text: '[目前开放或者即将开放的live的列表]', from: 'bot' }
]

const stamp = [
  { text: '/stamp 1', from: 'user' },
  { text: '[贴纸id1的图片]', from: 'bot' }
]

const M114 = [
  { text: '/倍率 114 114 114 114 114', from: 'user' },
  { text: '[经过计算后的实效，倍率等信息]', from: 'bot' }
]
</script>

# 杂项

- `/生日` `/pjsk chara birthday` `/角色生日` `/查生日`
  - 查询角色生日。
- `/贴纸` `/查贴纸` `/pjsk贴纸` `/pjsk表情` `/pjsk stamp` `/stamp`
  - 查询贴纸。
- `/pjsk live` `/虚拟live` `/pjsk vlive` `/vlive`
  - 查询虚拟 Live 信息。
- `/查卡池` `/pjsk gacha` `/卡池列表` `/卡池一览` `/卡池`
  - 查询卡池
- `/pjsktz`
  - 设置你所在的时区，HarukiBot NEO 一切和时间有关的信息都会以你设置的时区渲染。
- `/倍率` `/实效`
  - 输入全队的技能倍率计算实效值

## 卡池可选参数说明

| 参数类型 | 具体参数 | 特殊说明 |
|---|---|---|
| 卡池id | `63` |  |
| 负数索引 | `-1` | 表示倒数第几个卡池 |
| 活动id | `event17` | 指定活动id关联的当期卡池 |
| 页码 | `p3` | 指定第几页卡池，以100个卡池为1页进行分割,不指定页码，卡池列表会显示最新的一页 |
| 年份 | `25年` | 查询指定年份推出的卡池的列表，如果分割为多页会默认显示最后一页，可以使用页码指定 |
| 类型 | `复刻` `常驻` `限定`  | 查询指定类型的卡池，和年份同样可以用页码指定 |


# 指令示例
<div class="chatbox-grid">
<ChatBox :messages="birthday" />

<ChatBox :messages="birthdayminori" />

<ChatBox :messages="gacha" />

<ChatBox :messages="gachalist" />

<ChatBox :messages="gachalist10" />

<ChatBox :messages="vlive" />

<ChatBox :messages="stamp" />

<ChatBox :messages="M114" />
</div>