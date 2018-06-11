import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './header';


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <main>
          <div id="game-container"></div>
        </main>
      </div>
    )
  }
}
