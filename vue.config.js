// 新版脚手架配置文件
/* eslint-disable */
const path = require('path');//引入path模块
function resolve(dir){
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
  chainWebpack:(config)=>{
    config.resolve.alias
        .set('@',resolve('src'))
        .set('components',resolve('src/components'))
        .set('views',resolve('src/views'))
        .set('assets',resolve('src/assets'))
        .set('common',resolve('src/common'))
    //set第一个参数：设置的别名，第二个参数：设置的路径
  },
  devServer: {
    disableHostCheck: true //  新增该配置项
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
