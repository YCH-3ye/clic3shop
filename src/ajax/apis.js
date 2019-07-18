import axios from './index'
let apiUrl = '/jmb/user/'
// let apiInfoUrl = '/jmb/company/'

// 发送验证码
export const sendVerifyCode = param =>
  axios.get(`${apiUrl}sendVerifyCode`, param, { respAll: false })

//登陆
export const login = param => axios.post(`login`, param, { respAll: true })

//注册
export const register = param =>
  axios.post(`${apiUrl}register`, param, { respAll: false })

// // 账号登录
// export const login = param =>
// axios.post(`${apiUrl}register`, param, { respAll: false })
