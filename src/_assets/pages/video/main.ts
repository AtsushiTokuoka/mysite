import vueAppFactory from "@/_functions/vueAppFactory";
import { defineComponent } from "vue";
import { setupContentsVueApp } from "@/global";
import { useStore } from "vuex";

import VideoCard from "@/_components/cards/VideoCard.vue";

vueAppFactory(
  defineComponent({
    name: "VContents",
    components: {
      VideoCard,
    },
    setup() {
      const contentsAppSetUpData = setupContentsVueApp();
      const store = useStore();
      const videos = store.state.eleventyData.videos;
      return {
        ...contentsAppSetUpData,
        videos,
      };
    },
  }),
  "#contents"
);
