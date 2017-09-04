import React, { Component } from 'react'
import '../styles/Portfolio.css'
export default class Porfolio extends Component {
  render () {
    return (
      <div className='portfolio'>
        <div className="card">
          <img className="card-img-top" src={require('../images/4100.jpg')} alt="Card image" style={{width: "100%", hight: "50%", borderRadius: "5px"}} />
          <div className="card-block">
          <div>
            <h2>My Iron Yard Projects</h2>
          </div>
            <h4 className="card-title">React Projects</h4>
            <p className="card-text">Check out these recently completed React projects!</p>
          </div>
        </div>
        <div className='project-flex'>
          <div className="card-deck">
            <div className="card">
            <img className="card-img-top" src={require('../images/quakes.png')} alt="" style={{width: "100%"}} />
              <div className="card-block">
                <h4 className="card-title">Earthquakes!</h4>
                <p className="card-text">This site records a list of all the earthquakes that have occurred in the past hour</p>
                <a href="https://github.com/caep2015/React-Simple-App-Earthquakes" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Earthquakes!</a>
                <p className="card-text"><small className="text-muted">Created August 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/4200.png')} alt="Mars Rovers app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">Mars Rover</h4>
                <p className="card-text">This site shows images on Mars using NASA API</p>
                <a href="https://github.com/caep2015/React-Mars-Rovers" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View the code for Mars Rover</a>
                <p className="card-text"><small className="text-muted">Created August 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/431.png')} alt="starwars app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">Star Wars API (SWAPI) </h4>
                <p className="card-text">This his project, you will use the Star Wars API (SWAPI) to render a set of Star Wars vehicles 'cards'. To achieve this you will implement the following React logic: props, state and lifecycle.</p>
                <a href="https://github.com/caep2015/React-Star-Wars-Vehicles" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit page</a>
                <p className="card-text"><small className="text-muted">Created August 2017</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className='language-flex'>
          <div className="card-block">
            <h4 className="card-title">Front End Projects</h4>
            <p className="card-text">During Front End Fundamentals we used HTML, CSS, and JavaScript.</p>
          </div>
        </div>
        <div className='project-flex'>
          <div className="card-deck">
            <div className="card">
            <img className="card-img-top" src={require('../images/w1p.png')} alt="" style={{width: "100%"}} />
              <div className="card-block">
                <h4 className="card-title">Bent Creek Ceramics Website</h4>
                <p className="card-text">This three page website was our first weekly project.</p>
                <a href="https://github.com/caep2015/React-Simple-App-Earthquakes" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Benk Creek!</a>
                <p className="card-text"><small className="text-muted">Created July 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/itunes.png')} alt="Mars Rovers app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">iTunes Music Search</h4>
                <p className="card-text">This App uses the iTunes API to pull songs based on a search that your user performs.</p>
                <a href="https://github.com/caep2015/itunes-music-search/blob/master/styles.css" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View the code!</a>
                <p className="card-text"><small className="text-muted">Created July 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/calculator.png')} alt="starwars app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">JavaScript Calculator </h4>
                <p className="card-text">Calculator with HTML, CSS & JavaScript.</p>
                <a href="https://github.com/caep2015/JavaScript-Calculator" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View the Code!</a>
                <p className="card-text"><small className="text-muted">Created July 2017</small></p>
              </div>
            </div>
          </div>
        </div>

        <div className='language-flex'>
          <div className="card-block">
            <h4 className="card-title">Back End Projects</h4>
            <p className="card-text">Here are some projects recently completed in the Back End protion of the curriculum where we learned Express, NodeJs, MongoDb, Mongoose, and PostgreSql.</p>
          </div>
        </div>
        <div className='project-flex'>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={require('../images/todolist.png')} alt="" style={{width: "100%"}} />
              <div className="card-block">
                <h4 className="card-title">Express Mustache Todo List</h4>
                <p className="card-text">This app uses Express and an in-memory data structure.</p>
                <a href="https://github.com/caep2015/Express-Mustache-Todo-List" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Todolist code</a>
                <p className="card-text"><small className="text-muted">Created August 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/gabble.png')} alt="Mars Rovers app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">Social Network</h4>
                <p className="card-text">Express and Sequelize social network for students. This network, called "Gabble," has users, public messages, and likes.</p>
                <a href="https://github.com/caep2015/Express-Social-Network-App" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View the code for Mars Rover</a>
                <p className="card-text"><small className="text-muted">Created August 2017</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/books.png')} alt="starwars app" style={{width: "100%", borderRadius: "5px"}}/>
              <div className="card-block">
                <h4 className="card-title">Book Collection Manager </h4>
                <p className="card-text">This Express app uses a Mongoose schema, lets you view your collection, add to your collection, edit items in your collection, and delete items from your collection.</p>
                <a href="https://github.com/caep2015/Mongoose-Collection-Database" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                <p className="card-text"><small className="text-muted">Created August 2017</small></p>
              </div>
            </div>
          </div>
        </div>







        <div className='language-flex'>
          <div className="card-block">
            <h4 className="card-title">Languages</h4>
            <p className="card-text">Programming languages in the curriculum.</p>
          </div>
          <div className="card-group">
            <div className="card">
              <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png" alt="react js logo" />
              <div className="card-block">
                <h4 className="card-title">ReactJS</h4>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require('../images/js.png')} alt="JavaScript Logo" style={{width: "80%"}}  />
              <div className="card-block">
                <h4 className="card-title">JavaScript</h4>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="node jslogo" style={{width: "70%"}}/>
              <div className="card-block">
                <h4 className="card-title">Node.js</h4>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="http://climesoft.com/wp-content/uploads/2016/11/html-css-web-development-380x380.png" alt="html and css logo" style={{width: "80%"}}/>
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
