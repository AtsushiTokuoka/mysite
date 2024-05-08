<template>
  <ul class="CategorySlide" role="tablist">
    <li class="CategorySlide__item active" role="tab">すべて</li>
    <li class="CategorySlide__item" role="tab">料理</li>
    <li class="CategorySlide__item" role="tab">街並み</li>
    <li class="CategorySlide__item" role="tab">音楽</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CategorySlide",
  props: {
    current: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.CategorySlide {
  display: flex;
  justify-content: center;
  gap: 20px;
  &__item {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: $videoDarkColor02;
    color: $videoLightColor;
    &.active {
      background-color: $videoLightColor;
      color: $videoDarkColor01;
    }
  }
}
</style>
