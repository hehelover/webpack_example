// react中的事件支持和使用
import React, {Component} from 'react';

// 直接在js中定义样式，内嵌样式
let style = {
    backgroundColor: 'blue'
}

export default class ClickEvent extends Component {
    // 设置默认属性和默认状态
    constructor(props) {
        super(props);
        // 初始化state
        this.state = {liked: false};
    }

    // 单击事件处理方法
    handleClick(pm1,pm2,pm3,e) {
        console.log(pm1);
        console.log(pm2);
        console.log(pm3);
        console.log(e);
        this.setState({ liked: !this.state.liked });
    }

    // 用箭头函数去定义自己的方法
    handleMouseOver=(str)=>{
        console.log(str);
    }

    // 1、Es5写法里面参数传递的顺序和接收的参数的顺序是不一样
    // 2、在箭头函数中如果要传递参数，那上来就会执行一次，你可以把你的传递参数的方法再用箭头函数包裹一层
    render() {
        const text = this.state.liked ? 'like' : 'haven\'t liked';
        // return；里面是要渲染的html页面
        return (
            <p onMouseOver={()=>this.handleMouseOver("牛牛")} onClick={this.handleClick.bind(this,23,"dfdf",function(){})}>
                You {text} this. Click to toggle.
            </p>
        );
    }
}
