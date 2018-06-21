/* global test */
/* global expect */
/* global beforeEach */
import Deck from '../../src/js/domain/deck'

var count = 0
const imageResult = {
  x: 0,
  y: 0,
  visible: false,
  setScale: (n) => { console.log(`Setting scale: ${n}`) }
}

const renderPort = {
  render: (card) => {
    count += 1
    return imageResult
  },
  renderBack: (card) => {
    count += 1
    return imageResult
  }
}

beforeEach(() => {
  count = 0
})

test('a deck should have 52 cards', () => {
  const shuffler = {
    shuffle: (cards) => {
      return cards
    }
  }
  var deck = new Deck(renderPort, shuffler)
  expect(deck.cards.length).toBe(52)
})

test('pop(N) should return N cards', () => {
  var shuffler = {
    shuffle: (cards) => {
      return cards
    }
  }
  var deck = new Deck(renderPort, shuffler)
  expect(deck.pop(16).length).toBe(16)
  expect(deck.pop(8).length).toBe(8)
})
