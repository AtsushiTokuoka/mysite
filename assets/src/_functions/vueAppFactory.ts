import { createApp, defineComponent } from "vue";
import store from "@/_store/index";

export default function vueAppFactory(
  component: ReturnType<typeof defineComponent>,
  target: string
) {
  createApp(component).use(store).mount(target);
}
