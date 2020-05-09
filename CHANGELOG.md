1. custom/dependencies：定制依赖模块

   1. 去掉版本限定；
   2. 将开发依赖迁移到一个独立的库，以避免线上部署时需要安装过多无用的开发依赖；

2. custom/router：定制路由器

   1. 调整浏览器 history 的变更时机，在路由页面加载之前就修改 history；
   2. 浏览器的地址上加入路由标识：`_`；
   3. 路由加载失败去掉“硬”重载（强制刷新）逻辑；

      TODO: 目前网络问题会导致无限的重试加载 \_error 页面组件

3. custom/assets-timestamp：给静态资源的地址增加时间戳

   路由脚本动态加载需要添加时间戳：`next/client/page-loader.js`

4. custom/css-loader：定制 CSS 加载器

   调整 css module 生产环境的类名生成方式：`next/build/webpack/config/blocks/css/loaders/modules.ts`

## TODO

- bugfix: 保证动态加载页面出错时生产环境和开发环境是一致的

  https://github.com/zhbhun/next.js/commit/e4bcd2e0943c2ad9bd66fc6924451425ff7e7f33

- fix: 修复 reload 路由不匹配时无法刷新问题 …

  https://github.com/zhbhun/next.js/commit/dea417309f64cfa88764d5b079005e6444650b93

- fix: 调整优化 babel 编译的兼容性

  https://github.com/zhbhun/next.js/commit/2197eb42fd80869d11e5fa2e5b983b02fd6f0784
