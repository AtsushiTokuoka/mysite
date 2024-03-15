import { createStore } from 'vuex'
import isMobileDevice from '@/_functions/isMobileDevice';

export default createStore({
  state() {
    return {
      isMobile: isMobileDevice(),
      menuOpen: false,
      headerHeight: 0,
    }
  },
  getters: {
    touchOrClick: state => state.isMobile ? 'touchstart' : 'click',
  },
  mutations: {
    toggleMenuOpen(state) {
      state.menuOpen = !state.menuOpen
    },
    setHeaderHeight(state, payload) {
      state.headerHeight = payload.height
    }
  },
  actions: {
    toggleMenuOpen(context) {
      context.commit('toggleMenuOpen')
    },
    setHeaderHeight(context, payload) {
      context.commit('setHeaderHeight', payload)
    }
  }
})