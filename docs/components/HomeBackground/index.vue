<template>
<div class="bg-wrapper">
        <div
            v-for="(item , idx) in artListRenderConfig"
            :class="`bg-wrapper-item bg_img_${idx+1}`"
            :key="idx"
            :style="item.style"
        ></div>
    </div>
    
</template>
<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';

const artEleList = [
            {
                scrollSpeed:20,
                yOffset:0,
                yPosition:-50,
            },
            {
                scrollSpeed:30,
                yOffset:0,
                yPosition:-150,
            },
            {
                scrollSpeed:40,
                yOffset:0,
                yPosition:-200,
            },
            {
                scrollSpeed:45,
                yOffset:0,
                yPosition:-100,
            },
            {
                scrollSpeed:60,
                yOffset:0,
                yPosition:200,
            },
            {
                scrollSpeed:70,
                yOffset:0,
                yPosition:50,
            },
            {
                scrollSpeed:80,
                yOffset:0,
                yPosition:0,
            },
        ]



export default defineComponent({
    name: 'HomeBackground',
    setup() {
        const artList = ref(artEleList);
        const artListRenderConfig = computed(() => {
            return artList.value.map((item, idx) => {
                const transformStyle = `transform: translate3d(0px, ${item.yOffset}px, 0px)`;
                return {
                    style: `
                    ${transformStyle};${item.yPosition? 
                    `background-position-y:${item.yPosition}px`: ''}
                    `
                }
            })
        });

        onMounted(() => {
            window.addEventListener("scroll", (event) => {
                const top = window.pageYOffset;
                const nums = artList.value.length;
                for(let i=0;i < nums; i++) {
                    const ele = artList.value[i];
                    ele.yOffset = -(top * ele.scrollSpeed / 100)
                }
            })
        })
        return {
            artListRenderConfig,
        }
    },
})
</script>
<style lang="less">
.bg-size {
    height: 750px;
}
.bg-wrapper {
    .bg-size;
    position: relative;
    background: #b7cce0;
    z-index: 10;
    &-item {
        position: fixed;
        background-position: bottom center;
        background-size: auto;
        background-repeat: repeat-x;
        width: 100%;
        .bg-size
    }
}

.bg_img_1 {
    background-image: url(../../assets/home_bg_1.png);
}
.bg_img_2 {
    background-image: url(../../assets/home_bg_2.png);
}
.bg_img_3 {
    background-image: url(../../assets/home_bg_3.png);
}
.bg_img_4 {
    background-image: url(../../assets/home_bg_4.png);
}
.bg_img_5 {
    background-image: url(../../assets/home_bg_5.png);
}
.bg_img_6 {
    background-image: url(../../assets/home_bg_6.png);
}
.bg_img_7 {
    background-image: url(../../assets/home_bg_7.png);
}
</style>
