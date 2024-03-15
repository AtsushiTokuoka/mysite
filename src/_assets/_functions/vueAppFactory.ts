import { createApp } from 'vue';
import store from '@/_store/index';

export default function vueAppFactory(component: any, target: string) {
  createApp(component).use(store).mount(target);
}