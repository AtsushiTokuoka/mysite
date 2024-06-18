import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "@/master/pages/DashBoard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/master/dashboard", component: DashBoard }],
});

export default router;
