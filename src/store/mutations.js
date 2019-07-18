/**
 * 直接更新state的多个方法的对象
 */

import { RESEIVE_LOGIN } from './mutation-types'

export default {
  [RESEIVE_LOGIN](state, isLogin) {
    console.log(isLogin)
    state.isLogin = isLogin
  }
}
