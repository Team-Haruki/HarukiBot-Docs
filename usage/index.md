# 功能列表

>  本文档将引导您使用 UniBot
> 
- UniBot是一款功能型机器人, 主要提供《世界计划 多彩舞台》相关查询服务。
- 该Bot不提供私聊服务
- 使用该Bot，即意味着你同意[使用条款](/licence/)及[隐私条款](/privacy/)
- 如果你有任何意见，可以加入交流群：
  - QQ 群: `883721511`
  - QQ 频道：[交流 QQ 频道](https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=7Pe26&appChannel=share&businessType=9&from=181074&biz=ka&shareSource=5)
  - Discord 反馈服务器：[https://discord.gg/yvwBaDc7x8](https://discord.gg/yvwBaDc7x8)

## 查询pjsk歌曲信息

### pjskinfo
- `pjskinfo+曲名` 查看当前歌曲详细信息
- `pjskbpm+曲名` 查看当前歌曲的bpm（频道可直接使用`bpm+曲名`）
- `查bpm+数字` 查询对应bpm所有歌曲

### 谱面预览
- `谱面预览 曲名 难度` 查询对应曲名，难度的谱面预览（来源：[ぷろせかもえ！](https://pjsekai.moe/)
  - `难度`支持的输入: `easy`, `normal`, `hard`, `expert`, `master`, `append`, `ez`, `nm`, `hd`, `ex`, `ma`, `ap`, `apd`
  - 如果查询`master`可省略难度

### 昵称设置

- `pjskset昵称to歌名`
- `pjskdel昵称` 删除对应昵称
- `pjskalias昵称` 查看所有昵称
- `charaset昵称to角色名(可以是现有昵称)` 设置角色所有群通用昵称,如`charasetkndto宵崎奏`
- `charadel昵称` 删除角色所有群通用昵称
- `grcharaset新昵称to已有昵称` 设置仅当前群可用角色昵称
- `grcharadel已有昵称` 删除仅当前群可用角色昵称
- `charainfo昵称` 查看该角色群内和全群昵称

::: warning 注意
所有歌曲昵称设置，角色昵称设置的日志内容将会在[实时日志](/dailylog/)页面按日公示
:::


## 查询玩家信息

> 在命令前加`en`即可查询国际服信息，如`en绑定`, `ensk`, `en逮捕`, `enpjskprofile`

> 在命令前加`tw`即可查询台服信息，如`tw绑定`, `twsk`, `tw逮捕`, `twpjskprofile`

> 在命令前加`kr`即可查询韩服信息，如`kr绑定`, `krsk`, `kr逮捕`, `krpjskprofile`

- `绑定+id` 绑定id
### 活动查询
- `sk+id` 如果你在前100，可以用该命令查询排名和分数
- `sk+排名` 查询对应排名分数（仅支持前100，日服另外支持查询特定榜线）
- `sk线` 查询榜线分数
- `sk预测` 查看预测线，预测信息来自[3-3.dev](https://3-3.dev/)（仅日服）
- `查房+id`,`查房+排名` 可查询前100周回情况，时速，平均pt等（日服，台服）
- `查水表+id`,`查水表+排名` 可查询前100停车情况（日服，台服）
- `分数线+id`,`分数线+排名` 可绘制前100活动分数随时间增长的折线图（日服，台服）
### 打歌情况查询
- `逮捕@[xxx]` 如果此人绑定过id，就可以看TA的ex与master难度fc，ap数，排位信息
- `逮捕+id` 查看对应id的ex与master难度fc，ap数，排位信息
- `pjskprofile` 生成绑定id的profile图片（可使用`个人信息`）
### 隐私相关
- `不给看` 不允许他人逮捕自己，但自己还是可以逮捕自己，使用sk查分和逮捕自己时不会显示id
- `给看`


### 查询卡牌及活动信息
> 查卡面/查活动功能为 [Yozora](https://github.com/cYanosora) 所写，非常感谢
- `查卡/查卡面/查询卡面/findcard [角色昵称]`: 获取当前角色所有卡牌
- `查卡/查卡面/查询卡面/cardinfo [卡面id]`: 获取卡牌id详细卡面信息
- `查活动/查询活动/event [活动id]`: 查看指定活动信息（可直接使用`event`查看当前活动信息）
- `查活动/查询活动/findevent [关键字]`: 通过关键字筛选活动，返回活动概要图，没有关键字则会返回提示图
  - 单关键字方式：
    - 查活动 5v5：返回活动类型为5v5的活动概要
    - 查活动 紫月：返回活动属性为紫月的活动概要
    - 查活动 knd：返回当期出卡(包括报酬)含knd的活动概要
    - 查活动 miku：返回当期出卡含任意组合的miku的活动概要
    - 查活动 25miku：返回当期出卡含白葱的活动概要
    - 查活动 25h：返回当期出卡含任意25成员(不含vs)的活动概要，而并不是25箱活的活动概要
  - 多关键字方式：
    - 查活动 草 5v5：返回活动类型为5v5，活动属性为绿草的活动概要
    - 查活动 knd 蓝：返回活动属性为蓝星，出卡含knd的活动概要
    - 查活动 普活 紫月 knd：返回活动类型为马拉松，活动属性为紫月，出卡含knd的活动概要(即使knd为不同属性的报酬卡，也会显示)
  - 使用例：
    - 查活动 25h：仅返回25箱活的活动概要
    - 查活动 25h 25miku：返回25箱活且vs出卡为白葱的活动概要
    - 查活动 knd ick：返回出卡同时包括knd、ick混活的活动概要
- `活动图鉴/活动列表/活动总览/findevent all`: 返回当前所有活动的概要，该功能由于图片过大无法在频道bot使用


## pjsk竞猜
::: warning 注意
由于风控问题，猜曲，猜卡面，看卡图，模拟抽卡功能已开启白名单模式。如你所在的群未开启以上功能，请使用官方平台的频道bot游玩
:::

::: warning 关于频道版猜曲
请在规定时间内回答，由于主动消息限制，bot不会自动结束猜曲，如果回答超时会自动结束并提示超时

设置猜曲234指令旨在频道内方便通过斜杠指令+数字方便触发功能，无需每次输入完整指令
:::

- pjsk猜曲（截彩色曲绘）：`pjsk猜曲`
- pjsk阴间猜曲（截黑白曲绘）：`pjsk阴间猜曲` 或 `/pjsk猜曲 2`
- pjsk非人类猜曲（截30*30）：`pjsk非人类猜曲`
- pjsk猜谱面：`pjsk猜谱面` 或 `/pjsk猜曲 3`
- pjsk猜卡面：`pjsk猜卡面` 或 `/pjsk猜曲 4`
- pjsk歌词猜曲：`pjsk歌词猜曲` 或 `/pjsk猜曲 5`
- pjsk听歌猜曲（频道不可用）：`pjsk听歌猜曲`
- pjsk倒放猜曲（频道不可用）：`pjsk倒放猜曲`

查看排行榜：猜曲命令+`排行榜`。如`pjsk猜曲排行榜`、`pjsk猜谱面排行榜`

## pjsk模拟抽卡
> 十连抽卡模拟会生成图片
- `sekai抽卡` 模拟十连
- `sekaiXX连` 模拟`XX`抽（只显示四星）,`XX`接受的输入为`1-200`（频道内`1-400`）
- `sekai反抽卡` 反转2星4星概率
- `sekai抽卡+卡池id` 对应卡池模拟十连
- `sekai100连+卡池id` 对应卡池模拟100抽（只显示四星）
- `sekai200连+卡池id` 对应卡池模拟200抽（只显示四星）
- `sekai反抽卡+卡池id` 对应卡池反转2星4星概率

::: tip 关于卡池id
卡池id可去<https://sekai.best/gacha> 进入对应卡池页面查看网址最后的数字，如网址是<https://sekai.best/gacha/159>，卡池id就是159
:::

## 随机卡图
- `看[角色昵称]` 或 `来点[角色昵称]`


## 其他游戏
### CHUNITHM
- `chusearch 原曲名` 搜索匹配的曲名，给出对应歌曲id
- `chuinfo 歌曲id/原曲名` 查看歌曲信息
- `chuchart 歌曲id/原曲名` 查看谱面预览
- `chuset昵称to歌名`
- `chudel 昵称` 删除对应昵称
- `chualias 昵称` 查看所有昵称

- `[服务器] 绑定[20位卡号]`：绑定卡号
- `[服务器] b30`：查询绑定卡号的b30歌曲（SUN PLUS定数），如`aqua b30`
- `[服务器] b30 lmn`：查询绑定卡号的b30歌曲（Luminous定数），如`aqua b30 lmn`
- `chulevel [定数]`: 查询定数表，如`chulevel 14+`
- `chulevel [定数] [服务器]`: 查询带你绑定账号分数的定数表，如`chulevel 14+ aqua`

[服务器]支持`aqua`（Sam aqua）, `rin`, `na`。不支持官服查询。

### WDS
- `wdsinfo 曲名` 查看歌曲信息
- `wdschart 曲名` 查看谱面预览
- `wdsset昵称to歌名`
- `wdsdel 昵称` 删除对应昵称
- `wdsalias 昵称` 查看所有昵称

## 关于
- 开发者: [綿菓子ウニ](https://space.bilibili.com/622551112)
- 联系我: `1103479519[at]qq.com`（`[at]`更改为`@`）
- 交流群: `883721511`
- Unibot频道: [点击进入](https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=7Pe26&appChannel=share&businessType=9&from=181074&biz=ka&shareSource=5)
### 使用框架
- QQbot框架: [Mrs4s/go-cqhttp](https://github.com/Mrs4s/go-cqhttp)
- SDK: [nonebot/aiocqhttp](https://github.com/nonebot/aiocqhttp)
- QQ官方版bot框架：[Hoshinonyaruko/Gensokyo](https://github.com/Hoshinonyaruko/Gensokyo)
### 数据来源
- 预测线: [33Kit](https://3-3.dev/)
- 谱面预览: [ぷろせかもえ！](https://pjsekai.moe/), [プロセカ譜面保管所](https://sdvx.in/prsk.html)
- 台服国际服牌子图片：[Sekai Viewer](https://sekai.best/)
