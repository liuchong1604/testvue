// 新版脚手架配置文件
module.exports = {
  configureWebpack: { //定义别名，方便引用
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  },
  devServer: {
    disableHostCheck: true, //  新增该配置项
    // proxy: { // 使用代理,其实是请求的时候把请求的地址转换成服务器所在IP地址，
    // 这样端口一直就不会产生跨域了
    // 大部分情况使用后端cors解决跨域
    //   '/api': {
    //       target: "http://api.test.com/",
    //       changOrigin: true,  //允许跨域
    //       pathRewrite:{}
    //   }
    // }
  }
};
