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
    let backButton = this.add.image(30, 35, 'arrow-left-image')
    backButton.setScale(0.2)
    backButton.setInteractive()
    backButton.on('click', this.clickBackButton, this)
    const board = new Board(this, 24)
    board.start()
    this.input.on('gameobjectup', (pointer, gameObject) => {
      console.log('Finally we captured a click')
      gameObject.emit('click', gameObject)
    }, this)
  }

  clickBackButton() {
    this.scene.start('mode-selection')
    this.scene.stop()
  }
}

export default MainScene
