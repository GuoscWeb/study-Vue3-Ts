// node 模块获取当前文件的绝对路径
const path = require('path')
module.exports = {
  entry: './src/main.js',//入口文件
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  }
}