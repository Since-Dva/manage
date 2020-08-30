let rolepermission = {
  state: {
    homeAccountModal: false,
    changePwdModal:false,
  },
  mutations: {
    closeAccountModal(state) {
      state.homeAccountModal=false
    },
    openAccountModal(state) {
      state.homeAccountModal=true
    },
    openPwdModal(state) {
      state.changePwdModal=true
    },
    closePwdModal(state) {
      state.changePwdModal=false
    },
  },
  actions: {
  },
  modules: {
  }
}
 export default rolepermission 