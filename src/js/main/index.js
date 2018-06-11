import React from 'react';
import ReactDOM from 'react-dom';


var rootElement = document.createElement('div');
rootElement.id = "root";
document.body.appendChild(rootElement);

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
