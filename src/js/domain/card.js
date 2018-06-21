export default class Card {
  constructor (renderPort, value, symbol) {
    this.value = value
    this.symbol = symbol
    this.hidden = true
    this.image = renderPort.render(this)
    console.log(this.image)
    this.image.visible = false
    this.image.setScale(0.16)
    this.backImage = renderPort.renderBack(this)
    this.backImage.visible = false
    this.backImage.setScale(0.16)
  }

  get positionX () {
    return this.image.x
  }

  get positionY () {
    return this.image.y
  }

  setPosition (x, y) {
    this.image.x = x
    this.image.y = y
    this.backImage.x = x
    this.backImage.y = y
  }

  toggle () {
    this.hidden = !this.hidden
  }

  show () {
    this.backImage.visible = true
  }
}
