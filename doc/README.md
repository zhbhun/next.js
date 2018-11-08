## 路由

> /lib/router/router.js

- 新开

    - router.push(url, as, options) —— 传入要打开的地址
    - router.change('pushState', url, as, options) —— 调用路由修改函数
    - router.abortComponentLoad() —— 取消当前正在加载的路由
    - Router.events.emit('routeChangeStart', as) —— 发送路由开始加载事件
    - router.getRouteInfo(route, pathname, query, as) —— 加载路由信息
    - Router.events.emit('beforeHistoryChange', as) —— 发送路由历史修改前的事件
    - router.changeState(method, url, as, options) —— 修改路由状态
    - router.set(route, pathname, query, as, { ...routeInfo, hash }) —— 设置当前路由
    - router.notify() —— 发送路由变化通知

- 前进/后退

    - router.onPopState —— 触发客户端的 popstate 事件
    - router.replace(url, as, options) —— 调用路由替换函数
    - router.change('pushState', url, as, options) —— 调用路由修改函数
    - 同“新开”...
