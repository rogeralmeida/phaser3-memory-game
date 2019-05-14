import Phaser from 'phaser'
import React, {Component} from 'react'
import MainScene from '../scenes/main-scene'
import WelcomeScene from '../scenes/welcome-scene'
import GameOverScene from '../scenes/game-over-scene'
import CongratulationsScene from '../scenes/congratulations-scene'
import ModeSelectionScene from '../scenes/mode-selection-scene'

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
        width: 1280,
        height: 720
      },
      scene: [WelcomeScene, MainScene, GameOverScene, CongratulationsScene, 
        ModeSelectionScene]
    }

    this.game = new Phaser.Game(config)
    window.addEventListener('resize', () => {
      this.game.resize(window.innerWidth, window.innerHeight);
    })
  }
}
