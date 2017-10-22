import storage from '../utils/storage'
import axios from 'axios'
// import { baseUrl } from './index'

// 自定义的axios实例
let fetcher = axios.create({
  method: 'post',
  baseURL: 'http://127.0.0.1:3000',
  // baseURL: 'http://10.0.31.116:8081',
  // baseURL: 'http://10.0.31.125:8081',
  withCredentials: true,
  // `transformRequest` 允许在向服务器发送前，修改请求数据,添加
  transformRequest: [function (data) {
    const userInfo = storage.get('user')
    if (userInfo && data && !data.NOUSERINFO) { // 根据接口是否需要userInfo
      data.userName = userInfo.userName
      // data.accessToken = userInfo.accessToken
    }
    return JSON.stringify(data)
  }],
  headers: {
    'Acces-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

// 前端登录拦截
fetcher.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

fetcher.interceptors.response.use(function (response) {
  // 响应前查看是否登录，如果不是登录状态，则跳转回登录界面
  if (response.data.code === 89001 || response.data.code === 81001) {
    location.href = '/login'
  }
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default fetcher
