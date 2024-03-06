import { createApp, defineComponent } from 'vue';
import store from '@/_store/index';

import PrimaryBtn from '@/_components/buttons/PrimaryBtn.vue';

createApp(defineComponent({
  name: 'Contents',
  components: {
    PrimaryBtn
  },
}))
.use(store)
.mount('#contents');