import 'bootstrap';
import '../scss/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'


var rootElement = document.createElement('div');
rootElement.id = "root";
document.body.appendChild(rootElement);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
