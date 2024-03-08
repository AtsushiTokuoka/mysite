<template>
  <teleport to="#modal">
    <div class="Modal" @[touchOrClick]="close">
      <div class="Modal__content">
        <div class="Modal__slot" @[touchOrClick]="stop">
          <Close class="Modal__close" @[touchOrClick]="close" />
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
  import { defineComponent, computed, onMounted, ref } from 'vue';
  import { useStore } from 'vuex';
  import Close from '@/_components/icons/Close.vue';
  export default defineComponent({
    name: 'Modal',
    emits: ['close'],
    setup(props, { emit }) {

      const hoge = ref('click');

      // vuexよりtouchOrClickを取得
      const store = useStore();
      const touchOrClick = computed(() => store.getters.touchOrClick);

      // closeイベントをemit
      const close = (e) => {
        console.log(e.type);
        emit('close');
      };
      
      // closeイベントを発火させない
      const stop = (e) => {
        e.stopPropagation();
      }

      // 画面スクロールを停止
      onMounted(() => {
        document.body.style.overflow = 'hidden';
      });

      return {
        touchOrClick,
        close,
        stop,
        hoge
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