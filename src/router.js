const routers = [
    {
        path: '*',
        redirect: '/index'
    },
    {
        path: '/index',
        meta: {
            title: '传感器数据分析'
        },
        component: (resolve) => require(['./views/index/home.vue'], resolve)
    }
];

export default routers;