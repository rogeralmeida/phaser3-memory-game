import CardIcon from './card-icon'

const icons_available = {
  objects: [
    {
      name: 'arrow',
      numbers: ['01', '02', '03'],
      letters: ['a', 'b', 'c', 'd', 'e']
    },
    {
      name: 'book',
      numbers: ['01', '02', '03', '04', '05', '06'],
      letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    },
    {
      name: 'bow',
      numbers: ['01', '02', '03'],
      letters: ['a', 'b', 'c', 'd', 'e']
    },
    {
      name: 'candy',
      numbers: ['01', '02'],
      letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    }
    //TODO import other images
  ] 
};

export default class DeckIcons {
  
  constructor (game, shuffler) {
    var cards = []
    this.game = game
    icons_available.objects.forEach((icon) => {
      icon.numbers.forEach((number) => {
        icon.letters.forEach((letter) => {
          let icon_name = `${icon.name}_${number}${letter}.png`;
          cards.push(new CardIcon(this.game, icon_name));
        });
      });
    });
    this.cards = shuffler.shuffle(cards)
  }

  pop (size) {
    return this.cards.slice(0, size)
  }
}
