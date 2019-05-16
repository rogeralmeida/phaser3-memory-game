const CLICK_EVENT_KEY = 'click'

export default class CardIcon {
  constructor (game, name) {
    this.game = game
    this.name = name 
    this.hidden = true
    this.frontImage = game.add.image(0, 0, this.name)
    this.backImage = game.add.image(0, 0, 'card-back')
    this._setupBackImage()
    this._setupFrontImage()
  }

  onClick () {
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
    } else {
      this.board.emit('cardDeselected', this)
    }
  }

  setOnBoard(board, x, y) {
    this.setPosition(x, y)
    this.backImage.visible = true
    this.board = board
  }

  equals(other){
    if(other === null){
      return false
    }
    if (!other instanceof CardIcon){
      return false
    }
    return this.name === other.name
  }

  freeze () {
    this.frontImage.removeListener(CLICK_EVENT_KEY, this.onClick)
  }

  _setupBackImage () {
    this.backImage.visible = false
    this.backImage.setScale(0.12)
    this.backImage.setInteractive()
    this.backImage.on(CLICK_EVENT_KEY, this.onClick, this)
  }

  _setupFrontImage () {
    this.frontImage.visible = false
    // this.frontImage.setScale(0.16)
    this.frontImage.setInteractive()
    this.frontImage.on(CLICK_EVENT_KEY, this.onClick, this)
  }
}