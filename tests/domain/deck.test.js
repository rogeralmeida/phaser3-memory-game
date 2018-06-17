import Deck from '../../src/js/domain/deck'

/* global test */
/* global expect */
test('a deck should have 52 cards', () => {
  var deck = new Deck()
  expect(deck.cards.length).toBe(52)
})
