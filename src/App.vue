<style lang="less">
    // 垂直居中
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
    // 导航栏链接颜色
    a:not(.router-link-active) {
        color: #515a6e;
    }
    a.router-link-active {
        color: #2d8cf0;
    }
</style>
<template>
    <div id="app">
        <Modal title="登录" v-model="loginModal" :closable="false" :mask-closable="false" class-name="vertical-center-modal">
            <p>姓名</p>
            <p>绰号</p>
            <p>称号</p>
            <p>段位</p>
        </Modal>
        <Menu ref="nav_menu" @on-select="menuSelect" mode="horizontal" theme="light" :active-name="currentRoute && currentRoute.name">
            <MenuItem to="/" name="home">
                <Icon type="ios-paper" />
                首页
            </MenuItem>
            <MenuItem to="/demo1" name="demo1">
                <Icon type="ios-people" />
                示例-1
            </MenuItem>
            <MenuItem name="login">
                <a @click="loginModal = true" href="javascript:;">
                    <Icon type="ios-bookmark" />
                    关于
                </a>
            </MenuItem>
        </Menu>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        // 数据
        data () {
            return {
                currentRoute: null, // 记录当前路由
                loginModal: false // 是否显示登录窗体
            }
        },
        // 监听属性变化
        watch:{
            // eslint-disable-next-line
            $route (to, from){
                // 路由变化时，如果新的路由有 name 属性
                if(to && to.name) {
                    // 记录当前路由
                    this.currentRoute = to
                    let nav_menu = this.$refs.nav_menu
                    // https://segmentfault.com/q/1010000010061977
                    nav_menu.currentActiveName = this.currentRoute.name
                }
            }
        },
        // dom渲染后
        mounted () {

        },
        // 计算属性
        computed: {
            nameRoutes: function () {
                var routes = [];
                // this.$router.options.routes 为当前应用所传递的路由表
                for (var i in this.$router.options.routes) {
                    // 参考: https://segmentfault.com/a/1190000000480531
                    // 判断一个属性是定义在对象本身还是继承自原型链
                    if (!this.$router.options.routes.hasOwnProperty(i)){
                        continue
                    }
                    var route = this.$router.options.routes[i]
                    // 收集命名路由
                    if(route.hasOwnProperty('name')) {
                        routes.push(route)
                    }
                }
                return routes
            }
        },
        // 方法
        methods: {
            // 菜单选择
            menuSelect(name) {
                // 判断选择的菜单是否关联的有路由
                let route = this.nameRoutes.find(route => {
                    return route.name == name
                });
                if(!route) {
                    // 导航菜单
                    let nav_menu = this.$refs.nav_menu
                    // 如果当前菜单项没有关联到路由，则手动设置激活菜单
                    // 改为修改前的激活项
                    nav_menu.currentActiveName = this.currentRoute.name
                }
            }
        }
    }
</script>