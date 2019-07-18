import Qs from 'qs'
import apiRoot from './domain'

export default {
  // 默认请求方式为get
  method: 'get',

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: apiRoot.BASE_URL,

  // `headers` 是即将被发送的自定义请求头
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
    // authorization: localStorage.getItem('loginToken') || ''
  },

  transformRequest: [
    data => {
      // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
      data = Qs.stringify(data)
      return data
    }
  ],

  // `transformResponse`允许返回的数据传入then/catch之前进行处理
  transformResponse: [
    data => {
      // 这里提前处理返回的数据
      return data
    }
  ],

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  timeout: 0,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject
  validateStatus: status => {
    return status >= 200 && status < 300 // 默认的
  },

  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json',

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true,

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5 // 默认的
}
