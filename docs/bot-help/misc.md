---
title: 杂项指令
outline: false
---

<script setup>
import ChatBox from '/bot-help/components/ChatBox.vue'

const birthday = [
  { text: '/生日', from: 'user' },
  { text: '[下一个过生日的角色的生日信息]', from: 'bot' }
]

const birthdayminori = [
  { text: '/生日 mnr', from: 'user' },
  { text: '[mnr 的生日信息]', from: 'bot' }
]

const gacha = [
  { text: '/卡池 63', from: 'user' },
  { text: '[卡池 ID 63 的详情]', from: 'bot' }
]

const gachalist = [
  { text: '/卡池列表', from: 'user' },
  { text: '[卡池列表的图片]', from: 'bot' }
]

const gachalist10 = [
  { text: '/卡池列表 p3', from: 'user' },
  { text: '[卡池列表第 3 页的图片]', from: 'bot'}
]

const vlive = [
  { text: '/vlive', from: 'user' },
  { text: '[当前和即将开始的虚拟 Live 列表]', from: 'bot' }
]

const stamp = [
  { text: '/stamp 1', from: 'user' },
  { text: '[贴纸 ID 1 的原图]', from: 'bot' }
]

const M114 = [
  { text: '/倍率 114 114 114 114 114', from: 'user' },
  { text: '[计算得到的卡组实效]', from: 'bot' }
]

const inventory = [
  { text: '/查背包', from: 'user' },
  { text: '[默认绑定账号的默认道具及其数量]', from: 'bot' }
]
</script>

# 杂项

- `/生日` `/查生日` `/角色生日` `/pjsk chara birthday`
  - 查看角色生日和生日相关的卡池、活动时间。可以写角色名或昵称，或写序号（之后第几个过生日的角色，1~26）；不写时查看下一个过生日的角色。
- `/贴纸` `/查贴纸` `/stamp` `/pjsk贴纸` `/pjsk表情` `/pjsk bq` `/pjsk stamp`
  - 查看贴纸，可以按角色筛选。只写一个贴纸 ID 时返回这张贴纸的原图；翻页写 `p 2` 或 `page 2`，`all`（也可以写 `全部`）返回全部分页。
- `/虚拟live` `/vlive` `/pjsk live` `/pjsk vlive`
  - 查看当前和即将开始的虚拟 Live，时间按你的时区显示。写编号查看个人虚拟 Live 各角色的场次，写 `个人`（也可以写 `solo`）查看当前或即将开始的个人虚拟 Live。
- `/卡池` `/查卡池` `/卡池列表` `/卡池一览` `/pjsk gacha`
  - 不写参数时列出卡池；写卡池 ID 或序号查看卡池详情。
- `/时区` `/pjsk时区` `/pjsktz` `/pjsktimezone`
  - 设置你的时区，活动、虚拟 Live、封禁等时间都按这个时区显示。可以写 UTC 偏移（如 `+8`、`UTC+9`）、时区缩写（如 `JST`、`CST`）或 IANA 时区名（如 `Asia/Shanghai`），例如 `/时区 +8`。一个 UTC 偏移对应多个时区时，回复会列出候选，请改用其中一个时区名。
- `/实效` `/倍率` `/时效` `/pjsk score up`
  - 按 5 张卡的技能数值计算卡组实效：写正好 5 个非负数（单位是 %），第 1 个按队长技能计算，后 4 个各按 20% 计入，例如 `/实效 160 160 150 150 150`。
- `/查背包` `/持有物` `/查持有物` `/背包一览` `/inventory` `/pjsk inventory`
  - 查看自己账号里的道具和材料，需要抓包数据（Suite）。一次只能查一个分类，例如 `/查背包 水晶 u2`。
  - 不写分类时查看默认道具，不含水晶、演出能量道具、记忆等单独的分类。
  - `水晶`：也可以写 `钻石` `石头`。
  - `火罐`：演出能量道具，显示合计可以恢复多少演出能量，也可以写 `演出能量` `体力`。
  - `记忆`：也可以写 `回忆` `memory`，国服(CN)不支持。

## 卡池可选参数说明

| 参数类型 | 具体参数 | 特殊说明 |
|---|---|---|
| 卡池 ID | `63` | 查看这个卡池 |
| 序号 | `-1` | `-1` 是最近的卡池，`-2` 是再前一个 |
| 活动 | `event17` | 这期活动的卡池 |
| 卡牌 | `card123` | 含这张卡的卡池 |
| 筛选条件 | `当前` `复刻` `回响` | `当前` 是正在开放的卡池 |
| 年份 | `2024` | 查询指定年份推出的卡池 |
| 页码 | `p2` `2页` | 指定第几页 |

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