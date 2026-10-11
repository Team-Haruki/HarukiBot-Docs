---
title: 音乐与歌曲
outline: false
---

<script setup>
import ChatBox from '/bot-help/components/ChatBox.vue'

const musicdetail = [
  { text: '/查曲 music112', from: 'user' },
  { text: '[歌曲 ID 112 的详情]', from: 'bot'}
]

const musichard = [
  { text: '/难度排行 master 31', from: 'user' },
  { text: '[MASTER 难度 31 级的歌曲列表]', from: 'bot'}
]

const kuroba = [
  { text: '/谱面预览 music112', from: 'user' },
  { text: '[歌曲 ID 112 的谱面图]', from: 'bot'}
]

const customScore = [
  { text: '/jp谱面预览 _g5yakrvqobnfq6hafdob7ed8jwm', from: 'user' },
  { text: '[指定自制谱面的谱面图]', from: 'bot'}
]

const customScoreDetail = [
  { text: '/jp查曲 _g5yakrvqobnfq6hafdob7ed8jwm', from: 'user' },
  { text: '[指定自制谱面的详情]', from: 'bot'}
]

const reward = [
  { text: '/打歌奖励', from: 'user' },
  { text: '[默认绑定账号还能拿到的打歌奖励]', from: 'bot'}
]
const schedule = [
  { text: '/pjsk进度', from: 'user' },
  { text: '[默认绑定账号各等级歌曲的 Clear、FC、AP 进度]', from: 'bot'}
]

const abaaba = [
  { text: '/查物量 1235', from: 'user' },
  { text: '[物量为 1235 的谱面列表]', from: 'bot'}
]

const weee = [
  { text: '/bpm搜索 193', from: 'user' },
  { text: '[含有 BPM 193 的歌曲列表]', from: 'bot'}
]

</script>

# 音乐与歌曲

## 基本指令

- `/查曲` `/查歌` `/歌曲` `/查歌曲` `/song` `/music` `/pjsk song` `/pjsk music`
  - 查看歌曲的难度、等级、时长、物量和发布时间等信息，例如 `/查曲 tell your world`、`/查曲 music123 master`。写 28 位自制谱面 ID 时查看自制谱面详情。
- `/歌曲列表` `/难度排行` `/歌曲一览` `/乐曲列表` `/乐曲一览` `/定数表` `/歌曲定数` `/查乐曲` `/music-list` `/pjsk music list`
  - 按难度和等级列出歌曲，例如 `/歌曲列表 master 31`、`/难度排行 expert 26-30`。写 `未AP`、`未FC`、`未完成` 时按自己的打歌成绩筛选，需要抓包数据（Suite）。
- `/谱面` `/谱面预览` `/查谱` `/查谱面` `/谱面查询` `/铺面` `/查铺面` `/铺面查询` `/铺面预览` `/pjsk chart`
  - 查看歌曲的谱面图，例如 `/谱面 初音天地 master`。写 28 位自制谱面 ID 时查看自制谱面。
- `/技能预览`
  - 在谱面上标出技能发动的时间段，例如 `/技能预览 虾 expert`。
- `/谱面样式` `/谱面底色` `/设置谱面样式` `/设置谱面底色` `/pjsk chart style`
  - 设置谱面图的底色：`black`（黑色底，默认）或 `white`（白色底），例如 `/谱面样式 white`。
- `/曲绘` `/查曲绘` `/pjsk music cover`
  - 查看歌曲的封面图。
- `/查bpm` `/pjsk bpm`
  - 查看歌曲的 BPM，例如 `/查bpm music123 master`。匹配到多首歌时会列出候选，请改用歌曲 ID 查询。
- `/bpm搜索` `/bpms` `/pjsk bpms` `/pjsk bpm search`
  - 按 BPM 找歌，列出含有这个 BPM 的歌曲，可以带小数和难度，例如 `/bpm搜索 200`、`/bpms 180 expert`。
- `/查物量` `/物量` `/pjsk note num` `/pjsk note count`
  - 按物量（音符数）找谱面，例如 `/查物量 888`、`/物量 1000 master`。
- `/打歌进度` `/歌曲进度` `/打歌信息` `/pjsk进度` `/progress` `/pjsk progress` `/music-progress` `/pjsk music progress`
  - 查看各等级歌曲的 Clear、FC、AP 进度，可以写难度，例如 `/歌曲进度 master u2`。需要抓包数据。
- `/歌曲奖励` `/打歌奖励` `/曲目奖励` `/歌曲挖矿` `/打歌挖矿` `/pjsk 曲目奖励` `/music rewards` `/music-rewards` `/pjsk music rewards`
  - 统计还能通过打歌拿到的水晶等奖励。需要抓包数据。

## 控分与歌曲排行

以下指令只支持日服(JP)，`/歌曲meta` 除外。

- `/控分` `/分数` `/查分数` `/pjsk score` `/score control`
  - 计算打到目标活动 PT 需要的 Live 分数区间：`/控分 <目标 PT> [歌曲]`，不写歌曲时使用默认歌曲，例如 `/控分 1234`、`/控分 1234 虾`。
  - 在指令前加 `wl` 按 WL 活动计算，例如 `/wl控分 1234`。
- `/自定义房间控分` `/自定义控分` `/自定义房间` `/自定义房控分` `/自定义分数` `/自定义房间分数` `/custom room score` `/pjsk custom room score`
  - 计算在自定义房间打到目标活动 PT 的方法：`/自定义房间控分 <目标 PT>`，例如 `/自定义房间控分 1234`。
- `/歌曲排行` `/歌曲比较` `/歌曲对比` `/歌曲排名` `/曲目榜` `/music board` `/pjsk music board`
  - 按分数、PT 效率等指标给歌曲排行，也可以只比较指定的几首歌，例如 `/歌曲排行 多人 火效率`、`/歌曲比较 虾ex 龙hd`。
- `/歌曲meta` `/曲目meta` `/music meta` `/pjsk music meta`
  - 查看歌曲用于分数和 PT 计算的数据，一次最多 3 首，多首歌用 `|` 分隔，例如 `/歌曲meta 虾ex | 龙hd`。

## 可选参数说明

- 歌曲：歌曲名、别名或歌曲 ID（如 `music123`），歌曲名可以用任意语言，会进行模糊匹配。
- 难度：`easy` `normal` `hard` `expert` `master` `append`，也可以写 `ez` `nm` `hd` `ex` `ma` `apd`，或 `绿谱` `蓝谱` `黄谱` `红谱` `紫谱` `粉谱`。
- 歌曲别名：每个区服单独一个别名库，在本区服的别名库没有匹配到时会从其他区服查找。

### 歌曲列表参数

- 难度：可选，写法同上。
- 等级：可选，一个等级（如 `31`）、范围（如 `26-30`、`26 30`）或比较（如 `>=30`、`<28`）。
- 成绩：可选，`未AP`、`未FC`、`未完成`，需要抓包数据。
- `全部`：可选，显示完整列表，也可以写 `full`。

### 歌曲排行参数

- 歌曲：可选，只比较这些歌；多首歌用空格、`/` 或 `|` 分隔，可以带难度（如 `虾ex`）。
- Live 类型：`单人`（默认）、`多人`、`自动`。
- 排行依据：`分数`（单人默认）、`时速`（多人默认，也可以写 `pt/h`）、`火效率`、`每秒点击`（`tps`）、`时长`。
- `火效率`：按每点演出能量（火）获得的活动 PT 排行，也可以写 `pt/火`。
- 排序：`降序`（默认）、`升序`。
- 技能：`最优`、`平均`、`最差`，或写 `技能` 加 5 个技能数值（多人时 1 个实效数值）。
- 按 PT 排行时可以写综合力（如 `综合30w`）和加成（如 `加成200`）；按时速或时长排行时可以写 `间隔30秒`。
- 难度：可以写难度（如 `master`）筛选。

### 自制谱面

- 自制谱面只支持日服(JP)。如果默认绑定不是日服(JP)的账号，请加 `jp`，例如 `/jp谱面预览 <28 位自制谱面 ID>`。
- 参数必须是单独的 28 位自制谱面 ID，不需要加歌曲名、难度或文字前缀。
- `/谱面预览` 会生成自制谱面的谱面图；`/查曲` 会展示原曲、自制谱面标题、作者、难度、物量、BPM、标签等详情；`/技能预览` 也可以搭配自制谱面 ID 使用。
- 只支持已发布的自制谱面。ID 错误、未发布或区服不支持时会返回对应的提示。

## 指令示例
<div class="chatbox-grid">
<ChatBox :messages="musicdetail" />

<ChatBox :messages="musichard" />

<ChatBox :messages="kuroba" />

<ChatBox :messages="customScore" />

<ChatBox :messages="customScoreDetail" />

<ChatBox :messages="reward" />

<ChatBox :messages="schedule" />

<ChatBox :messages="abaaba" />

<ChatBox :messages="weee" />
</div>
