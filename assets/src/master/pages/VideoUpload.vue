<template>
  <div class="d-flex mb-4">
    <div class="w-50">
      <label class="form-label">動画</label>
      <FileUploader />
    </div>
    <div class="w-50 ps-3">
      <label class="form-label">サムネイル</label>
      <FileUploader />
    </div>
  </div>
  <hr />
  <div class="mb-4">
    <label for="video-title" class="form-label">タイトル</label>
    <input
      type="text"
      class="form-control"
      id="video-title"
      placeholder="動画のタイトルを入力してください"
    />
  </div>
  <div class="mb-5">
    <label for="video-description" class="form-label">説明</label>
    <textarea
      class="form-control"
      id="video-description"
      rows="5"
      placeholder="動画の説明を入力してください"
      style="resize: none"
    ></textarea>
  </div>
  <div class="mb-4">
    <label class="form-label">公開状態</label>
    <VSwitch :is-checked="true" active="公開" inactive="非公開" />
  </div>
  <div class="d-flex align-items-center mb-5">
    <div class="w-50 me-3">
      <label class="form-label">ユーザー</label>
      <SelectBox>
        <option selected>ユーザーを選択</option>
        <option value="1">一般公開</option>
        <option value="2">ユーザー限定</option>
        <option value="3">User01</option>
      </SelectBox>
    </div>
    <div class="w-50">
      <label class="form-label">再生リスト</label>
      <SelectBox>
        <option selected>再生リストを選択</option>
        <option value="1">再生リスト01</option>
        <option value="2">再生リスト02</option>
        <option value="3">再生リスト03</option>
      </SelectBox>
    </div>
  </div>
  <div class="d-flex justify-content-center column-gap-3">
    <button
      type="button"
      class="btn btn-danger btn-lg fw-bold"
      @click="cancelUpload('')"
    >
      キャンセル
    </button>
    <button
      @click="uploadVideo"
      type="button"
      class="btn btn-primary btn-lg fw-bold"
    >
      動画を登録
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/master/_store/index";
import { ModalId } from "@/master/_types/index";
import FileUploader from "@/master/_components/FileUploader.vue";
import VSwitch from "@/master/_components/VSwitch.vue";
import SelectBox from "@/master/_components/SelectBox.vue";

const store = useStore();

const uploadVideo = () => {
  console.log("動画を登録しました");
};
const cancelUpload = (id: ModalId) => {
  store.commit("updateModalId", id);
};
</script>

<style lang="scss" scoped></style>
