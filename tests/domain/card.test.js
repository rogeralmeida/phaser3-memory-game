/* global test */
/* global expect */
/* global beforeEach */
import Card from '../../src/js/domain/card'

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

test('it should be able to create a card with a value and symbol', () => {
  var card = new Card(renderPort, '3', 'Clubs')
  expect(card.value).toBe('3')
  expect(card.symbol).toBe('Clubs')
  expect(card.positionX).toBe(0)
  expect(card.positionY).toBe(0)
  expect(count).toBe(2)
})

test('It should be able to change card position', () => {
  var card = new Card(renderPort, '3', 'Clubs')
  card.setPosition(100, 200)
  expect(card.positionX).toBe(100)
  expect(card.positionY).toBe(200)
  expect(count).toBe(2)
})
