import vueAppFactory from "@/client/_functions/vueAppFactory";
import { defineComponent } from "vue";
import { setupContentsVueApp } from "@/client/global";

import VHeader from "@/client/_components/video/Header.vue";
import VFooter from "@/client/_components/video/Footer.vue";

window.addEventListener("DOMContentLoaded", () => {
  vueAppFactory(VHeader, "#header");
  vueAppFactory(VFooter, "#footer");
});

vueAppFactory(
  defineComponent({
    name: "VContents",
    components: {},
    setup() {
      const contentsAppSetUpData = setupContentsVueApp();
      return {
        ...contentsAppSetUpData,
      };
    },
  }),
  "#contents"
);
