<template>
  <div class="mb-4">
    <label for="video-title" class="form-label">ユーザー名</label>
    <input
      type="text"
      class="form-control"
      id="video-title"
      placeholder="ユーザー名を入力してください"
    />
  </div>
  <div class="d-flex justify-content-center column-gap-3">
    <button
      type="button"
      class="btn btn-danger btn-lg fw-bold"
      @click="cancel('')"
    >
      キャンセル
    </button>
    <button type="button" class="btn btn-primary btn-lg fw-bold">
      ユーザーを登録
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/master/_store/index";
import { ModalId } from "@/master/_types/index";

const store = useStore();

const cancel = (id: ModalId) => {
  store.commit("updateModalId", id);
};
</script>

<style lang="scss" scoped></style>
