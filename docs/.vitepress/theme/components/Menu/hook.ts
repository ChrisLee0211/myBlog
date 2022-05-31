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
    const currentRouter = router.route.path;
    const siteData = useData();
    const routerList = computed(() => {
        return siteData.site.value.themeConfig.nav as Array<Routes>
    })
    const menuList: ComputedRef<MenuItem[]>= computed(() => {
       return (routerList.value??[]).map((routeItem) => {
           return {
            text:routeItem.meta?.title??'',
            pathName: routeItem.name,
            active: currentRouter === routeItem.name
           }
       })
    });

    const handleClick = (routeName:string) => {
        if (routeName === currentRouter) return
        router.go(routeName)
    };
    return {
        list:menuList,
        clickMenu:handleClick
    }
}

