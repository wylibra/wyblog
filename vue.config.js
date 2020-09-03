module.exports = {
  // 部署应用包时的基本路径
  publicPath: "./",
  // 构建时的输出文件目录
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: "static",
  // 是否在保存的时候使用 `eslint-loader` 进行检查。 有效的值：`ture` | `false` | `"error"`
  lintOnSave: false,
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: true,
  // 生产环境的 source map
  productionSourceMap: false,

  // Webpack相关配置
  configureWebpack: config => {
  },
  chainWebpack: config => {
  },

  // Css相关配置
  css: {
    // 将组件中的 CSS 提取至一个独立的 CSS 文件中
    extract: false,
    // 为 CSS 开启 source map
    sourceMap: false,
    loaderOptions: {
      // less: {
      //   javascriptEnabled: true
      // },
      // css: {
      //   // 这里的选项会传递给 css-loader
      // },
      // postcss: {
      // 这里的选项会传递给 postcss-loader
      // plugins: [
      //   require('postcss-pxtorem')({
      //     rootValue: 32,
      //     selectorBlackList: ['van-'], // 忽略转换正则匹配项
      //     propList: ['*']
      //   }),
      //   require('postcss-px-to-viewport')({
      //     viewportWidth: 750, //根据视觉稿的宽度进行设置
      //     unitPrecision: 5,
      //     viewportUnit: 'vw',
      //     selectorBlackList: ['van-'], //忽略转换的css选择器
      //     minPixelValue: 1,
      //     mediaQuery: false
      //   })
      // ]
      // }
    }
  },
  devServer: {
    // 自动打开浏览器
    open: true,
    host: '0.0.0.0',
    port: 8080,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://xxxx/device/', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }


  // pages: {
  //   index: {
  //     // 页面入口文件
  //     entry: 'example/main.js',
  //     // 模版文件
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出文件
  //     filename: 'index.html',
  //     title: 'SDK模版'
  //   }
  // }
}