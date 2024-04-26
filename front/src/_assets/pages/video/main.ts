import vueAppFactory from "@/_functions/vueAppFactory";
import { defineComponent } from "vue";
import { setupContentsVueApp } from "@/global";
import { useStore } from "vuex";

import VFooter from "@/_components/video/Footer.vue";
import VHeader from "@/_components/video/Header.vue";

import VideoCard from "@/_components/video/cards/VideoCard.vue";
import CategorySlide from "@/_components/video/menues/CategorySlide.vue";

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
