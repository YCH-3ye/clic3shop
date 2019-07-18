module.exports = {
  assetsDir: '',
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0]['process.env'].ENV_VAR = `"${process.env.ENV_VAR}"`
      return args
    })
  },
  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        target: 'http://127.0.0.1:11333/', //代理接口
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api' //代理的路径
        }
      }
    }
  }
}
