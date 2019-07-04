import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    user_id:null,
    token: null,
    user: null,
    isUserLoggedIn: false,
    usertype:null
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)

    },
    setUser (state, user) {
      state.user = user
    },
    setUsertype(state,usertype){
      state.usertype = usertype
    },
    setUser_id(state,user_id){
      state.user_id = user_id
    }

  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setUsertype ({commit}, usertype) {
      commit('setUsertype', usertype)
    },
    setUser_id ({commit}, user_id) {
      commit('setUser_id', user_id)
    }
  }
})
