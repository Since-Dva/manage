import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabs:[
      {title:'角色管理',path:'/jurisdiction/rolepermission'},
      {title:'账号列表',path:'/jurisdiction/accountList'}
    ]
  },
  mutations: {
    deleteTabMut(state,idx){
      if(state.tabs.length>1){
        state.tabs.splice(idx,1)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})