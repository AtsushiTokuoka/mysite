<template>
  <teleport to="#modal">
    <div class="Modal" @click="close">
      <div class="Modal__content">
        <div class="Modal__slot" @click.stop>
          <!-- <v-close class="Modal__close" @click="close" /> -->
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  name: "VModal",
  emits: ["close"],
  setup(props, { emit }) {
    // closeイベントをemit
    const close = () => {
      scrollStop(false);
      emit("close");
    };

    // 画面スクロールを制御
    const scrollStop = (bool: boolean) => {
      document.body.style.overflow = bool ? "hidden" : "";
    };

    onMounted(() => {
      scrollStop(true);
    });

    return {
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
  background-color: rgba(#eff5f1, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  &__content {
    width: 1200px;
    height: 90vh;
    padding: 30px;
    background-color: #273547;
    border-radius: 10px;
  }
}
</style>
