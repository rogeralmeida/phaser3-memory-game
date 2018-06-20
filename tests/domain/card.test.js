import Card from '../../src/js/domain/card'

/* global test */
/* global expect */
test('it should be able to create a card with a value and symbol', () => {
  var count = 0
  const renderPort = {
    render: (card) => {
      count += 1
    }
  }
  var card = new Card(renderPort.render, '3', 'Clubs')
  expect(card.value).toBe('3')
  expect(card.symbol).toBe('Clubs')
  expect(card.positionX).toBe(0)
  expect(card.positionY).toBe(0)
  expect(count).toBe(1)
})

test('It should be able to change card position', () => {
  var count = 0
  const renderPort = {
    render: (card) => {
      count += 1
    }
  }
  var card = new Card(renderPort.render, '3', 'Clubs')
  card.setPosition(100, 200)
  expect(card.positionX).toBe(100)
  expect(card.positionY).toBe(200)
  expect(count).toBe(1)
})

test('It should be able to render itself', () => {

})
