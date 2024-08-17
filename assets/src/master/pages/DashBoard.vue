<template>
  <div class="container-xxl pt-5">
    <p class="fs-3 mb-4">選択中のユーザー： public</p>
    <TabMenu class="mb-4" />
    <keep-alive>
      <component :is="componentId" />
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/master/_store/index";

import TabMenu from "@/master/_components/TabMenu.vue";
import VideoList from "@/master/pages/VideoList.vue";
import UserList from "@/master/pages/UserList.vue";
import PhotoList from "@/master/pages/PhotoList.vue";
import ArticleList from "@/master/pages/ArticleList.vue";

const store = useStore();

const componentId = computed(() => {
  switch (store.state.currentResourceType) {
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
