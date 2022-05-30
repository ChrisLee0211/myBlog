module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    postcss: {
        plugins: [
          require('tailwindcss')('./tailwind.config.js'),
          require('autoprefixer')
        ]
      }
  }