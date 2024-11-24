# 功能列表

>  本文档将引导您使用 HarukiBot
> 
- HarukiBot是一款功能型机器人, 主要提供《世界计划 多彩舞台》相关查询服务。
- 该Bot不提供私聊服务
- 使用该Bot，即意味着你同意使用条款及隐私条款
- 如果你有任何意见，可以加入交流群：
  - QQ 群: `959939201`

## 查询pjsk歌曲信息

### pjskinfo
- `pjskinfo+曲名`, `song+曲名` 查看当前歌曲详细信息
- `pjskbpm+曲名` 查看当前歌曲的bpm
- `查bpm+数字` 查询对应bpm所有歌曲

### 谱面预览
- `谱面预览 曲名 难度` 查询对应曲名，难度的谱面预览（来源：[ぷろせかもえ！](https://pjsekai.moe/)
  - `难度`支持的输入: `easy`, `normal`, `hard`, `expert`, `master`, `append`, `ez`, `nm`, `hd`, `ex`, `ma`, `ap`, `apd`
  - 如果查询`master`可省略难度

### 昵称设置

- `musicset昵称to歌名`
- `musicdel昵称` 删除对应昵称
- `charalias昵称` 查看所有昵称
- `charaset昵称to角色名(可以是现有昵称)` 设置角色所有群通用昵称,如`charasetkndto宵崎奏`
- `charadel昵称` 删除角色所有群通用昵称
- `grcharaset新昵称to已有昵称` 设置仅当前群可用角色昵称
- `grcharadel已有昵称` 删除仅当前群可用角色昵称
- `charainfo昵称` 查看该角色群内和全群昵称

::: warning 注意
所有歌曲昵称设置，角色昵称设置的日志内容将会在实时日志页面按日公示。
若违反相关条例将会视情况采取删除对应昵称至禁止使用Bot不等的措施。
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
### 打歌情况查询
- `逮捕@[xxx]` 如果此人绑定过id，就可以看TA的ex与master难度fc，ap数，排位信息
- `逮捕+id` 查看对应id的ex与master难度fc，ap数，排位信息
- `pjskprofile` 生成绑定id的profile图片（可使用命令`个人信息`）
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

## 关于
- 开发者: [星云希凪](https://github.com/MejiroRina)
- 联系我: <haruki@seiunx.com>

- 原Wiki编者：[綿菓子ウニ](https://space.bilibili.com/622551112)
- 使用授权：[点击查看](https://docs.shiromiku.moe/usage/uni发表讲话.jpg)

- 本wiki编者：[岩崎阳子](https://github.com/IwasakiYouko)
- 联系我：<admin@shiromiku.moe>或QQ：`57892198`

### 使用框架
- QQbot框架: [Mrs4s/go-cqhttp](https://github.com/Mrs4s/go-cqhttp)
- SDK: [nonebot/aiocqhttp](https://github.com/nonebot/aiocqhttp)
### 数据来源
- 预测线: [33Kit](https://3-3.dev/)
- 谱面预览: [ぷろせかもえ！](https://pjsekai.moe/), [プロセカ譜面保管所](https://sdvx.in/prsk.html)
- 台服国际服牌子图片：[Sekai Viewer](https://sekai.best/)
