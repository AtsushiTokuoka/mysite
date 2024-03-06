import { createApp } from 'vue';
import store from '@/_store/index';

import Hamburger from "@/_components/icons/Hamburger.vue";
import DrawerMenu from "@/_components/menues/DrawerMenu.vue";
import Header from "@/_components/common/Header.vue";
import Footer from "@/_components/common/Footer.vue";

createApp(Hamburger).use(store).mount('#menu-icon');
createApp(DrawerMenu).use(store).mount('#drawer-menu');
createApp(Header).use(store).mount('#header');
createApp(Footer).use(store).mount('#footer');
