import App from '../App'

import home from '../page/home'
import about from '../page/about'


export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: home
    }, {
        path: '/about',
        component: about
    }


    ]
}]













// import Vue from 'vue'
// // 这块就是配置我们的路由信息了，一个是首页 home，一个是关于页面 about
// // 其中 name: 'Home' 是我们的别名， path: '/',是我们的路由路径，component是我们路由对应的组件。
// import home from '../components/home'
// import wrong from '../components/wrong'
// import test from '../components/test'
// Vue.use(VueRouter)
//
// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: home
//     },
//     {
//         path: '/wrong',
//         name: 'wrong',
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') // 官方默认的除了Home其他视图组件都这样导入，所以后续我们也是采取这样的方式。
//         component: wrong
//     },
//     {
//         path: '/test',
//         name: 'test',
//         component: test
//     }
// ]
//
//
// // mode 说明了我们使用的是history模式，如果不设置mode，则会使用默认的hash模式。
// // const index = new VueRouter({
// //     mode: 'history',
// //     base: process.env.BASE_URL,
// //     routes
// // })
//
