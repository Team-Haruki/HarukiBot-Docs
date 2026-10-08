# Haruki Client 更新日志

## v3.0.0

+ 更新日期: `2026-09-04`
+ 与 Haruki Cloud 的登录改用新的鉴权协议，并会校验 Cloud 下发的签名配置
+ 默认通过远程路由配置选择 Cloud 端点（新增 `enableDynamicRouting`，默认开启）
+ 新增私聊开关 `enablePrivateMessage`
+ 动态路由改为在后台刷新，不再阻塞指令处理
+ 修复了 `/pjsktz` 被归入自定义个人信息功能的问题
+ 新增 `strictConfigPermissions`：Linux/macOS 下 `configs.yaml` 可被其他用户读取时会告警，开启后直接拒绝启动

## v2.2.4

+ 更新日期: `2026-06-19`
+ 新增动态 Cloud 端点路由（`routingConfigURL`）
+ 统一了日志格式
+ 依赖更新

## v2.2.2

+ 更新日期: `2026-05-06`
+ 群聊中的生日材料推送订阅指令会先按生日材料推送的黑名单/白名单检查，不允许的群不再请求 Cloud
+ 依赖更新

## v2.2.1

+ 更新日期: `2026-05-06`
+ 支持带区服前缀的客户端指令

## v2.2.0

+ 更新日期: `2026-05-06`
+ 新增 MySekai 生日材料推送（支持黑名单/白名单模式）
+ 新增 `enableParamEcho`：Cloud 参数解析出错时回显具体参数
+ Windows 下支持彩色日志
+ 修复了回复消息时自动 @ 的处理

## v2.1.0

+ 更新日期: `2026-04-26`
+ 用Rust重写了客户端
+ 新增了彩色log
+ 现在控制API支持和OneBot WebSocket共用端口了

## v2.0.0

+ 更新日期: `2026-04-24`
+ 用Go写的测试客户端
