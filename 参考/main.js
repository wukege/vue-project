import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {routerMode} from './config/env'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import FastClick from 'fastclick'

Vue.use(ElementUI)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production'
});

// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (window.localStorage.userInfo) {
  store.state.userInfo = JSON.parse(window.localStorage.userInfo);
  store.state.login = true;
}else {
  store.state.userInfo = null;
  store.state.login = false;
}

// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    var index = to.meta.requiresAuth;
    var actionStatus = false;
    if(store.state.userInfo && store.state.userInfo.unit_permission && store.state.userInfo.unit_permission.role_power){
      for(var ri = 0; ri < store.state.userInfo.unit_permission.role_power.length; ri++){
        if(store.state.userInfo.unit_permission.role_power[ri] === index){
          actionStatus = true;
          break;
        }
      }
    }

    if (actionStatus) {
      next();
    } else {
      next({
        path: '/login'
      });
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
}).$mount('#app');

