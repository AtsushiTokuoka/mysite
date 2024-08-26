import { createRouter, createWebHistory, useRoute } from "vue-router";
import DashBoard from "@/master/pages/DashBoard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/master",
      component: DashBoard,
      props: (route) => ({ query: route.query }),
    },
  ],
});

export { router, useRoute };
