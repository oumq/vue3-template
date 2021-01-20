const path = require('path')
// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

const resolve = dir => {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 9528 // dev port

const glob = require('glob-all')
const PurgecssPlugin = require('purgecss-webpack-plugin')

class Extractor {
  static extract(content) {
    const validSection = content.replace(/<style([\s\S]*?)<\/style>+/gim, '')
    return validSection.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
  }
}

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
        target: 'http://127.0.0.1:7001',
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
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          chunks: 'initial', // only package third parties that are initially dependent
          test: /[\\/]node_modules[\\/]/,
          priority: 10
        }
      }
    })

    config.plugin('purgecss-webpack-plugin').use(
      new PurgecssPlugin({
        paths: glob.sync([resolve('./**/*.vue')]),
        extractors: [
          {
            extractor: new Extractor(),
            extensions: ['html', 'vue']
          }
        ],
        whitelist: ['html', 'body'],
        whitelistPatterns: [
          /ant-.*/,
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!cursor-move).+-move$/,
          /^router-link(|-exact)-active$/
        ],
        whitelistPatternsChildren: [/^token/, /^pre/, /^code/]
      })
    )
  },
  pwa: {
    workboxOptions: {
      importWorkboxFrom: 'local',
      skipWaiting: true,
      clientsClaim: true
    }
  }
}
