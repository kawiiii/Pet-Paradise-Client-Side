import React from 'react'
import "../../src/styles/Global.module.css"
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <nav>
    <div className="nav-wrapper  orange lighten-1">
      <a href="/" className="brand-logo"> <i className='material-icons'>pets</i> Pet Paradise</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/"><b>Home</b></Link></li>
        <li><Link to="/about"><b>About Us</b></Link></li>
        <li><Link to="/listings"><b>Listings</b></Link></li>
      </ul>
    </div>
  </nav>
        
  )
  
}

export default Navbar