import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

export default class BaseLayout extends Component {
  render () {
    return (
      <div>
        <header className='header'>

          <div className="jumbotron">
            <div className="card">
              <img className="card-img-top" src="" alt="card image" />
            </div>
            <h1 className="display-3">Welcome!</h1>
            <hr className="my-4" />
            <h4>Click below to learn a little more information about me, view my portfolio, or contact me!</h4>
            <span className="lead">
              <Link to='/about' className="btn btn-primary btn-lg" role="button">About Me</Link>
              <Link to='/portfolio' className="btn btn-primary btn-lg" role="button">Portfolio</Link>
              <Link to='/contact' className="btn btn-primary btn-lg" role="button">Contact</Link>
            </span>
          </div>
        </header>
      </div>
    )
  }
}

//card image alternative - https://static.pexels.com/photos/459654/pexels-photo-459654.jpeg
