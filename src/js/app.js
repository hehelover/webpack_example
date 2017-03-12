
import React from 'react';
import ReactDOM from 'react-dom';

import Hello from '../components/Hello';
import Life from '../components/Life';
import ClickEvent from '../components/ClickEvent';
import FindDom from '../components/FindDom';
import ListenEvent from '../components/ListenEvent';
import ControlForm from '../components/ControlForm';
import Combination from '../components/Combination';
import Context from '../components/Context';
import CssTransition from '../components/CssTransition';

var obj = {
    a: 'fdfdf',
    b: 1232,
    c: 'fdfdsfds'
}

ReactDOM.render(
    <div>
        {/*<ClickEvent />*/}
        {/*<Life />*/}
        {/*<h1>Hello 世界!</h1>*/}
        {/*<Hello {...obj} />*/}
        {/*<FindDom />*/}
        {/*<ListenEvent />*/}
        {/*<ControlForm />*/}
        {/*<Combination />*/}
        {/*<Context messages={[{text:"按钮1"},{text:"按钮2"}]} />*/}
        <CssTransition />
    </div>,
    document.getElementById('app')
);