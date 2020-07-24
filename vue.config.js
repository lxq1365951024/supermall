const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {//配置引用别名
        'assets':'@/assets',
        'components':'@/components',
        'views':'@/views',
        'network':'@/network'
      }
    },
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "./src/assets/css/style.less")]//配置全局less文件
    }
  }
}
