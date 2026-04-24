# Haruki客户端使用文档
使用此客户端, 您可以用自己的QQ号搭建一个HarukiBot NEO

## 准备工作

::: warning

部署本项目需要一定的电脑基础，会读文档

如果出现问题建议先重读文档排除自己的问题，不懂的地方问问AI，实在没办法再到群里问问群友怎么解决

:::

### 获取一台服务器
你需要一台24h不关机的电脑，否则关机这段时间HarukiBot NEO将无法工作，此处推荐购买[雨云](https://www.rainyun.com/MzUzODA4_)运行

Windows 电脑需要运行大于等于 Windows 8 或 Windows server 2012 版本的系统（更低版本实测无法运行）  
Linux 系统推荐使用 ``Ubuntu 22.04``, ``Debian 12`` 或以上的Linux发行版系统  

### 注册和下载客户端
请前往[Haruki工具箱对应页面](https://haruki.seiunx.com/haruki-bot-neo)注册并验证qq号以获取你的botID和credential，这两项都会在稍后填写配置时用上所以请务必保存好。

请到群`111612548`在群文件下载客户端以及配置文件，并且将客户端和配置文件放在同一个目录下。

::: warning

Windows版本并非单文件，因此需要进行**解压缩**  
请务必**不要使用**Windows自带的解压缩解压Windows客户端  
否则解压的时候会报错从而解压失败

:::

::: warning

+ 客户端注册过程中要求你填写的QQ号为**你本人的QQ号**，而非**你使用Bot的账号**
+ **请不要把Bot账号拉进群！**
+ **请勿将HarukiClient用于QQ官方机器人**

:::
## 配置客户端
找到你的`configs.yaml`，将你在工具箱获取到的botID和credential填写进对应位置，保存后客户端就已经配置完成了。
```json
botId: 70070707 # 你的HarukiClient的Bot ID
credential: "" # 你的HarukiClient的登录凭证，应为很长一串JWT字符串
```

::: warning

不要关闭客户端，必须启动客户端才能使用 bot

:::

## 配置Bot端
你可以考虑使用`LLBot`, `NapCat`等OneBot客户端的`反向WebSocket`连接到Bot端  
本文不再赘述相关配置  
如果你不会如何配置，可以在客户端用户群内向群友提问

## 测试对话

在有机器人的群里发送命令，比如`/haruki_info`，如果一切正常，ta 应该会回复如下消息:
```
Haruki Cloud Env: production 
Haruki Cloud v2.0.1
Latest Client v2.0.0
HClient Ver. 2.0.0
Haruki Bot Id: <YourBotId>
```

如果没有回复，请检查客户端运行是否报错、OneBot 日志是否报错。  
如果都没有报错，则可能是机器人账号被腾讯风控，需要在同一环境中多登录一段时间。
