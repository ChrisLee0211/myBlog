import {defineConfig} from 'vitepress';
import { navList } from './custom';

export default defineConfig({
    lang: 'zh-CN',
  title: 'chrielee',
  description: 'my own blog',
  lastUpdated: true,
  head: [['script', { src:'//at.alicdn.com/t/font_1915064_sl7g7e9vxz.js'}]],
  base:'/myBlog/',
    themeConfig: {
        nav: navList()
    }
})