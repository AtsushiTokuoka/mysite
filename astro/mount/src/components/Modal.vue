<script setup lang="ts">
import { modalId } from "@/store";
import { useStore } from "@nanostores/vue";
import { useAttrs, ref } from "vue";
import Close from "@/components/Close.vue";

const attrs = useAttrs();

const props = defineProps<{
  id: string;
}>();

const id = ref(props.id);
const $modalId = useStore(modalId);

const close = () => {
  modalId.set("");
};
</script>

<template>
  <teleport to="#modal" v-if="$modalId === id">
    <div class="Modal" v-bind="attrs" @click="close">
      <div class="Modal__content" @click.stop>
        <slot></slot>
        <Close @click="close" appearance="light" class="Modal__close" />
      </div>
    </div>
  </teleport>
</template>

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
    width: 50%;
    height: 50%;
    padding: 30px;
    background-color: #273547;
    border-radius: 10px;
    position: relative;
  }
  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
  }
}
</style>
