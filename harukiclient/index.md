# Haruki客户端使用文档
使用此客户端, 您可以用自己的QQ号搭建一个HarukiBot

## 准备工作
::: warning

部署本项目需要一定的电脑基础，会读文档

该教程已经过大量用户验证无问题，一步步跟着走就能部署好。

如果出现问题建议先排除自己的问题，或者到客户端用户群里问问群友怎么解决

:::

### 获取一台服务器
你需要一台24h不关机的电脑，否则关机这段时间HarukiBot将无法工作

Windows 电脑需要运行大于等于 Windows 8 或 Windows server 2012 版本的系统（更低版本实测无法运行）  
Linux 系统提供了从Python 3.8到3.12的打包文件，推荐使用 ``Ubuntu 22.04``, ``Debian 12`` 或以上的Linux发行版系统  
macOS仅提供Apple Silicon (即arm64)的打包文件，x86的macOS不提供支持

在较低版本 Ubuntu 和其他较低版本 linux 中可能提示缺少 GLIBC 对应版本，安装非常麻烦，不推荐使用。


### 下载客户端和注册
请加群**959939201**在群文件下载客户端以及配置文件，并且将客户端和配置文件放在同一个目录下，然后运行客户端按照流程注册

::: warning

+ 客户端注册过程中要求你填写的QQ号为**你本人的QQ号**，而非**你使用Bot的账号**
+ **请不要把Bot账号拉进来！**
+ **请勿将HarukiClient用于QQ官方机器人！这会导致Haruki Cloud的绑定数据异常！**

:::
## 配置客户端
你需要将客户端放在一个文件夹内，在这个文件夹下新建一个`configs.json`，用你喜欢的编辑器打开，填上以下的设置
```json
{
  "host": "127.0.0.1",
  "port": 8000,
  "botId": null,
  "credential": null,
  "enableHelp": true,
  "helpContent": "欢迎您使用HarukiBot\n使用帮助: https://docs.haruki.seiunx.com",
  "controlApiAccessToken": null,
  "enableModules": [
    "all"
  ],
  "runMode": "blacklist",
  "blacklists": {},
  "whitelists": {},
  "additionalFuncWhitelists": [],
  "botAdmins": [],
  "userBlacklists": [],
  "enableGroupCommandLimit": false,
  "globalCommandHourlyLimit": null,
  "globalCommandDailyLimit": null,
  "enableCN": true
}
```
其中各项配置的解释如下:  
`host` 为客户端监听地址，如果没有特殊情况不建议监听`0.0.0.0`  
`port` 为客户端监听端口  
`botId` 为客户端id，初次使用请留空为`null`，待注册流程完成后会自动填写  
`credential` 为客户端凭据，初次使用请留空为`null`，待注册流程完成后会自动填写  
`enableHelp` 为是否开启help指令回复，如果你有自定义开发需求可以改为`false`  
`helpContent`  为自定义help回复内容，可不填写  
`controlApiAccessToken` 为客户端内置管理API的验证token，如果填写了之后则调用API需要填写请求头`Authorization: Bearer <AccessToken>`  
`enableModules` 为启用的模块，`all`即全部开启，目前仅存在`pjsk`模块，后续会提供更多选择  
`runMode` 为客户端运行模式，可选择`blacklist`和`whitelist`  
`blacklists` 为客户端黑名单，需按照`"module": [list]`格式填写，如`{"all": [114514]}`  
`whitelists` 为客户端白名单，需按照`"module": [list]`格式填写，如`{"all": [114514]}`  
`additionalFuncWhitelists` 为客户端娱乐功能白名单  
`botAdmins`  为客户端的管理员  
`userBlacklists` 为用户黑名单，添加进此的用户会无法使用你的Haruki分布式  
`enableGroupCOmmandLimit` 为是否启用全局消息限制  
`globalCommandHourlyLimit` 为**每小时**限制回复的消息数量，达到此数量之后**该小时之内**不会再响应任何指令  
`globalCommandDailyLimit` 为**每天**限制回复的消息数量，达到此数量之后**次日北京时间8点之前**不会再响应任何指令  
`enableCN` 为是否启用国服功能

准备就绪后可尝试启动客户端，如果没有问题会显示如下日志:

```text
[xxxx-xx-xx xx:xx:xx] Detected no bot account configured, starting registration...
```
当你遇到下面的提示的时候，请填写你本人的QQ号:
```text
Please enter your Instant Messenger User ID (QQ is your qq number): 
```
当你看到如下消息时，请在群内发送`/haruki_verify <6位数字验证码>`完成注册，请注意不要将<>一起包括在内:
```text
[xxxx-xx-xx xx:xx:xx] Your verification code is {verification_code}, verification code will be expired in 10 minutes.
[xxxx-xx-xx xx:xx:xx] Please enter after finishing register verification.
```

当你看到群内Bot回复`Successfully verified.`时即完成注册流程  
完成注册之后，请按**回车键**继续

::: warning

不要关闭客户端，必须启动客户端才能使用 bot

:::

## 配置Bot端
你可以考虑使用`Lagrange`, `LLOneBot`, `NapCat`等OneBot客户端的`反向WebSocket`连接到Bot端  
本文不再赘述相关配置  
如果你不会如何配置，可以在客户端用户群内向群友提问

## 测试对话

在有机器人的群里发送命令，比如`/haruki_info`，如果一切正常，ta 应该会回复如下消息:
```
Haruki Cloud Env: production 
Haruki Cloud v1.10.0
Latest Client v1.1.6
HClient Ver. 1.1.6
Haruki Bot Id: <YourBotId>
```

如果没有回复，请检查客户端运行是否报错、OneBot 日志是否报错。  
如果都没有报错，则可能是机器人账号被腾讯风控，需要在同一环境中多登录一段时间。
