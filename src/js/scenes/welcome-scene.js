import BackGroundBlackJack from '../../../images/background-blackjack.jpg'
import NewGameImage from '../../../images/new-game.png'
import BorgensBurlesqueImage from '../../../fonts/borgens_burlesque/Borgens Burlesque.png'
import BorgensBurlesqueFont from '../../../fonts/borgens_burlesque/Borgens Burlesque.fnt'

import Phaser from 'phaser'

const BORGENS_BURLESQUE_FONT_NAME = 'borgerns-burlesque'
const BACKGROUND_IMAGE_KEY = 'background-blackjack'
const NEW_GAME_BUTTON_KEY = 'new-game'

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
    this.load.bitmapFont(BORGENS_BURLESQUE_FONT_NAME, BorgensBurlesqueImage, BorgensBurlesqueFont)
  }

  create (data){
    this.add.image(0, 0, BACKGROUND_IMAGE_KEY)
    this.newGameButton = this.add.image(500, 500, NEW_GAME_BUTTON_KEY)
    this.newGameButton.setInteractive()
    this.newGameButton.on('click', this._newGameButtonClicked, this)
    this.input.on('gameobjectup', (pointer, gameObject) => {
      console.log('Finally we captured a click')
      gameObject.emit('click', gameObject)
    }, this)
    var text = this.add.bitmapText(120, 250, BORGENS_BURLESQUE_FONT_NAME, "Memory Game", 128);
    text.centerX = text.width / 2
    text.centerY = text.height / 2
    console.log(this)
  }

  _newGameButtonClicked(){
    console.log('clicked on the new game')
    this.scene.stop()
    this.scene.start('main')
  }
}

export default WelcomeScene
