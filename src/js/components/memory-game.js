import Phaser from 'phaser'
import React, {Component} from 'react'
import MainScene from '../scenes/main-scene'
import WelcomeScene from '../scenes/welcome-scene'
import GameOverScene from '../scenes/game-over-scene'

var requireContext = require.context('../../../images/cards/png-cards', true, /^\.\/.*\.png$/)

export default class MemoryGame extends Component {
  render () {
    return (
      <div className='col-12' id='game-container' />
    )
  }

  componentDidMount () {
    var config = {
      type: Phaser.AUTO,
      scale: {
        parent: 'game-container',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.DOM.CENTER_BOTH,
        width: 800,
        height: 600
      },
      scene: [WelcomeScene, MainScene, GameOverScene]
    }

    this.game = new Phaser.Game(config)
  }
}
