<template>
  <div class="home-body">content</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeContent",
  setup() {

  },
});
</script>
<style lang="less" scoped>
.home-body {
    position: relative;
    height: 3000px;
    background: var(--vt-c-bg, #18252c);
    z-index: 19;
}
</style>
