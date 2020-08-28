import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabs:[]
  },
  mutations: {
    addTabMut(state,data){
      if(state.tabs.length){
        let bool=true
        state.tabs.map(item=>{
          if(item.path==data.path){
            bool=false
          }
        })
        if(bool){
          state.tabs.push(data)
        }
      }else{
        state.tabs.push(data)
      }
    },
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