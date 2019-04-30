import backgroundImage from '../../../images/background.jpg'
import CardBack from '../../../images/card-back.png'
import BackGroundBlackJack from '../../../images/background-blackjack.jpg'
import NewGameImage from '../../../images/new-game.png'
import ButtonImage from '../../../images/b_1.png'
import ArrowRightImage from '../../../images/arrow-right.png'
import BorgensBurlesqueImage from '../../../fonts/borgens_burlesque/Borgens Burlesque.png'
import BorgensBurlesqueFont from '../../../fonts/borgens_burlesque/Borgens Burlesque.fnt'
import Phaser from 'phaser'

const requireContext = require.context('../../../images/cards/png-cards', true, /\.png$/)
const BORGENS_BURLESQUE_FONT_NAME = 'borgerns-burlesque'
const BACKGROUND_IMAGE_KEY = 'background-blackjack'
const NEW_GAME_BUTTON_KEY = 'new-game'
const BUTTON_1_KEY = 'button_1'
const ARROW_RIGHT_IMAGE_KEY = 'ARROW_RIGHT_IMAGE';

class ModeSelectionScene extends Phaser.Scene {

  constructor(config){
    super({
      key: 'mode-selection',
      active: false 
    })
  }

  preload () {
    this.load.image(BACKGROUND_IMAGE_KEY, BackGroundBlackJack)
    this.load.image(NEW_GAME_BUTTON_KEY, NewGameImage)
    this.load.image(BUTTON_1_KEY, ButtonImage)
    this.load.image(ARROW_RIGHT_IMAGE_KEY, ArrowRightImage)
    this.load.image('background', backgroundImage)
    this.load.image('card-back', CardBack)
    var self = this
    requireContext.keys().forEach((item) => {
      var name = item.substring(2)
      self.load.image(name, `images/cards/png-cards/${name}`)
    })
    this.load.bitmapFont(BORGENS_BURLESQUE_FONT_NAME, BorgensBurlesqueImage, BorgensBurlesqueFont)
  }

  create (data){
    this.add.image(0, 0, BACKGROUND_IMAGE_KEY)
    this.createButtonNewGame();

    var text = this.add.bitmapText(0, 200, BORGENS_BURLESQUE_FONT_NAME, "Memory Game", 94);
    text.x = 400 - (text.width / 2)
    text.y = 200 - (text.height / 2)
    this.initClick();
  }

  initClick() {
    this.input.on('gameobjectup', (pointer, gameObject) => {
      gameObject.emit('click', gameObject);
    }, this);
  }

  createButtonNewGame() {
    let text = this.add.bitmapText(400, 375, BORGENS_BURLESQUE_FONT_NAME, "New Game", 48)
    text.x = 400 - (text.width / 2)
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