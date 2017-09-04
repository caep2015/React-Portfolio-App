import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'


export default class BaseLayout extends Component {
  render () {
    return (
      <div>
          <div className="jumbotron">
            <div className="card">
              <img className="card-img-top" src={require('../images/42160.png')} alt="Card image" style={{width: "100%", hight: "50%", borderRadius: "5px"}} />
            </div>
            <h1 className="display-3">Welcome to my home page!</h1>
            <hr className="my-4" />
            <h4>Click below to learn a little more information about me, view my portfolio, or contact me!</h4>
            <span className="lead">
              <Link to='/about' className="btn btn-primary btn-lg" role="button">About Me</Link>
              <Link to='/portfolio' className="btn btn-primary btn-lg" role="button">Portfolio</Link>
              <Link to='/contact' className="btn btn-primary btn-lg" role="button">Contact</Link>
              <Link to='/reference' className="btn btn-primary btn-lg" role="button">Reference</Link>
            </span>
          </div>
      </div>
    )
  }
}
