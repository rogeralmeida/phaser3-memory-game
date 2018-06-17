export default class Card {
  constructor (value, symbol) {
    this.value = value
    this.symbol = symbol
    this.hidden = true
  }

  toggle () {
    this.hidden = !this.hidden
  }
}
