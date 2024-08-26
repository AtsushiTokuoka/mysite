<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/master/_store/index";
import { ModalId } from "@/master/_types/index";

import SelectBox from "@/master/_components/SelectBox.vue";
import VSwitch from "@/master/_components/VSwitch.vue";
import VModal from "@/master/_components/VModal.vue";
import VideoUpload from "@/master/pages/VideoUpload.vue";
import Pagination from "@/master/_components/Pagination.vue";

const store = useStore();
const modalId = computed(() => store.state.modalId);

const handleModal = (id: ModalId) => {
  store.commit("updateModalId", id);
};
</script>

<template>
  <div class="d-flex justify-content-between align-items-end mb-3">
    <div class="w-50">
      <dl class="d-flex mb-1">
        <dt class="me-3">更新日：</dt>
        <dd>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="sortOrder"
              id="sortOrderDesc"
              value="desc"
              checked
            />
            <label class="form-check-label" for="sortOrderDesc">新しい順</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="sortOrder"
              id="sortOrderAsc"
              value="asc"
            />
            <label class="form-check-label" for="sortOrderAsc">古い順</label>
          </div>
        </dd>
      </dl>
      <dl class="d-flex mb-1">
        <dt class="me-3">公開状態：</dt>
        <dd>
          <VSwitch :is-checked="true" active="公開" inactive="非公開" />
        </dd>
      </dl>
      <SelectBox class="w-50 mb-3">
        <option selected>再生リストを選択</option>
        <option value="1">再生リスト01</option>
        <option value="2">再生リスト02</option>
        <option value="3">再生リスト03</option>
      </SelectBox>
      <div class="d-flex column-gap-2 w-100">
        <input type="text" class="form-control w-50" id="titlesearch" />
        <button type="button" class="btn btn-primary fw-bold">
          タイトル検索
        </button>
      </div>
    </div>
    <div class="w-50 text-end">
      <button
        type="button"
        class="btn btn-primary btn-lg fw-bold"
        @click="handleModal('video-upload')"
      >
        動画を登録
      </button>
      <VModal v-if="modalId === 'video-upload'">
        <VideoUpload />
      </VModal>
      <button type="button" class="btn btn-danger btn-lg fw-bold ms-3">
        選択項目を一括削除
      </button>
    </div>
  </div>
  <table class="table table-dark table-hover">
    <thead class="table-light">
      <tr>
        <th scope="col" class="col-1 align-middle"></th>
        <th scope="col" class="align-middle">動画タイトル</th>
        <th scope="col" class="col-1 align-middle">更新日</th>
        <th scope="col" class="col-1 align-middle">公開設定</th>
        <th class="col-2 align-middle"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row" class="align-middle">
          <input class="form-check-input" type="checkbox" value="" />
        </td>
        <td class="align-middle">
          <div class="VideoInfo">
            <div class="VideoInfo__thumb">
              <img src="https://placehold.jp/1280x720.png" alt="" />
            </div>
            <div class="VideoInfo__info">
              <p class="VideoInfo__title">動画タイトル</p>
              <p class="VideoInfo__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur facilis nemo aspernatur exercitationem doloremque,
              </p>
              <a href="" class="VideoInfo__url">動画URL</a>
            </div>
          </div>
        </td>
        <td class="align-middle">2024-06-27</td>
        <td class="align-middle">
          <SelectBox>
            <option selected>公開</option>
            <option value="1">非公開</option>
          </SelectBox>
        </td>
        <td class="align-middle">
          <div class="d-flex column-gap-2">
            <button type="button" class="btn btn-primary">編集</button>
            <button type="button" class="btn btn-danger">削除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination />
</template>

<style lang="scss" scoped>
.VideoInfo {
  display: flex;
  column-gap: 2%;
  &__thumb {
    width: 30%;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  &__info {
    width: 70%;
  }
  &__title {
    font-size: 1.5rem;
  }
}
</style>
