
module.exports = {
  lintOnSave: false,
  publicPath: '/',
  outputDir: 'dist',
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8001,
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
  }
};
