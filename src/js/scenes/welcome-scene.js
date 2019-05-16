import backgroundImage from '../../../images/background-castle.jpg'
import ArrowRightImage from '../../../images/arrow-right.png'
import CardBack from '../../../images/card-back.png'
import ButtonImage from '../../../images/b_1.png'
import BorgensBurlesqueImage from '../../../fonts/borgens_burlesque/Borgens Burlesque.png'
import BorgensBurlesqueFont from '../../../fonts/borgens_burlesque/Borgens Burlesque.fnt'
import ArrowLeftImage from '../../../images/arrow-left.png'
import PanelImage from '../../../images/panel.png'
import Phaser from 'phaser'

const requireContext = require.context('../../../images/cards/png-cards', true, /\.png$/)
const iconsContext = require.context('../../../images/icons', true, /\.png$/)
const BORGENS_BURLESQUE_FONT_NAME = 'borgerns-burlesque'
const BACKGROUND_IMAGE_KEY = 'background'
const BUTTON_1_KEY = 'button_1'
const ARROW_RIGHT_IMAGE_KEY = 'ARROW_RIGHT_IMAGE';

class WelcomeScene extends Phaser.Scene {

  constructor(config){
    super({
      key: 'welcome',
      active: true
    })
  }

  preload () {
    this.load.image(BUTTON_1_KEY, ButtonImage)
    this.load.image('arrow-left-image', ArrowLeftImage)
    this.load.image('panel-image', PanelImage)
    this.load.bitmapFont(BORGENS_BURLESQUE_FONT_NAME, BorgensBurlesqueImage, BorgensBurlesqueFont)
    this.load.image(ARROW_RIGHT_IMAGE_KEY, ArrowRightImage)

    this.load.image('background', backgroundImage)
    this.load.image('card-back', CardBack)
    var self = this
    requireContext.keys().forEach((item) => {
      var name = item.substring(2)
      self.load.image(name, `images/cards/png-cards/${name}`)
    })
    iconsContext.keys().forEach((item) => {
      var name = item.substring(2);
      self.load.image(name, `images/icons/${name}`);
    })
  }

  create (data){
    let bg = this.add.image(0, 0, BACKGROUND_IMAGE_KEY)
    bg.setScale(2, 2)
    this.createButtonNewGame();
    this.input.on('gameobjectup', (pointer, gameObject) => {
      gameObject.emit('click', gameObject)
    }, this)

    var text = this.add.bitmapText(0, 200, BORGENS_BURLESQUE_FONT_NAME, "Memory Game", 94);
    text.x = (this.game.config.width / 2 ) - (text.width / 2)
    text.y = (this.game.config.height / 2)  - (text.height / 2)
  }

  createButtonNewGame() {
    let newGameButton = this.add.image(642, 550, BUTTON_1_KEY);
    newGameButton.setScale(0.45);
    // newGameButton.x = (this.game.config.width / 2) - (newGameButton.width / 2)
    var text = this.add.bitmapText(540, 520, BORGENS_BURLESQUE_FONT_NAME, "New Game", 48);
    newGameButton.setInteractive();
    newGameButton.on('click', this._newGameButtonClicked, this);
  }

  _newGameButtonClicked(){
    this.scene.start('mode-selection')
    this.scene.stop()
  }
}

export default WelcomeScene