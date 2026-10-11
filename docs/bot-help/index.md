---
outline: false
---

> [!info] 我们需要你的帮助
> 运营 HarukiBot NEO 以及相关 Haruki 服务需要投入大量人力、财力与精力  
> 为了 Haruki Dev Team 能够更好地服务大家，你可以到我们的**[爱发电](https://www.ifdian.net/a/seiunx)**帮助我们做得更好


<div style="text-align: center;">
    <img src="https://images.shiromiku.moe/images/HarukiDocsMaid1.webp" alt="logo" width="256" height="256" style="display: block; margin: 0 auto;">

# HarukiBot NEO

一款多功能 QQ 群机器人  
Logo 由[小沢翼](https://space.bilibili.com/3493133455198556)担当绘制
</div>

>
> 本文档将引导你使用 HarukiBot NEO
> 
> 本文档分为多个章节，可以在左上角展开目录前往对应章节查看（或善用搜索框）
>

> [!warning] 注意
> 
> 虽然这一章节没有具体功能介绍，但也能解决很多使用问题（例如官方机器人数据不统一、抓包等），希望你能把本章节读完。

# 阅读前提示

+ HarukiBot NEO 具有配套功能网站 [Haruki 工具箱](https://haruki.seiunx.com)。
+ 如果你不知道有什么群可以加，也可以访问 [Haruki 工具箱](https://haruki.seiunx.com)
  的[推荐群聊](https://haruki.seiunx.com/friend_groups)页面。
+ 推荐群聊页面仅接受熟人申请。
+ HarukiBot NEO 是一款功能型机器人，目前主要提供《世界计划 多彩舞台》相关查询服务。
+ 该 Bot 不提供私聊服务。
+ 使用该 Bot，即意味着你同意[使用条款](/licence/)及[隐私条款](/privacy/)。
+ 如果你在使用过程中遇到任何问题，你可以在该页面最下方的“关于”下面联系开发者进行反馈。
+ 本文档的部分板块**仍在完善中**，如果你认为本文档有内容解释不清或没有介绍，请向我们反馈。

## 一些提醒

### 关于指令

+ 从 HarukiBot NEO 版本起，所有指令都需要带“/”（例如 `/绑定`），没有“/”的指令不会被响应。
+ 在指令后加 `-help` 或 `-h` 可以查看这个指令的帮助，例如 `/查曲 -help`、`/组卡 -h`。
+ 和账号有关的指令可以写 `u1`、`u2` 选择自己的第几个绑定账号；部分指令可以写 `@群友` 查询被 @ 的人。
+ 出图的指令可以加 `--force` 或 `强制刷新` 跳过缓存重新绘制，例如 `/个人信息 --force`；每人每个指令 1 分钟内只生效一次，超出时照常返回缓存的图片。

### 关于抓包

+ 部分功能需要抓包数据（Suite），没有上传时 Bot 会提示，需要抓包并在 Haruki 工具箱对应页面上传后才能使用。
+ Android 用户建议使用 [Haruki工具箱-上传MySekai数据](https://haruki.seiunx.com/upload_mysekai) 的 `继承码上传`
+ 无法使用引继码的 Android 用户教程参考 [Haruki 工具箱 - HarukiProxy 使用教程](/haruki-proxy/)
+ iOS / iPadOS 用户建议使用代理工具 MitM 模块更新，教程参考 [Haruki 工具箱 - iOS 模块上传数据教程](/toolbox-tutorial/ios-module)

### 关于 QQ 官方机器人

+ Haruki NEO 也有部署为 QQ 官方机器人“宵崎奏”的分布式（以下简称为“宵崎奏”），QQ 号为 2854202255。
+ 使用“宵崎奏”时，需要先 @机器人 然后输入指令（如 `@宵崎奏 /个人信息`），否则不会被响应。
+ “宵崎奏”与其他分布式 Bot <span style="color:red">不共享绑定信息与抓包数据！使用时所有账号相关操作都要重新进行！</span>如绑定、验证以及调整默认绑定等！
+ 如果你在使用 QQ 官方机器人“宵崎奏”的过程中遇到了**社交平台账号未授权**或**你无权查看这个账号的数据**
  问题，请按[此教程](https://neo.haruki.seiunx.com/toolbox-tutorial/qqofficial-guide)
  前往[工具箱对应页面](https://haruki.seiunx.com/user/settings)绑定后使用。

### 区服支持与切换

+ HarukiBot NEO 支持日服(JP)、国服(CN)、台服(TW)、韩服(KR)和国际服(EN)。
+ 区服代码：`jp` `cn` `tw` `kr` `en`，加在指令前面可以指定区服，例如 `/jp组卡`、`/cn个人信息`。
+ 不写区服代码时使用默认绑定的区服，没有默认绑定时使用日服(JP)。HarukiBot NEO 支持**全局默认绑定**和**区服默认绑定**，设置方法见[个人信息与账号](/bot-help/account#账号绑定与切换)。

> 例如你的全局默认绑定是国服(CN)的账号，发送 `/sk` 等同于发送 `/cnsk`。

+ 部分功能只支持部分区服，会在功能说明里注明。
+ 使用其他区服时，查不到只在日服(JP)实装的内容。


## 关于

+ HarukiBot NEO 画图与功能参考实现 - LunaBot：[ルナ茶](https://github.com/NeuraXmy)
+ HarukiBot NEO 开发者：[星雲希凪](https://seiun.io)、[灵潜](https://github.com/xuanmingLQ)、[Deseer](https://github.com/Deseer)、[storyxy3](https://github.com/storyxy3)
+ 联系开发团队：<haruki@seiunx.com>
+ wiki 原作者：[綿菓子ウニ](https://space.bilibili.com/622551112)
+ 使用授权：[点击查看](https://images.shiromiku.moe/images/4f956d51aaa3d1b2f407d1922e397a42.jpg)
+ wiki 适配与编辑：[岩崎阳子](https://space.bilibili.com/11048929)、[Aposetles](https://space.bilibili.com/178748972)、[星雲希凪](https://github.com/MejiroRina)、[Deseer](https://github.com/Deseer)、[storyxy3](https://github.com/storyxy3)
+ 联系我：<admin@shiromiku.moe> 或 QQ：`57892198`
+ Logo 画师：[小沢翼](https://space.bilibili.com/3493133455198556)

### 使用框架

+ QQ Bot 框架：[Mrs4s/go-cqhttp](https://github.com/Mrs4s/go-cqhttp)
+ SDK: [nonebot/aiocqhttp](https://github.com/nonebot/aiocqhttp)

### 数据来源

+ 预测线：[33Kit](https://3-3.dev/)、[Moesekai](https://pjsk.moe/)
+ 谱面预览：[ぷろせかもえ！](https://pjsekai.moe/)
