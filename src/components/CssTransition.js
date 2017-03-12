import React,{Component} from 'react';
import './CssTransition.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// 1.下载并引入react-addons-css-transition-group插件
// 2.加动画的部分用ReactCSSTransitionGroup组件包裹
// 3.设置组件上的属性，但必须有transitionName属性
// 4.编写css样式
// 5.在使用时会自动给transitionName属性里面的样式名称加上-enter和-enter-active，就会执行相应的动画效果
// 6.说明：
// （1）当增加一项时，会自动在增加的那一项上增加两个类： {name}-enter 和 {name}-enter-active。CSS动画执行结束之后这两个类会被删掉。其中 {name}-enter 会在 {name}-enter-active 的前一帧被加上。因此 {name}-enter 用来定义动画的初始状态，{name}-enter-active 用来定义动画的结束状态。
// （2）当减少一项时，会自动在删除之前增加一个 {name}-leave 和 {name}-leave-active 类，这俩着的区别和前面的是一样的。

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: ['hello', 'world', 'click', 'me']};
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        const newItems = this.state.items.concat([
            prompt('Enter some text')
        ]);
        this.setState({items: newItems});
    }

    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }

    render() {
        const items = this.state.items.map((item, i) => (
            <div key={item} onClick={() => this.handleRemove(i)}>
                {item}
            </div>
        ));

        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup
                    component="ul"
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default TodoList;