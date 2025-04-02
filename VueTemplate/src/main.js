import './assets/main.css'
import './assets/output.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = "YOUR_BASE_URL"
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 如果有Authorization,就在请求头上加入
  if (window.localStorage.getItem('')) {
    config.headers['Authorization'] = "Bearer " + localStorage.getItem('YOUR_TOKEN');
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
