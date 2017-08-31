import React, { Component } from 'react'

export default class Contact extends Component {
  render () {
    return (
      <div className='contact-info'>
        <div className="card">
          <img className="card-img-top" src="http://www.jillschmidtpr.com/wp-content/uploads/2015/12/contact-header-image.jpg" alt="contact info" />
          <div className="card-block">
            <h4 className="card-title">Contact</h4>
          </div>
        </div>
        <div className='list-information' style={{marginTop: '3%'}}>
            <ul className="list-group">
            <li className="list-group-item">Name: Carlota Pearl</li>
            <li className="list-group-item">Phone: 555-555-5555</li>
            <li className="list-group-item">Email: email@carlotapearl.com</li>
            <li className="list-group-item"><a href="https://github.com/caep2015/" target='_blank' rel="noopener noreferrer">GitHub</a></li>
            <li className="list-group-item"><a href="https://medium.com/@carlotapearl" target='_blank' rel="noopener noreferrer">Blog</a></li>
            <li className="list-group-item"><a href="https://www.linkedin.com/in/carlotapearl/" target='_blank' rel="noopener noreferrer">LinkedIn</a></li>
            <li className="list-group-item"><a href="https://twitter.com/carlotapearl" target='_blank' rel="noopener noreferrer">Twitter</a></li>
            </ul>
        </div>
      </div>
    )
  }
}
