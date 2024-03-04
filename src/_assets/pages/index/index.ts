import { createApp, defineComponent } from 'vue';
import store from '@/_store/index';


createApp(defineComponent({
  name: 'Contents',
  components: {
  }
}))
.use(store)
.mount('#contents');