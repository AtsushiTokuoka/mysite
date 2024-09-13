import createAppFactory from "@/client/_functions/createAppFactory";
import { defineComponent } from "vue";
import usePageSetup from "@/client/_functions/usePageSetup";

createAppFactory(
  defineComponent({
    name: "VContents",
    setup() {
      const pageSetupData = usePageSetup();
      return {
        ...pageSetupData,
      };
    },
  }),
  "#contents"
);
