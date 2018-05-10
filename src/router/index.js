import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '@/App'
import Home from '@/page/home'
import Test from '@/page/test'
import Tt1 from '@/page/tt1'
import Tt2 from '@/page/tt2'
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      component: App, //顶层路由，对应index.html
      children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: Home
        },
        //会议室
        {
          path: '/test',
          component: Test,
          children:[
            {
              path: '/',
              component: Tt1
            },
            {
              path: 'tt1',
              component: Tt1
            },
            {
              path: 'tt2',
              component: Tt2
            }

          ]
        }
      ]
    }
  ]
})
