import vueAppFactory from "@/_functions/vueAppFactory";
import { defineComponent } from "vue";
import { setupContentsVueApp } from "@/global";

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
