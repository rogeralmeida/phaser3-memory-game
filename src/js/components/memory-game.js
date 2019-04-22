import Phaser from 'phaser'
import React, {Component} from 'react'
import MainScene from '../scenes/main-scene'
import WelcomeScene from '../scenes/welcome-scene'
import GameOverScene from '../scenes/game-over-scene'

var requireContext = require.context('../../../images/cards/png-cards', true, /^\.\/.*\.png$/)

export default class MemoryGame extends Component {
  render () {
    return (
      <div className='col-7' id='game-container' />
    )
  }

  componentDidMount () {
    var config = {
      type: Phaser.AUTO,
      width: 1024,
      height: 768,
      parent: 'game-container',
      scene: [WelcomeScene, MainScene, GameOverScene]
    }

    this.game = new Phaser.Game(config)
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
  }
}
