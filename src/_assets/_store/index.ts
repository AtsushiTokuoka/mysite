import { createStore } from 'vuex'
import isMobileDevice from '@/_function/isMobileDevice';

export default createStore({
  state() {
    return {
      isMobile: isMobileDevice(),
      menuOpen: false,
    }
  },
  getters: {
    touchOrClick: state => state.isMobile ? 'touchstart' : 'click',
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
  }
})