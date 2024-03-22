import vueAppFactory from "@/_functions/vueAppFactory";
import { defineComponent } from 'vue';
import { setupContentsVueApp } from "@/global";

import VideoCard from "@/_components/cards/VideoCard.vue";

vueAppFactory(defineComponent({
  name: 'VContents',
  components: {
    VideoCard
  },
  setup() {
    const contentsAppSetUpData = setupContentsVueApp();
    return {
      ...contentsAppSetUpData,
    }
  }
}), '#contents');