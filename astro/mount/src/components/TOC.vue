<script setup lang="ts">
import { isTocOpen } from "@/store/blog";
import { useStore } from "@nanostores/vue";
import { ref, onMounted, watchEffect } from "vue";

const $isTocOpen = useStore(isTocOpen);
watchEffect(() => {
  if ($isTocOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

const headings = ref([]);
onMounted(() => {
  const $article = document.querySelector(".Article") as HTMLElement;
  const $headings = $article.querySelectorAll("h1,h2,h3,h4,h5,h6");
});

const handleClick = () => {
  isTocOpen.set(!isTocOpen.get());
};
</script>

<template>
  <aside :class="['TOC', { open: $isTocOpen }]" @click="handleClick">
    <div class="TOC__inner" @click.stop>
      <button
        :class="['TOC__toggle', { open: $isTocOpen }]"
        @click="handleClick"
      >
        <div class="TOC__bars">
          <span class="TOC__bar" />
          <span class="TOC__bar" />
          <span class="TOC__bar" />
        </div>
        <span class="TOC__memo" />
      </button>
      <slot />
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@use "@/styles/variables" as *;
@use "@/styles/utility" as *;
$self: ".TOC";
#{$self} {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateX(100%);
  z-index: 2;
  color: $colorBaseDark;
  background-color: rgba($colorBaseDark, 0.5);
  transition: transform 0.05s ease-in-out;
  &.open {
    transform: translateX(0%);
    #{$self}__toggle {
      left: -75px;
    }
    #{$self}__inner {
      position: relative;
    }
  }
  &__inner {
    margin-left: auto;
    background-color: $colorBaseLight;
    width: 80%;
    height: 100%;
    padding: 20px;
  }
  &__toggle {
    position: absolute;
    left: -80px;
    bottom: 200px;
    width: 80px;
    padding: 8px 0 8px 5px;
    background-color: $colorBaseLight;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &.open {
      #{$self}__memo {
        &::before {
          content: "CLOSE";
        }
      }
      #{$self}__bar {
        &:nth-child(1) {
          transform: rotate(45deg) translate(6px, 7px);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translate(4px, -5px);
        }
      }
    }
  }
  &__bars {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    margin-bottom: 5px;
  }
  &__bar {
    background-color: $colorBaseDark;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 5px;
  }
  &__memo {
    color: $colorBaseDark;
    line-height: 1;
    &::before {
      content: "目次";
    }
    font-size: FontSize(12);
  }
}
</style>
