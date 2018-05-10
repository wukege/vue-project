/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 */
let baseUrl = '';
if (process.env.NODE_ENV == 'development') { //开发环境 dev
   //baseUrl = 'PGY_SITE/api'; //印娜
  baseUrl = 'https://www.vue-js.com'; //印娜
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = 'http://fly.pgyspace.com/api/'; //生产改动点
}
export {
	baseUrl,
}
