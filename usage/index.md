<div style="text-align: center;">
    <img src="https://images.shiromiku.moe/images/37baa23757a020fdd07fdcb75a70bf06.webp" alt="logo" width="256" height="256" style="display: block; margin: 0 auto;">

# HarukiBot

一款多功能QQ群机器人  
Logo由[小沢翼](https://space.bilibili.com/3493133455198556)担当绘制
</div>



# 功能列表
>  本文档将引导您使用 HarukiBot
>

+ HarukiBot是一款功能型机器人, 目前主要提供《世界计划 多彩舞台》相关查询服务。
+ 该Bot不提供私聊服务。
+ 使用该Bot，即意味着你同意[使用条款](/licence/)及[隐私条款](/privacy/)。
+ 如果你在使用过程中遇到任何问题，你可以在该页面最下方的``关于``下面联系``开发者``进行反馈。
+ 目前HarukiBot**仍然处于开发状态**，**有多种功能仍在开发中**，如果没有你需要的功能，请不要着急，请耐心等待开发者开发完善

## 查询pjsk歌曲信息
### pjskinfo
+ `pjskinfo+曲名`, `song+曲名`, `musicinfo+曲名` 查看当前歌曲详细信息
+ `pjskbpm+曲名` 查看当前歌曲的bpm
+ `查bpm+数字` 查询对应bpm所有歌曲

### 谱面预览
+ `谱面预览 曲名 难度` 查询对应曲名，难度的谱面预览（来源：[ぷろせかもえ！](https://pjsekai.moe/)
    - `难度`支持的输入: `easy`, `normal`, `hard`, `expert`, `master`, `append`, `ez`, `nm`, `hd`, `ex`, `ma`, `ap`, `apd`
    - 如果查询`master`可省略难度

### 昵称设置
+ `musicset昵称to歌名` 设置歌曲昵称
+ `musicdel昵称` 删除歌曲昵称
+ `charalias昵称` 查看特定角色所有昵称
+ `charaset昵称to角色名(可以是现有昵称)` 设置角色群通用昵称,如`charasetkndto宵崎奏`
+ `charadel昵称` 删除角色群通用昵称
+ `grcharaset新昵称to已有昵称` 设置仅当前群可用角色昵称
+ `grcharadel已有昵称` 删除仅当前群可用角色昵称
+ [后续将会添加]`charainfo昵称` 查看该角色的个人资料

::: info
所有歌曲昵称设置，角色昵称设置的日志内容将会在实时日志页面按日公示。  
若违反相关条例将会视情况采取删除对应昵称至禁止使用Bot不等的措施。

:::

## 查询玩家信息
> 在命令前加`en`即可查询国际服信息，如`en绑定`, `ensk`, `en逮捕`, `enpjskprofile`
>

> 在命令前加`tw`即可查询台服信息，如`tw绑定`, `twsk`, `tw逮捕`, `twpjskprofile`
>

> 在命令前加`kr`即可查询韩服信息，如`kr绑定`, `krsk`, `kr逮捕`, `krpjskprofile`
>

+ `绑定+id` 通过游戏uid绑定你的游戏账号


### MySekai相关查询
::: info
该功能仍然处于公测阶段
Android 用户建议使用 [Haruki工具箱-上传MySekai数据](https://haruki.seiunx.com/upload_mysekai) 的`引继信息上传模式`
iOS / iPadOS 用户 建议使用代理工具MitM模块更新，要求如下：
+ 拥有代理工具 ( 如 Shadowrocket / Quantumult X / Surge / Loon / Stash )
+ 有需要请加群**1026390204**咨询群友
:::

+ `mysekai_analyze`、`mysekai分析`、`ms分析`、`msa` 根据用户上传至Haruki数据库的数据分析MySekai现存材料
+ `mysekai照片 + 序号`、`ms照片 + 序号`、`msp + 序号` 根据用户上传到Haruki数据库的数据下载用户在MySekai里面拍摄的照片 (按拍摄顺序)

### 活动排名相关查询
+ `sk+id` 如果你在前100，可以用该命令查询排名和分数
+ `sk+排名` 查询对应排名分数（仅支持前100，非国际服另外支持查询特定榜线）
+ `查房+排名`, `cf+排名` 查询特定排名最近1小时相关信息
+ `sk线`, 查询榜线分数
+ `时速` 查看近一小时各榜线的Pt增长速度
+ `半日速` 查看近半天各榜线的Pt增长速度
+ `日速` 查看近一天各榜线的Pt增长速度

::: info
`时速`、`半日速`、`日速`指令后面可以跟数字，将特定时间范围内的Pt增长转换为对应速度  
如`时速10` = 10分钟内Pt增长量转换的时速  
可输入数字单位为分钟，最大不超过1440分钟(即一天)

:::

+ `分数线+排名`、`rtr+排名` 查看本期活动中特定排名的分数趋势
+ `追踪`、`ptr` 追踪**自己**在本期活动中的活动PT趋势与活动排名趋势
+ `追踪+排名`、`ptr+排名` 追踪**目前特定排名**在本期活动中的活动PT趋势与活动排名趋势

::: info
`追踪`指令支持双排名查询  
如`追踪1 2`会对比目前排名为1和2的两个玩家的活动PT趋势和活动排名趋势

:::

+ [后续将会添加]`sk预测` 查看预测线，预测信息来自[3-3.dev](https://3-3.dev/)（仅日服）

### 打歌情况查询
+ `逮捕@[xxx]` 如果此人绑定过id，就可以看TA的ex与master难度fc、ap数，排位信息(后续将会添加)
+ `逮捕+id` 查看对应id的expert难度、master难度、append难度的fc、ap数，排位信息(后续将会添加)
+ `pjskprofile`, `个人信息` 生成绑定id的profile图片

### 隐私相关
+ `不给看` 不允许他人逮捕自己，但自己还是可以逮捕自己，使用sk查分和逮捕自己时不会显示游戏uid
+ `给看` 允许他人逮捕自己



### 查询卡牌及活动信息
> 查卡面/查活动功能为 [Yozora](https://github.com/cYanosora) 所写，非常感谢
>

+ `查卡/查卡面/查询卡面/findcard [角色昵称]`: 获取当前角色所有卡牌
+ `查卡/查卡面/查询卡面/cardinfo [卡面id]`: 获取卡牌id详细卡面信息
+ `查活动/查询活动/event [活动id]`: 查看指定活动信息（可直接使用`event`查看当前活动信息）
+ `查活动/查询活动/findevent [关键字]`: 通过关键字筛选活动，返回活动概要图，没有关键字则会返回提示图
    - 单关键字方式：
        * 查活动 5v5：返回活动类型为5v5的活动概要
        * 查活动 紫月：返回活动属性为紫月的活动概要
        * 查活动 knd：返回当期出卡(包括报酬)含knd的活动概要
        * 查活动 miku：返回当期出卡含任意组合的miku的活动概要
        * 查活动 25miku：返回当期出卡含白葱的活动概要
        * 查活动 25h：返回当期出卡含任意25成员(不含vs)的活动概要，而并不是25箱活的活动概要
    - 多关键字方式：
        * 查活动 草 5v5：返回活动类型为5v5，活动属性为绿草的活动概要
        * 查活动 knd 蓝：返回活动属性为蓝星，出卡含knd的活动概要
        * 查活动 普活 紫月 knd：返回活动类型为马拉松，活动属性为紫月，出卡含knd的活动概要(即使knd为不同属性的报酬卡，也会显示)
    - 使用例：
        * 查活动 25h：仅返回25箱活的活动概要
        * 查活动 25h 25miku：返回25箱活且vs出卡为白葱的活动概要
        * 查活动 knd ick：返回出卡同时包括knd、ick混活的活动概要
+ `活动图鉴/活动列表/活动总览/findevent all`: 返回当前所有活动的概要，该功能由于图片过大无法在频道bot使用

## 关于
+ 开发者: [星云希凪](https://github.com/MejiroRina)
+ 联系我: <haruki@seiunx.com>
+ wiki原作者：[綿菓子ウニ](https://space.bilibili.com/622551112)
+ 使用授权：[点击查看](https://images.shiromiku.moe/images/4f956d51aaa3d1b2f407d1922e397a42.jpg)
+ wiki适配与编辑：[岩崎阳子](https://space.bilibili.com/11048929)
+ 联系我：<admin@shiromiku.moe>或QQ：`57892198`
+ Logo画师：[小沢翼](https://space.bilibili.com/3493133455198556)

### 使用框架
+ QQbot框架: [Mrs4s/go-cqhttp](https://github.com/Mrs4s/go-cqhttp)
+ SDK: [nonebot/aiocqhttp](https://github.com/nonebot/aiocqhttp)

### 数据来源
+ 预测线: [33Kit](https://3-3.dev/)
+ 谱面预览: [ぷろせかもえ！](https://pjsekai.moe/)
+ 台服国际服牌子图片：[Sekai Viewer](https://sekai.best/)

