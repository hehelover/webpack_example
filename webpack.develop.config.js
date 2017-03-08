/**
 * Created by zlzho on 2017/3/7.
 */
var path = require('path');

module.exports = {
    // ѡ��һ������ļ�
    entry: path.resolve(__dirname, 'src/js/app.js'),
    //entry: [
    //    'webpack/hot/dev-server',
    //    'webpack-dev-server/client?http://localhost:8080',
    //    path.resolve(__dirname, 'src/js/app.js')
    //],
    // ����ļ�λ��
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        // ���ü�����������������webpack��������֮ǰ��ִ��һЩԤ�������
        loaders: [
            // ����jsx��es6�﷨��
            {
                test: /\.jsx?$/,   // ��������ƥ���ļ�·�������˼��ƥ��js����jsx
                loader: 'babel-loader',   // ����ģ�顰babel���ǡ�babel-loader������д
                query: {
                    presets: ['es2015', 'react']
                }
            },
            // ����js�����õ�css
            {
                test: /\.css$/,   // ֻƥ��.css�ļ�
                loader: 'style-loader!css-loader'   //  ��������loader�ļ��ļ����������ͬʱ���������������м���̾�Ÿ�������ִ��˳���Ǵ�������
            },
            // ����sass�ļ�
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            // ����ͼƬ������
            {
                test: /\.(png|jpg)$/,
                // ���ͼƬ�Ĵ�СС��limit�����ƴ�С����webpack�ͻ��ͼƬ��Ϊbase64���ַ��������js�ļ��У��������ͼƬ·��
                // ��λ��bit   1b = 8bit 1kb = 1024b ~3kb
                // ��base64�ַ�������Ϊ�˼����������󣬵���ͼƬ���д�С���Ƶģ�һ����С��3kb�ĲŴ���Ϊbase64
                // jpg��base64���ַ������ʶ���010101�Ļ����룬���Կ����໥ת��
                // name���Կ��Կ��ƴ���3kb��ͼƬ�����λ��
                loader: 'url-loader?limit=25000&name=img/[name].[ext]'  //����ڼ���������Ӳ������ã�
            }
        ]
    }
};