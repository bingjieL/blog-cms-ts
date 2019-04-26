
// module.exports = {
//   lintOnSave: false,
//   publicPath: '/',
//   outputDir: 'dist',
//   devServer: {
//     open: false,
//     host: '0.0.0.0',
//     port: 8001,
//     proxy: {
//       '/api': {
//           target: 'http://api.8bjl.cn',
//           changeOrigin: true,
//           ws: true,
//           pathRewrite: {
//             '^/api': '/api'
//           }
//       }
//     }
//   }
// };
const path = require('path');
const isPrd = process.env.NODE_ENV === 'production';
// gzip 插件
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 是否启用gzip
const productionGzip = false;
// 需要开启gzip的文件后缀
const productionGzipExtensions = ['js', 'css']
let resolve = (dir) => path.join(__dirname, dir);

const webpackHtmlOptions = {
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios',
    'element-ui': 'ELEMENT',
    'nprogress': 'NProgress',
    'moment': 'moment'
  },
  cdn: {
    dev: {
      css: [
        'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
        'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css'
      ],
      js: []
    },
    build: {
      css: [
        'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
        'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css'
      ],
      js: [
        'https://cdn.bootcss.com/vue/2.5.21/vue.min.js',
        'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
        'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
        'https://cdn.bootcss.com/axios/0.18.0/axios.min.js',
        'https://unpkg.com/element-ui/lib/index.js',
        'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.23.0/moment.min.js'
      ]
    }
  }
}

module.exports = {
  lintOnSave: false,
  publicPath: '/',
  outputDir: 'dist',
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
          target: 'http://api.8bjl.cn',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': '/api'
          }
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      if(isPrd) {
        args[0].cdn = webpackHtmlOptions.cdn.build;
      }else {
        args[0].cdn = webpackHtmlOptions.cdn.dev;
      }
      return args
    })
  },
  configureWebpack: config => {
    const _config = {}
    if (isPrd) {
      // 1. 生产环境npm包转CDN
      _config.externals = webpackHtmlOptions.externals
      _config.plugins = []
      // 2. 构建时开启gzip,降低服务器压缩对CPU资源的占用,服务器也要相应开启gzip
      productionGzip && _config.plugins.push(
        new CompressionWebpackPlugin({
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 8192,
          minRatio: 0.8
        })
      )
    }
    if (!isPrd) {
      //关闭host check,方便使用ngrok之类的内网转发工具
      _config.devServer = {
        disableHostCheck: true
      }
    }
    return _config
  }
};
