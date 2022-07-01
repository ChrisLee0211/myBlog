<template>
  <div class="home-body">content</div>
</template>
<script lang="ts">
import { defineComponent, ref, onBeforeMount, onUnmounted, computed } from "vue";

const options = {
  attributes: true, //观察node对象的属性
  attributeFilter: ["class"], //只观察class属性
};

export default defineComponent({
  name: "HomeContent",
  setup() {
    const isDark = ref(false);
    const mObserver = ref<MutationObserver | null>(null);

    const bgColor = computed(() => {
        return isDark.value ? '#242424' : '#f9f9f9'
    })

    onBeforeMount(() => {
      const htmlEles = document.getElementsByTagName("html");
      let root: HTMLHtmlElement | null = null;
      if (htmlEles.length) {
        root = htmlEles[0];
        isDark.value = root.className.includes('dark')
      }
      mObserver.value = new MutationObserver(function (records, observer) {
        if(records.length) {
            const ele = records[0].target as HTMLHtmlElement;
            isDark.value = ele.className.includes('dark')
        }
      });
      if (root && mObserver.value) {
          mObserver.value.observe(root, options);
        }
    });

    onUnmounted(() => {
        if(mObserver.value) {
            mObserver.value.disconnect()
        }
    })
    return {
      bgColor,
    };
  },
});
</script>
<style lang="less">
.home-body {
  position: relative;
  height: 3000px;
  background: v-bind(bgColor) ;
  z-index: 19;
}
</style>
