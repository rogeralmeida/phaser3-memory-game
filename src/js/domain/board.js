import ShufflerAdapter from '../phaser-adapters/shuffler-adapter'
import Deck from './deck'
import Card from './card'
import DeckIcons from './deck-icons'
import CardIcon from './card-icon'


var EventEmitter = require('eventemitter3');
const INITIAL_X = 300;
const INITIAL_Y = 150;
const X_STEP = 150;
const Y_STEP = 150;
const X_MAX = 1100;

export default class Board extends EventEmitter {

  constructor (game, size) {
    super()

    this.initialX = INITIAL_X;
    this.initialY = INITIAL_Y;
    this.stepX = X_STEP;
    this.stepY = Y_STEP;
    this.maxX = X_MAX;
    this.size = size
    var deck = new DeckIcons(game, new ShufflerAdapter())
    if (size % 2 !== 0) {
      throw new Error('Size must be a even number')
    }
    const half = size / 2
    var doubleCards = []
    deck.pop(half).forEach((card) => {
      doubleCards.push(card)
      doubleCards.push(new CardIcon(game, card.name))
    })
    this.cards = new ShufflerAdapter().shuffle(doubleCards)
    this.firstCard = null
    this.secondCard = null
    this.game = game
    this.matches = 0
  }

  cardSelected (card) {
    if (this.firstCard === null){
      this.firstCard = card
    } else if (this.secondCard === null) {
      this.secondCard = card
      if (this.firstCard.equals(this.secondCard)) {
        this.firstCard.freeze()
        this.secondCard.freeze()
        this.firstCard = null
        this.secondCard = null
        this.matches += 2
        if (this.matches === this.size) {
          this.game.scene.start('congratulations')
          this.game.scene.stop('main')
        }
      } else {
        console.log('cards are different')
      }
    } else {
      this.firstCard.toggle()
      this.secondCard.toggle()
      this.firstCard = card
    }
  }

  _cardDeselected(card) {
    if (this.firstCard === card){
      this.firstCard = null
    } else if (this.secondCard === card) {
      this.secondCard = null
    }
  }

  start () {
    this.on('cardSelected', this.cardSelected, this)
    this.on('cardDeselected', this._cardDeselected, this)
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
