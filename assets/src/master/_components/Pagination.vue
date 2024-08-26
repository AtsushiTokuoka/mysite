<script setup lang="ts"></script>

<template>
  <nav class="Pagination" aria-label="Page navigation">
    <ul class="Pagination__items">
      <li class="Pagination__item">
        <button class="Pagination__step">&lt;&lt;</button>
      </li>
      <li class="Pagination__item">
        <button class="Pagination__step">&lt;</button>
      </li>
      <li class="Pagination__item">
        <div class="Pagination__state">1 / 4</div>
      </li>
      <li class="Pagination__item">
        <button class="Pagination__step">&gt;</button>
      </li>
      <li class="Pagination__item">
        <button class="Pagination__step">&gt;&gt;</button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.Pagination {
  display: flex;
  justify-content: center;
  font-size: 20px;
  &__items {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  &__item {
    padding: 0 10px;
  }
  &__step {
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    outline: inherit;
  }
}
</style>
