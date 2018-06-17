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
      width: 1024,
      height: 768,
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
    }

    function create () {
      this.add.image(400, 300, 'background')
    }
  }
}
