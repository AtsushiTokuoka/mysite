import { createApp } from 'vue';
import store from '@/_store/index';

import Header from "@/_components/common/Header.vue";
import Footer from "@/_components/common/Footer.vue";

import Hamburger from "@/_components/icons/Hamburger.vue";
import PageTop from "@/_components/icons/PageTop.vue";

import DrawerMenu from "@/_components/menues/DrawerMenu.vue";

createApp(Header).use(store).mount('#header');
createApp(Footer).use(store).mount('#footer');
createApp(Hamburger).use(store).mount('#menu-icon');
createApp(PageTop).use(store).mount('#pagetop');
createApp(DrawerMenu).use(store).mount('#drawer-menu');
