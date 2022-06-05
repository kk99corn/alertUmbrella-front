import axios from 'axios'
import {loginCheck} from "../api";
import Cookies from 'js-cookie'

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
    let cookies = req.headers.cookie
      .split(';')
      .map( v => v.split('='))
      .map(([k, ...vs]) => [k, vs.join('=')])
      .reduce((acc, [k,v]) => {
        acc[k.trim()] = decodeURIComponent(v)
        return acc
      }, {})

    if ((req.session && req.session.authUser)) {
      commit('SET_USER', req.session.authUser)
    } else if (cookies.auth !== null && typeof cookies.auth !== 'undefined') {
      let auth = Buffer.from(cookies.auth, 'base64').toString('ascii')
      auth = auth.split('|')
      let user = {
        id: auth[0],
        name: auth[1]
      }
      commit('SET_USER', user)
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
      Cookies.set('auth', btoa(data.id + '|' + data.name), { expires: 7 })
    } else {
      throw new Error('로그인에 실패했습니다.')
    }
  },
  async logout({commit}) {
    await axios.post('/apis/logout').then(() => commit('LOGOUT'))
    Cookies.remove('auth')
    commit('LOGOUT')
  }
}
