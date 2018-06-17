import Phaser from 'phaser'
import React, {Component} from 'react'
import backgroundImage from '../../images/background.jpg'

export default class MemoryGame extends Component {
  render () {
    return (
      <div className='col-7' id='game-container' />
    )
  }

  componentDidMount () {
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
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
    }

    this.game = new Phaser.Game(config)

    function preload () {
      this.load.image('background', backgroundImage)
      this.load.image('sky', 'http://labs.phaser.io/assets/skies/space3.png')
      this.load.image('logo', 'http://labs.phaser.io/assets/sprites/phaser3-logo.png')
      this.load.image('red', 'http://labs.phaser.io/assets/particles/red.png')
    }

    function create () {
      this.add.image(400, 300, 'background')
      var particles = this.add.particles('red')

      var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
      })

      var logo = this.physics.add.image(400, 100, 'logo')

      logo.setVelocity(100, 200)
      logo.setBounce(1, 1)
      logo.setCollideWorldBounds(true)

      emitter.startFollow(logo)
    }
  }
}
