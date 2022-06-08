import { computed, ComputedRef } from 'vue';
import  {useRouter, useData } from 'vitepress';

interface MenuItem {
    text:string,
    active:boolean,
    pathName:string,
}

interface Routes {
    name:string;
    path:string;
    meta:{
        [key:string]:any
    }
}

export const useMenu = () => {
    const router = useRouter();
    const siteData = useData();
    const currentRouter = computed(() => {
       return siteData.frontmatter.value?.route
    })
    const routerList = computed(() => {
        return siteData.site.value.themeConfig.nav as Array<Routes>
    })
    const menuList: ComputedRef<MenuItem[]>= computed(() => {
       return (routerList.value??[]).map((routeItem) => {
           return {
            text:routeItem.meta?.title??'',
            pathName: routeItem.path,
            active: currentRouter.value === routeItem.path
           }
       })
    });

    const handleClick = (path:string) => {
        if (path === currentRouter.value) return
        router.go(path)
    };
    return {
        list:menuList,
        clickMenu:handleClick
    }
}

