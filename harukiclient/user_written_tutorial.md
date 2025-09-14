# 快速上手

#### 本文档将介绍如何快速部署Haruki分布式客户端，并对客户端进行配置。

#### 如果是用记事本打开本文档，推荐换用支持MD的阅读器，如：vscode等

#### 警告：部署bot这一行为可能违反腾讯的用户协议，因此可能导致的 QQ 账号被**封禁或限制**等一切后果，开发者不予承担。

#### 温馨提示：请合理使用本分布式客户端，恶意使用可能会被开发者收回使用权限、永久拉黑。

#### *!!! 特别提醒：请勿使用bot账号加群 !!!请使用另一个账号进群验证!!!*

#### 客户端注册过程中要求你填写的QQ号为你本人的QQ号，也就是进群账号

#### **Haruki Dev群号：959939201 如遇任何问题请在群里询问!!!*

#### 请勿将HarukiClient用于QQ官方机器人！这会导致Haruki Cloud的绑定数据异常！

## Haruki客户端部署

在群文件中下载对应系统的客户端与配置文件

windows将配置文件放在解压出的文件同目录文件目录，Linux应该无需解压.app文件

windows下载zip压缩包后请不要使用系统自带默认解压，会解压失败

推荐使用7zip解压：https://www.7-zip.org/

如果官网下载失败可以在群文件里找到win-x64安装包:7z2501-x64.exe

文件结构应与下列一致
```
(最好是纯英文字符的新建文件夹)
├ config.json
└ HarukiClient-xxx-v1.1.7.exe/.app
```

最新的对应系统客户端包名

```text
Windows       HarukiClient-Windows-x64-v1.1.7.exe
Linux       HarukiClient-Linux-amd64-v1.1.7-glibc.app
```

### 配置文件

```json
{
    "host": "127.0.0.1",              //反向代理地址
    "port": 8000,                     //反向代理端口
    "botId": null,                    //客户端ID，验证时自动获取
    "credential": "",                 //客户端credit，验证时自动获取
    "enableHelp": true,               //启用客户端的help指令
    "controlApiAccessToken": null,    //客户端内置API的鉴权token，如果需要再填写
    "enableModules": [                //启用功能列表
        "all"
    ],
    "runMode": "blacklist",           //执行模式（黑名单/白名单）
    "blacklists": {                   //黑名单列表
        "all": [],                    //所有功能黑名单
        "pjsk": []                    //pjsk相关功能黑名单
    },
    "whitelists": {                   //同上
        "all": [],
        "pjsk": []
    },
    "additionalFuncWhitelists": [],   //娱乐功能白名单
    "botAdmins": [],                  //客户端管理员（填写进群验证的QQ号，不加引号）
    "userBlacklists": [],             //为用户黑名单，添加进此的用户会无法使用你的Haruki分布式
    "enableGroupCommandLimit": false, //为是否启用全局消息限制
    "globalCommandHourlyLimit": null, //为每小时限制回复的消息数量，达到此数量之后该小时之内不会再响应任何指令
    "globalCommandDailyLimit": null,  //为每天限制回复的消息数量，达到此数量之后次日北京时间8点之前不会再响应任何指令
    "enableCN": true                  //为是否启用国服功能
}
```

**客户端的配置告一段落，接下来进入Bot端部署**

# Bot端部署

### 请使用支持 **OneBot V11** 协议的 QQ 客户端

## 以下是2种推荐使用的方案

## 1.Lagrange.OneBot

首先，需要有一台服务器或者24小时开机联网的电脑，以保证您部署的bot能一直运行。

推荐购买[雨云](https://www.rainyun.com/MzUzODA4)，助力群主多续点服务器。

其次，请在该设备上下载 **Lagrange.OneBot**。

##### 下载链接：

- Lagrange.OneBot: https://github.com/LagrangeDev/Lagrange.Core/releases/tag/nightly
  * 按设备架构进行安装，如果不知道的话可以参照下面的
  * 一般windows设备选择win-x64_net9.0
  * 一般linux服务器选择linux-x64_net9.0

接着，从\Lagrange.OneBot\bin\Release\net9.0\linux-x64(win-x64)\publish中提取出Lagrange.OneBot文件

如果是linux系统，需要使用chmod +x Lagrange.OneBot给予可执行权限

然后运行，第一次运行后先退出，**修改生成的appsettings.json文件**

### 需要修改的地方:
(版本号无法公开传播请询问群友或者通过lgr官方群或者readme获取)

"SignServerUrl": "https://sign.lagrangecore.org/api/sign/版本号"

"MusicSignServerUrl": "https://ss.xingzhige.com/music_card/card"

如果遇到提示qq版本过低无法登录，一般签名服务器修改最新的版本号即可

按照以下格式添加或修改ws反代，默认应存在一个127.0.0.1和**8080**端口的配置，**请修改suffix为/ws，端口为8000**

添加新的ws反代请在{}后，[]内添加，每一项{}之间用,隔开

```json
"Implementations": [
    {
        "Type": "ReverseWebSocket",
        "Host": "127.0.0.1",
        "Port": 8000,
        "Suffix": "/ws",
        "ReconnectInterval": 5000,
        "HeartBeatInterval": 5000,
        "AccessToken": ""
    }
]
```

确认括号成对后保存，再次运行lgr，扫码登录bot账号即可

## 2.Napcat

首先，需要有一台服务器或者24小时开机联网的电脑，以保证您部署的bot能一直运行。

推荐购买[雨云](https://www.rainyun.com/MzUzODA4)，助力群主多续点服务器。

其次，请在该设备上下载 **Napcat**。

##### 下载安装启动方式：

* Windows

  * NapCatQQ:https://github.com/NapNeko/NapCatQQ/releases

  * 展开最新一个版本的Assets，下载NapCat.Shell.Windows.OneKey.zip文件并解压

  * 启动 NapCatInstaller.exe 等待自动化配置（占空间略大，可以自行选择上述解压路径）

  * 进入 NapCat.XXXX.Shell 文件夹，启动napcat.bat扫码登录（如果提示QQ损坏就把所有文件删了重新安装一次）

  * 登录后退出，进入NapCat.XXXX.Shell\versions\9.9.19-34740\resources\app\napcat\config文件夹

  * 现在这里应该有onebot11_{刚才登录的QQ号}.json

  * 打开该文件，在"websocketClients"的[]里填入以下内容：

    ```json
      {
        "name": "websocket-client-0",
        "enable": true,
        "url": "ws://127.0.0.1:8000/ws",
        "messagePostFormat": "array",
        "reportSelfMessage": false,
        "reconnectInterval": 5000,
        "token": "",
        "debug": false,
        "heartInterval": 30000
      }

  * 现版本webui已改为随机密码，请在webui.json文件下查看，如无需公网访问webui请将host改为127.0.0.1,port改为0，若需公网使用请临时开启使用后关闭，并使用非默认端口。
  * webui启用时，启动后可在启动日志中看到形如 [WebUI] WebUI Local Panel Url: http://127.0.0.1:6099/webui?token=xxxx 的 token 信息。
    
    ```json
    {
    "host": "0.0.0.0", // WebUI 监听地址
    "port": 6099, // WebUI 端口
    "token": "xxxx", // 登录密钥, 默认是自动生成的随机登录密码
    "loginRate": 3, // 每分钟登录次数限制
    }
    
  * 使用客户端或者webui时，点击左侧**网络配置**选项，右侧左上角新建选择**websocket客户端**，url填入
    ws://127.0.0.1:8000/ws
  * 名称随意，记得点击**左上角启动**并保存(如需添加其他bot地址，请重复上述操作并填入对应url)

- Debian/Ubuntu/Centos等linux系统

  * 在命令行输入以下命令下载，安装选项可以默认，也可以根据需要自行调整

  * ```bash
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
  
* 更多更详细安装方式请访问https://napneko.pages.dev/guide/boot/Shell
  


## 客户端使用与验证

配置完毕bot端后使用管理员权限运行/sudo运行Haruki客户端

Windows

```powershell
HarukiClient-Windows-x64-v1.1.7.exe 或 双击运行
```

Linux（如Ubuntu/Debian/AlmaLinux）
> 由于Linux-glibc客户端原名较长可选择重命名，例如hrkClient.app

```sh
sudo chmod 777 HarukiClient-Linux-amd64-v1.1.7-glibc.app
./HarukiClient-Linux-amd64-v1.1.7-glibc.app
```

### 首次启动

启动后客户端会要求验证，输入你的**大号QQ号/进群的QQ账号（不是bot账号）**来获取验证码。

复制获得的验证码，到Haruki Dev群内发送指令进行验证

```text
/haruki_verify 验证码(客户端里显示的六位数字)
```

此时群里机器人会提示Successfully verified，或者群友会发啃，偷啃，口啃之类字样

回到客户端处按**回车**才完整通过验证。 如果没有回车就退出了客户端，不会保存配置需要重新验证

验证完毕此时客户端后台应该显示这样的语句

```text
[2025-09-05 23:35:12 +0800] [28620] [INFO] Running on http://127.0.0.1:8000 (CTRL + C to quit)
```

请确保此处显示的端口与填入bot配置中的相同，已有群友看错并填入bot导致无法使用。

验证完毕后请**重启hrk客户端**（或者选择两个都重启），否则bot可能不会发送消息。

在有自己bot的群里发送命令，比如/haruki_info，如果一切正常，你的bot应该会回复如下消息:

```text
Haruki Cloud Env: production 
Haruki Cloud v1.10.0
Latest Client v1.1.7
Haruki Client v1.1.7
Haruki Bot Id: <YourBotId>
```

如果没有回复，请检查客户端运行是否报错、OneBot 日志是否报错。并重新对照bot与客户端配置

使用lgr后台每几分钟出现一大串warn报错时请先确定bot反馈，若bot正常响应请无视。

如果都没有报错，则可能是机器人账号被腾讯风控，需要在同一环境中多登录一段时间。