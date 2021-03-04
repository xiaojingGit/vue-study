import Vue from 'vue'
import Vuex from './w-vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: '王静',
    sex: 'girl',
    age: '26'
  },
  mutations: {
    updateInfo (state) {
      state.name = '西西'
      state.sex = 'girl'
      state.age = '25'
    }
  },
  actions: {
    updateInfo ({ commit }) {
      commit('updateInfo')
    }
  }
})

export default store