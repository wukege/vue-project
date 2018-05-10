import axios from 'axios'
import {baseUrl} from '../config/env'
//配置接口请求地址
axios.defaults.baseURL = baseUrl;
//配置请求头类型
axios.defaults.headers.post['Content-Type'] = 'application/json';

//全局配置token
//axios.defaults.headers.post['token'] = tools.getCookie('token');
//处理响应数据
axios.interceptors.response.use((response) =>{
  if (response.status >= 200 && response.status < 300) {
      return response
  }else {
    //请求失败
  }

},(error)=>{
  //请求失败
  return Promise.reject(error)
});

//处理请求数据
//axios.interceptors.request.use(response =>{
//  return response
//});

/**
 * 获取首页热门城市
 */
export const post = (obj, cb)=>{
	axios.post('/bankBranch/queryByConditions', obj)
			.then(function (response) {
					cb(response.data);
			})
};

/**
 * 获取首页热门城市
 */
export const getMock = (cb)=>{
  axios.get('/api/v1/topics')
      .then(function (response) {
        location.href = './#/test/tt1';
        cb(response.data);
      })
};



