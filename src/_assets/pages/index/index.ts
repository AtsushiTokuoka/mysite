import { createApp, defineComponent, ref } from 'vue';
import store from '@/_store/index';

import Btn from '@/_components/buttons/Btn.vue';
import Modal from '@/_components/modals/Modal.vue';

createApp(defineComponent({
  name: 'Contents',
  components: {
    Btn,
    Modal
  },
  setup() {
    const modalOpen = ref(false);
    const modalId = ref(1);
    const openModal = (id: number) => { 
      modalId.value = id;
      modalOpen.value = true;
    }
    const closeModal = () => { 
      modalOpen.value = false;
    }
    return {
      modalOpen,
      modalId,
      openModal,
      closeModal
    }
  }
}))
.use(store)
.mount('#contents');