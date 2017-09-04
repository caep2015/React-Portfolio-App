import React, { Component } from 'react'
import '../styles/App.css'
import Background from '../images/background_image.jpg';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='card' style={{backgroundImage: `url(${Background})`}}>
          <div className='header'>Carlota Pearl
            <div className='h3'>I believe that persistant effort is the key to life, work, love, and learning.</div>
          </div>
        </div>
        <div className='body'></div>
      </div>
    )
  }
}

export default App
