# Haruki分布式部署文档

本教程包括部署与配置HarukiBot NEO分布式客户端与Bot端的大部分内容

## 准备工作

::: warning

部署本项目需要一定的电脑基础，会读文档，推荐使用vscode之类的阅读器查看

部署bot这一行为可能违反腾讯的用户协议，因此可能导致的 QQ 账号被**封禁或限制**等一切后果，开发者不予承担。

请合理使用本分布式客户端，恶意使用可能会被开发者收回使用权限、永久拉黑。

*NEO分布式群号：111612548 如遇问题请在完整看完文档排除后附上截图在群里询问!!!*

+ 客户端注册过程中要求你填写的QQ号为**你本人的QQ号**，而非**你使用Bot的账号**

+ **请不要把Bot账号拉进来！**

+ **分布式群是获取/询问bot部署相关内容的，请不要一进去就使用群里的bot**

+ **请勿将HarukiClient用于QQ官方机器人！这会导致Haruki Cloud的绑定数据异常！**

:::

##HarukiBot NEO分布式注册

请先在https://haruki.seiunx.com 注册一个Haruki工具箱账号进行接下来的流程

你需要在https://haruki.seiunx.com/haruki-bot-neo 这里注册 HarukiBot NEO 实例

填入**你本人的QQ号**，发送验证码。在QQ邮箱中查询验证码并填入

请保存好botid与凭据，加入分布式群需要botid，客户端配置需要botid与凭据

如果忘记botid可以使用jwt解析凭据获取，全忘了请重新注册 HarukiBot NEO 实例

### 获取一台服务器
你需要一台24h不关机的电脑，否则关机这段时间HarukiBot将无法工作，此处推荐购买[雨云](https://www.rainyun.com/MzUzODA4_)运行

Windows 电脑需要运行大于等于 Windows 8 或 Windows server 2012 版本的x64系统

Linux 系统推荐使用 ``Ubuntu 22.04``, ``Debian 12`` 或以上的Linux x64发行版系统

暂时不支持MacOS及其他任何arm版本

## 客户端安装与配置

本人账号申请加入NEO分布式群聊，填入botid验证进群

在分布式群文件中下载对应系统的客户端

```text
Windows       haruki-zerobot-windows-x64.zip
Linux       haruki-zerobot-linux-x64.tar.gz
```
::: warning

请把所有文件**解压缩**出来

如遇Microsoft Defender误杀客户端exe，请前往恢复，建议关闭或换用其他杀毒软件

或者进入:病毒与防护威胁-"病毒与防护威胁"设置-排除项，将bot文件夹加入其中

:::

配置文件configs.yaml里有详细说明

将**你本人的QQ号**，botid与凭据填入相应位置即可

###配置完毕bot端后使用管理员权限运行/sudo运行Haruki客户端

Windows

```powershell
haruki-zerobot.exe 或 双击运行
```

Linux（如Ubuntu/Debian/AlmaLinux）

```sh
sudo chmod 777 haruki-zerobot
.haruki-zerobot
```

###准备就绪后可尝试启动客户端，如果没有问题会显示如下日志:

```text
2026/04/24 05:03:03 control api listening on http://127.0.0.1:8112/haruki_client/controller
time="2026-04-24T05:03:03+08:00" level=info msg="[wss] Websocket服务器开始监听: 127.0.0.1:8111"
time="2026-04-24T05:03:03+08:00" level=info msg="[wss] WebSocket 服务器开始处理: 127.0.0.1:8111"
```

**客户端的配置告一段落，请不要关闭。接下来进入Bot端部署**

## Bot端部署以及几种推荐使用的方案

#### 请使用支持 **OneBot V11** 协议的 QQ 客户端

#### 已不推荐使用Lagrange

## 1.Napcat

首先，需要有一台服务器或者24小时开机联网的电脑，以保证您部署的bot能一直运行。

其次，请在该设备上下载 **Napcat**。

#### 下载安装启动方式：

* Windows (建议使用Docker)

  * NapCatQQ:https://github.com/NapNeko/NapCatQQ/releases

  * 展开最新一个版本的Assets，下载NapCat.Shell.Windows.OneKey.zip文件并解压

  * 启动 NapCatInstaller.exe 等待自动化配置（占空间略大，可以自行选择上述解压路径）

  * 进入 NapCat.XXXX.Shell 文件夹，启动napcat.bat扫码登录（如果提示QQ损坏就把所有文件删了重新安装一次）

  * 登陆后，使用客户端或者webui，点击左侧**网络配置**选项，右侧左上角新建选择**websocket客户端**，url填入
    ws://127.0.0.1:8111/ws

  * 名称随意，记得点击**左上角启动**并保存(如需添加其他bot地址，请重复上述操作并填入对应url)

  * 现版本webui默认随机密码token，请在webui.json文件下查看，如无需公网访问webui请将host改为127.0.0.1,port改为0，若需公网使用请临时开启使用后关闭，并使用非默认端口。

  * webui启用时，启动后可在启动日志中看到形如 [WebUI] WebUI Local Panel Url: http://127.0.0.1:6099/webui?token=xxxx 的 token 信息。

    ```json
      {
      "host": "0.0.0.0", // WebUI 监听地址
      "port": 6099, // WebUI 端口
      "token": "xxxx", // 登录密钥, 默认是自动生成的随机登录密码
      "loginRate": 3, // 每分钟登录次数限制
      }

  * 或者登陆后退出，通过手动修改文件配置。进入NapCat.XXXX.Shell\versions\9.9.19-34740\resources\app\napcat\config文件夹

  * 现在这里应该有onebot11_{刚才登录的QQ号}.json

  * 打开该文件，在"websocketClients"的[]里填入以下内容：

    ```json
      {
        "name": "websocket-client-0",
        "enable": true,
        "url": "ws://127.0.0.1:8111/ws",
        "messagePostFormat": "array",
        "reportSelfMessage": false,
        "reconnectInterval": 5000,
        "token": "",
        "debug": false,
        "heartInterval": 30000
      }

- Debian/Ubuntu/Centos等linux系统

  * 在命令行输入以下命令下载，安装选项可以默认，也可以根据需要自行调整

  *   ```bash
        curl -o \
        napcat.sh \
        https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh \
        && sudo bash napcat.sh
        ```
  * 启动nc

  * ```bash
      sudo xvfb-run -a /opt/QQ/qq --no-sandbox #第一次登录请扫码
      sudo xvfb-run -a /opt/QQ/qq --no-sandbox -q QQ号 #以后使用
      ```

  * 安装完成后先通过napcat start QQ号启动，然后结束，并进入/opt/QQ/resources/app/app_launcher/napcat/config，打开onebot11_{刚才登录的QQ号}.json
  * 修改websocketClients的值（和Windows的配置相同，复制粘贴ok）
  * 保存后再次登录即可
  * Linux也可使用webui进行配置

* Docker及更多安装方式:https://napneko.pages.dev/guide/boot/Shell

## 2.LLOnebot/LuckyLilliaBot

* Windows(推荐使用)

  * 首先确认你已经安装了64位的原版无插件NTQQ。

  * 打开浏览器，输入以下链接:https://github.com/LLOneBot/LuckyLilliaBot/releases

  * 下载LLBot-Desktop-win-x64.zip解压后双击运行llbot.exe即可。

  * 点击启动，等待安装PMHQ。登录你所需要挂bot的QQ号，此时bot账号头像及QQ号出现在左上角。

  * 系统设置-启动选项填入QQ号并选择打开软件后自动启动Bot。更改设置后右下角保存！

  * Bot设置选择WebSocket客户端(反向)，并添加以下地址:ws://127.0.0.1:8111/ws后保存。

  * Webui无特殊需要建议关闭，更多文档https://www.llonebot.com/guide/introduction
## bot端配置完成之后客户端应该显示以下内容

```text
time="2026-04-24T05:04:45+08:00" level=info msg="[wss] 连接Websocket服务器: ws://127.0.0.1:8111/ws 成功, 账号: <你Bot账号>"
```

在有自己bot的群而不是私聊发送指令测试，比如/haruki_info，如果一切正常，你的bot应该会回复如下消息:

```text
Haruki Cloud Env: production
Haruki Cloud v2.0.0
Latest Client v2.0.0
Haruki Client v2.0.0
Haruki Bot Id: <你BotId>
```

如果没有回复，请检查客户端运行是否报错、OneBot 日志是否报错。并重新对照bot与客户端配置，最后再带着截图询问群友。

bot后台每几分钟出现一大串warn报错时请先确定bot反馈，若bot正常响应请无视。

如果都没有报错，则可能是机器人账号被腾讯风控，需要在同一环境中多登录一段时间。