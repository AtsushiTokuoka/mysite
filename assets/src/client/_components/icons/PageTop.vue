<template>
  <button class="PageTop" @[touchOrClick]="onClick">
    <svg
      class="PageTop__svg icon icon-tabler icons-tabler-outline icon-tabler-arrow-up"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5l0 14" />
      <path d="M18 11l-6 -6" />
      <path d="M6 11l6 -6" />
    </svg>
    <span class="PageTop__memo">TOP</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/client/_store/index";
import smoothScroll from "@/client/_functions/smoothScroll";
export default defineComponent({
  name: "VPageTop",
  setup() {
    const store = useStore();

    const touchOrClick = computed(() => store.getters.touchOrClick);

    const onClick = () => {
      smoothScroll("body");
    };

    return {
      onClick,
      touchOrClick,
    };
  },
});
</script>

<style lang="scss" scoped>
$self: ".PageTop";
#{$self} {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $colorBaseLight;
  &__svg {
    width: 30px;
    height: 30px;
    margin-bottom: -3px;
  }
  &__memo {
    font-size: FontSize(12);
    font-weight: bold;
  }
}
</style>
