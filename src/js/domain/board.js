import RenderPhaserAdapter from '../phaser-adapters/render-phaser-adapter'
import ShufflerAdapter from '../phaser-adapters/shuffler-adapter'
import Deck from './deck'
import Card from './card'

const initialX = 300
const initialY = 120
const stepX = 100
const stepY = 150
const maxX = 700

export default class Board {
  constructor (game, size) {
    var deck = new Deck(new RenderPhaserAdapter(game), new ShufflerAdapter())
    var xPosition = initialX
    var yPosition = initialY
    if (size % 2 !== 0) {
      throw new Error('Size must be a even number')
    }
    const half = size / 2
    var doubleCards = []
    deck.pop(half).forEach((card) => {
      doubleCards.push(card)
      doubleCards.push(new Card(new RenderPhaserAdapter(game), card.value, card.symbol))
    })
    this.cards = new ShufflerAdapter().shuffle(doubleCards)
    this.cards.forEach((card) => {
      card.setPosition(xPosition, yPosition)
      xPosition += stepX
      if (xPosition >= maxX) {
        xPosition = initialX
        yPosition += stepY
      }
    })
  }

  start () {
    this.cards.forEach((card) => {
      card.show()
    })
  }
}
