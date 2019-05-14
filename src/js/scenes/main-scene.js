import Board from '../domain/board'
import Phaser from 'phaser'

const BACKGROUND_IMAGE_KEY = 'background'

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
    let backgroundImage = this.add.image(400, 300, BACKGROUND_IMAGE_KEY)
    backgroundImage.setScale(2, 2)

    this.createBackButton();
    let panel = this.add.rectangle(60, 250, 100, 300, '0xff0000', 0.7)
    panel.centerX = 0
    panel.centerY = 0
    const board = new Board(this, 24)
    board.start()
    this.input.on('gameobjectup', (pointer, gameObject) => {
      console.log('Finally we captured a click')
      gameObject.emit('click', gameObject)
    }, this)
  }

  createBackButton() {
    let backButton = this.add.image(30, 35, 'arrow-left-image');
    backButton.setScale(0.2);
    backButton.setInteractive();
    backButton.on('click', this.clickBackButton, this);
  }

  clickBackButton() {
    this.scene.start('mode-selection')
    this.scene.stop()
  }
}

export default MainScene
