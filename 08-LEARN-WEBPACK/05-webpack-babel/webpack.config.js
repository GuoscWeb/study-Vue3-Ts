// node 模块获取当前文件的绝对路径
const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",//mode设置打包为开发模式和生成模式
  devtool: "source-map",//devtool建立js映射文件，代码报错可在浏览器console定位
  entry: './src/main.js',//入口文件
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  //webpack中的一个一个模块
  module: {
    rules: [
      {
        test: /\.css$/,//以css结尾的文件
        // loader: 'css-loader',//1.loader配置的语法糖
        //2.loader配置的完整写法,use当中的loader执行顺序是从下往上，所以style-loader要放在前面
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
          // 可将postcss的配置抽到postcss.config.js文件中
          // {
          //   loader:'postcss-loader',
          //   options:{
          //     postcssOptions:{
          //       plugins:[
          //         require()
          //       ]
          //     }
          //   }
          // }
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            // 设置小于100kb的图片使用base64转码
            maxSize: 10 * 1024
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          // 这些转es5的插件一般在preset属性中包含,一般抽取到babel配置文件
          // options: {
          //   // plugins: [
          //   //   "@babel/plugin-transform-arrow-functions",
          //   //   "@babel/plugin-transform-block-scoping"
          //   // ]
          //   // preset: [
          //   //   "@babel/preset-env"
          //   // ]
          // }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // template:''
    })
  ]
}