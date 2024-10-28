<script setup lang="ts">
import { ref, onMounted } from "vue";
import setupContentLayout from "@/scripts/utils/setupContentMinHeight";

const Footer = ref<HTMLElement>();

const thisYear = new Date().getFullYear();

onMounted(() => {
  // リサイズ時にコンテンツエリアのレイアウトを再調整
  new ResizeObserver(() => {
    setupContentLayout();
  }).observe(Footer.value!);
});
</script>

<template>
  <footer class="Footer" ref="Footer">
    <div class="Footer__inner">
      <small class="Footer__copyright">
        Copyright &copy; 2023 - {{ thisYear }} T.K Media Create. All Rights
        Reserved.
      </small>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "@/styles/variables" as variables;
@use "@/styles/layout" as layout;
@use "@/styles/utility" as util;

.Footer {
  background-color: variables.$colorBaseLight;
  color: variables.$colorBaseDark;
  padding: 18px 0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  &__inner {
    @include layout.Container() {
      text-align: center;
      line-height: 1;
    }
  }
  &__copyright {
    font-size: util.FontSize(10);
  }
}
</style>
