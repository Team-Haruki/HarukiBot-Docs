# Haruki分布式部署文档

本教程包括部署与配置HarukiBot NEO分布式客户端与Bot端的大部分内容

不清楚的部分请参考官方文档/询问AI(记得给权限)  ///  26.10.11

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

## Haruki分布式注册

请先在https://haruki.seiunx.com 注册一个Haruki工具箱账号登录后才能进行之后的操作

你需要在https://haruki.seiunx.com/haruki-bot-neo 这里注册 HarukiBot NEO 实例

填入**你本人的QQ号**，发送验证码。在QQ邮箱中查询验证码并填入

请保存好botid与凭据，加入分布式群需要botid，客户端配置需要botid与凭据

如果忘记botid可以使用jwt解析凭据获取，全忘了请重新注册 HarukiBot NEO 实例

### 获取一台服务器
你需要一台24h不关机的电脑，否则关机这段时间HarukiBot将无法工作，此处推荐购买[雨云](https://www.rainyun.com/MzUzODA4_)运行

Windows 电脑需要运行大于等于 Windows 10 或 Windows Server 2016 版本的x64系统

Linux系统推荐使用 ``Ubuntu 22.04``, ``Debian 12`` 或以上的Linux发行版系统

客户端提供 Windows x64、Linux x64、Linux arm64 与 macOS arm64 版本

## 客户端安装与配置

本人账号申请加入NEO分布式群聊，填入botid验证进群

在分布式群:群文件/客户端文件夹中下载对应系统的最新客户端

10/11最新客户端：3.0.0(一般只有一个，多个下最新版本)

```text
Windows x64      haruki-client-<版本号>-windows-x64.zip
Linux x64        haruki-client-<版本号>-linux-x64.tar.gz
Linux arm64      haruki-client-<版本号>-linux-arm64.tar.gz
macOS arm64      haruki-client-<版本号>-macos-arm64.tar.gz
```
::: warning

压缩包里包含客户端程序 haruki-client（Windows 为 haruki-client.exe）以及配置文件 configs.yaml、cn_collect_configs.yaml

请把所有文件**解压缩**出来

如遇Microsoft Defender误杀客户端exe，请前往恢复，建议关闭或换用其他杀毒软件

或者进入:病毒与防护威胁-"病毒与防护威胁"设置-排除项，将bot文件夹加入其中

:::

配置文件configs.yaml里有详细说明，也可以在网页生成配置文件后下载放入

https://haruki.seiunx.com/client-config-generator

将**你本人的QQ号**，botid与凭据填入configs.yaml相应位置即可

一般无需修改api端点，如需要请按照群公告的内容进行修改

###配置完毕bot端后使用管理员权限运行/sudo运行Haruki客户端

Windows

```powershell
haruki-client.exe 或 双击运行
```

Linux（如Ubuntu/Debian/AlmaLinux）/ MacOS

```sh
chmod +x haruki-client
./haruki-client
```

Mac补充

```
解压后双击客户端，在弹出的警告窗口选择完成，然后：打开“系统设置”中的隐私与安全
点击左上角的 苹果菜单，选择 “系统设置”
在左侧菜单中找到 “隐私与安全” 并点击
在隐私与安全页面的“安全性”部分，您会看到如下提示：
已阻止“XXX.xxx”以保护Mac安全
这是macOS提示您该程序无法通过验证，阻止其运行
在拦截提示的右侧，点击 “仍要打开”
系统将再次弹出确认窗口，提示风险，请选择**“打开”**
此时你可以双击打开了
```

::: tip

configs.yaml 里明文保存着你的凭据，Linux/macOS 下如果其他用户也能读取这个文件，客户端启动时会告警，建议执行 chmod 600 configs.yaml

:::

### 准备就绪后可尝试启动客户端，如果没有问题会显示类似如下的日志（节选，按默认配置，控制 API 与 OneBot 共用 8111 端口）:

```text
[2026-09-04 12:00:00.000][INFO][main] ========================= Haruki Client v3.0.0 =========================
[2026-09-04 12:00:00.000][INFO][main] Powered by Haruki Dev Team
[2026-09-04 12:00:00.100][INFO][main] starting Haruki-Client: work_dir=., driver_mode=ws_server, driver_target=0.0.0.0:8111
[2026-09-04 12:00:00.500][INFO][main] runtime startup completed
[2026-09-04 12:00:00.500][INFO][main] control api route mounted on onebot websocket server at http://0.0.0.0:8111/haruki_client/controller
[2026-09-04 12:00:00.500][INFO][main] onebot websocket server starting on ws://0.0.0.0:8111/ws
```

**客户端的配置告一段落，请不要关闭。接下来进入Bot端部署**

## Bot端部署以及几种推荐使用的方案

#### 请使用支持 **OneBot V11** 协议的 QQ 客户端

#### 可以将下文提到的内容丢给AI帮你完成部署，记得给予充足的权限

## 1.Napcat(不建议Windows使用)

#### 下载安装启动方式：

* 请在官方教程内选择适合的安装/启动方式https://napneko.github.io/guide/boot/Shell
* 完成安装后配置请参考https://napneko.github.io/config/basic
* 登陆后，使用客户端或者webui，点击左侧网络配置选项，右侧左上角新建选择websocket客户端，url填入 ws://127.0.0.1:8111/ws
* Token请到手机端查看自身消息或者NapCat控制台查看获取随机Token
* 再次进入WebUi后会强制要求修改密码，否则禁用大部分功能
* Webui无特殊需要建议关闭

## 2.LLOnebot/LuckyLilliaBot(最近容易风控)

#### 下载安装启动方式：

* 目前推荐进入官方网站https://luckylillia.com/guide/choice_install
* 本页用于快速选择最适合你的 LLBot 安装方式。先选择操作系统，再选择对应版本即可查看步骤。
* 支持 Windows、macOS、Linux 和 Docker 部署。提供 Desktop 桌面版（图形化界面）和 CLI 命令行版两种形式，也可手动安装。
* 关于bot配置也推荐进入查看详情https://luckylillia.com/guide/config
* Bot设置选择WebSocket客户端(反向)，并添加以下地址:ws://127.0.0.1:8111/ws后保存
* 系统设置-启动选项填入QQ号并选择打开软件后自动启动Bot(注意保存)
* Webui无特殊需要建议关闭

## 3.SnowLuma(Windows推荐使用)

#### 下载安装启动方式：
* 在官网寻找合适的安装方式https://snowluma.github.io/zh/docs/guide/quickstart
* 以下是win版本的使用方法，Linux和Docker参考官网的使用方式
* 安装启动后看日志获取登录密码，进入http://127.0.0.1:5099后台登录
* 启动bot的qq后，左侧/进程注入/探测登录，查看bot号对应的项目点击加载
* 在左侧/节点配置/在线连接配置节点，如果加载后没显示记得刷新网页即可
* 新建ws客户端，在目标url中填入ws://127.0.0.1:8111/ws，点击创建节点
* 然后记得点击界面右上角的保存即可

## bot端配置完成链接之后haruki客户端内应该显示以下内容

```text
time="2026-04-24T05:04:45+08:00" level=info msg="[wss] 连接Websocket服务器: ws://127.0.0.1:8111/ws 成功, 账号: <你Bot账号>"
```

在bot所在的群而不是私聊bot发送指令测试，比如/haruki_info，如果一切正常，你的bot应该会回复这样的消息:

```text

Haruki Cloud Env: production
Haruki Cloud v3.10.0
Latest Client v2.2.2
Haruki Client v3.0.0
Haruki Bot Id: <你的BotId>
```

如果没有回复，请检查haruki客户端运行是否报错、bot日志是否报错。并重新对照bot客户端与haruki客户端配置，最后再带着截图询问群友。

如果都没有报错，则可能是机器人账号被腾讯风控，需要在同一环境中多登录一段时间。
