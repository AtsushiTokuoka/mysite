<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useStore } from "@/client/_store/index";

const store = useStore();

const baseUrl = ref(BASE_URL);

const Header = ref<HTMLElement>();

let resizeObserver: ResizeObserver | null = null;

const setHeaderHeight = () => {
  store.dispatch("setHeaderHeight", { height: Header.value?.offsetHeight });
};

onMounted(() => {
  resizeObserver = new ResizeObserver(() => setHeaderHeight());
  resizeObserver.observe(Header.value!);
});

onUnmounted(() => {
  if (resizeObserver && Header.value) {
    resizeObserver.unobserve(Header.value);
  }
});
</script>

<template>
  <div ref="Header" class="Header">
    <div class="Header__inner">
      <h1 class="Header__logo">
        <a href="/">
          <img
            :src="baseUrl + '/logo/logo_transparent.png'"
            alt="T.K Media"
            width="200"
          />
        </a>
      </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Header {
  background-color: $colorBaseLight;
  color: $colorBaseDark;
  padding: 10px 0;
  border-bottom: 1px solid $colorBaseDark;
  &__inner {
    @include Container() {
      text-align: center;
      font-size: 0;
    }
  }
  &__logo {
    display: inline-block;
    line-height: 1;
    width: 80px;
  }
}
</style>
