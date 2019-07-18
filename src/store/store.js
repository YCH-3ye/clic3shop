import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      userName: ''
    }
  },
  mutations: {
    updateUserInfo(state, data) {
      state.userInfo = data
    }
  },
  actions: {
    setUserInfo({ commit }, value) {
      commit('updateUserInfo', value)
      window.localStorage.setItem('userInfo', JSON.stringify(value))
    }
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo
    }
  }
})
