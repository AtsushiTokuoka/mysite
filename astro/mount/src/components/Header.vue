<script setup lang="ts">
import { ref, onMounted } from "vue";
import setupContentLayout from "@/scripts/utils/setupContentMinHeight";

const Header = ref<HTMLElement>();

const changeHeaderPositionOnScroll = (header: HTMLElement) => {
  let headerHeight = header.offsetHeight;
  let lastScrollPosition = 0;

  // ヘッダーのリサイズを監視
  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === header) {
        headerHeight = header.offsetHeight;
      }
    }
  });
  observer.observe(header);

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < lastScrollPosition) {
      header.classList.remove("fixed");
      // header.style.top = "0";
    } else if (scrollPosition > headerHeight) {
      header.classList.add("fixed");
      header.style.top = `-${headerHeight}px`;
    } else {
      header.classList.remove("fixed");
      // header.style.top = "0";
    }
    lastScrollPosition = scrollPosition;
  });
};

onMounted(() => {
  // スクロール時にヘッダーの位置を変更
  changeHeaderPositionOnScroll(Header.value!);

  // リサイズ時にコンテンツエリアのレイアウトを再調整
  new ResizeObserver(() => {
    setupContentLayout();
  }).observe(Header.value!);
});
</script>

<template>
  <header class="Header" ref="Header">
    <div class="Header__inner">
      <h1 class="Header__logo">
        <a href="/">
          <img src="/logo/logo_transparent.png" alt="T.K Media" width="200" />
        </a>
      </h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@/styles/variables" as variables;
@use "@/styles/layout" as layout;
.Header {
  background-color: variables.$colorBaseLight;
  color: variables.$colorBaseDark;
  padding: 10px 0;
  transition: top 0.2s;
  z-index: 1;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  &__inner {
    @include layout.Container() {
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
