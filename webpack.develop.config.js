var path = require('path');

module.exports = {
    // ѡ��һ������ļ�
    entry: path.resolve(__dirname,'src/js/app.js'),
    // ����ļ���ְ
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    }
};