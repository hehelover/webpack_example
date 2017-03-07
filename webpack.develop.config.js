var path = require('path');

module.exports = {
    // 选择一个入口文件
    entry: path.resolve(__dirname,'src/js/app.js'),
    // 输出文件文职
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    }
};