import { createApp } from "vue";
import router from "@/master/router";
import { store, key } from "@/master/_store/index";
import App from "@/master/App.vue";

document.addEventListener("DOMContentLoaded", () => {
  createApp(App).use(router).use(store, key).mount("#app");
});
