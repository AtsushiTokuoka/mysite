import createAppFactory from "@/client/_functions/createAppFactory";
import { defineComponent } from "vue";
import usePageSetup from "@/client/_functions/usePageSetup";

import VHeader from "@/client/_components/common/Header.vue";
import VFooter from "@/client/_components/common/Footer.vue";
import PageTop from "@/client/_components/icons/PageTop.vue";

import Btn from "@/client/_components/buttons/Btn.vue";

createAppFactory(VHeader, "#header");
createAppFactory(VFooter, "#footer");
createAppFactory(PageTop, "#bottom-icons");

createAppFactory(
  defineComponent({
    name: "VContents",
    components: {
      Btn,
    },
    setup() {
      const pageSetupData = usePageSetup();
      return {
        ...pageSetupData,
      };
    },
  }),
  "#contents"
);
