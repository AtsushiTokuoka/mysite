<template>
  <button class="Hamberger" 
    :class="{ active: isOpen }" @click="toggleOpen"
  >
    <div class="Hamberger__bars">
      <span class="Hamberger__bar"></span>
      <span class="Hamberger__bar"></span>
      <span class="Hamberger__bar"></span>
    </div>
    <span class="Hamberger__memo"></span>
  </button>
</template>

<docs>
  ```vue
  <Hamburger />
  ```
</docs>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Hamburger',
  setup() {
    const isOpen = ref(false);

    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleOpen,
    };
  },
});
</script>

<style scoped lang="scss">
  $self: '.Hamberger';
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
    }
    &__memo {
      line-height: 1;
      &::before {
        content: 'MENU';
      }
      font-size: FontSize(12);
    }
    &.active {
      #{$self}__memo {
        &::before {
          content: 'CLOSE';
        }
      }
      #{$self}__bar {
        &:nth-child(1) {
          transform: rotate(45deg) translate(6px,7px);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translate(4px,-5px);
        }
      }
    }
  }
</style>