import backgroundImage from '../../../images/background.jpg'
import CardBack from '../../../images/card-back.png'
import Board from '../domain/board'
import Phaser from 'phaser'

var requireContext = require.context('../../../images/cards/png-cards', true, /\.png$/)

class MainScene extends Phaser.Scene {

  constructor(config){
    super({
      key: 'main',
      active: false
    })
  }
  preload () {
    console.log('Pre-load BoardScene')
    this.load.image('background', backgroundImage)
    this.load.image('card-back', CardBack)
    var self = this
    requireContext.keys().forEach((item) => {
      var name = item.substring(2)
      self.load.image(name, `images/cards/png-cards/${name}`)
    })
  }

  create (data) {
    console.log('create BoardScene')
    this.add.image(400, 300, 'background')
    const board = new Board(this, 24)
    board.start()
    this.input.on('gameobjectup', (pointer, gameObject) => {
      console.log('Finally we captured a click')
      gameObject.emit('click', gameObject)
    }, this)
  }
}

export default MainScene
