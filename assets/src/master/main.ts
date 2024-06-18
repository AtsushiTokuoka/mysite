import { createApp } from "vue";
import router from "@/master/router";
import App from "@/master/App.vue";
import "@/../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

document.addEventListener("DOMContentLoaded", () => {
  createApp(App).use(router).mount("#app");
});
