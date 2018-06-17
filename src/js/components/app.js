import React, {Component} from 'react'
import Header from './header'
import MemoryGame from './memory-game'

export default class App extends Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <main>
          <MemoryGame />
        </main>
      </div>
    )
  }
}
