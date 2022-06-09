<template>
  <Menu />
    <ContentHoc>
      <Content /><!-- make sure to include markdown outlet -->
    </ContentHoc>
</template>
<script>
import { defineComponent } from "vue";
import Menu from "../components/Menu/index.vue";
import ContentHoc from "../components/ContentHoc/index.vue";

export default defineComponent({
  components: {
    Menu,
    ContentHoc,
  },
  setup() {},
});
</script>
