import { createApp, defineComponent } from "vue";
import { store, key } from "@/client/_store/index";

export default function createAppFactory(
  component: ReturnType<typeof defineComponent>,
  target: string
) {
  createApp(component).use(store, key).mount(target);
}
