import {ref, onMounted, onUnmounted, Ref} from 'vue';

export const useScrollTop = (target?:Ref<HTMLElement>) => {
    const scrollTop = ref(0);
    const scrollListener = (e:Event) => {
        let scrollTopVal = (e.target as Document).documentElement.scrollTop
        if (target) {
            scrollTopVal = (e.target as HTMLElement).scrollTop;
        };
        scrollTop.value = scrollTopVal;
    }
    onMounted(() => {
        const eventTarget = target?.value || window
        try{
            eventTarget.addEventListener('scroll',scrollListener)
        }catch(e){
            console.error(e)
        }
    })
    onUnmounted(() => {
        const eventTarget = target?.value || window
        try{
            eventTarget.removeEventListener('scroll',scrollListener)
        }catch(e){
            console.error(e)
        }
    })



    return scrollTop
}