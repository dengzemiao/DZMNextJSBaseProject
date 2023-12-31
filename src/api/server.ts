// 服务端接口 - 可走代理，也可不走代理，因为在服务器请求，没有跨域
import axios from './axios'

// 服务器代理地址
const BASE_URL = process.env.REACT_APP_BASE_URL

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
