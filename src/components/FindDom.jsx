//react中操作dom元素
import React, { Component } from 'react';

export default class FindDom extends Component {

    // 初始化state
    state={
        userInput: ''
    }

    constructor(props) {
        super(props);
        //this.state={ userInput: '' };
    }

    componentWillMount(){
        console.log(this.refs.theInput);
    }

    componentDidMount(){
        // 这个this。refs获取dom节点的方法必须要在虚拟dom渲染到真实dom节点之后才可以使用
        console.log(this.refs.theInput);
    }


    handleChange(e) {
        // 通过this.refs属性可以在任何时候获取真实的dom节点
        console.log(this.refs.theInput.value);
        // 用e.target也能获取到真实的dom节点，不过需要配合事件来用，否则就没有事件参数e
        this.setState({ userInput: e.target.value });
    }

    clearAndFocusInput() {
        // 第一个参数是你要从新赋值的state，第二个参数一个回调函数
        this.setState({ userInput: '' }, () => {
            this.refs.theInput.focus();
        });
    }

    render() {
        return (
            <div>
                <div onClick={this.clearAndFocusInput.bind(this)}>
                    Click to Focus and Reset
                </div>
                <input
                    ref="theInput"
                    value={this.state.userInput}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }
}
