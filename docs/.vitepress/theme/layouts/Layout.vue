<template>
<DefaultTheme >
  <template #navbar>
    <Menu />
    1111
  </template>
      <ContentHoc>
        <Content /><!-- make sure to include markdown outlet -->
      </ContentHoc>
</DefaultTheme>
</template>
<script>
import { defineComponent } from "vue";
import DefaultTheme from 'vitepress/theme'
import Menu from "../components/Menu/index.vue";
import ContentHoc from "../components/ContentHoc/index.vue";

export default defineComponent({
  components: {
    Menu,
    ContentHoc,
    DefaultTheme: DefaultTheme.Layout
  },
  setup() {},
});
</script>
<style>
div[class*=language-] {
    line-height: 1.4;
    padding: 1.25rem 1.5rem;
    margin: 0.85rem 0;
    background-color: #282c34;
    border-radius: 6px;
    overflow: auto;
}
pre[class*=language-] {
  line-height: 1.4;
    padding: 1.25rem 1.5rem;
    margin: 0.85rem 0;
    background-color: #282c34;
    border-radius: 6px;
    overflow: auto;
}
</style>
