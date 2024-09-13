<template>
  <teleport to="#modal">
    <div class="Modal" @[touchOrClick]="close">
      <div class="Modal__content">
        <div class="Modal__slot" @[touchOrClick].stop>
          <v-close class="Modal__close" @[touchOrClick]="close" />
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { defineComponent, computed, onMounted } from "vue";
import { useStore } from "vuex";
import VClose from "@/client/_components/icons/Close.vue";
export default defineComponent({
  name: "VModal",
  components: {
    VClose,
  },
  emits: ["close"],
  setup(props, { emit }) {
    const store = useStore();

    // vuexよりtouchOrClickを取得
    const touchOrClick = computed(() => store.getters.touchOrClick);

    // closeイベントをemit
    const close = () => {
      scrollStop(false);
      emit("close");
    };

    // 画面スクロールを制御
    const scrollStop = (bool) => {
      document.body.style.overflow = bool ? "hidden" : "";
    };

    onMounted(() => {
      scrollStop(true);
    });

    return {
      touchOrClick,
      close,
    };
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
