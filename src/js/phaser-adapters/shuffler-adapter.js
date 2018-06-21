import Phaser from 'phaser'
export default class ShufflerAdapter {
  shuffle (array) {
    return Phaser.Utils.Array.Shuffle(array)
  }
}
