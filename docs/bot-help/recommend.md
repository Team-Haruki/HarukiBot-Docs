---
title: 组卡 查询
---

<script setup>
import ChatBox from '/bot-help/components/ChatBox.vue'

const eventDeckDemo = [
  { text: '/组卡', from: 'user' },
  { text: '[当期活动组卡结果]', from: 'bot' }
]

const songDeckDemo = [
  { text: '/组卡 龙 hd', from: 'user' },
  { text: '[歌曲为「龙」，难度为 hard 的活动组卡结果]', from: 'bot' }
]

const bonusDeckDemo = [
  { text: '/组卡 mmj 蓝', from: 'user' },
  { text: '[模拟 mmj + 蓝色加成的活动组卡结果]', from: 'bot' }
]

const wlDeckDemo = [
  { text: '/组卡 140 wl1 实效200', from: 'user' },
  { text: '[140 期 WL 第一章，最低实效 200 的组卡结果]', from: 'bot' }
]

const autoDeckDemo = [
  { text: '/组卡 160 auto #mnr', from: 'user' },
  { text: '[160 期活动 auto 组卡，队长角色强制为 mnr]', from: 'bot' }
]

const challengeDeckDemo = [
  { text: '/挑战组卡 mnr 歌曲比较 10th 群青apd', from: 'user' },
  { text: '[比较指定两首歌的 mnr 挑战分数]', from: 'bot' }
]

const bestDeckDemo = [
  { text: '/最强组卡 实效', from: 'user' },
  { text: '[和活动无关的实效最大组卡结果]', from: 'bot' }
]

const bonusTargetDemo = [
  { text: '/加成组卡 event123 100', from: 'user' },
  { text: '[指定活动并凑 100 加成的组卡结果]', from: 'bot' }
]

const mysekaiDeckDemo = [
  { text: '/烤森组卡 绿 mmj', from: 'user' },
  { text: '[模拟绿 mmj 加成活动的烤森组卡结果]', from: 'bot' }
]
</script>

# 组卡
::: info
本部分功能需要抓包上传 suite 后才能使用，如果使用中遇到问题请先用 `/抓包数据` 检查自己的 suite 上传是否成功。
Android 用户建议使用 [Haruki工具箱-上传suite数据](https://haruki.seiunx.com/upload_suite) 的 `继承码上传`
台服/韩服 Android 用户教程参考 [Haruki工具箱-HarukiProxy使用教程](/haruki-proxy/)
iOS / iPadOS 用户建议使用代理工具 MitM 模块更新，教程参考 [Haruki工具箱-iOS模块上传数据教程](/toolbox-tutorial/ios-module)
:::

## 组卡指令

- `/活动组卡` `/活动组队` `/活动卡组` `/活动配队` `/组卡` `/组队` `/配队` `/指定属性组卡` `/模拟组卡` `/pjsk event card` `/pjsk event deck` `/pjsk deck`
  - 根据当前活动加成计算组队。
- `/挑战组卡` `/挑战组队` `/挑战卡组` `/挑战配队` `/pjsk challenge card` `/pjsk challenge deck`
  - 根据对应角色计算每日挑战组队。
- `/长草组卡` `/长草组队` `/最强卡组` `/最强组卡` `/pjsk no event deck` `/pjsk best deck`
  - 根据指定条件计算组队。
- `/加成组卡` `/加成组队` `/控分组卡` `/控分配队` `/pjsk bonus deck` `/pjsk bonus card`
  - 根据指定加成计算组队。
- `/烤森组卡` `/烤森组队` `/ms组卡` `/ms组队` `/mysekai deck` `/pjsk mysekai deck`
  - 根据当前活动计算最适合用于挖烤森获取 pt 的队伍（国服不开放）。

## 组卡可选参数

| 参数类型 | 具体参数 | 特殊说明 |
|---|---|---|
| 歌曲名和难度 | 日服已实装歌曲名 + 任意难度 | 例如歌曲名后接 `ez` / `hd` / `ex` / `ma` / `apd` |
| live 类型 | `协力` `单人` `solo` `自动` `auto` | 用于指定计算的 live 类型 |
| 组卡目标 | `综合力` `实效` | 控制组卡计算目标 |
| 体力 | `1火` `5火` `10火` | 默认 `0火` |
| 活动 | `114` `活动114` `event114` | 加成组卡中不要使用仅数字格式 |
| WL 章节 | `140 wl1` `140 miku` | 用于指定 World Link 章节 |
| 团名 + 颜色加成 | 任意团 + 任意颜色 | 用于模拟活动加成 |
| 最低实效要求 | `实效200` | 可填写任意实效要求 |
| 区域道具配置 | `顶配` `次顶配` | 控制区域道具配置 |
| 指定团或颜色卡牌 | `仅任意团` `仅任意颜色` | 限制可使用卡牌范围 |
| 移除指定卡牌 | `-任意卡牌的id` | 排除指定卡牌 |
| 包含指定卡牌 | 任意卡牌 id | 必须放在所有参数的最后，且无法固定卡牌顺序 |
| 强制包含角色 | 任意角色 | 必须放在所有参数的最后，第一个角色固定为队长，无法与指定卡牌同时使用 |
| bfes 技能 | `bf不变` | 不更换 bfes 卡牌的技能 |
| 卡牌养成状态 | `禁用` `满破` `满技能` `已读` `画布` `支援满破` `支援满技能` | 用于指定卡牌养成状态 |
| 区域道具等级 | 区域道具 x 级 | 用于指定区域道具能级 |
| 技能顺序 | `技能顺序` `技能顺序平均` `技能顺序最大` `技能顺序最小` `技能顺序12345` | `技能顺序12345` 只能当卡组完全固定时使用 |
| bfes 花前吸取技能 | `技能吸取` `技能吸取平均` `技能吸取最大` `技能吸取最小` | 用于指定 bfes 花前吸取技能规则 |

> ⚠️ 请注意，参数之间一定要加空格，否则会识别失败。

## 指令示例

<div class="chatbox-grid">

<ChatBox :messages="eventDeckDemo" />

<ChatBox :messages="songDeckDemo" />

<ChatBox :messages="bonusDeckDemo" />

<ChatBox :messages="wlDeckDemo" />

<ChatBox :messages="autoDeckDemo" />

<ChatBox :messages="challengeDeckDemo" />

<ChatBox :messages="bestDeckDemo" />

<ChatBox :messages="bonusTargetDemo" />

<ChatBox :messages="mysekaiDeckDemo" />

</div>
