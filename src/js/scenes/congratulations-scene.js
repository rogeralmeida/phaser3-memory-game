import Phaser from 'phaser'
import BackGroundBlackJack from '../../../images/background-blackjack.jpg'

const BORGENS_BURLESQUE_FONT_NAME = 'borgerns-burlesque'
const BACKGROUND_IMAGE_KEY = 'background-blackjack'
const NEW_GAME_BUTTON_KEY = 'new-game'

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
    this.load.bitmapFont(BORGENS_BURLESQUE_FONT_NAME, 'fonts/borgens_burlesque/Borgens Burlesque.png', 'fonts/borgens_burlesque/Borgens Burlesque.fnt')
  }

  create(data){
    this.add.image(0, 0, BACKGROUND_IMAGE_KEY)
    this.newGameButton = this.add.image(400, 500, NEW_GAME_BUTTON_KEY)
    this.newGameButton.setInteractive()
    this.newGameButton.on('click', this._newGameButtonClicked, this)
    this.input.on('gameobjectup', (pointer, gameObject) => {
      gameObject.emit('click', gameObject)
    }, this)
    var text = this.add.bitmapText(0, 250, BORGENS_BURLESQUE_FONT_NAME, 
      "Congratulations", 64);
    text.x = 400 - (text.width / 2)
  }

  _newGameButtonClicked(){
    console.log('clicked on the new game')
    this.scene.stop()
    this.scene.start('main')
  }
}

export default CongratulationsScene