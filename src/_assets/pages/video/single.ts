import vueAppFactory from "@/_functions/vueAppFactory";
import { defineComponent } from "vue";
import { setupContentsVueApp } from "@/global";

import VBtn from "@/_components/buttons/Btn.vue";

vueAppFactory(
  defineComponent({
    name: "VContents",
    components: {
      VBtn,
    },
    setup() {
      const contentsAppSetUpData = setupContentsVueApp();
      const playVideo = () => {
        const video = document.getElementById("video") as HTMLVideoElement;
        console.log(video);

        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      };
      return {
        ...contentsAppSetUpData,
        playVideo,
      };
    },
  }),
  "#contents"
);
