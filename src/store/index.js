import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)//让vuex内部可以使用vuex插件库 

import Num from "./Num"
export default new Vuex.Store({
  modules: {
    Num
  }
})
