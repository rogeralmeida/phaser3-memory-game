import BackGroundBlackJack from '../../../images/background-blackjack.jpg'
import NewGameImage from '../../../images/new-game.png'
import ButtonImage from '../../../images/b_1.png'
import BorgensBurlesqueImage from '../../../fonts/borgens_burlesque/Borgens Burlesque.png'
import BorgensBurlesqueFont from '../../../fonts/borgens_burlesque/Borgens Burlesque.fnt'

import Phaser from 'phaser'

const BORGENS_BURLESQUE_FONT_NAME = 'borgerns-burlesque'
const BACKGROUND_IMAGE_KEY = 'background-blackjack'
const NEW_GAME_BUTTON_KEY = 'new-game'
const BUTTON_1_KEY = 'button_1'

class WelcomeScene extends Phaser.Scene {

  constructor(config){
    super({
      key: 'welcome',
      active: true
    })
  }

  preload () {
    this.load.image(BACKGROUND_IMAGE_KEY, BackGroundBlackJack)
    this.load.image(NEW_GAME_BUTTON_KEY, NewGameImage)
    this.load.image(BUTTON_1_KEY, ButtonImage)
    this.load.bitmapFont(BORGENS_BURLESQUE_FONT_NAME, BorgensBurlesqueImage, BorgensBurlesqueFont)
  }

  create (data){
    this.add.image(0, 0, BACKGROUND_IMAGE_KEY)
    this.createButtonNewGame();
    this.input.on('gameobjectup', (pointer, gameObject) => {
      gameObject.emit('click', gameObject)
    }, this)

    var text = this.add.bitmapText(0, 200, BORGENS_BURLESQUE_FONT_NAME, "Memory Game", 94);
    text.x = 400 - (text.width / 2)
    text.y = 200 - (text.height / 2)
  }

  createButtonNewGame() {
    let newGameButton = this.add.image(400, 400, BUTTON_1_KEY);
    newGameButton.setScale(0.45);
    newGameButton.centerX = newGameButton.width / 2;
    newGameButton.centery = newGameButton.heigth / 2;
    var text = this.add.bitmapText(300, 375, BORGENS_BURLESQUE_FONT_NAME, "New Game", 48);
    newGameButton.setInteractive();
    newGameButton.on('click', this._newGameButtonClicked, this);
  }

  _newGameButtonClicked(){
    console.log('clicked on the new game')
    this.scene.stop()
    this.scene.start('main')
  }
}

export default WelcomeScene
