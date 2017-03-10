/**
 * Created by zlzho on 2017/3/7.
 */
var path = require('path');
var webpack = require('webpack');
// ��ȡcss�ļ��Ĳ��
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// �Զ�����index.htmlҳ����
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // ѡ��һ������ļ�
    // entry: path.resolve(__dirname, 'src/js/app.js'),
    // ������ļ���ɶ���ģʽ
    entry: {
        app: path.resolve(__dirname, 'src/js/app.js'),
        // ������������ã�����var react = require('react)
        vendors: ['react', 'react-dom']
    },
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
                // loader: 'style-loader!css-loader'   //  ��������loader�ļ��ļ����������ͬʱ���������������м���̾�Ÿ�������ִ��˳���Ǵ�������
                loader: ExtractTextPlugin.extract(
                    {
                        fallback: "style-loader",
                        use: "css-loader"
                    }
                )
            },
            // ����sass�ļ�
            {
                test: /\.scss$/,
                // loader: 'style-loader!css-loader!sass-loader'
                // css-loader��sass.logader�ļ���������һ��д�ſ��Գ���SASS�ļ�
                loader: ExtractTextPlugin.extract(
                    {
                        fallback: "style-loader",
                        use: "css-loader!sass-loader"
                    }
                )
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
    },
    resolve: {
        // �Զ���չ�ļ���׺������ζ������requireģ�����ʡ�Բ�д��׺��
        // extensions ��һ���ǿ��ַ������ò���Ҫ��׺�������
        extensions: ['', '.js', '.json', '.scss', '.jsx'],
        // ģ��������壬�������ֱ�����ñ���������д�����ĵ�ַ������ֱ�� require('AppStore')����
        alias: {
            AppStore: 'js/stores/AppStores.js',
            ActionType: 'js/actions/ActionType.js',
            AppAction: 'js/actions/AppAction.js'
        }
    },
    // ������������涨��İ��ǲ��ᱻ�򱬽�bundle.js�ļ��еģ������Ҫ��������ԣ���������index.html������cdn
    /*enternals: {
        // �������������֮�� react �� react-dom ��Щ�������İ������ᱻ������js�У���ô���Ǿ���Ҫͨ��cdn�����ļ�������
        // ǰ���������������Ŀ�����õģ��൱��import React from 'react1'  �е�  react
        'react1': 'react',
        'react-dom1': 'react-dom',
        '$1': 'jQuery'
    },*/
    plugins: [
        // ���������Ӧ�ò��,name���Ի��Զ�ֻ��entry�е�vendros���ԣ�filename�����е��ļ����Զ�������output�е�path��������
        new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'}),
        // ��wenpackѹ�����룬���Ժ��Դ����еľ���
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // �����½����������ʽ���ļ�
        new ExtractTextPlugin('app.css'),
        new webpack.DefinePlugin({
            // ȥ��react�еľ��棬react���Լ��ж�
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            htmlWebpackPlugin: {
                'files': {
                    'css': ['app.css'],
                    'js': ['bundle.js', 'vendors.js']
                }
            },
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ]
};