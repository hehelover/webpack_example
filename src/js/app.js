/**
 * Created by zlzho on 2017/3/7.
 */
// document.getElementById('app').innerHTML = "hello niuniu111111!";

import React from 'react';
import ReactDOM from 'react-dom';

import Hello from '../components/Hello.js'

const a = "a";

ReactDOM.render(
    <div>
        <h1>Hello World!</h1>
        <Hello/>
    </div>,
    document.getElementById('app')
);