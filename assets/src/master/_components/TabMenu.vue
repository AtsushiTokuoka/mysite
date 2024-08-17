<template>
  <ul class="nav nav-tabs TabMenu">
    <li
      v-for="(label, key) in dispLabels"
      :key="key"
      class="nav-item"
      @click="changeCurrentResourceType(key)"
    >
      <span class="nav-link" :class="{ active: key === activeLabel }">
        <svg
          v-if="key === 'users'"
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="
            width: 16px;
            height: 16px;
            opacity: 1;
            margin-right: 5px;
            vertical-align: baseline;
          "
          xml:space="preserve"
        >
          <g>
            <path
              d="M322.415,350.191L163.017,190.797l-25.17-8.091c-28.028-9.017-59.533-1.726-82.132,18.999l-8.308,7.62
		l128.24,128.24l128.244,128.24l7.616-8.308c20.725-22.608,28.013-54.106,18.999-82.136L322.415,350.191z"
              style="fill: rgb(255, 255, 255)"
            ></path>
            <polygon
              points="20.022,454.547 0,510.788 56.249,490.773 180.813,366.201 144.59,329.975 	"
              style="fill: rgb(255, 255, 255)"
            ></polygon>
            <polygon
              points="446.792,114.713 398.489,66.42 333.286,1.212 303.099,31.395 481.816,210.117 512,179.927 	"
              style="fill: rgb(255, 255, 255)"
            ></polygon>
            <polygon
              points="173.884,179.927 333.286,339.321 446.792,194.421 318.792,66.42 	"
              style="fill: rgb(255, 255, 255)"
            ></polygon>
          </g>
        </svg>
        {{ label }}
      </span>
    </li>
    <!-- <li class="nav-item">
      <span class="nav-link active" aria-current="page">動画</span>
    </li>
    <li class="nav-item">
      <span class="nav-link">ユーザー</span>
    </li>
    <li class="nav-item">
      <span class="nav-link disabled" href="#">写真</span>
    </li>
    <li class="nav-item">
      <span class="nav-link disabled" href="#">記事</span>
    </li> -->
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/master/_store/index";
import { ResourceTypes } from "@/master/_types/index";

const store = useStore();
const activeLabel = computed(() => store.state.currentResourceType);

const dispLabels: Record<ResourceTypes, string> = {
  users: "ユーザー",
  videos: "動画",
  photos: "写真",
  articles: "記事",
};

const changeCurrentResourceType = (resourceType: ResourceTypes) => {
  if (resourceType === activeLabel.value) return;
  store.commit("setCurrentResourceType", resourceType);
};
</script>

<style lang="scss" scoped>
.TabMenu {
  .nav-link {
    padding: 8px 30px;
    &.active {
      cursor: default !important;
      color: #eff5f1;
    }
    &.disabled {
      color: rgba(#eff5f1, 0.5);
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
