<script setup lang="ts">
import { drawerOpen } from "@/store";
const handleClick = () => {
  drawerOpen.set(!drawerOpen.get());
};
</script>

<template>
  <button class="Hamberger" @click="handleClick">
    <div class="Hamberger__bars">
      <span class="Hamberger__bar" />
      <span class="Hamberger__bar" />
      <span class="Hamberger__bar" />
    </div>
    <span class="Hamberger__memo" />
  </button>
</template>

<style scoped lang="scss">
@use "@/styles/variables" as variables;
$self: ".Hamberger";
#{$self} {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__bars {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    margin-bottom: 5px;
  }
  &__bar {
    background-color: variables.$colorBaseLight;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 5px;
  }
  &__memo {
    line-height: 1;
    &::before {
      content: "MENU";
    }
    font-size: FontSize(12);
  }
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
</style>
