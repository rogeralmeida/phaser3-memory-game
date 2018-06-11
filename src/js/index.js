import 'bootstrap';
import '../scss/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Phaser from 'phaser';
import JQuery from 'jquery';


var rootElement = document.createElement('div');
rootElement.id = "root";
document.body.appendChild(rootElement);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

JQuery(document).ready(()=> {
  var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game-container",
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene: {
      preload: preload,
      create: create
    }
  };

  var game = new Phaser.Game(config);

  function preload ()
  {
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }

  function create ()
  {
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }
});