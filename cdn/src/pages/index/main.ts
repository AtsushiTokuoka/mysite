import vueAppFactory from "@/_functions/vueAppFactory";
import { defineComponent, ref } from "vue";
import { setupContentsVueApp } from "@/global";

import VBtn from "@/_components/buttons/Btn.vue";
import VModal from "@/_components/modals/Modal.vue";

console.log(BASE_URL);

vueAppFactory(
  defineComponent({
    name: "VContents",
    components: {
      VBtn,
      VModal,
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
