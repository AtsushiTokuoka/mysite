<script setup lang="ts">
import { ref } from "vue";

const isActive = ref(false);

const toggleIsActive = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <div class="SelectBox" :class="{ active: isActive }">
    <select
      class="SelectBox__select form-select"
      aria-label=""
      @focus="toggleIsActive"
      @change="toggleIsActive"
      @blur="isActive = false"
    >
      <slot></slot>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.SelectBox {
  position: relative;
  &__select {
    color: var(--bs-light-rgb);
    background-image: none;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 20%;
    right: 20px;
    width: 10px;
    height: 10px;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    border-color: var(--bs-light-rgb);
    transform: rotate(135deg) translateY(-50%);
    pointer-events: none;
  }
  &.active::after {
    transform: rotate(-45deg) translateY(70%);
    top: 30%;
    right: 22px;
  }
}
</style>
