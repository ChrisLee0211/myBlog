<template>
  <div
    id="float-menu-button"
    ref="buttonRef"
    class="
      fixed
      right-0
      bottom-0
      rounded-full
      w-12
      h-12
      flex
      justify-center
      items-center
      shadow-xl
      bg-gray-200
      transform
      transition-transform
      z-10
    "
    :style="menuButtonStyle"
    @click="toggleSideBar(true)"
  >
    <Icon :name="'caidan'" />
  </div>
  <div
    class="
      fixed
      h-full
      pl-1
      bg-black
      transition-all
      transform-gpu
      flex flex-col
    "
    :style="sideBarStyle"
  >
    <div
      v-for="item in list"
      :key="item.text"
      @click="handleClikeSideBarItem(item.pathName)"
      :class="`flex font-mono justify-center items-center p-4 transform transition-transform hover:bg-white hover:text-black hover:scale-110 hover:shadow-xl cursor-pointer ${
        item.active ? activeClass : normalClass
      }`"
    >
      {{ item.text }}
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  watch,
  onMounted,
  onUnmounted,
} from "vue";
import { useMenu } from "./hook";
import Icon from "../Icon/index.vue";
import { useDebounceValue, useScrollTop } from "../../lib/hooks";

export default defineComponent({
  components: {
    Icon,
  },
  setup() {
    const scrollTop = useScrollTop();
    const prevScrollTop = ref(0);
    const { list, clickMenu } = useMenu();
    /** 按钮相关逻辑start */
    const buttonRef = ref<HTMLDivElement>();
    const timer = ref(null);
    const menuButtonVisible = useDebounceValue(true, 300);
    const menuButtonStyle = computed(() => {
      if (menuButtonVisible.value) return `transform: translate(-50%, -400%);`;
      return `transform: translate(100%, -400%);`;
    });
    /** 按钮相关逻辑end */
    /** 侧边栏相关逻辑 start */
    const sideBarVisible = useDebounceValue(false, 300);
    const sideBarStyle = computed(() => {
      if (sideBarVisible.value) return "right:0";
      return "right:-50%";
    });
    const toggleSideBar = (toState: boolean) => {
      sideBarVisible.value = toState;
      menuButtonVisible.value = !toState;
    };
    const handleClikeSideBarItem = (val: string) => {
      clickMenu(val);
      toggleSideBar(false);
    };
    /** 侧边栏相关逻辑 end */
    const activeClass = `text-white shadow-2xl border-l-4 border-white`;
    const normalClass = `text-base text-white`;
    watch(scrollTop, () => {
      if (scrollTop.value === 0) {
        menuButtonVisible.value = true;
        prevScrollTop.value = 0;
        return;
      }
      if (prevScrollTop.value < scrollTop.value) {
        menuButtonVisible.value = false;
      }
      if (prevScrollTop.value > scrollTop.value) {
        menuButtonVisible.value = true;
        if (timer.value) {
          clearTimeout(timer.value);
        }
        timer.value = setTimeout(() => {
          menuButtonVisible.value = false;
        }, 1500);
      }
      prevScrollTop.value = scrollTop.value;
    });
    const clickEvent = (event: MouseEvent) => {
      if (buttonRef.value && buttonRef.value.contains(event?.target as Node)) {
        return;
      } else {
        toggleSideBar(false);
      }
    };
    onMounted(() => {
      document.addEventListener("click", clickEvent);
    });
    onUnmounted(() => {
      document.removeEventListener("click", clickEvent);
    });
    return {
      list,
      buttonRef,
      menuButtonStyle,
      sideBarStyle,
      activeClass,
      normalClass,
      toggleSideBar,
      handleClikeSideBarItem,
    };
  },
});
</script>

