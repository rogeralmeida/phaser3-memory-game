import Phaser from 'phaser'
import ButtonImage from '../../../images/b_1.png'
import BackGroundBlackJack from '../../../images/background-blackjack.jpg'

const BORGENS_BURLESQUE_FONT_NAME = 'borgerns-burlesque'
const BACKGROUND_IMAGE_KEY = 'background-blackjack'
const NEW_GAME_BUTTON_KEY = 'new-game'
const BUTTON_1_KEY = 'button_1'

class CongratulationsScene extends Phaser.Scene {

  constructor(config){
    super({
      key: 'congratulations',
      active: false
    })
  }

  preload(){
    this.load.image(BACKGROUND_IMAGE_KEY, BackGroundBlackJack)
    this.load.image(NEW_GAME_BUTTON_KEY, 'images/new-game.png')
    this.load.image(BUTTON_1_KEY, ButtonImage)
    this.load.bitmapFont(BORGENS_BURLESQUE_FONT_NAME, 'fonts/borgens_burlesque/Borgens Burlesque.png', 'fonts/borgens_burlesque/Borgens Burlesque.fnt')
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