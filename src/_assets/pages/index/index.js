import { createApp, defineComponent } from 'vue';
import store from '../../_store/index.js';

import Test from '../../_components/Test.vue';

createApp(defineComponent({
  name: 'Contents',
  components: {
    Test
  }
}))
.use(store)
.mount('#contents');