/**
 * Created by zlzho on 2017/3/7.
 */
var path = require('path');

module.exports = {
    // 选择一个入口文件
    entry: path.resolve(__dirname, 'src/js/app.js'),
    //entry: [
    //    'webpack/hot/dev-server',
    //    'webpack-dev-server/client?http://localhost:8080',
    //    path.resolve(__dirname, 'src/js/app.js')
    //],
    // 输出文件位置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        // 配置加载器，加载器是在webpack真正编译之前先执行一些预处理操作
        loaders: [
            // 处理jsx和es6语法的
            {
                test: /\.jsx?$/,   // 用正则来匹配文件路径这段意思是匹配js或者jsx
                loader: 'babel-loader',   // 加载模块“babel”是“babel-loader”的缩写
                query: {
                    presets: ['es2015', 'react']
                }
            },
            // 处理js中引用的css
            {
                test: /\.css$/,   // 只匹配.css文件
                loader: 'style-loader!css-loader'   //  加载两个loader文件的加载器（如果同时用两个加载器，中间用叹号隔开，且执行顺序是从右往左）
            },
            // 处理sass文件
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            // 处理图片加载器
            {
                test: /\.(png|jpg)$/,
                // 如果图片的大小小于limit的限制大小，那webpack就会把图片化为base64的字符串添加在js文件中，否则就是图片路径
                // 单位是bit   1b = 8bit 1kb = 1024b ~3kb
                // 用base64字符串就是为了减少网络请求，但是图片是有大小限制的，一般是小于3kb的才处理为base64
                // jpg和base64的字符串本质都是010101的机器码，所以可以相互转换
                // name属性可以控制大于3kb的图片的输出位置
                loader: 'url-loader?limit=25000&name=img/[name].[ext]'  //如果在加载器后面加参数就用？
            }
        ]
    }
};