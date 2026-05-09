---
title: MySekai 查询
outline: false
---

<script setup>
import ChatBox from '/bot-help/components/ChatBox.vue'

const msam = [
  { text: '/msam', from: 'user' },
  { text: '[包含烤森的资源信息以及具体四张地图资源点的图片]', from: 'bot' }
]

const fixture = [
  { text: '/mysekai家具列表', from: 'user' },
  { text: '[包含所有当前服务器mysekai家具的列表]', from: 'bot' }
]

const msf = [
  { text: '/msf', from: 'user' },
  { text: '[在家具列表的基础上标黑未制作家具的列表]', from: 'bot' }
]

const msr = [
  { text: '/msr', from: 'user' },
  { text: '可以查看唱片持有情况的列表图片', from: 'bot' }
]

const msb = [
  { text: '/msb', from: 'user' },
  { text: '[可以查看已获取的mysekai蓝图的列表]', from: 'bot' }
]

const msp = [
  { text: '/msp 2', from: 'user' },
  { text: '[返回mysekai相册中正数第二张图片]', from: 'bot' }
]

const msg = [
  { text: '/msg mmj' , from: 'user'},
  { text: '[升级more more jump的大门所需的每级材料的列表]' , from: 'bot' }
]
</script>

# MySekai 相关查询

::: info
这部分功能需要在Haruki工具箱绑定并上传数据之后才能正常使用

Android 用户建议使用 [Haruki工具箱-上传MySekai数据](https://haruki.seiunx.com/upload_mysekai) 的 `继承码上传`

台服/韩服 Android 用户教程参考 [Haruki工具箱-HarukiProxy使用教程](/haruki-proxy/)

iOS / iPadOS 用户建议使用代理工具 MitM 模块更新，教程参考 [Haruki工具箱-iOS模块上传数据教程](/toolbox-tutorial/ios-module)
:::

> ⚠️ **所有 MySekai 指令需用户绑定 Haruki工具箱 账号**
> 
> ⚠️ **本功能不支持国服**

## 查询烤森资源

- `/msa` `/pjsk mysekai res` `/mysekai-resource` `/mysekai资源` `/烤森资源`
  - 查询烤森信息（资源、天气、来访角色等）。
- `/msm` `/pjsk mysekai map` `/mysekai-map` `/mysekai地图` `/烤森地图` `/msmap`
  - 查询烤森地图。
  - `/msm <id>`可以单独输出某张地图
- `/msam`
  - 同时输出 `msa` 和 `msm` 对应的统计信息以及四张烤森地图。

## 查询烤森收集


- `/烤森家具列表` `/mysekai-fixture-list` `/mysekai家具列表`
  - 查询所有家具列表。
- `/家具列表` `/pjsk mysekai furniture` `/pjsk mysekai fixture` `/msf` `/mysekai 家具`
  - 查询账号已获得家具列表,。
- `/msr` `/pjsk mysekai musicrecord` `/mysekai-music-record` `/mysekai唱片` `/烤森唱片` `/mss` `/mssong`
  - 查询烤森音乐唱片收集。
- `/msb` `/pjsk mysekai blueprint` `/mysekai blueprint` `/mysekai 蓝图`
  - 查询烤森蓝图列表。
- `/msp` `/pjsk mysekai photo` `/pjsk mysekai picture` `/mysekai 照片`
  - 展示烤森内拍摄的照片，需要指定图片编号（从1开始）。



## 查询烤森养成

- `/烤森对话列表` `/mysekai-talk-list` `/mysekai对话列表`
  - 查询烤森角色对话列表。
- `/msg` `/pjsk mysekai gate` `/mysekai-door-upgrade` `/mysekai大门升级` `/烤森大门升级` `/msgate`
  - 查询烤森大门升级所需材料，如果没有指定团队，会显示距离满级最近的团队的大门。

## 指令示例 
<div class="chatbox-grid">
<ChatBox :messages="msam" />

<ChatBox :messages="fixture" />

<ChatBox :messages="msf" />

<ChatBox :messages="msr" />

<ChatBox :messages="msb" />

<ChatBox :messages="msp" />

<ChatBox :messages="msg" />
</div>