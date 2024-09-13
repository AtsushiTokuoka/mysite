import createAppFactory from "@/client/_functions/createAppFactory";
import { defineComponent } from "vue";
import usePageSetup from "@/client/_functions/usePageSetup";
import { useStore } from "@/client/_store";

import VFooter from "@/client/_components/video/Footer.vue";
import VHeader from "@/client/_components/video/Header.vue";
import DrawerMenu from "@/client/_components/menues/DrawerMenu.vue";

import VideoCard from "@/client/_components/video/cards/VideoCard.vue";
import CategorySlide from "@/client/_components/video/menues/CategorySlide.vue";

createAppFactory(VHeader, "#header");
createAppFactory(VFooter, "#footer");
createAppFactory(DrawerMenu, "#drawer-menu");

createAppFactory(
  defineComponent({
    name: "VContents",
    components: {
      VideoCard,
      CategorySlide,
    },
    setup() {
      const pageSetupData = usePageSetup();

      const store = useStore();

      const videos = store.state.eleventyLocalData.videos;
      return {
        ...pageSetupData,
        videos,
      };
    },
  }),
  "#contents"
);
