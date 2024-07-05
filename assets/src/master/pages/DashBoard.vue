<template>
  <div class="container-xxl pt-5">
    <div class="row mb-5">
      <div class="col-5">
        <div class="d-flex column-gap-2 mb-3">
          <SelectBox class="w-75">
            <option selected>ユーザーを選択</option>
            <option value="1">一般公開</option>
            <option value="2">ユーザー限定</option>
            <option value="3">User01</option>
          </SelectBox>
          <button type="button" class="btn btn-primary fw-bold">詳細</button>
        </div>
        <div class="mb-3">
          <VSwitch :is-checked="true" active="公開" inactive="非公開" />
        </div>
        <SelectBox class="w-75 mb-3">
          <option selected>カテゴリを選択</option>
          <option value="1">カテゴリ01</option>
          <option value="2">カテゴリ02</option>
          <option value="3">カテゴリ03</option>
        </SelectBox>
      </div>
      <div class="col">
        <div class="d-flex justify-content-end column-gap-3 mb-3">
          <button type="button" class="btn btn-primary btn-lg fw-bold">
            ユーザー登録
          </button>
          <button type="button" class="btn btn-primary btn-lg fw-bold">
            動画を登録
          </button>
          <VModal>
            <VideoUpload />
          </VModal>
        </div>
      </div>
    </div>
    <VTable />
    <Pagination />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VTable from "@/master/_components/VTable.vue";
import Pagination from "@/master/_components/Pagination.vue";
import SelectBox from "@/master/_components/SelectBox.vue";
import VSwitch from "@/master/_components/VSwitch.vue";
import VModal from "@/master/_components/VModal.vue";
import VideoUpload from "@/master/pages/VideoUpload.vue";
export default defineComponent({
  name: "DashBoard",
  components: {
    VTable,
    Pagination,
    SelectBox,
    VSwitch,
    VModal,
    VideoUpload,
  },
});
</script>
