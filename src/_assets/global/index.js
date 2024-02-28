import { createApp } from 'vue';
import store from '../_store/index.js';

import Header from "../_components/Header.vue";
import Footer from "../_components/Footer.vue";

createApp(Header).use(store).mount('#header');
createApp(Footer).use(store).mount('#footer');