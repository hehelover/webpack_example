/**
 * Created by zlzho on 2017/3/7.
 */
var path = require('path');

module.exports = {
    // ѡ��һ������ļ�
    entry:path.resolve(__dirname,'src/js/app.js'),
    // ����ļ�λ��
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
    },
};