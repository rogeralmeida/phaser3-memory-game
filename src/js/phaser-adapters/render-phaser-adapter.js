export default class RenderPhaserAdapter {
  constructor (game) {
    this.game = game
  }

  render (card) {
    return this.game.add.image(card.x, card.y, `images/cards/png-cards/${card.value}_of_${card.symbol}.png`)
  }

  renderBack (card) {
    return this.game.add.image(card.x, card.y, 'card-back')
  }
}
