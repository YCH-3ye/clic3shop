/**
 * 通过mutation间接更新state的多个方法的对象
 */

import { RESEIVE_LOGIN } from './mutation-types'
import { login } from '../ajax/apis'

export default {
  async getLogin({ commit }, from) {
    let data = await login(from)
    if (data.meta.status === 200) {
      window.sessionStorage.setItem('token', data.data.token)
      commit(RESEIVE_LOGIN, true)
    } else {
      commit(RESEIVE_LOGIN, false)
    }
  }
}
