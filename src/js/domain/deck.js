import Card from './card'

export default class Deck {
  constructor () {
    this.cards = []
    for (var number = 2; number <= 10; number++) {
      for (var symbol in ['diamonds', 'spades', 'hearts', 'clubs']) {
        this.cards.push(new Card(number, symbol))
      }
    }

    for (var letter in ['A', 'Q', 'J', 'K']) {
      for (var symbolLetter in ['diamonds', 'spades', 'hearts', 'clubs']) {
        this.cards.push(new Card(letter, symbolLetter))
      }
    }
  }
}
