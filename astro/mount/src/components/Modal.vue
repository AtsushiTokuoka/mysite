<script setup lang="ts">
import { modalId } from "@/store";
import { useStore } from "@nanostores/vue";
import { useAttrs, ref, computed, watchEffect } from "vue";

const attrs = useAttrs();

const props = defineProps<{
  id: string;
}>();

const id = ref(props.id);
const $modalId = useStore(modalId);

const isModalOpen = computed(() => $modalId.value === id.value);
watchEffect(() => {
  if (isModalOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

const handleClick = () => {
  modalId.set("");
};
</script>

<template>
  <teleport to="#modal" v-if="isModalOpen">
    <div class="Modal" v-bind="attrs" @click="handleClick">
      <div class="Modal__content" @click.stop>
        <slot></slot>
        <button class="Modal__close" @click="handleClick">
          <div class="Modal__close__bars">
            <span class="Modal__close__bar" />
            <span class="Modal__close__bar" />
          </div>
        </button>
      </div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
@use "@/styles/variables" as *;
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
    width: 90%;
    height: 50%;
    padding: 30px;
    background-color: #273547;
    border-radius: 10px;
    position: relative;
  }
  &__close {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__bars {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 25px;
      height: 25px;
    }
    &__bar {
      display: block;
      width: 100%;
      height: 4px;
      border-radius: 5px;
      background-color: $colorBaseLight;
      &:nth-child(1) {
        transform: rotate(45deg) translate(6px, 7px);
      }
      &:nth-child(2) {
        transform: rotate(-45deg) translate(8px, -9px);
      }
    }
  }
}
</style>
