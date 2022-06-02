import {ref, watch, Ref, onMounted, onUnmounted, computed} from 'vue';
import {useDebounceValue} from './useDebounceValue';

/**
 * 获取当前设备类型
 * @returns
 * @author chris lee
 * @Time 2021/03/26
 */
export const useDeviceWatcher = ():Ref<'pc'|'mobile'> => {
    const deviceWidth = useDebounceValue(756,200);

    const deviceType = computed(() => {
      if(deviceWidth.value>=756){
        return 'pc'
      }else{
        return 'mobile'
      }
    })
    const resizeHandler = (e:Event) => {
      deviceWidth.value = (e.currentTarget as Window).innerWidth
    }
    onMounted(() => {
      deviceWidth.value = document.body.offsetWidth;
      window.addEventListener("resize",resizeHandler);
    });
    onUnmounted(() => {
      window.removeEventListener("resize",resizeHandler);
    })

    return deviceType
}