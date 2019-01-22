const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        name: 'home',
        component: (resolve) => require(['./views/home.vue'], resolve).default
    },
    {
        path: '/demo1',
        meta: {
            title: '示例-1'
        },
        name: 'demo1',
        component: (resolve) => require(['./views/demo01.vue'], resolve).default
    },
    {
        path: '/404',
        meta: {
            title: '!404 Not Found'
        },
        component: {
            template: '<h1>404 Not Found</h1>'
        }
    }
];
export default routers;