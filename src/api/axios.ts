// 代理配置方案：https://zhuanlan.zhihu.com/p/444198893?utm_id=0
import axios from 'axios'
// import Pub from '@/utils/public'

// 创建 axios 实例
const service = axios.create({
  // api
  baseURL: '',
  // 请求超时时间
  timeout: 1000 * 60 * 1
})

// 拦截器错误回调
const errorHandler = (error: any) => {
  // 对相应错误做点什么
  return Promise.reject(error)
}

// 将 post 请求的 data 数据转换成 formdata 格式（请求数据设置为 params 不会被转换）
// FormData：https://blog.csdn.net/zz00008888/article/details/113933885
// service.defaults.transformRequest = data => {
//   return Pub.FORM_DATA(data)
// }

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // 设置 Token 数据
  // const token = Pub.ACCESS_TOKEN()
  // if (token) { config.headers['X-Token'] = token }
  // if (token) { config.headers['Authorization'] = token }
  config.headers['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdC1hcGktcHJveHkuanVoYW9rYW55YS5jb21cL2FwaVwvbG9naW5fY29kZSIsImlhdCI6MTY5NzU5OTI3MCwiZXhwIjoxNjk4MjA0MDcwLCJuYmYiOjE2OTc1OTkyNzAsImp0aSI6Imp5ektNVDVmdUowOUt3SDMiLCJzdWIiOjEwMDAwMDA3OSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.DdQlbmw2EAfvw3O_pfHzNhEpfFineTo5MQhKsszzmkg'
  return config
}, errorHandler)

// 添加响应拦截器
service.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response.data
}, errorHandler)

// 导出
export default service