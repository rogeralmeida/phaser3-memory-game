import ShufflerAdapter from '../phaser-adapters/shuffler-adapter'
import Deck from './deck'
import Card from './card'

const initialX = 300
const initialY = 120
const stepX = 100
const stepY = 150
const maxX = 700

var EventEmitter = require('eventemitter3');

export default class Board extends EventEmitter {
  constructor (game, size) {
    super()
    var deck = new Deck(game, new ShufflerAdapter())
    if (size % 2 !== 0) {
      throw new Error('Size must be a even number')
    }
    const half = size / 2
    var doubleCards = []
    deck.pop(half).forEach((card) => {
      doubleCards.push(card)
      doubleCards.push(new Card(game, card.value, card.symbol))
    })
    this.cards = new ShufflerAdapter().shuffle(doubleCards)
  }

  cardSelected (card) {
    console.log(`Card: ${card.value} was clicked`)
  }

  start () {
    this.on('cardSelected', this.cardSelected, this)
    var xPosition = initialX
    var yPosition = initialY
    this.cards.forEach((card) => {
      card.setOnBoard(this, xPosition, yPosition)
      xPosition += stepX
      if (xPosition >= maxX) {
        xPosition = initialX
        yPosition += stepY
      }
    })
  }
}
