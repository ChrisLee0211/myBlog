

module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    head: [['script', { src:'//at.alicdn.com/t/font_1915064_sl7g7e9vxz.js'}]],
    postcss: {
        plugins: [
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer')
        ]
    },
    themeConfig: {
        nav: [
            { path: '/', name: 'home', meta: { title: '首页' } },
            { path: '/gallery', name: 'gallery', meta: { title: '画廊' } },
            { path: '/blog', name: 'blog', meta: { title: 'lee`s blog' } },
            { path: '/note', name: 'note', meta: { title: '笔记' } },
        ]
    }
}