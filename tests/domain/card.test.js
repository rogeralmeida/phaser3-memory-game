import Card from '../../src/js/domain/card'

/* global test */
/* global expect */
test('it should be able to create a card with a value and symbol', () => {
  var card = new Card('3', 'Clubs')
  expect(card.value).toBe('3')
  expect(card.symbol).toBe('Clubs')
})
