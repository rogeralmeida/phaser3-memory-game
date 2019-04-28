import Phaser from 'phaser'
import React, {Component} from 'react'
import MainScene from '../scenes/main-scene'
import WelcomeScene from '../scenes/welcome-scene'
import GameOverScene from '../scenes/game-over-scene'
import CongratulationsScene from '../scenes/congratulations-scene'

var requireContext = require.context('../../../images/cards/png-cards', true, /^\.\/.*\.png$/)

export default class MemoryGame extends Component {
  render () {
    return (
      <div id='game-container' />
    )
  }

  shouldComponentUpdate () {
    return false;
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
      scene: [WelcomeScene, MainScene, GameOverScene, CongratulationsScene]
    }

    this.game = new Phaser.Game(config)
  }
}
