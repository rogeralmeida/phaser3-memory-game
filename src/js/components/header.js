import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class Header extends React.Component {
  render() {
    return (
        <header>
            <div className="collapse bg-dark" id="navbarHeader">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-md-7 py-4">
                    <h4 className="text-white">About</h4>
                    <p className="text-muted">This is a simple memory game implementation using Phaser3</p>
                  </div>
                  <div className="col-sm-4 offset-md-1 py-4">
                    <h4 className="text-white">Contact</h4>
                    <ul className="list-unstyled">
                      <li><a href="https://twitter.com/rogeralmeidacom" className="text-white">Follow me on Twitter: @rogeralmeidacom</a></li>
                      <li><a href="https://github.com/rogeralmeida/phaser3-memory-game" className="text-white">Fork me on github.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar navbar-dark bg-dark box-shadow">
              <div className="container d-flex justify-content-between">
                <a href="#" className="navbar-brand d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                  <strong>Memory Game</strong>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </header>
    );
  }
}
