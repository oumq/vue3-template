const path = require('path')
// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

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
        target: 'https://oumq.online',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/variables.scss";`
      },
      less: {
        lessOptions: {
          modifyVars: {
            // 'primary-color': '#1DA57A',
            // 'link-color': '#1DA57A',
            // 'border-radius-base': '2px'
          },
          javascriptEnabled: true
        }
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
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    // gzip
    config.when(process.env.NODE_ENV === 'production', config => {
      config.plugin('compressionWebpackPlugin').use(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'), // 匹配文件名
          threshold: 1024, // 对1K以上的数据进行压缩
          minRatio: 0.8,
          deleteOriginalAssets: false // 是否删除源文件
        })
      )
    })

    config.optimization.splitChunks({
      cacheGroups: {
        common: {
          name: 'chunk-common',
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 1,
          reuseExistingChunk: true,
          enforce: true
        },
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 2,
          reuseExistingChunk: true,
          enforce: true
        },
        antd: {
          name: 'chunk-antd',
          test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
          chunks: 'all',
          priority: 3,
          reuseExistingChunk: true,
          enforce: true
        },
        echarts: {
          name: 'chunk-echarts',
          test: /[\\/]node_modules[\\/](vue-)?echarts[\\/]/,
          chunks: 'all',
          priority: 4,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    })
  },
  pwa: {
    workboxOptions: {
      importWorkboxFrom: 'local',
      skipWaiting: true,
      clientsClaim: true
    }
  }
}
