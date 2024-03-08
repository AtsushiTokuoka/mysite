<template>
  <teleport to="#modal">
    <div class="Modal" @click="close">
      <div class="Modal__content">
        <div class="Modal__slot" @click.stop>
          <Close class="Modal__close" @click="close" />
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
  import { defineComponent } from 'vue';
  import Close from '@/_components/icons/Close.vue';
  export default defineComponent({
    name: 'Modal',
    emits: ['close'],
    setup(props, { emit }) {
      const close = () => {
        emit('close');
      };
      return {
        close,
      };
    },
    components: {
      Close,
    },
  });
</script>

<style lang="scss" scoped>
  .Modal {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba($colorBaseDark, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    &__content {
      @include Container() {
        display: flex;
        justify-content: center;
      }
    }
    &__slot {
      position: relative;
    }
    &__close {
      position: absolute;
      top: -50px;
      right: 0;
    }
  }
</style>