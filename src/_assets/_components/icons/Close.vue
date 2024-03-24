<template>
  <button class="Close">
    <div class="Close__bars">
      <span class="Close__bar" />
      <span class="Close__bar" />
    </div>
    <span class="Close__memo">CLOSE</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VClose",
});
</script>

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
  }
  &__bar {
    background-color: $colorBaseLight;
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
