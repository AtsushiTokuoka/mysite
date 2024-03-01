import { createApp } from 'vue';
import store from '../_store/index.js';
import $ from 'jquery';

import Header from "../_components/common/Header.vue";
import Footer from "../_components/common/Footer.vue";

createApp(Header).use(store).mount('#header');
createApp(Footer).use(store).mount('#footer');