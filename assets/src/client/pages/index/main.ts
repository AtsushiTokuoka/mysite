import vueAppFactory from "@/client/_functions/vueAppFactory";
import { defineComponent, ref } from "vue";
import { setupContentsVueApp } from "@/client/global";

import VHeader from "@/client/_components/common/Header.vue";
import VFooter from "@/client/_components/common/Footer.vue";
import PageTop from "@/client/_components/icons/PageTop.vue";
import VBtn from "@/client/_components/buttons/Btn.vue";

window.addEventListener("DOMContentLoaded", () => {
  vueAppFactory(VHeader, "#header");
  vueAppFactory(VFooter, "#footer");
  vueAppFactory(PageTop, "#bottom-icons");
});

vueAppFactory(
  defineComponent({
    name: "VContents",
    components: {
      VBtn,
    },
    setup() {
      const contentsAppSetUpData = setupContentsVueApp();
      // modal
      const modalOpen = ref(false);
      const modalId = ref(1);
      const openModal = (id: number) => {
        modalId.value = id;
        modalOpen.value = true;
      };
      const closeModal = () => {
        modalOpen.value = false;
      };

      return {
        ...contentsAppSetUpData,
        modalOpen,
        modalId,
        openModal,
        closeModal,
      };
    },
  }),
  "#contents"
);
