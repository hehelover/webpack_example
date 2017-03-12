/**
 * Created by zlzho on 2017/3/8.
 */

// 在js中引入css文件
import './Hello.css';
// 在js中引入sass文件
import './Hello.scss';

import React,{Component} from 'react';

// 直接在js中定义样式，内嵌样式
let style = {
    backgroundColor: 'blue'
}

export default class Hello extends Component {
    constructor(props) {
        super(props);
        console.log("构造函数");
        // 初始化了我们的state，这是被推荐的写法
        this.state = {
            props1: "111"
        };
    }

    componentDidMount(){
        var that =this;
        setTimeout(function(){
            // 只能用setState的方法修改状态值
            that.setState({props1:"二二二"})
        },2000);

    }

    render() {
        // 约定大于配置，如果直接赋值就破坏了react中的单项数据流
        // this.state.props1 = '我修改了数据';   （这样不行）
        return (
            <div>
                <h1 style={style}>{this.state.props1}</h1>
                <br/>
                <img/>
            </div>
        )
    }
}