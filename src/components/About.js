import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class About extends Component {
  render () {
    return (
      <div className='About'>
        <div className="card">
        <img className="card-img-top" src={require('../images/45316.jpg')} alt="hope code" style={{width: "100%", borderRadius: "5px"}} />
          <div className="card-block">
            <h4 className="card-title">About Me</h4>
            <p className="card-text">I am a student at The Iron Yard and I love to code.</p>
            <p className="card-text">Click the link below to view some of my projects!</p>
            <Link to='/portfolio' className="btn btn-primary">View My Porfolio</Link>
        </div>
      </div>
    </div>
    )
  }
}
