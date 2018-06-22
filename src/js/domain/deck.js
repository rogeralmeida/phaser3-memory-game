import Card from './card'

export default class Deck {
  constructor (game, shuffler) {
    var cards = []
    this.game = game
    for (var number = 2; number <= 10; number++) {
      ['diamonds', 'spades', 'hearts', 'clubs'].forEach((symbol) => {
        cards.push(new Card(game, number, symbol))
      })
    }

    ['ace', 'queen', 'jack', 'king'].forEach((letter) => {
      ['diamonds', 'spades', 'hearts', 'clubs'].forEach((symbolLetter) => {
        cards.push(new Card(game, letter, symbolLetter))
      })
    })
    this.cards = shuffler.shuffle(cards)
  }

  pop (size) {
    return this.cards.slice(0, size)
  }
}
