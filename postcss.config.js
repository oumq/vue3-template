// const purgecss = require('@fullhuman/postcss-purgecss')({
//   content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
//   whitelist: ['html', 'body'],
//   whitelistPatterns: [/ant-.+$/],
//   whitelistPatternsChildren: [/ant-.+$/]
// })

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')
    // ...[purgecss]
  ]
}
