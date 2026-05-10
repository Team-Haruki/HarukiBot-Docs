---
outline: false
---

<div style="text-align: center;">
    <img src="https://images.shiromiku.moe/images/HarukiDocsMaid1.webp" alt="logo" width="256" height="256" style="display: block; margin: 0 auto;">

# HarukiBot NEO

一款多功能QQ群机器人  
Logo由[小沢翼](https://space.bilibili.com/3493133455198556)担当绘制
</div>

>
> 本文档将引导您使用 HarukiBot NEO
>

# 阅读前提示

+ HarukiBot NEO具有配套功能网站[Haruki工具箱](https://haruki.seiunx.com)。
+ 如果你不知道有什么群可以加，也可以访问[Haruki工具箱](https://haruki.seiunx.com)
  的[推荐群聊](https://haruki.seiunx.com/friend_groups)页面。
+ 推荐群聊页面仅接受熟人申请。
+ HarukiBot NEO是一款功能型机器人, 目前主要提供《世界计划 多彩舞台》相关查询服务。
+ 该Bot不提供私聊服务。
+ 使用该Bot，即意味着你同意[使用条款](/licence/)及[隐私条款](/privacy/)。
+ 如果你在使用过程中遇到任何问题，你可以在该页面最下方的``关于``下面联系``开发者``进行反馈。
+ 目前HarukiBot NEO**仍然处于开发状态**，**有多种功能仍在开发中**，如果没有你需要的功能，请不要着急，请耐心等待开发者开发完善。
+ 本文档的部分板块仍在完善中，如果你认为本文档有内容解释不清或没有介绍，请向我们反馈。

## 一些提醒

### 关于指令

+ 从HarukiBot NEO版本起，所有指令都需要带"/"（例"/绑定"），没有"/"的指令不会被响应。

### 关于QQ官方机器人

+ Haruki NEO也有部署为QQ官方机器人“宵崎奏”的分布式(以下简称为“宵崎奏”)，QQ号为2854202255。
+ 使用“宵崎奏”时，需要先@机器人然后输入指令（如`@宵崎奏 /个人信息`），否则不会被响应。
+ “宵崎奏”与其他分布式bot<span style="color:red">不共享绑定信息与suite数据！使用时所有账号相关操作都要重新进行！ </span>如绑定、验证以及调整默认账号等！
+ 如果你在使用QQ官方机器人“宵崎奏”的过程中遇到了**社交平台账号未授权**或**你无权查看这个账号的数据**
  问题，请按[此教程](https://neo.haruki.seiunx.com/toolbox-tutorial/qqofficial-guide)
  前往[工具箱对应页面](https://haruki.seiunx.com/user/settings)绑定后使用。

### 服务器支持与切换

+ HarukiBot NEO支持日服（jp）、台服（tw）、韩服（kr）、国际服（en）以及国服（cn）
  如果需要使用对应区服的功能需要在指令前加区服前缀（如`/cn个人信息`）
+ HarukiBot NEO现在支持**全局默认绑定账号**和**区服默认绑定账号**，区服相关指令(如sk、sk线、时速等)如果不带区服前缀，会**默认采用**您的**全局默认绑定账号**的区服

> 如您的全局默认绑定为cn服账号，则使用`/sk`等效以前的`/cnsk`

+ 部分功能不支持部分区服，会在功能内说明。


## 关于

+ HarukiBot NEO画图与功能参考实现 - LunaBot: [ルナ茶](https://github.com/NeuraXmy)
+ HarukiBot
  NEO开发者: [星雲希凪](https://github.com/MejiroRina)、[灵潜](https://github.com/xuanmingLQ)、[Deseer](https://github.com/Deseer)、[storyxy3](https://github.com/storyxy3)
+ 联系开发团队: <haruki@seiunx.com>
+ wiki原作者：[綿菓子ウニ](https://space.bilibili.com/622551112)
+ 使用授权：[点击查看](https://images.shiromiku.moe/images/4f956d51aaa3d1b2f407d1922e397a42.jpg)
+ wiki适配与编辑：[岩崎阳子](https://space.bilibili.com/11048929)、[Aposetles](https://space.bilibili.com/178748972)、[星雲希凪](https://github.com/MejiroRina)、[storyxy3](https://github.com/storyxy3)
+ 联系我：<admin@shiromiku.moe>或QQ：`57892198`
+ Logo画师：[小沢翼](https://space.bilibili.com/3493133455198556)

### 使用框架

+ QQbot框架: [Mrs4s/go-cqhttp](https://github.com/Mrs4s/go-cqhttp)
+ SDK: [nonebot/aiocqhttp](https://github.com/nonebot/aiocqhttp)

### 数据来源

+ 预测线: [33Kit](https://3-3.dev/)、[Moesekai](https://pjsk.moe/)
+ 谱面预览: [ぷろせかもえ！](https://pjsekai.moe/)
