export default class Card {
  constructor (value, symbol) {
    console.log(`Creating card: ${value}_of_${symbol}`)
    this.value = value
    this.symbol = symbol
    this.hidden = true
  }

  toggle () {
    this.hidden = !this.hidden
  }
}
