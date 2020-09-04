import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allTabs: {
      jurisdiction: {
        tabs: [],
        activeIdx: 0
      },
      account: {
        tabs: [],
        activeIdx: 0
      },
      repair: {
        tabs: [],
        activeIdx: 0
      },
      inquiry: {
        tabs: [],
        activeIdx: 0
      },
      insurance: {
        tabs: [],
        activeIdx: 0
      },
      contentM: {
        tabs: [],
        activeIdx: 0
      },
      autoParts: {
        tabs: [],
        activeIdx: 0
      },
    }
  },
  mutations: {
    addTabMut(state, data) {
      let {
        type,
        path,
        title
      } = data
      if (state.allTabs[type].tabs.length) {
        let bool = true
        state.allTabs[type].tabs.map((item, idx) => {
          if (item.path == data.path) {
            bool = false
            state.allTabs[type].activeIdx = idx
            return false
          }
        })
        if (bool) {
          state.allTabs[type].tabs.push({
            path,
            title
          })
          state.allTabs[type].activeIdx = state.allTabs[type].tabs.length - 1
        }
      } else {
        state.allTabs[type].tabs.push({
          path,
          title
        })
        state.allTabs[type].activeIdx = 0
      }
      localStorage.store=JSON.stringify(state)
    },
    changeTab(state, data) {
      let arr = router.currentRoute.path.split('/')
      let type = arr[1]
      let {
        idx
      } = data
      state.allTabs[type].activeIdx = idx
      localStorage.store=JSON.stringify(state)
    },
    deleteTabMut(state, idx) {
      let arr = router.currentRoute.path.split('/')
      let type = arr[1]
      if (state.allTabs[type].tabs.length > 1) {
        if (idx === state.allTabs[type].tabs.length - 1 && state.allTabs[type].activeIdx === state.allTabs[type].tabs.length - 1) {
          state.allTabs[type].activeIdx=idx-1
        }
        else if (idx !== state.allTabs[type].activeIdx) {
          if (idx <= state.allTabs[type].activeIdx) {
            state.allTabs[type].activeIdx = state.allTabs[type].activeIdx-1
          }
        }
        state.allTabs[type].tabs.splice(idx, 1)
      }
      localStorage.store=JSON.stringify(state)
    },
    clearTab(state){
      state.allTabs={
        jurisdiction: {
          tabs: [],
          activeIdx: 0
        },
        account: {
          tabs: [],
          activeIdx: 0
        },
        repair: {
          tabs: [],
          activeIdx: 0
        },
        inquiry: {
          tabs: [],
          activeIdx: 0
        },
        insurance: {
          tabs: [],
          activeIdx: 0
        },
        contentM: {
          tabs: [],
          activeIdx: 0
        },
        autoParts: {
          tabs: [],
          activeIdx: 0
        },
      }
      localStorage.store=JSON.stringify(state)
    }
  },
  actions: {},
  modules: {}
})