import Phaser from 'phaser'
import React, {Component} from 'react'
import backgroundImage from '../../../images/background.jpg'
import Deck from '../domain/deck'

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
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      scene: {
        preload: preload,
        create: create
      }
    }

    this.game = new Phaser.Game(config)

    function preload () {
      this.load.image('background', backgroundImage)
      var self = this
      requireContext.keys().forEach((item) => {
        var name = item.substring(2)
        console.log(`inserting image: ${name}`)
        self.load.image(name, `images/cards/png-cards/${name}`)
      })
    }

    function create () {
      this.add.image(400, 300, 'background')
      var deck = new Deck(null)
      const initialX = 300
      const initialY = 150
      const stepX = 100
      const stepY = 150
      const maxX = 700
      var xPosition = initialX
      var yPosition = initialY
      for (var i = 0; i < 16; i++) {
        var card = deck.cards[i]
        console.log(`Card: ${card}`)
        var cardName = `${card.value}_of_${card.symbol}.png`
        console.log(`about to print: ${cardName}`)
        var cardImage = this.add.image(xPosition, yPosition, cardName)
        console.log(cardImage)
        cardImage.setScale(0.16)
        xPosition += stepX
        if (xPosition >= maxX) {
          xPosition = initialX
          yPosition += stepY
        }
      }
    }
  }
}
