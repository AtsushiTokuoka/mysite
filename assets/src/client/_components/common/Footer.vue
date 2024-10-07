<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useStore } from "@/client/_store/index";

const store = useStore();
const thisYear = new Date().getFullYear();
const Footer = ref<HTMLElement>();

let resizeObserver: ResizeObserver | null = null;

const setFooterHeight = () => {
  store.dispatch("setFooterHeight", { height: Footer.value?.offsetHeight });
};

onMounted(() => {
  resizeObserver = new ResizeObserver(() => setFooterHeight());
  resizeObserver.observe(Footer.value!);
});

onUnmounted(() => {
  if (resizeObserver && Footer.value) {
    resizeObserver.unobserve(Footer.value);
  }
});
</script>

<template>
  <footer ref="Footer" class="Footer">
    <div class="Footer__inner">
      <small class="Footer__copyright">
        Copyright &copy; 2023 - {{ thisYear }} T.K Media Create. All Rights
        Reserved.
      </small>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.Footer {
  background-color: $colorBaseLight;
  color: $colorBaseDark;
  padding: 18px 0;
  @include mq(tab) {
    padding: 24px 0;
  }
  @include mq(desktop) {
    padding: 30px 0;
  }
  &__inner {
    @include Container() {
      text-align: center;
      line-height: 1;
    }
  }
  &__copyright {
    font-size: FontSize(10);
  }
}
</style>
