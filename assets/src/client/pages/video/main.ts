import vueAppFactory from "@/client/_functions/vueAppFactory";
import { defineComponent } from "vue";
import { setupContentsVueApp } from "@/client/global";
import { useStore } from "vuex";

import VFooter from "@/client/_components/video/Footer.vue";
import VHeader from "@/client/_components/video/Header.vue";

import VideoCard from "@/client/_components/video/cards/VideoCard.vue";
import CategorySlide from "@/client/_components/video/menues/CategorySlide.vue";

window.addEventListener("DOMContentLoaded", () => {
  vueAppFactory(VHeader, "#header");
  vueAppFactory(VFooter, "#footer");
});

vueAppFactory(
  defineComponent({
    name: "VContents",
    components: {
      VideoCard,
      CategorySlide,
    },
    setup() {
      const contentsAppSetUpData = setupContentsVueApp();
      const store = useStore();
      const videos = store.state.eleventyLocalData.videos;
      return {
        ...contentsAppSetUpData,
        videos,
      };
    },
  }),
  "#contents"
);
