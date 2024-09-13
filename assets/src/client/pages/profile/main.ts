import vueAppFactory from "@/client/_functions/vueAppFactory";
import { defineComponent } from "vue";
import { setupContentsVueApp } from "@/client/global";

vueAppFactory(
  defineComponent({
    name: "VContents",
    setup() {
      const contentsAppSetUpData = setupContentsVueApp();

      return {
        ...contentsAppSetUpData,
      };
    },
  }),
  "#contents"
);
