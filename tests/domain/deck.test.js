import Deck from '../../src/js/domain/deck'

/* global test */
/* global expect */
test('a deck should have 52 cards', () => {
  const shuffler = {
    shuffle: (cards) => {
      return cards
    }
  }
  const renderPort = (card) => {}
  var deck = new Deck(renderPort, shuffler)
  expect(deck.cards.length).toBe(52)
})

test('pop(N) should return N cards', () => {
  var shuffler = {
    shuffle: (cards) => {
      return cards
    }
  }
  const renderPort = (card) => {}
  var deck = new Deck(renderPort, shuffler)
  expect(deck.pop(16).length).toBe(16)
  expect(deck.pop(8).length).toBe(8)
})
