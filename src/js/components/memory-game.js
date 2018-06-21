import Phaser from 'phaser'
import React, {Component} from 'react'
import backgroundImage from '../../../images/background.jpg'
import CardBack from '../../../images/card-back.png'
import Board from '../domain/board'

var requireContext = require.context('../../../images/cards/png-cards', true, /^\.\/.*\.png$/)

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
      this.load.image('card-back', CardBack)
      var self = this
      requireContext.keys().forEach((item) => {
        var name = item.substring(2)
        self.load.image(name, `images/cards/png-cards/${name}`)
      })
    }

    function create () {
      this.add.image(400, 300, 'background')
      const board = new Board(this, 16)
      board.start()
    }
  }
}
