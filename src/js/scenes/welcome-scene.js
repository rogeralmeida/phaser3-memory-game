import BackGroundBlackJack from '../../../images/background-blackjack.jpg'
import Phaser from 'phaser'

const BORGENS_BURLESQUE_FONT_NAME = 'borgerns-burlesque'
const BACKGROUND_IMAGE_KEY = 'background-blackjack'

class WelcomeScene extends Phaser.Scene {

  constructor(config){
    super({
      key: 'welcome',
      active: true
    })
  }

  preload () {
    this.load.image(BACKGROUND_IMAGE_KEY, BackGroundBlackJack)
    this.load.bitmapFont(BORGENS_BURLESQUE_FONT_NAME, 'fonts/borgens_burlesque/Borgens Burlesque.png', 'fonts/borgens_burlesque/Borgens Burlesque.fnt')
  }

  create (data){
    this.add.image(0, 0, BACKGROUND_IMAGE_KEY)
    var text = this.add.bitmapText(120, 250, BORGENS_BURLESQUE_FONT_NAME, "Memory Game", 128);
    text.centerX = text.width / 2
    text.centerY = text.height / 2
  }
}

export default WelcomeScene
