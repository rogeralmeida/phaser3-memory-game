export default class ShufflerAdapter {
  constructor (arrayUtils) {
    this.arrayUtils = arrayUtils
  }

  shuffle (array) {
    return this.arrayUtils.shuffle(array)
  }
}
