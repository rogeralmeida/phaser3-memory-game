import Board from '../domain/board'
import Phaser from 'phaser'

class MainScene extends Phaser.Scene {

  constructor(config){
    super({
      key: 'main',
      active: false
    })
  }
  preload () {
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
