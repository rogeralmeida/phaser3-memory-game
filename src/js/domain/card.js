export default class Card {
  constructor (game, value, symbol) {
    this.game = game
    this.value = value
    this.symbol = symbol
    this.hidden = true
    this.frontImage = game.add.image(0, 0, `${this.value}_of_${this.symbol}.png`)
    this.backImage = game.add.image(0, 0, 'card-back')
    this._setupBackImage()
    this._setupFrontImage()
  }

  onClick () {
    console.log('Clicked')
    this.toggle()
  }

  get positionX () {
    return this.frontImage.x
  }

  get positionY () {
    return this.frontImage.y
  }

  setPosition (x, y) {
    this.frontImage.x = x
    this.frontImage.y = y
    this.backImage.x = x
    this.backImage.y = y
  }

  toggle () {
    this.hidden = !this.hidden
    this.frontImage.visible = !this.hidden
    this.backImage.visible = this.hidden
    if (this.frontImage.visible) {
      this.board.emit('cardSelected', this)
    }
  }

  setOnBoard(board, x, y) {
    this.setPosition(x, y)
    this.backImage.visible = true
    this.board = board
  }

  _setupBackImage () {
    this.backImage.visible = false
    this.backImage.setScale(0.14)
    this.backImage.setInteractive()
    this.backImage.on('clicked', this.onClick, this)
  }

  _setupFrontImage () {
    this.frontImage.visible = false
    this.frontImage.setScale(0.18)
    this.frontImage.setInteractive()
    this.frontImage.on('clicked', this.onClick, this)
  }
}
