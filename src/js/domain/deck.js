import Card from './card'

export default class Deck {
  constructor (shuffler) {
    var cards = []
    for (var number = 2; number <= 10; number++) {
      ['diamonds', 'spades', 'hearts', 'clubs'].forEach((symbol) => {
        console.log(`about to create card: ${number} of ${symbol}`)
        cards.push(new Card(number, symbol))
      })
    }

    ['ace', 'queen', 'jack', 'king'].forEach((letter) => {
      ['diamonds', 'spades', 'hearts', 'clubs'].forEach((symbolLetter) => {
        cards.push(new Card(letter, symbolLetter))
      })
    })
    this.cards = shuffler.shuffle(cards)
  }

  pop (size) {
    console.log('slicing deck')
    return this.cards.slice(0, size)
  }
}
