import Vue from 'vue'
import Vuex from 'vuex'
import Pesquisa from './modules/pesquisa'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Pesquisa
  }
})
