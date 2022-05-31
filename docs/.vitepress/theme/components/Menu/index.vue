<template>
    <PC v-if="isPC"/>
    <Mobile v-else/>
</template>
<script lang="ts">
import { defineComponent,computed } from 'vue';
import PC from './pc.vue'
import Mobile from './mobile.vue'
import { useDeviceWatcher} from '../../lib/hooks/useDeviceWatcher'

export default defineComponent({
    components:{
        PC,
        Mobile
    },
    setup() {
        const deviceType = useDeviceWatcher();
        const isPC = computed(() => {
            return deviceType.value === 'pc'
        })
        return { isPC }
    }
})
</script>
