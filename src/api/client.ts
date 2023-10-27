// 客户端接口 - 需要走代理，因为会在浏览器中进行请求，有跨域问题
import axios from './axios'

// 服务器代理地址
const BASE_URL = '/api'

// ================================= 《 公共 》

// 请求案例（Get）
export async function getDemo(params?: Record<string, any>) {
  return axios({
    // url: 'https://test-api.xxx.com/api/user/config_name_new',
    url: BASE_URL + '/user/config_name_new',
    method: 'GET',
    params: params
  })
}
