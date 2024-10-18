<script setup lang="ts">
import { drawerOpen } from "@/store";
import { useStore } from "@nanostores/vue";
import Close from "@/components/Close.vue";

const $drawerOpen = useStore(drawerOpen);

const handleClick = () => {
  drawerOpen.set(!drawerOpen.get());
};
</script>

<template>
  <div :class="['DrawerMenu', { open: $drawerOpen }]">
    <div class="DrawerMenu__inner">
      <p>Drawer Menu</p>
      <ul>
        <li class="hoge">hoge</li>
        <li>hoge</li>
        <li>hoge</li>
        <li>hoge</li>
      </ul>
    </div>
    <Close appearance="dark" @click="handleClick" class="DrawerMenu__close" />
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/variables" as variables;
@use "@/styles/layout" as layout;
@use "@/styles/utility" as utility;
$self: ".DrawerMenu";
#{$self} {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateX(100%);
  z-index: 2;
  color: variables.$colorBaseDark;
  background-color: rgba(#eff5f1, 0.5);
  transition: transform 0.05s ease-in-out;
  &.open {
    transform: translateX(0%);
  }
  &__inner {
    margin-left: auto;
    background-color: variables.$colorBaseLight;
    width: 80%;
    height: 100%;
    padding: 20px;
  }
  p {
    text-align: center;
    font-size: utility.FontSize(32);
    font-weight: bold;
    padding: 20px 0;
  }
  &__close {
    position: absolute;
    right: 30px;
    bottom: 30px;
  }
}
</style>
