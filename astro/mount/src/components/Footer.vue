<script setup lang="ts">
import { ref, onMounted } from "vue";
import { setContentLayout } from "@/scripts/utils.ts";

const Footer = ref<HTMLElement>();

const thisYear = new Date().getFullYear();

onMounted(() => {
  // リサイズ時にコンテンツエリアのレイアウトを再調整
  new ResizeObserver(() => {
    setContentLayout();
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

.Footer {
  background-color: variables.$colorBaseLight;
  color: variables.$colorBaseDark;
  padding: 18px 0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  @include layout.mq(tab) {
    padding: 24px 0;
  }
  @include layout.mq(desktop) {
    padding: 30px 0;
  }
  &__inner {
    @include layout.Container() {
      text-align: center;
      line-height: 1;
    }
  }
  &__copyright {
    font-size: FontSize(10);
  }
}
</style>
