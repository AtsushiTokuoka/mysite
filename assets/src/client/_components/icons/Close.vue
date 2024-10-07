<script setup lang="ts">
type Appearance = "light" | "dark";

const props = withDefaults(
  defineProps<{
    appearance: Appearance;
  }>(),
  {
    appearance: "light",
  }
);
const color: Appearance = props.appearance;
</script>

<template>
  <button class="Close">
    <div :class="['Close__bars', color]">
      <span class="Close__bar" />
      <span class="Close__bar" />
    </div>
    <span class="Close__memo">CLOSE</span>
  </button>
</template>

<style lang="scss" scoped>
$self: ".Close";
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
    &.light {
      #{$self}__bar {
        background-color: $colorBaseLight;
      }
    }
    &.dark {
      #{$self}__bar {
        background-color: $colorBaseDark;
      }
    }
  }
  &__bar {
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 5px;
    &:nth-child(1) {
      transform: rotate(45deg) translate(6px, 7px);
    }
    &:nth-child(2) {
      transform: rotate(-45deg) translate(4px, -5px);
    }
  }
  &__memo {
    line-height: 1;
    font-size: FontSize(12);
  }
}
</style>
