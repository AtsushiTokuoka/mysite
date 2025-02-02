<script setup lang="ts">
import { isDrawerOpen } from "@/store";
import { useStore } from "@nanostores/vue";
import { watchEffect } from "vue";

const $isDrawerOpen = useStore(isDrawerOpen);

watchEffect(() => {
  if ($isDrawerOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

const handleClick = () => {
  isDrawerOpen.set(!isDrawerOpen.get());
};
</script>

<template>
  <nav :class="['DrawerMenu', { open: $isDrawerOpen }]" @click="handleClick">
    <div class="DrawerMenu__inner" @click.stop>
      <button
        :class="['DrawerMenu__toggle', { open: $isDrawerOpen }]"
        @click="handleClick"
      >
        <div class="DrawerMenu__bars">
          <span class="DrawerMenu__bar" />
          <span class="DrawerMenu__bar" />
          <span class="DrawerMenu__bar" />
        </div>
        <span class="DrawerMenu__memo" />
      </button>
      <slot />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "@/styles/variables" as *;
@use "@/styles/utility" as *;
$self: ".DrawerMenu";
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
    bottom: 70px;
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
      content: "MENU";
    }
    font-size: FontSize(12);
  }
}
</style>
