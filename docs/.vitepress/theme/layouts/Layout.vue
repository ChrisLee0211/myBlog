<template>
  <Menu />
    <Content /><!-- make sure to include markdown outlet -->
</template>
<script>
import { defineComponent } from "vue";
import Menu from "../components/Menu/index.vue";

export default defineComponent({
  components: {
    Menu,
  },
  setup() {},
});
</script>
