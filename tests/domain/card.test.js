import Card from '../../src/js/domain/card'

/* global test */
/* global expect */
test('it should be able to create a card with a value and symbol', () => {
  var card = new Card(null, '3', 'Clubs')
  expect(card.value).toBe('3')
  expect(card.symbol).toBe('Clubs')
  expect(card.positionX).toBe(0)
  expect(card.positionY).toBe(0)
})

test('It should be able to change card position', () => {
  var card = new Card(null, '3', 'Clubs')
  card.setPosition(100, 200)
  expect(card.positionX).toBe(100)
  expect(card.positionY).toBe(200)
})
