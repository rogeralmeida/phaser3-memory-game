import Phaser from 'phaser'

const BORGENS_BURLESQUE_FONT_NAME = 'borgerns-burlesque'
const BACKGROUND_IMAGE_KEY = 'background-blackjack'
const BUTTON_1_KEY = 'button_1'

class CongratulationsScene extends Phaser.Scene {

  constructor(config){
    super({
      key: 'congratulations',
      active: false
    })
  }

  preload(){
  }

  create(data){
    this.add.image(0, 0, BACKGROUND_IMAGE_KEY)
    var text = this.add.bitmapText(60, 200, BORGENS_BURLESQUE_FONT_NAME, "Congratulations", 94);
    let newGameButton = this.add.image(400, 400, BUTTON_1_KEY);
    newGameButton.setScale(0.45);
    newGameButton.centerX = newGameButton.width / 2;
    newGameButton.centery = newGameButton.heigth / 2;
    this.add.bitmapText(300, 375, BORGENS_BURLESQUE_FONT_NAME, "Play Again", 48);
    newGameButton.setInteractive();
    newGameButton.on('click', this._newGameButtonClicked, this);
    this.input.on('gameobjectup', (pointer, gameObject) => {
      gameObject.emit('click', gameObject)
    }, this)
  }

  _newGameButtonClicked(){
    console.log('clicked on the new game')
    this.scene.stop()
    this.scene.start('main')
  }
}

export default CongratulationsScene