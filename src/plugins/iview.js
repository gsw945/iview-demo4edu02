import Vue from 'vue'
import iView from 'iview'
import VueRouter from 'vue-router'

import Util from '../libs/util'
import Routers from '../router'

// 让 Vue 支持路由机制
Vue.use(VueRouter)
// 让 Vue 支持 iView (的组件)
Vue.use(iView)

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers // 加载路由列表(映射)
}

// 实例化路由
const router = new VueRouter(RouterConfig)

// 进入每个路由前的处理
router.beforeEach((to, from, next) => {
    if(to.matched.length > 0) {
        iView.LoadingBar.start() // 启动加载条
        Util.title(to.meta.title) // 设置标题
        next() // 进入路由
    }
    else {
        next('/404')
    }
})

// 进入每个路由后的处理
// eslint-disable-next-line
router.afterEach((to, from, next) => {
    iView.LoadingBar.finish() // 停止加载条
    window.scrollTo(0, 0) // 让滚动条恢复到顶部
})

import 'iview/dist/styles/iview.css'

export default router