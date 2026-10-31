# HarukiProxy 抓包方式索引

HarukiProxy是由[*Haruki Dev Team*](https://github.com/Team-Haruki)开发的pjsk数据抓包工具，可以抓取suite和MySekai数据并自动上传到[Haruki工具箱](https://haruki.seiunx.com/)，也可以保存到本地。

HarukiProxy有多种使用方式，请根据你的设备在下面选择对应的教程。

> [!caution] 版本说明
>
> **Haruki工具箱只接受HarukiProxy V3上传的数据。** V2仍可以把数据保存到本地，或上传到仍支持V2的第三方服务，相关教程保留在[V2教程](#v2)中。
>
> ***由于不可抗力，HarukiProxy不能抓取国服的MySekai数据***

## 选择抓包方式

| 你的设备 | 方式 | 前提条件 | 教程 |
| --- | --- | --- | --- |
| Android手机（无Root） | V3 + 免安装证书 | 系统仍信任eMudhra相关证书，较新的安全更新可能已移除 | [免Root抓包方式](./android.india.md) |
| Android手机（无Root） | V3 + 光速虚拟机 | 手机能运行光速虚拟机 | [HarukiProxyV3-Android](./android.md) |
| 已Root的Android设备 | V3 | 能自行把证书安装为系统证书 | 参考[HarukiProxyV3-Android](./android.md)，跳过虚拟机部分 |
| Windows电脑 + MuMu模拟器或Android设备 | V3桌面版（测试版） | Windows x64 | [V3桌面版](#v3-desktop) |
| iOS设备 | 不使用HarukiProxy | — | [iOS模块上传数据教程](/toolbox-tutorial/ios-module) |

> [!tip] 提醒
>
> 遇到问题时，先查看对应教程中的问题自查部分，再借助搜索引擎和ai尝试解决问题，最后再在群聊里问群友，不会提问的请务必先阅读[提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)

## V3桌面版（Windows） {#v3-desktop}

V3桌面版目前是测试版，详细教程编写中。

- [HarukiProxyV3-Windows-x64](https://haruki-dl-esa-cn.seiunx.com/HarukiProxy/v3.0.0-beta.7/HarukiProxy-v3.0.0-beta.7-windows-x64.zip)
- [adb补丁包](https://haruki-dl-esa-cn.seiunx.com/HarukiProxy/v3.0.0-beta.7/HarukiProxy-v3.0.0-beta.7-windows-x64-adb.zip)：`v3.0.0-beta.7`的安装包漏打包了adb，请把补丁包解压到`HarukiProxy.exe`所在的目录。使用MuMu模拟器时同样需要。

解压后运行`HarukiProxy.exe`，在设置中连接Haruki工具箱，然后选择MuMu模拟器实例或已连接的Android设备开始抓包。

## V2教程 {#v2}

V2版本的Haruki工具箱上传已停止，以下教程仅供仍在使用V2的用户参考。

- [HarukiProxy V2 PC教程](./pc.v2.md)：Windows / Linux / macOS命令行版，可自动配置MuMu模拟器，包含V2更新记录
- [HarukiProxy V2 Android教程](./android.v2.md)：光速虚拟机 + MT管理器
