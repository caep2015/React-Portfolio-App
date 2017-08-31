import React, { Component } from 'react'
import '../styles/Portfolio.css'
export default class Porfolio extends Component {
  render () {
    return (
      <div className='portfolio'>
        <div className="card">
          <img className="card-img-top" src="" alt="Card image will go here" />
          <div className="card-block">
          <div>
            <h2>Portfolio</h2>
          </div>
            <h4 className="card-title">React Projects</h4>
            <p className="card-text">Here are some React projects I have recently completed!</p>
          </div>
        </div>
        <div className='project-flex'>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src='https://earthquake.usgs.gov/earthquakes/images/latesteqs-300for150.gif' alt="" />
              <div className="card-block">
                <h4 className="card-title">Earthquakes!</h4>
                <p className="card-text">This site records a list of all the earthquakes that have occurred in the past hour</p>
                <a href="https://github.com/caep2015/React-Simple-App-Earthquakes" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Earthquakes!</a>
                <p className="card-text"><small className="text-muted">Created August 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://mars.nasa.gov/maps/explore-mars-map/catalog/Mars_Viking_MDIM21_ClrMosaic_global_232m/1.0.0//default/default028mm/2/1/2.png" alt="view of mars" />
              <div className="card-block">
                <h4 className="card-title">Mars Rover</h4>
                <p className="card-text">This site shows images on Mars using NASA API</p>
                <a href="https://github.com/caep2015/React-Mars-Rovers" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View the code for Mars Rover</a>
                <p className="card-text"><small className="text-muted">Created August 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="" alt="" />
              <div className="card-block">
                <h4 className="card-title">React Project Name</h4>
                <p className="card-text">Project Description</p>
                <a href="https://carlotapearl.github.io/react-?/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit page</a>
                <p className="card-text"><small className="text-muted">Created August 2017</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className='language-flex'>
          <div className="card-block">
            <h4 className="card-title">Languages</h4>
            <p className="card-text">Here are some programming languages I am currently learning!</p>
          </div>
          <div className="card-group">
            <div className="card">
              <img className="card-img-top" src="" alt="react js logo" />
              <div className="card-block">
                <h4 className="card-title">ReactJS</h4>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript logo" />
              <div className="card-block">
                <h4 className="card-title">JavaScript</h4>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="" alt="node JavaScript logo" />
              <div className="card-block">
                <h4 className="card-title">Node.js</h4>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="
              " alt="html and css logo" />
              <div className="card-block">
                <h4 className="card-title">HTML5 / CSS3</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
