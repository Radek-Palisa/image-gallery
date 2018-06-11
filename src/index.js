import React from 'react';
import { render } from 'react-dom';
import './index.css';

const rootDiv = document.createElement('div');

rootDiv.id = 'root';

document.body.appendChild(rootDiv);

render(<p>hello world</p>, document.querySelector('#root'));
