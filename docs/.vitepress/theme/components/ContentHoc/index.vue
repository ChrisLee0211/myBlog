<template>
    <div :class="renderClass">
       <slot />
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useDeviceWatcher} from '../../lib/hooks/useDeviceWatcher'
import { useData } from 'vitepress';

export default defineComponent({
    setup() {
        const deviceType = useDeviceWatcher();
        const isPC = computed(() => {
            return deviceType.value === 'pc'
        })
        const paddingValue = computed(() => isPC.value ? '80px':'0px')
        const siteData = useData();
        const isFullScreen = computed(() => Boolean(siteData.frontmatter.value?.fullScreen));
        const renderClass = computed(() => {
            return `content-layout ${isFullScreen.value? '' :'w-9/12 mx-auto my-0'}`
        })
        return { paddingValue, renderClass }
    },
})
</script>
<style scoped>
.content-layout {
    padding-top: v-bind('paddingValue');
}
</style>
