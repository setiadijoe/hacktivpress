import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  article: [],
  loginState: false
}

const mutations = {
  signIn (state, payload) {
    state.loginState = payload
  }
}

const actions = {
  login ({ commit }, userdata) {
    http.post('/users/signin', userdata)
  }

}

const store = Vuex.Store({
  state, mutations, actions
})

