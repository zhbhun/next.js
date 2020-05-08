1. 定制 next 的依赖模块的版本

   去掉版本限定

2. 调整浏览器 history 的变更时机，并在浏览器的地址上加入路由标识
3. 脚本等静态资源增加时间戳

   路由脚本需要添加时间戳

4. 调整 css module 生产环境的类名生成方式

## TODO

- bugfix: 保证动态加载页面出错时生产环境和开发环境是一致的

  https://github.com/zhbhun/next.js/commit/e4bcd2e0943c2ad9bd66fc6924451425ff7e7f33

- fix: 修复 reload 路由不匹配时无法刷新问题 …

  https://github.com/zhbhun/next.js/commit/dea417309f64cfa88764d5b079005e6444650b93

- fix: 调整优化 babel 编译的兼容性

  https://github.com/zhbhun/next.js/commit/2197eb42fd80869d11e5fa2e5b983b02fd6f0784
