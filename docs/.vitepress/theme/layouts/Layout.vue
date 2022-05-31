<template>
  <Menu />
  <h1>Custom Layout!</h1>
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
