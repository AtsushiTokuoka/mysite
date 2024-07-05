<template>
  <table class="table table-dark table-hover">
    <thead class="table-light">
      <tr>
        <th scope="col" class="col-1 align-middle">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="checkAll"
            />
            <label class="form-check-label" for="checkAll"> 全て選択 </label>
          </div>
        </th>
        <th scope="col" class="align-middle">
          <div class="d-flex column-gap-2">
            <input type="text" class="w-75 form-control" id="titlesearch" />
            <button type="button" class="btn btn-primary fw-bold">
              タイトル検索
            </button>
          </div>
        </th>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SelectBox from "@/master/_components/SelectBox.vue";
export default defineComponent({
  name: "VTable",
  components: {
    SelectBox,
  },
});
</script>

<style lang="scss">
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
