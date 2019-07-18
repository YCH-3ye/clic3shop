import axios from 'axios'
import _config from './config'
import { Message } from 'element-ui'

const instance = axios.create(_config)

instance.interceptors.request.use(
  config => {
    var token = window.sessionStorage.getItem('token')
    config.headers.Authorization = token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    console.log(response.data.meta.status)
    if (response.data.meta.status === 200) {
      // 判断data不是Object时，解析成Object
      if (!(response.data instanceof Object)) {
        return Promise.resolve(JSON.parse(response.data))
      } else {
        return Promise.resolve(response.data)
      }
    } else if (response.data.meta.status === 400) {
      window.localStorage.removeItem('userInfo')
      Message({ type: 'warning', message: response.data.meta.msg })
      setTimeout(() => {
        window.vm.$router.replace({ path: '/login' })
      }, 1500)
    } else {
      Message({ type: 'warning', message: response.data.meta.msg })
      console.log(3)
      return false
    }
  },
  error => {
    if (error.response) {
      if (error.response.status === 404) {
        // vm.$router.replace({name: 'NotFoundHTML'})
      } else {
        Message({ type: 'error', message: error.response.statusText })
      }
    } else {
      Message({ type: 'error', message: '服务器未响应，请稍后重试！' })
    }
    return false
  }
)

export default instance
