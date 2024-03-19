import vueAppFactory from "@/_functions/vueAppFactory";
import { defineComponent } from 'vue';
import { setupContentsVueApp } from "@/global";

declare global {
  interface Window { pageData: any; }
}

vueAppFactory(defineComponent({
  name: 'Contents',
  setup(props) {
    const contentsAppSetUpData = setupContentsVueApp();
    return {
      ...contentsAppSetUpData,
    }
  }
}), '#contents');