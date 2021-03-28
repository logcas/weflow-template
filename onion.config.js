const path = require('path');

module.exports = {
  // 路径别名
  alias: {
    '@': path.resolve(__dirname, 'src')
  },
  // 静态资源 PublicPath
  assetsPublicPath: '/',
  // SourceMap Public Path
  sourceMapPublicPath: '/',
  // 自定义的 webpack 配置，会通过 webpack-merge 合并
  webpackConfig: {},
  // 移动端开发
  mobile: true,
  // px2rem 插件配置，当 mobile 为 true 时启用
  pxtoremConfig: {}
};
