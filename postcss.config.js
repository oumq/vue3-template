const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
}
