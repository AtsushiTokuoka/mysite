<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/master/_store/index";
import { useRoute } from "@/master/router";
import { useResource } from "@/master/_functions/useResource";

import TabMenu from "@/master/_components/TabMenu.vue";
import VideoList from "@/master/pages/VideoList.vue";
import UserList from "@/master/pages/UserList.vue";
import PhotoList from "@/master/pages/PhotoList.vue";
import ArticleList from "@/master/pages/ArticleList.vue";

const route = useRoute();
const store = useStore();

const query = route.query;
const { resources, fetchResource } = useResource();

const init = async () => {
  // ユーザー一覧を取得
  await fetchResource("users", { method: "GET" });
  // 選択中のユーザーをstateにセット
  setCurrentUser();
};
init();

const setCurrentUser = () => {
  const currentUser = resources.value.users.find((user) => {
    if (!query.name) return user.name === "public";
    return user.name === query.name;
  });
  if (currentUser) store.commit("updateCurrentUser", currentUser);
};

const componentId = computed(() => {
  switch (store.state.currentResourceName) {
    case "users":
      return UserList;
    case "videos":
      return VideoList;
    case "photos":
      return PhotoList;
    case "articles":
      return ArticleList;
    default:
      return UserList;
  }
});
</script>

<template>
  <div class="container-xxl pt-5">
    <p class="fs-3 mb-4">
      選択中のユーザー： {{ store.state.currentUser?.displayName }}
    </p>
    <TabMenu class="mb-4" />
    <keep-alive>
      <component :is="componentId" />
    </keep-alive>
  </div>
</template>

<style lang="scss" scoped></style>
