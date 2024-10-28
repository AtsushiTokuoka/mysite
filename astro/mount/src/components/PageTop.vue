<script setup lang="ts">
import { ref, onMounted } from "vue";
import smoothScroll from "@/scripts/utils/smoothScroll";

const SCROLL_THRESHOLD = 100;
const isShow = ref(false);
onMounted(() => {
  window.addEventListener("scroll", () => {
    isShow.value = window.scrollY > SCROLL_THRESHOLD;
  });
});

const handleClick = () => {
  smoothScroll("body");
};
</script>

<template>
  <button :class="['PageTop', { 'is-show': isShow }]" @click="handleClick">
    <span class="PageTop__inner">
      <span class="PageTop__arrow"></span>
      <span class="PageTop__memo">TOP</span>
    </span>
  </button>
</template>

<style lang="scss" scoped>
@use "@/styles/variables" as *;
@use "@/styles/utility" as *;
$self: ".PageTop";
#{$self} {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 66px;
  opacity: 0;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease-in-out;
  &.is-show {
    opacity: 1;
    transform: translateY(-10px) translateX(-50%);
  }
  &::after {
    content: "";
    display: block;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    background-color: $colorBaseLight;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  &__inner {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__arrow {
    width: 15px;
    height: 15px;
    border-top: 4px solid $colorBaseDark;
    border-right: 4px solid $colorBaseDark;
    transform: rotate(-45deg);
    border-radius: 3px;
  }
  &__memo {
    color: $colorBaseDark;
    font-size: FontSize(12);
    margin-top: -5px;
  }
}
</style>
