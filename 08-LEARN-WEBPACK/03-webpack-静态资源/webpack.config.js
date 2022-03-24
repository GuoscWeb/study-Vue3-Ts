// node 模块获取当前文件的绝对路径
const path = require('path')
module.exports = {
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
            maxSize: 100 * 1024
          }
        }
      }
    ]
  }
}