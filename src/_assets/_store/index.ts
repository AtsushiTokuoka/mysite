import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      menuOpen: false,
    }
  },
  mutations: {
    toggleMenuOpen(state) {
      state.menuOpen = !state.menuOpen
    },
  },
  actions: {
    toggleMenuOpen(context) {
      context.commit('toggleMenuOpen')
    },
  },
  getters: {

  }
})