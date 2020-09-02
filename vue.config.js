const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 9528 // dev port

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://oumq.online',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/variables.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    devtool: 'source-map'
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  }
}
