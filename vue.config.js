const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};

const port = 80

module.exports = {
  transpileDependencies: true,
  //publicPath: ('/' + process.env.VUE_APP_ROUTER_BASE + '/'),
  publicPath: ('/jenkinsweb/'),
  outputDir: 'dist',
  assetsDir: 'static',
  // lintOnSave: process.env.NODE_ENV === 'production',
  lintOnSave: true,
  productionSourceMap: false,

  devServer: {
    port: port,
    open: false,
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}