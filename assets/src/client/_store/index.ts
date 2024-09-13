import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import isMobileDevice from "@/client/_functions/isMobileDevice";

// ストアのステートに対して型を定義します
export interface State {
  isMobile: boolean;
  menuOpen: boolean;
  headerHeight: number;
  footerHeight: number;
  eleventyGlobalData: Record<string, unknown>;
  eleventyLocalData: Record<string, unknown>;
  currentPage: string;
}

// インジェクションキーを定義します
export const key: InjectionKey<Store<State>> = Symbol();

const state: State = {
  isMobile: isMobileDevice(),
  menuOpen: false,
  headerHeight: 0,
  footerHeight: 0,
  eleventyGlobalData: JSON.parse(
    document.getElementById("eleventy-global-data")?.textContent || "{}"
  ),
  eleventyLocalData: JSON.parse(
    document.getElementById("eleventy-local-data")?.textContent || "{}"
  ),
  currentPage: window.location.pathname,
};

export const store = createStore<State>({
  state,
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

export function useStore() {
  return baseUseStore(key);
}
