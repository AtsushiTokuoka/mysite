<template>
  <div class="mb-4">
    <label class="form-label">動画</label>
    <FileUploader />
  </div>
  <div class="mb-4">
    <label class="form-label">サムネイル</label>
    <FileUploader />
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
  <div class="mb-4">
    <label for="video-description" class="form-label">説明</label>
    <textarea
      class="form-control"
      id="video-description"
      rows="5"
      placeholder="動画の説明を入力してください"
    ></textarea>
  </div>
  <div class="mb-4">
    <label class="form-label">公開状態</label>
    <VSwitch :is-checked="true" active="公開" inactive="非公開" />
  </div>
  <div class="mb-5">
    <label class="form-label">カテゴリ</label>
    <SelectBox class="w-50 mb-3">
      <option selected>カテゴリを選択</option>
      <option value="1">カテゴリ01</option>
      <option value="2">カテゴリ02</option>
      <option value="3">カテゴリ03</option>
    </SelectBox>
  </div>
  <div class="d-flex justify-content-center column-gap-3">
    <button type="button" class="btn btn-danger btn-lg fw-bold">
      画面を閉じる
    </button>
    <button type="button" class="btn btn-primary btn-lg fw-bold">
      動画を登録
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FileUploader from "@/master/_components/FileUploader.vue";
import VSwitch from "@/master/_components/VSwitch.vue";
import SelectBox from "@/master/_components/SelectBox.vue";
export default defineComponent({
  name: "VideoUpload",
  components: {
    FileUploader,
    VSwitch,
    SelectBox,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
