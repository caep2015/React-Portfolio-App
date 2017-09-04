import React, { Component } from 'react'
import '../styles/Reference.css'

export default class Reference extends Component {
  render () {
    return (
      <div className='reference-info'>
        <div className="card-non">
          <img className="card-img-top" src={require('../images/45019.png')} alt="no references needed" style={{width: "100%", borderRadius: "5px"}} />
          <div className="card-block">
            <h4 className="card-title">References:</h4>
          </div>
        </div>
        <div className="card">
        <div className="card-header">
          <h3>Brian Gates</h3>
        </div>
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>Front End Language Focus Instructor | The Iron Yard</p>
            <footer>1.555.555.5555 | <cite title="Source Title">instructor@theironyard.com</cite></footer>
          </blockquote>
        </div>
        </div>
        <div className="card">
        <div className="card-header">
          <h3>Quincy Larson</h3>
        </div>
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>Teacher | Free Code Camp</p>
            <footer>1.800.555.5555 | <cite title="Source Title">quincy@freecodecamp.com</cite></footer>
          </blockquote>
        </div>
        </div>
        <div className="card">
        <div className="card-header">
          <h3>Ray Villalobos</h3>
        </div>
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>Instructor | Lynda.com</p>
            <footer>1.555.555.5555 | <cite title="Source Title">ray@lynda.com</cite></footer>
          </blockquote>
        </div>
        </div>
      </div>
    )
  }
}
