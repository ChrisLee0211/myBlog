import { defineConfigWithTheme } from 'vitepress';
import { navList } from './custom';

export default defineConfigWithTheme({
    lang: 'zh-CN',
    title: 'Hello, This is Chris lee',
    description: 'my own blog',
    lastUpdated: true,
    head: [['script', { src: '//at.alicdn.com/t/font_1915064_sl7g7e9vxz.js' }]],
    base: '/myBlog/',
    themeConfig: {
        home:'/myBlog/',
        nav: navList(),
        locale: {
            home:'/myBlog/'
        }
    },
    
})