<template>
    <div 
    class="fixed right-0 bottom-0 rounded-full w-12 h-12 flex justify-center items-center shadow-xl bg-gray-200 transform transition-transform z-10"
    :style="customStyle"
    >
        <Icon :name="'caidan'" />
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useMenu } from './hook';
import Icon from '../Icon/index.vue';
import { useDebounceValue, useScrollTop } from '../../lib/hooks';


export default defineComponent({
    components:{
        Icon
    },
    setup() {
        const scrollTop = useScrollTop();
        const prevScrollTop = ref(0);
        const timer = ref(null)
        const { list, clickMenu } = useMenu();
        const menuButtonVisible = useDebounceValue(true,300);
        const customStyle = computed(() => {
            if(menuButtonVisible.value) return `transform: translate(-50%, -400%);`
            return `transform: translate(100%, -400%);`
        });
        watch(scrollTop, () => {
            if(scrollTop.value === 0) {
                menuButtonVisible.value = true;
                prevScrollTop.value = 0;
                return
            }
            if(prevScrollTop.value < scrollTop.value) {
                menuButtonVisible.value = false;
            }
            if (prevScrollTop.value > scrollTop.value) {
                menuButtonVisible.value = true;
                if(timer.value) {
                    clearTimeout(timer.value)
                }
                timer.value = setTimeout(() => {
                        menuButtonVisible.value = false;
                },1500)
            }
            prevScrollTop.value = scrollTop.value
        })
        return {
            list,customStyle
        }
    },
})
</script>

