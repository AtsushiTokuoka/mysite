import vueAppFactory from "@/_functions/vueAppFactory";
import { computed, watch } from 'vue';
import { useStore } from "vuex";

import Header from "@/_components/common/Header.vue";
import Footer from "@/_components/common/Footer.vue";
import Hamburger from "@/_components/icons/Hamburger.vue";
import PageTop from "@/_components/icons/PageTop.vue";
import DrawerMenu from "@/_components/menues/DrawerMenu.vue";

vueAppFactory(Header, '#header');
vueAppFactory(Footer, '#footer');
vueAppFactory(Hamburger, '#menu-icon');
vueAppFactory(PageTop, '#pagetop');
vueAppFactory(DrawerMenu, '#drawer-menu');

function setupContentsVueApp () {
  const store = useStore();
  const headerHeight = computed(() => store.state.headerHeight);

  watch(
    headerHeight,
    (newHeight,oldHeight) => {
      console.log('newHeight', newHeight);
    }
  );

  return {
    headerHeight,
  }
}

export {
  setupContentsVueApp
}