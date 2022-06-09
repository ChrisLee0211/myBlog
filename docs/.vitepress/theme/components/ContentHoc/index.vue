<template>
    <div class="content-layout">
       <slot />
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useDeviceWatcher} from '../../lib/hooks/useDeviceWatcher'

export default defineComponent({
    setup() {
        const deviceType = useDeviceWatcher();
        const isPC = computed(() => {
            return deviceType.value === 'pc'
        })
        const paddingValue = computed(() => isPC.value ? '80px':'0px')
        return { paddingValue }
    },
})
</script>
<style scoped>
.content-layout {
    padding-top: v-bind('paddingValue');
}
</style>
