<template>
  <p @click="onClick"><span>{{ message }}</span></p>
</template>

<docs>
  Testコンポーネントです。
  ```vue
    <Test />
  ````
  template:
  ```html
    <template>
      <p @click="onClick"><span>{{ message }}</span></p>
    </template>
  ```
</docs>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    data() {
      return {
        message: 'Test.vue',
      }
    },
    props: {
      /** 
       * colorのpropsです
       * @values red,green,blue
       * 
      */
      color: String,
    },
    methods: {
      onClick() {
        console.log('hoge');
      }
    }
  })
</script>

<style lang="scss" scoped>
  @use '../_style/_variables.scss' as *;
  @use '../_style/_mixins.scss' as *;
  p {
    color: $colorMain;
    background-color: $colorBaseDark;
    display: inline-block;
    border-radius: 10px;
  }
</style>