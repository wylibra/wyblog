import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  state: {

  },
  mutations: {

  }
})

export default store

// 将store分隔成模块（module），每个模块拥有自己的state，mutation，action，getter，甚至是嵌套子模块