

module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    postcss: {
        plugins: [
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer')
        ]
    },
    themeConfig: {
        nav: [
            { path: '/home', name: 'home', meta: { title: '首页' } },
            { path: '/gallery', name: 'gallery', meta: { title: '画廊' } },
            { path: '/blog', name: 'blog', meta: { title: 'lee`s blog' } },
            { path: '/utils', name: 'utils', meta: { title: '工具' } },
        ]
    }
}