import React from 'react';
import { render } from 'react-dom';
import './index.css';

import ImageGallery from './scenes/ImageGallery/ImageGallery';

const rootDiv = document.createElement('div');

rootDiv.id = 'root';

document.body.appendChild(rootDiv);

render(<ImageGallery />, document.querySelector('#root'));
