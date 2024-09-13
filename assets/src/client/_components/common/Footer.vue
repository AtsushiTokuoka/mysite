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

<docs>
  ```vue
  <v-footer />
  ```
</docs>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useStore } from "@/client/_store/index";
export default defineComponent({
  name: "VFooter",
  setup() {
    const thisYear = new Date().getFullYear();

    const store = useStore();

    const Footer = ref<HTMLElement>();

    let resizeObserver: ResizeObserver;

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

    return {
      Footer,
      setFooterHeight,
      thisYear,
    };
  },
});
</script>

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
