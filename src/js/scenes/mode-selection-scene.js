import Phaser from 'phaser'

const BORGENS_BURLESQUE_FONT_NAME = 'borgerns-burlesque'
const BACKGROUND_IMAGE_KEY = 'background'
const ARROW_RIGHT_IMAGE_KEY = 'ARROW_RIGHT_IMAGE';

class ModeSelectionScene extends Phaser.Scene {

  constructor(config){
    super({
      key: 'mode-selection',
      active: false 
    })
  }

  preload () {
  }

  create (data){
    let backgroundImage = this.add.image(0, 0, BACKGROUND_IMAGE_KEY)
    backgroundImage.setScale(2, 2)
    this.createOnePlayerButton()

    var text = this.add.bitmapText(0, 200, BORGENS_BURLESQUE_FONT_NAME, "Memory Game", 94)
    text.x = 650 - (text.width / 2)
    text.y = 300 - (text.height / 2)
    this.initClick();
  }

  initClick() {
    this.input.on('gameobjectup', (pointer, gameObject) => {
      gameObject.emit('click', gameObject);
    }, this);
  }

  createOnePlayerButton() {
    let text = this.add.bitmapText(600, 375, BORGENS_BURLESQUE_FONT_NAME, "One Player", 48)
    text.x = 650 - (text.width / 2)
    let newGameButton = this.add.image(text.x - 30, 400 , ARROW_RIGHT_IMAGE_KEY);
    newGameButton.setScale(0.15);
    text.setInteractive();
    text.on('click', this._newGameButtonClicked, this);
  }

  _newGameButtonClicked(){
    this.scene.start('main')
    this.scene.stop()
  }
}

export default ModeSelectionScene 