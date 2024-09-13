import createAppFactory from "@/client/_functions/createAppFactory";
import { defineComponent } from "vue";
import usePageSetup from "@/client/_functions/usePageSetup";

import VHeader from "@/client/_components/video/Header.vue";
import VFooter from "@/client/_components/video/Footer.vue";

window.addEventListener("DOMContentLoaded", () => {
  createAppFactory(VHeader, "#header");
  createAppFactory(VFooter, "#footer");
});

createAppFactory(
  defineComponent({
    name: "VContents",
    components: {},
    setup() {
      const pageSetupData = usePageSetup();
      return {
        ...pageSetupData,
      };
    },
  }),
  "#contents"
);
