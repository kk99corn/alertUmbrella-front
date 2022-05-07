import axios from 'axios'
import {loginCheck} from "../api";

export const state = () => ({
  authUser: null
})

export const mutations = {
  LOGIN: function (state, user) {
    state.authUser = user
  },
  LOGOUT: function () {
    state.authUser = null
  },
  SET_USER: function (state, user) {
    state.authUser = user
  }
}
export const actions = {
  // nuxtServerInit는 모든 페이지를 서버 렌더링하기 전에 Nuxt.js에 의해 호출
  async nuxtServerInit({commit}, {req}) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login({commit}, {id, pass}) {
    const loginCheckResult = await loginCheck(id, pass)
    let isLogin = false;
    if (loginCheckResult.data) {
      let name = loginCheckResult.data.data.name
      isLogin = true;

      let { data } = await axios.post('/apis/login', { id, name, isLogin })
      if (!data.id) {
        throw new Error('로그인에 실패했습니다.')
      }
      commit('LOGIN', {id: data.id, name: data.name})
    } else {
      throw new Error('로그인에 실패했습니다.')
    }
  },
  async logout({commit}) {
    await axios.post('/apis/logout').then(() => commit('LOGOUT'))
    commit('LOGOUT')
  }
}
