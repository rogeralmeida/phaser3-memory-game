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
            <div className='col-1' />
            <MemoryGame />
            <div className='col-1' />
          </div>
        </main>
      </div>
    )
  }
}
