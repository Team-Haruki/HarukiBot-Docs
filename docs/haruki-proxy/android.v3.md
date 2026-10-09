# HarukiProxyV3-Android
> [!caution] 阅读前警告
>
> 如果你是V2版本的用户，请转至[HarukiProxy-Android](./android.md)，V2版本即将下线。
>
> 如果你是PC端模拟器用户，请转至[HarukiProxy教程](./index.md)
>
> 如果你曾经使用过V2版本的HarukiProxy，那你可能需要[关闭HarukiProxyV2](./android.md#关闭harukiproxy-android)

::: info **特别鸣谢** 
开发者: [*Haruki Dev Team*](https://github.com/Team-Haruki)  
教程编写者: `storyxy3`、`Deseer`、 `Aposetles`、`Lemoe` 和 `LQ`

:::
## 什么是HarukiProxyV3

HarukiProxy是由[*Haruki Dev Team*](https://github.com/Team-Haruki)开发的一款Android平台**半自动**抓取游戏pjsk的数据的程序。V3版本相比V2版本有用户友好的界面，操作更加方便，而且更加安全。

## HarukiProxyV3的特点
- 用户友好的界面
- 支持`国服`、`日服`、`台服`、`韩服`、`国际服`数据抓取
- 支持**自动上传数据**到Haruki工具箱
- 支持选择是否公开自己自动上传到Haruki工具箱的数据在公开API访问
- 支持自定义上传数据端点 (需第三方服务支持)
- 支持保存抓取的数据到本地
- 支持保存抓取的suite数据到本地
- 支持保存抓取的mysekai数据到本地
- 可以作为VPN代理指定应用的流量
- 支持自动为Android设备设置HarukiProxy为代理
- 支持自定义上游HTTP代理

## **初期准备**
> [!caution] 阅读前注意
> ***本程序只能在获取root权限的Android设备上运行，现在大部分的Android设备无法轻易获取root权限，所以本教程在Android设备上的Android虚拟机来运行本程序***
>
> ***由于不可抗力，本程序不能抓取国服的MySekai数据***
>

- 需要在Android手机上安装可root的Android虚拟机，本教程使用[光速虚拟机](https://vphoneos.com/)
- [HarukiProxyV3-Android安装包](https://haruki-dl-esa-cn.seiunx.com/HarukiProxy/v3.0.0-beta.5/HarukiProxy-v3.0.0-beta.5-android-arm64.apk)。你可以复制该连接，粘贴到虚拟机内的Via浏览器的网址栏中下载到虚拟机，也可以在本机中点击该连接下载安装包，然后将安装包导入到虚拟机中。

## 虚拟机设置

下载并安装好光速虚拟机之后，启动光速虚拟机，这个应用有广告。它会要求你关掉安卓子进程限制，按照它的教程操作就好。如果不关掉的话，虚拟机无法正常运行，会被本机杀掉。

> [!tip] 注意
>
> 安卓12、13的华为、荣耀系统必须用电脑才能解锁子进程限制
>

![img.jpg](../assets/haruki-proxy-android/解锁进程限制.jpg)

新建虚拟机，使用免费的安卓7和32+64位就好。

![img.jpg](../assets/haruki-proxy-android/新建虚拟机.jpg)

然后启动你的虚拟机，它会请求一些权限，有些权限不同意可能无法启动。第一次启动会花一分钟左右的时间，耐心等待。启动成功后来到虚拟机的桌面，点击右下角的`导入导出`，点击`导入到虚拟机`。必须同意`获取已安装应用的权限`，才能把本机上的pjsk导入到虚拟机。在文件中找到本机中HarukiProxyV3-Android安装包的位置，将它导入。（不要在意安装包的名字不一样，教程使用的是较旧版本的安装包）
![img.jpg](../assets/haruki-proxy-android/虚拟机主页-导入导出.jpg)
![img.jpg](../assets/haruki-proxy-android/导入游戏.jpg)
![img.jpg](../assets/haruki-proxy-android/导入安装包.jpg)

> [!tip] 提示
> 导入的应用和安装包会自动安装，导入的文件会放在虚拟机的/sdcard/Documents文件夹里。
>
> 如果你不想提供权限，也可以用虚拟机内自带的VIA浏览器下载游戏和HarukiProxy
>

等待安装完毕后回到桌面，上滑，显示所有应用。能看到导入的游戏和HarukiProxy。可以长按应用的图标将它添加到虚拟机桌面。

![img.jpg](../assets/haruki-proxy-android/虚拟机所有应用.v3.jpg)

## HarukiProxyV3-Android设置
### 证书安装
首先启动HarukiProxy，打开软件后首先点击右上角的设置按钮，往下翻找到证书设置的位置。

![img.jpg](../assets/haruki-proxy-android/Proxy打开设置.jpg)
选择方式一，“检测并安装证书”,同意HarukiProxyV3-Android的root权限，点击安装。
![img.jpg](../assets/haruki-proxy-android/检测并安装证书.jpg)
![img.jpg](../assets/haruki-proxy-android/确认安装证书.jpg)
> [!tip] 提示
> 本教程使用的是光速虚拟机，所以选择方式一。如果你使用的是Root管理器设备，请自行使用方式二完成证书安装。

安装完成后，需要重启一下虚拟机，我们点击右侧的悬浮球，在出现的悬浮栏中上划，找到关机键，关闭虚拟机。这一步是为了让证书生效。
![img.jpg](../assets/haruki-proxy-android/点击悬浮球.jpg)
![img.jpg](../assets/haruki-proxy-android/关机.jpg)
### 工具箱授权
随后重新启动虚拟机，打开HarukiProxy，再次点击右上角的设置按钮。往下翻找到“链接Haruki工具箱”的设置，但是不要直接点击这个按钮。我们点击旁边的“设备码登录”。
![img.jpg](../assets/haruki-proxy-android/设备码登录.jpg)
![img.jpg](../assets/haruki-proxy-android/复制链接.jpg)
> [!tip] 提示
> 因为光速虚拟机的系统自带浏览器版本过低，它无法打开工具箱的网页，所以使用设备码登录，你可以通过在虚拟机中安装Chrome来解决这个问题。

在打开的弹窗中点击`复制链接`，**不要关闭虚拟机和HarukiProxy**，然后在**已经登录过工具箱的浏览器**的网址栏粘贴这个链接并进入。**确定是你自己的号自己的设备码**，点击“继续”。仔细查看告警信息，**确定是你自己的号自己的设备码**。

![img.jpg](../assets/haruki-proxy-android/授权设备继续.jpg)
![img.jpg](../assets/haruki-proxy-android/允许登录.jpg)

然后回到HarukiProxy，可以看到登陆的工具箱账号和其中绑定的游戏账号。

![img.jpg](../assets/haruki-proxy-android/工具箱登录完毕.jpg)

点击左上角的`←`回到HarukiProxy主页。至此HarukiProxyV3-Android就设置好了。接下来开始抓包了。

## 开始抓包
在HarukiProxy的主页点击选择游戏，需要注意国服的官服和b服的游戏名称相同，带有bilibili的是b服，另一个是官服。选择你要抓包的游戏。

![img.jpg](../assets/haruki-proxy-android/选择游戏.jpg)
![img.jpg](../assets/haruki-proxy-android/准备开始.jpg)
![img.jpg](../assets/haruki-proxy-android/VPN请求.jpg)
![img.jpg](../assets/haruki-proxy-android/打开游戏.jpg)
点击“开始抓包”按钮，同意网络连接请求，然后点击“打开 初音未来：缤纷舞台”。正常登录自己的账号，等待到这下图一步就好，不用下载游戏数据。

![img.jpg](../assets/haruki-proxy-android/下载游戏数据.jpg)
然后回到HarukiProxy的主页，你就能看到玩家数据捕获与上传的情况。
![img.jpg](../assets/haruki-proxy-android/上传成功.jpg)
这样一来抓包就完成了，可以使用bot的需要抓包的功能了。

## 关闭HarukiProxyV2
如果你曾使用过HarukiProxyV2，那么你在开始抓包时可能会遇到下面这种情况。

![img.jpg](../assets/haruki-proxy-android/检测到代理.jpg)

那么你需要[关闭HarukiProxyV2](./android.md#关闭harukiproxy-android)