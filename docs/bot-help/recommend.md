---
title: 组卡 查询
outline: false
---

<script setup>
import ChatBox from '/bot-help/components/ChatBox.vue'

const eventDeckDemo = [
  { text: '/组卡', from: 'user' },
  { text: '[当期活动组卡结果]', from: 'bot' }
]

const songDeckDemo = [
  { text: '/组卡 龙 hd', from: 'user' },
  { text: '[歌曲为“龙”、难度为 HARD 的活动组卡结果]', from: 'bot' }
]

const bonusDeckDemo = [
  { text: '/组卡 mmj 蓝', from: 'user' },
  { text: '[模拟 mmj 加帅气（蓝）加成的活动组卡结果]', from: 'bot' }
]

const wlDeckDemo = [
  { text: '/组卡 event140 miku 实效200', from: 'user' },
  { text: '[活动 140 的 WL miku 章节、实效下限 200 的组卡结果]', from: 'bot' }
]

const autoDeckDemo = [
  { text: '/组卡 event160 自动 #mnr', from: 'user' },
  { text: '[活动 160 的自动 Live 组卡，固定 mnr]', from: 'bot' }
]

const challengeDeckDemo = [
  { text: '/挑战组卡 mnr 歌曲比较 10th 群青apd', from: 'user' },
  { text: '[比较指定两首歌的 mnr 挑战分数]', from: 'bot' }
]

const bestDeckDemo = [
  { text: '/最强组卡 实效', from: 'user' },
  { text: '[不考虑活动加成、实效最高的组卡结果]', from: 'bot' }
]

const bonusTargetDemo = [
  { text: '/加成组卡 event123 100', from: 'user' },
  { text: '[活动 123 中凑 100% 加成的组卡结果]', from: 'bot' }
]

const mysekaiDeckDemo = [
  { text: '/烤森组卡 绿 mmj', from: 'user' },
  { text: '[模拟绿 mmj 加成活动的烤森组卡结果]', from: 'bot' }
]
</script>

# 组卡
::: info
本部分功能需要先在 Haruki 工具箱上传抓包数据（Suite），如果使用中遇到问题，请先用 `/抓包状态` 检查自己的抓包数据是否上传成功。

:::

## 组卡指令

- `/组卡` `/组队` `/配队` `/活动组卡` `/活动组队` `/活动卡组` `/活动配队` `/模拟组卡` `/模拟组队` `/模拟卡组` `/模拟配队` `/指定属性组卡` `/指定属性组队` `/指定属性卡组` `/指定属性配队` `/pjsk deck` `/pjsk event card` `/pjsk event deck`
  - 按活动加成推荐卡组，不写活动时使用当前活动。`/模拟组卡` 必须写团体和属性，例如 `/模拟组卡 粉 25h 纯25h 顶配`。
- `/挑战组卡` `/挑战组队` `/挑战卡组` `/挑战配队` `/pjsk challenge card` `/pjsk challenge deck`
  - 按每日挑战 Live 的角色推荐卡组，不写角色时给所有角色推荐，例如 `/挑战组卡 miku 当前`。
- `/长草组卡` `/长草组队` `/长草卡组` `/长草配队` `/最强组卡` `/最强组队` `/最强卡组` `/最强配队` `/pjsk no event deck` `/pjsk best deck`
  - 不考虑活动加成，按综合力或实效推荐卡组。不能写活动，也不能模拟活动，例如 `/长草组卡 当前 单人 综合力`。
- `/加成组卡` `/加成组队` `/加成卡组` `/加成配队` `/控分组卡` `/控分组队` `/控分卡组` `/控分配队` `/pjsk bonus card` `/pjsk bonus deck`
  - 按目标活动加成凑卡组，用于控分。目标加成写一个或多个正整数，也可以写 `120加成`、`160%`；活动只能写 `event123`，不能只写数字，例如 `/加成组卡 event123 120 160`。
- `/烤森组卡` `/烤森组队` `/ms组卡` `/ms组队` `/mysekai deck` `/pjsk mysekai deck`
  - 根据当前活动计算最适合用于挖烤森获取 pt 的队伍（国服不开放）。

以上指令都可以加 `u序号` 选择自己的第几个绑定账号，也可以加区服代码，例如 `/jp组卡`。

## 组卡可选参数

| 参数类型 | 具体参数 | 特殊说明 |
|---|---|---|
| 活动 | `event123` `活动123` 或活动 ID | 不写时使用当前活动；`/加成组卡` 只能写 `event123` |
| 模拟活动 | `25h 可爱` `vs 蓝` | 团体加属性，模拟一期活动的加成 |
| WL 章节 | `wl1 miku` `event123 miku` | 指定 WL 角色章节 |
| WL 终章 | `wl2 终章 miku` | WL 终章及队长角色，终章从 `wl2` 开始 |
| 歌曲 | `虾ex` `龙 hd` `music123 master` | 歌曲名、别名或歌曲 ID，可以带难度 |
| 难度 | `easy` `normal` `hard` `expert` `master` `append` | 也可以写 `ez` `nm` `hd` `ex` `ma` `apd` |
| 歌曲比较 | `歌曲比较 龙hard 虾expert` | 后面接最多 5 首歌，在同样的条件下比较，也可以写 `歌曲对比` `歌曲排行` |
| Live 类型 | `多人`（默认）、`单人`、`自动` | 也可以写 `multi` `solo` `auto` |
| 组卡目标 | `综合力` `实效` | 不写时按活动 PT 或分数计算 |
| 演出能量（火） | `0火` 到 `10火` | 也可以写 `5体力`、`5boost` |
| 区域道具等级 | `区域道具15级` |  |
| 队友综合力 | `队友综合力300000` `队友综合30w` | 只在多人 Live 生效 |
| 队友实效 | `队友实效210` | 只在多人 Live 生效 |
| 实效下限 | `实效230` | 自己卡组的实效下限，同时作为队友实效，只在多人 Live 生效 |
| 卡组来源 | `当前` `顶配` `次顶配` | 不写时使用你的卡牌和培养情况；`当前` 使用游戏里当前编成的卡组（也可以写 `目前`）；`顶配` 使用理论满配的卡池（区域道具满级，也可以写 `满配`）；`次顶配` 是区域道具 15 级的理论卡池（也可以写 `中配`） |
| 固定卡牌 | `#123 456` | 固定卡牌 ID，最多 5 张，`#` 也可以写全角 `＃` |
| 固定角色 | `#miku rin` | 可以和卡牌混写，例如 `#miku #1237` |
| 排除卡牌 | `-123` | 排除这张卡，可以写多个 |
| 只用某团体或属性 | `纯25h` `纯蓝` | `纯` 也可以写 `仅` |
| 培养假设（全部卡） | `满技能` `满突破` `剧情已读` `满画布` `禁用` |  |
| 培养假设（按稀有度） | `生日满技` `一星满破` `四星禁用` |  |
| 培养假设（单张卡） | `1234满技能` `1234禁用` |  |
| 支援卡 | `支援满突破` `支援满技能` |  |
| bfes 卡 | `bfes不变` | 保留 bfes 卡的特训状态 |
| 算法 | `dfs` `sa` `ga` `dfs-ga` `rl` `all` |  |
| 技能顺序 | `技能顺序最优` `技能顺序最差` `技能顺序平均` `技能顺序12345` | `最优`、`最差` 也可以写 `最高`、`最低`；`技能顺序12345` 指定顺序，只能和 `当前` 或固定 5 张卡一起用 |
| 技能抽取 | `技能抽取最高` `技能抽取最低` `技能抽取平均` |  |

- `/挑战组卡`、`/长草组卡`、`/加成组卡` 的组卡条件写法和 `/组卡` 相同；`/长草组卡` 不能写活动。
- 发送 `/组卡 -help` 查看全部组卡条件。

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
