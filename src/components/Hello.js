/**
 * Created by zlzho on 2017/3/8.
 */

// ��js������css�ļ�
import './Hello.css';
// ��js������sass�ļ�
import './Hello.scss';

import React,{Component} from 'react';

// ֱ����js�ж�����ʽ����Ƕ��ʽ
let style = {
    backgroundColor: 'blue'
}

export default class Hello extends Component {
    render() {
        return (
            <div>
                <h1 style={style}>Hello NiuNiu!</h1>
                <br/>
                <img/>
            </div>
        )
    }
}