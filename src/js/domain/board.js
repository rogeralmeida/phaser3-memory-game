import ShufflerAdapter from '../phaser-adapters/shuffler-adapter'
import Deck from './deck'
import Card from './card'


var EventEmitter = require('eventemitter3');

export default class Board extends EventEmitter {
  constructor (game, size) {
    super()

    if (size === 24){
      this.initialX = 200
      this.initialY = 120
      this.stepX = 100
      this.stepY = 150
      this.maxX = 800
      this.size = size
    } else {
      this.initialX = 300
      this.initialY = 120
      this.stepX = 100
      this.stepY = 150
      this.maxX = 700
      this.size = size
    }
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
    this.firstCard = null
    this.secondCard = null
    this.matches = 0
  }

  cardSelected (card) {
    if (this.firstCard === null){
      this.firstCard = card
      console.log('first card selected')
    } else if (this.secondCard === null) {
      this.secondCard = card
      if (this.firstCard.equals(this.secondCard)) {
        console.log('cards are equals')
        this.firstCard.freeze()
        this.secondCard.freeze()
        this.firstCard = null
        this.secondCard = null
        this.matches += 2
        if (this.matches === this.size){
          console.log('You won')
        }
      } else {
        console.log('cards are different')
      }
    } else {
      console.log('no card was empty')
      this.firstCard.toggle()
      this.secondCard.toggle()
      this.firstCard = card
      this.secondCard = null
    }
  }

  start () {
    this.on('cardSelected', this.cardSelected, this)
    var xPosition = this.initialX
    var yPosition = this.initialY
    this.cards.forEach((card) => {
      card.setOnBoard(this, xPosition, yPosition)
      xPosition += this.stepX
      if (xPosition >= this.maxX) {
        xPosition = this.initialX
        yPosition += this.stepY
      }
    })
  }
}
