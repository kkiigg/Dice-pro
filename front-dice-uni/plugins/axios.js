/*
 * @Author: zw
 * @Date: 2021-10-11 11:17:23
 * @LastEditors: zw
 * @LastEditTime: 2021-10-11 13:32:13
 * @Description: 
 */
import axios from 'axios'

const service = axios.create({
  baseURL: '127.0.0.1:3030',
  timeout: 50000, // 请求超时时间
});

// service.defaults.headers.common['Authorization'] = AUTH_TOKEN;


service.interceptors.request.use(
  config => {
    // config.headers['Accept-Language'] = 
    // config.headers.Token = getToken()
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {

    
    // console.log(JSON.stringify(response.data))
    const res = response.data
    console.log("response ->", res)
    return res
  },
  error => {
   
    return Promise.reject(error)
  }
)

export function get({url,params}){
	return service.request({
    url,
	  timeout: 5000,
	  method:'get',
	  params
	});
}
export function post({url,params}){
  return	service.request({
    url,
	  timeout: 5000,
	  method:'post',
	  params
	});
}
