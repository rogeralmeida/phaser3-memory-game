import React, {Component} from 'react'
import Header from './header'
import MemoryGame from './memory-game'

export default class App extends Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <main>
          <div className='row' >
            <MemoryGame />
          </div>
        </main>
      </div>
    )
  }
}
