import { createStore } from "vuex";
import isMobileDevice from "@/_functions/isMobileDevice";

export default createStore({
  state() {
    return {
      isMobile: isMobileDevice(),
      menuOpen: false,
      headerHeight: 0,
      footerHeight: 0,
      eleventyData: JSON.parse(
        document.getElementById("eleventy-data")?.textContent || "{}"
      ),
      currentPage: window.location.pathname,
    };
  },
  getters: {
    touchOrClick: (state) => (state.isMobile ? "touchstart" : "click"),
  },
  mutations: {
    toggleMenuOpen(state) {
      state.menuOpen = !state.menuOpen;
    },
    setHeaderHeight(state, payload) {
      state.headerHeight = payload.height;
    },
    setFooterHeight(state, payload) {
      state.footerHeight = payload.height;
    },
  },
  actions: {
    toggleMenuOpen(context) {
      context.commit("toggleMenuOpen");
    },
    setHeaderHeight(context, payload) {
      context.commit("setHeaderHeight", payload);
    },
    setFooterHeight(context, payload) {
      context.commit("setFooterHeight", payload);
    },
  },
});
