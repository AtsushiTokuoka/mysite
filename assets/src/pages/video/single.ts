import vueAppFactory from "@/_functions/vueAppFactory";
import { defineComponent, ref, watch, computed, onMounted } from "vue";
import { setupContentsVueApp } from "@/global";

import VBtn from "@/_components/video/buttons/Btn.vue";

vueAppFactory(
  defineComponent({
    name: "VContents",
    components: {
      VBtn,
    },
    setup() {
      const contentsAppSetUpData = setupContentsVueApp();

      const Video = ref<HTMLVideoElement>();

      const isPlay = ref(false);
      const isPlayText = computed(() => (isPlay.value ? "停止" : "再生"));
      watch(isPlay, (newVal) => {
        if (Video.value === undefined) return;
        if (newVal && Video.value) {
          Video.value.play();
        } else {
          Video.value.pause();
        }
      });

      const playVideo = () => {
        if (Video.value === undefined) return;
        isPlay.value = Video.value.paused ? true : false;
      };

      const playFullScreen = () => {
        if (Video.value === undefined) return;
        Video.value.requestFullscreen();
        isPlay.value = Video.value.paused ? true : false;
      };

      onMounted(() => {
        if (Video.value === undefined) return;
        Video.value.addEventListener("ended", () => {
          isPlay.value = false;
        });
      });

      return {
        ...contentsAppSetUpData,
        Video,
        isPlay,
        isPlayText,
        playVideo,
        playFullScreen,
      };
    },
  }),
  "#contents"
);
