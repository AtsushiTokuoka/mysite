<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/master/_store/index";
import { ModalId } from "@/master/_types/index";
import { useResource } from "@/master/_functions/useResource";

import VModal from "@/master/_components/VModal.vue";
import UserAdd from "@/master/pages/UserAdd.vue";
import Pagination from "@/master/_components/Pagination.vue";

const store = useStore();
const { resources } = useResource();

const modalId = computed(() => store.state.modalId);
const handleModal = (id: ModalId) => {
  store.commit("updateModalId", id);
};
</script>

<template>
  <div class="d-flex justify-content-between align-items-end mb-3">
    <div class="d-flex column-gap-2 w-50">
      <input type="text" class="form-control w-50" id="usersearch" />
      <button type="button" class="btn btn-primary fw-bold">
        ユーザー名検索
      </button>
    </div>
    <div>
      <button
        type="button"
        @click="handleModal('user-add')"
        class="btn btn-primary btn-lg fw-bold"
      >
        ユーザー登録
      </button>
      <VModal v-if="modalId === 'user-add'">
        <UserAdd />
      </VModal>
      <button type="button" class="btn btn-danger btn-lg fw-bold ms-3">
        選択項目を一括削除
      </button>
    </div>
  </div>
  <p v-if="resources.users.length === 0">ユーザー情報はありません</p>
  <table v-else class="table table-dark table-hover">
    <thead class="table-light">
      <tr>
        <th scope="col" class="col-1"></th>
        <th scope="col">ユーザー名</th>
        <th scope="col" class="col-2"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in resources.users" :key="user.id">
        <td scope="row" class="align-middle">
          <input class="form-check-input" type="checkbox" value="" />
        </td>
        <td class="align-middle">{{ user.displayName }}</td>
        <td class="align-middle">
          <div class="d-flex column-gap-2">
            <button type="button" class="btn btn-primary w-50">編集</button>
            <button type="button" class="btn btn-danger w-50">削除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination v-if="resources.users.length !== 0" />
</template>

<style lang="scss" scoped></style>
