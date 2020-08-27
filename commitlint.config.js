// 代码提交规范
// build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
// ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
// docs：文档更新
// feat：新增功能
// merge：分支合并 Merge branch ? of ?
// fix：bug 修复
// perf：性能, 体验优化
// refactor：重构代码(既没有新增功能，也没有修复 bug)
// style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
// test：新增测试用例或是更新现有测试
// revert：回滚某个更早之前的提交
// chore：不属于以上类型的其他类型

// 代码提交增加icon
// 🎨 (调色板)	:art:	改进代码结构/代码格式
// ⚡️ (闪电)🐎 (赛马)	:zap:“:racehorse:	提升性能
// 🔥 (火焰)	:fire:	移除代码或文件
// 🐛 (bug)	:bug:	修复 bug
// 🚑 (急救车)	:ambulance:	重要补丁
// ✨ (火花)	:sparkles:	引入新功能
// 📝 (备忘录)	:memo:	撰写文档
// 🚀 (火箭)	:rocket:	部署功能
// 💄 (口红)	:lipstick:	更新 UI 和样式文件
// 🎉 (庆祝)	:tada:	初次提交
// ✅ (白色复选框)	:white_check_mark:	增加测试
// 🔒 (锁)	:lock:	修复安全问题
// 🍎 (苹果)	:apple:	修复 macOS 下的问题
// 🐧 (企鹅)	:penguin:	修复 Linux 下的问题
// 🏁 (旗帜)	:checked_flag:	修复 Windows 下的问题
// 🔖 (书签)	:bookmark:	发行/版本标签
// 🚨 (警车灯)	:rotating_light:	移除 linter 警告
// 🚧 (施工)	:construction:	工作进行中
// 💚 (绿心)	:green_heart:	修复 CI 构建问题
// ⬇️ (下降箭头)	:arrow_down:	降级依赖
// ⬆️ (上升箭头)	:arrow_up:	升级依赖
// 👷 (工人)	:construction_worker:	添加 CI 构建系统
// 📈 (上升趋势图)	:chart_with_upwards_trend:	添加分析或跟踪代码
// 🔨 (锤子)	:hammer:	重大重构
// ➖ (减号)	:heavy_minus_sign:	减少一个依赖
// 🐳 (鲸鱼)	:whale:	Docker 相关工作
// ➕ (加号)	:heavy_plug_sign:	增加一个依赖
// 🔧 (扳手)	:wrench:	修改配置文件
// 🌐 (地球)	:globe_with_meridians:	国际化与本地化
// ✏️ (铅笔)	:pencil2:	修复 typo
module.exports = {
  extends: ['@commitlint/config-conventional']
}
