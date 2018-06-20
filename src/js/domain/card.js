export default class Card {
  constructor (renderPort, value, symbol) {
    this.value = value
    this.symbol = symbol
    this.position = {
      x: 0,
      y: 0
    }
    this.hidden = true
  }

  get positionX () {
    return this.position.x
  }

  get positionY () {
    return this.position.y
  }

  setPosition (x, y) {
    this.position.x = x
    this.position.y = y
  }

  toggle () {
    this.hidden = !this.hidden
  }
}
